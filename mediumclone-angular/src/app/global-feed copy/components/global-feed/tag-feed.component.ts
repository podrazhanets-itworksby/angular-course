import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  apiUrl: string;
  tagName: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.route.params.subscribe((params: Params) => {
      this.initializeValues();
    });
  }

  initializeValues(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug');
    this.apiUrl = `/articles?tag=${this.tagName}`;
  }
}
