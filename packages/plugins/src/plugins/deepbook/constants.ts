import { Platform } from '@sonarwatch/portfolio-core';
import { AirdropStatics } from '../../AirdropFetcher';

export const platformId = 'deepbook';
export const platform: Platform = {
  id: platformId,
  name: 'DeepBook',
  image: 'https://sonar.watch/img/platforms/deepbook.webp',
  website: 'https://deepbook.tech/',
  twitter: 'https://x.com/DeepBookonSui',
  defiLlamaId: 'deepbook', // from https://defillama.com/docs/api
};
export const airdropStatics: AirdropStatics = {
  emitterLink: 'https://deepbook.tech',
  claimLink: 'https://claim.deepbook.tech/',
  emitterName: 'DeepBook',
  id: `${platformId}-token-launch`,
  image: 'https://sonar.watch/img/platforms/deepbook.webp',
  claimEnd: undefined,
  claimStart: 1728907200000,
};

export const deepMint =
  '0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP';
export const deepDecimals = 6;

export const PACKAGE_ID = '0xdee9';

export const MODULE_CLOB = 'clob_v2';

export const poolsCacheKey = 'pools';
