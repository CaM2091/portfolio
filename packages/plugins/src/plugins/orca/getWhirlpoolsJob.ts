import { NetworkId } from '@sonarwatch/portfolio-core';
import BigNumber from 'bignumber.js';
import { PublicKey } from '@solana/web3.js';
import { whirlpoolPrefix } from './constants';
import { getParsedProgramAccounts } from '../../utils/solana';
import { getClientSolana } from '../../utils/clients';
import { whirlpoolStruct } from './structs/whirlpool';
import { whirlpoolFilters } from './filters';
import { JobExecutor } from '../../Job';
import { Cache } from '../../Cache';
import storeTokenPricesFromSqrt from '../../utils/clmm/tokenPricesFromSqrt';

export default function getWhirlpoolsJob(programId: PublicKey): JobExecutor {
  return async (cache: Cache) => {
    const client = getClientSolana();

    const whirlpoolsInfo = await getParsedProgramAccounts(
      client,
      whirlpoolStruct,
      programId,
      whirlpoolFilters
    );

    const items = [];
    for (let id = 0; id < whirlpoolsInfo.length; id++) {
      const whirlpoolInfo = whirlpoolsInfo[id];
      if (whirlpoolInfo.liquidity.isZero()) continue;

      const reserveX = await client.getBalance(whirlpoolInfo.tokenVaultA);
      const reserveY = await client.getBalance(whirlpoolInfo.tokenVaultB);
      await storeTokenPricesFromSqrt(
        cache,
        NetworkId.solana,
        whirlpoolInfo.pubkey.toString(),
        new BigNumber(reserveX),
        new BigNumber(reserveY),
        whirlpoolInfo.sqrtPrice,
        whirlpoolInfo.tokenMintA.toString(),
        whirlpoolInfo.tokenMintB.toString()
      );

      items.push({
        key: whirlpoolInfo.pubkey.toString(),
        value: whirlpoolInfo,
      });
    }
    await cache.setItems(items, {
      prefix: whirlpoolPrefix,
      networkId: NetworkId.solana,
    });
  };
}
