import { NetworkId, NetworkIdType } from '@sonarwatch/portfolio-core';
import { PublicKey } from '@solana/web3.js';
import { getCosmWasmClient } from '@sei-js/core';
import { getClientAptos, getClientSei, getClientSolana } from '../clients';
import { coinDecimals } from '../aptos';
import { getUrlEndpoint } from '../clients/constants';
import { TokenInfo, tokenInfoQueryMsg } from '../sei';

const solMints = [
  '11111111111111111111111111111111',
  'So11111111111111111111111111111111111111112',
];

/**
 * Return the decimals of a token on any network using RPC calls or TokenList.
 *
 * @param address The mint/address of the token.
 * @param networkId The network on which to execute the request.
 *
 * @returns The number of decimals or undefined if unsucessful request.
 */
export async function getDecimalsForToken(
  address: string,
  networkId: NetworkIdType
): Promise<number | undefined> {
  switch (networkId) {
    case 'aptos': {
      const client = getClientAptos();
      const viewRes = (await client.view({
        function: coinDecimals,
        type_arguments: [address],
        arguments: [],
      })) as number[];
      if (viewRes.length !== 1) return undefined;
      return viewRes[0];
    }
    case 'solana': {
      const client = getClientSolana();
      if (solMints.includes(address)) {
        return 9;
      }
      const res = await client.getTokenSupply(new PublicKey(address));
      return res.value.decimals ? res.value.decimals : undefined;
    }
    case 'sei': {
      if (address.startsWith('factory')) {
        const client = await getClientSei();
        const rep = await client.cosmos.bank.v1beta1.denomMetadata({
          denom: address,
        });
        const denoms = rep.metadata.denomUnits;
        return denoms[denoms.length - 1].exponent;
      }
      if (address.startsWith('ibc')) {
        return 0;
      }
      if (address.startsWith('sei')) {
        const client = await getCosmWasmClient(getUrlEndpoint(NetworkId.sei));
        const tokenInfo = (await client.queryContractSmart(
          address,
          tokenInfoQueryMsg
        )) as TokenInfo;
        return tokenInfo.decimals || undefined;
      }
      return undefined;
    }
    default:
      throw new Error('getDecimalsForToken : Network not supported');
  }
}
