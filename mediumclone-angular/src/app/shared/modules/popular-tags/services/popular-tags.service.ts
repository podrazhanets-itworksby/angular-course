import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetPopularTagsResponseInterface } from 'src/app/shared/modules/popular-tags/types/get-popular-tags-response.interface';
import { PopularTagType } from 'src/app/shared/types/popular-tag-type';
import { environment } from 'src/environments/environment';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopularTags(): Observable<PopularTagType[]> {
    const fullUrl = environment.apiUrl + '/tags';
    return this.http.get(fullUrl).pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags;
      })
    );
  }
}
