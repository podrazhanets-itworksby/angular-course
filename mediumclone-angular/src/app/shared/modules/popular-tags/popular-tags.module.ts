import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { PopularTagsService } from 'src/app/shared/modules/popular-tags/services/popular-tags.service';
import { GetPopularTagsEffect } from 'src/app/shared/modules/popular-tags/store/effects/get-popular-tags.effect';
import { redusers } from 'src/app/shared/modules/popular-tags/store/reducers';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', redusers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
