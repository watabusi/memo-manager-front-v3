import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Tag } from './tag';
import { TAGS } from './mock-tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }

  getTags(): Observable<Tag[]> {
    const tags = of(TAGS);
    return tags;
  }
}
