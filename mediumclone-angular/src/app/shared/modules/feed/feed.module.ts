import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/get-feed.effect';
import { redusers } from 'src/app/shared/modules/feed/store/reducers';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { FeedComponent } from './components/feed/feed.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', redusers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
