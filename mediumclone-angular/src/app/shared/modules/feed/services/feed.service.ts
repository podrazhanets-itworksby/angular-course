import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponceInterface } from 'src/app/shared/modules/feed/types/get-feed-response.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}
  getFeed(url: string): Observable<GetFeedResponceInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponceInterface>(fullUrl);
  }
}
