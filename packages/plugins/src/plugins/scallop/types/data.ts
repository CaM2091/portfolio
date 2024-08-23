import BigNumber from 'bignumber.js';
import {
  CoinTypeMetadata,
  MarketCoinNames,
  PoolCoinNames,
  sCoinNames,
} from './coin';

export type UserLending = {
  coinType: string;
  amount: BigNumber;
};

export type UserObligations = {
  [T in string]: {
    collaterals: { [K in string]: BigNumber };
    debts: { [K in string]: BigNumber };
  };
};

export type UserLendingData = {
  [T in PoolCoinNames]?: UserLending;
};

export type UserStakeAccounts = {
  [T in MarketCoinNames]?: { points: string; index: string; stakes: string }[];
};

export type Pools = {
  [T in PoolCoinNames]: CoinTypeMetadata;
};

export type SCoinTypeMetadata = {
  [T in sCoinNames]: CoinTypeMetadata;
};

export type ClaimStatus = {
  name: string;
  value: number;
  id: ID;
};

export type TreasuryInfo = {
  claim_enabled: boolean;
  claim_record: ClaimRecord;
  id: ID;
  msg_author_pubkey: number[];
  treasury: string;
};

export type ClaimRecord = {
  fields: Fields;
  type: string;
};

export type Fields = {
  id: ID;
  size: string;
};

export type ID = {
  id: string;
};

export type ApiResponse = {
  signature: { [key: string]: number };
  data: string;
};
