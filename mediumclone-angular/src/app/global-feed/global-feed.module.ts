import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
