import { Platform } from '@sonarwatch/portfolio-core';
import { Fetcher } from '../../Fetcher';
import { Job } from '../../Job';
import { flowmaticPlatform } from './constants';
import poolsJob from './poolsJob';
import stakingFetcher from './stakingFetcher';

export const platforms: Platform[] = [flowmaticPlatform];
export const jobs: Job[] = [poolsJob];
export const fetchers: Fetcher[] = [stakingFetcher];