import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/modules/feed/store/action-types';
import { GetFeedResponceInterface } from 'src/app/shared/modules/feed/types/get-feed-response.interface';

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponceInterface }>()
);

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
