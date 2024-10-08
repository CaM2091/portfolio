import { NetworkId } from '@sonarwatch/portfolio-core';
import axios, { AxiosResponse } from 'axios';
import { Cache } from '../../Cache';
import { platformId, api } from './constants';
import { Fetcher, FetcherExecutor } from '../../Fetcher';
import { Games } from './types';
import { ElementRegistry } from '../../utils/elementbuilder/ElementRegistry';

const executor: FetcherExecutor = async (owner: string, cache: Cache) => {
  const apiResponse: AxiosResponse<Games> = await axios.get(api + owner, {
    timeout: 3000,
  });

  if (!apiResponse.data) return [];

  const registry = new ElementRegistry(NetworkId.solana, platformId);
  for (const game of apiResponse.data) {
    const element = registry.addElementMultiple({
      label: 'Deposit',
      name: game.game,
    });
    element.addAsset({
      address: game.token,
      amount: game.claimable,
      alreadyShifted: true,
      attributes: { isClaimable: true },
    });
    element.addAsset({
      address: game.token,
      amount: game.locked,
      alreadyShifted: true,
      attributes: { lockedUntil: game.end * 1000 },
    });
  }
  return registry.getElements(cache);
};

const fetcher: Fetcher = {
  id: `${platformId}-games`,
  networkId: NetworkId.solana,
  executor,
};

export default fetcher;
