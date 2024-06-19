import { UsdValue } from './UsdValue';
import { NetworkIdType } from './Network';
import { Yield } from './Yield';
import { AddressSystemType } from './Address';
import { TokenInfo } from './TokenList';

/**
 * Represents the type of a portfolio asset.
 */
export const PortfolioAssetType = {
  generic: 'generic',
  token: 'token',
  collectible: 'collectible',
} as const;
export type PortfolioAssetTypeType =
  (typeof PortfolioAssetType)[keyof typeof PortfolioAssetType];

/**
 * Represents the label of a portfolio element.
 */
export type PortfolioElementLabel =
  | 'Wallet'
  | 'Staked'
  | 'LiquidityPool'
  | 'Farming'
  | 'Lending'
  | 'Vesting'
  | 'Deposit'
  | 'Rewards'
  | 'Airdrop'
  | 'Margin'
  | 'Leverage';

export type PortfolioAssetAttributes = {
  /**
   * Represents the date (in ms) when the asset will be unlocked.
   * If current date is greater than this value, the asset is unlocked.
   * If set to -1, it means it's locked for an unknown or indeterminate period
   */
  lockedUntil?: number;
  /**
   * Represents if the asset is deprecated.
   */
  isDeprecated?: boolean;
  /**
   * Represents if the asset can be claimed.
   */
  isClaimable?: boolean;
  /**
   * Represents the tags of the asset.
   */
  tags?: string[];
};

/**
 * Represents the type of a portfolio element.
 */
export const PortfolioElementType = {
  multiple: 'multiple',
  liquidity: 'liquidity',
  borrowlend: 'borrowlend',
  leverage: 'leverage',
} as const;
export type PortfolioElementTypeType =
  (typeof PortfolioElementType)[keyof typeof PortfolioElementType];

/**
 * Represents the common properties of a portfolio asset.
 */
export type PortfolioAssetCommon = {
  networkId: NetworkIdType;
  type: PortfolioAssetTypeType;
  value: UsdValue;
  attributes: PortfolioAssetAttributes;
};

/**
 * Represents the data of a generic portfolio asset.
 */
export type PortfolioAssetGenericData = {
  name?: string;
  amount: number;
  price: UsdValue;
  imageUri?: string;
};

/**
 * Represents a generic portfolio asset.
 */
export type PortfolioAssetGeneric = PortfolioAssetCommon & {
  type: 'generic';
  data: PortfolioAssetGenericData;
};

/**
 * Represents the data of a token portfolio asset.
 */
export type PortfolioAssetTokenData = {
  address: string;
  amount: number;
  price: UsdValue;
};

/**
 * Represents a token portfolio asset.
 */
export type PortfolioAssetToken = PortfolioAssetCommon & {
  type: 'token';
  data: PortfolioAssetTokenData;
};

/**
 * Represents the data of a collectible portfolio asset.
 */
export type PortfolioAssetCollectibleData = {
  address: string;
  amount: number;
  price: UsdValue;
  name?: string;
  description?: string;
  imageUri?: string;
  dataUri?: string;
  attributes?: CollectibleAttribute[];
  collection?: CollectibleCollection;
};

export type CollectibleCollection = {
  id: string;
  floorPrice: UsdValue;
  name?: string;
};

export type CollectibleAttribute = {
  trait_type?: string;
  value?: unknown;
  [key: string]: unknown;
};

/**
 * Represents a collectible portfolio asset.
 */
export type PortfolioAssetCollectible = PortfolioAssetCommon & {
  type: 'collectible';
  data: PortfolioAssetCollectibleData;
};

/**
 * Represents a portfolio asset.
 */
export type PortfolioAsset =
  | PortfolioAssetGeneric
  | PortfolioAssetToken
  | PortfolioAssetCollectible;

/**
 * Represents the information of a proxy.
 */
export type ProxyInfo = {
  id: string;
  address: string;
};

/**
 * Represents a smart contract
 */
export type Contract = {
  name: string;
  address: string;
  network: NetworkIdType;
};

/**
 * Represents the different configurations of a service
 */
export type ServiceConfig = {
  networkId: NetworkIdType;
  integratedOn: number;
  contracts?: Contract[];
  link?: string;
};

/**
 * Represents a service from a platform
 */
export type Service = {
  id: string;
  name: string;
  platformId: string;
  configs: ServiceConfig[];
};

/**
 * Represents the common properties of a portfolio element.
 */
export type PortfolioElementCommon = {
  networkId: NetworkIdType;
  platformId: string;
  value: UsdValue;
  type: PortfolioElementTypeType;
  label: PortfolioElementLabel;
  name?: string;
  tags?: string[];
  proxyInfo?: ProxyInfo;
  service?: Service;
};

/**
 * Represents the data of a multiple portfolio element.
 */
export type PortfolioElementMultipleData = {
  assets: PortfolioAsset[];
};

/**
 * Represents a multiple portfolio element.
 */
export type PortfolioElementMultiple = PortfolioElementCommon & {
  type: 'multiple';
  data: PortfolioElementMultipleData;
};

/**
 * Represents a liquidity.
 */
export type PortfolioLiquidity = {
  assets: PortfolioAsset[];
  assetsValue: UsdValue;
  rewardAssets: PortfolioAsset[];
  rewardAssetsValue: UsdValue;
  value: UsdValue;
  yields: Yield[];
  name?: string;
};

/**
 * Represents the data of a liquidity portfolio element.
 */
export type PortfolioElementLiquidityData = {
  liquidities: PortfolioLiquidity[];
};

/**
 * Represents a liquidity portfolio element.
 */
export type PortfolioElementLiquidity = PortfolioElementCommon & {
  type: 'liquidity';
  data: PortfolioElementLiquidityData;
};

export enum LeverageSide {
  long = 'long',
  short = 'short',
}

export type LeveragePosition = {
  name?: string;
  imageUri?: string;
  address?: string;
  size?: number;
  sizeValue: UsdValue;
  collateralValue: UsdValue;
  value: UsdValue;
  liquidationPrice: UsdValue;
  pnlValue: UsdValue;
  leverage?: number;
  side: LeverageSide;
};

/**
 * Represents the data of a leverage portfolio element.
 */
export type PortfolioElementLeverageData = {
  value: UsdValue;
  leverage?: number;
  collateralAssets: PortfolioAsset[];
  collateralValue: UsdValue;
  positions: LeveragePosition[];
  positionsValue: UsdValue;
};

/**
 * Represents a leverage portfolio element.
 */
export type PortfolioElementLeverage = PortfolioElementCommon & {
  type: 'leverage';
  data: PortfolioElementLeverageData;
};

/**
 * Represents the data of a borrow lend portfolio element.
 */
export type PortfolioElementBorrowLendData = {
  /**
   * The value of the portfolio element in USD.
   */
  value: UsdValue;

  /**
   * The assets supplied in the portfolio element.
   */
  suppliedAssets: PortfolioAsset[];

  /**
   * The assets borrowed in the portfolio element.
   */
  borrowedAssets: PortfolioAsset[];

  /**
   * The assets rewarded in the portfolio element.
   */
  rewardAssets: PortfolioAsset[];

  /**
   * The value of the assets supplied in USD.
   */
  suppliedValue: UsdValue;

  /**
   * The value of the assets borrowed in USD.
   */
  borrowedValue: UsdValue;

  /**
   * The value of the reward assets in USD.
   */
  rewardValue: UsdValue;

  /**
   * The yields generated by the supplied assets.
   */
  suppliedYields: Yield[][];

  /**
   * The yields generated by the borrowed assets.
   */
  borrowedYields: Yield[][];

  /**
   * @deprecated
   * The collateral ratio of the portfolio element.
   */
  collateralRatio: null;

  /**
   * The health ratio of the portfolio element.
   * 1 means full health or no borrow.
   * 0 or below means can be liquidated.
   * null means unknown.
   */
  healthRatio: number | null;
};

/**
 * Represents a borrow lend portfolio element.
 */
export type PortfolioElementBorrowLend = PortfolioElementCommon & {
  type: 'borrowlend';
  data: PortfolioElementBorrowLendData;
};

/**
 * Represents a portfolio element.
 */
export type PortfolioElement =
  | PortfolioElementMultiple
  | PortfolioElementLiquidity
  | PortfolioElementLeverage
  | PortfolioElementBorrowLend;

/**
 * Represents the result of a fetcher.
 */
export type FetcherResult = {
  owner: string;
  fetcherId: string;
  networdkId: NetworkIdType;
  duration: number;
  elements: PortfolioElement[];
};

/**
 * Represents the report of a fetcher.
 */
export type FetcherReport = {
  id: string;
  status: 'succeeded' | 'failed';
  duration?: number;
  error?: string;
};

/**
 * Represents the result of multiple fetchers.
 */
export type FetchersResult = {
  date: number;
  owner: string;
  addressSystem: AddressSystemType;
  fetcherReports: FetcherReport[];
  value: UsdValue;
  elements: PortfolioElement[];
  tokenInfo?: Partial<Record<NetworkIdType, Record<string, TokenInfo>>>;
};
