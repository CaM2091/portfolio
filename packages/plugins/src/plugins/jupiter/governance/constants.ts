import { Platform } from '@sonarwatch/portfolio-core';
import { AirdropStatics } from '../../../AirdropFetcher';
import { jupMint } from '../launchpad/constants';

export const platformId = 'jupiter-governance';
const platformName = 'Jupiter Governance';
const platformImage = 'https://sonar.watch/img/platforms/jupiter.webp';
const platformWebsite = 'https://vote.jup.ag/';

export const jupDisProgram = 'Dis2TfkFnXFkrtvAktEkw37sdb7qwJgY6H7YZJwk51wK';
export const platform: Platform = {
  id: platformId,
  name: platformName,
  image: platformImage,
  website: platformWebsite,
  twitter: 'https://twitter.com/JupiterExchange',
};

export const asr1Statics: AirdropStatics = {
  id: 'jup-asr-1',
  claimLink: 'https://vote.jup.ag/asr',
  image: platformImage,
  emitterLink: platformWebsite,
  emitterName: 'Jupiter',
  claimStart: 1719792000000,
  claimEnd: 1722470400000,
  name: 'ASR #1',
};
export const asr2Statics: AirdropStatics = {
  id: 'jup-asr-2',
  claimLink: 'https://vote.jup.ag/asr',
  image: platformImage,
  emitterLink: platformWebsite,
  emitterName: 'Jupiter',
  claimStart: 1729512000000,
  claimEnd: 1732190400000,
  name: 'ASR #2',
};

export type AsrItems = Map<
  string,
  {
    label: string;
    decimals: number;
  }
>;
export type AsrConfig = {
  statics: AirdropStatics;
  items: AsrItems;
  api: (owner: string) => string;
};

export const asr1Config: AsrConfig = {
  statics: asr1Statics,
  items: new Map([
    [jupMint, { label: 'JUP', decimals: 6 }],
    [
      'ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq',
      { label: 'ZEUS', decimals: 6 },
    ],
    [
      'WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk',
      { label: 'WEN', decimals: 5 },
    ],
    [
      'UPTx1d24aBWuRgwxVnFmX4gNraj3QGFzL3QqBgxtWQG',
      { label: 'UPT', decimals: 9 },
    ],
    [
      'SHARKSYJjqaNyxVfrpnBN9pjgkhwDhatnMyicWPnr1s',
      { label: 'SHARK', decimals: 6 },
    ],
  ]),
  api: (owner: string) =>
    `https://worker.jup.ag/jup-asr-july-2024-claim-proof/${owner}`,
};

export const asr2Config: AsrConfig = {
  statics: asr2Statics,
  items: new Map([
    [jupMint, { label: 'JUP', decimals: 6 }],
    [
      'CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu',
      { label: 'CLOUD', decimals: 9 },
    ],
  ]),
  api: (owner: string) =>
    `https://worker.jup.ag/asr-claim-proof/${owner}?asrTimeline=oct-2024&mints=JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN%2CCLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu`,
};
