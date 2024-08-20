import { Platform } from '@sonarwatch/portfolio-core';
import { Fetcher } from '../../Fetcher';
import { AirdropFetcher } from '../../AirdropFetcher';
import { Job } from '../../Job';
import { platform } from './constants';
import poolsJob from './poolsJob';
import farmsJob from './farmsJob';
import reservesJob from './reservesJob';
import marketsJob from './marketsJob';
import lendsFetcher from './lendsFetcher';
import farmsFetcher from './farmsFetcher';
import { fetcher as s2Fetcher } from './s2AirdropFetcher';
import {
  airdropFetcher as s1AirdropFetcher,
  fetcher as s1Fetcher,
} from './s1AirdropFetcher';

export const platforms: Platform[] = [platform];
export const jobs: Job[] = [poolsJob, reservesJob, farmsJob, marketsJob];
export const fetchers: Fetcher[] = [
  lendsFetcher,
  farmsFetcher,
  s1Fetcher,
  s2Fetcher,
];
export const airdropFetchers: AirdropFetcher[] = [s1AirdropFetcher];
