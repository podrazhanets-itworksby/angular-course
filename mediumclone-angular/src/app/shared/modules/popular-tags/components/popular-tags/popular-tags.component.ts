import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPopularTagsAction } from 'src/app/shared/modules/popular-tags/store/actions/get-popular-tags.action';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from 'src/app/shared/modules/popular-tags/store/selectors';
import { PopularTagType } from 'src/app/shared/types/popular-tag-type';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  constructor(private store: Store) {}

  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    console.log('initialize popular tags');
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
