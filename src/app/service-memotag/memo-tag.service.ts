import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MemoTag } from './memo-tag';
import { MEMOTAGS } from './mock-memotag';

@Injectable({
  providedIn: 'root'
})
export class MemoTagService {

  constructor() { }

  getMemoTags(): Observable<MemoTag[]> {
    const memotags = of(MEMOTAGS);
    return memotags;
  }
}
