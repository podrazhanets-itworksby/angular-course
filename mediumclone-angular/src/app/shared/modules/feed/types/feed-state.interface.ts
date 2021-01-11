import { GetFeedResponceInterface } from 'src/app/shared/modules/feed/types/get-feed-response.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponceInterface | null;
}
