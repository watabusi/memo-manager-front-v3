import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Memo } from './memo';
import { MEMOS } from './mock-memo';

@Injectable({
  providedIn: 'root',
})
export class MemoService {
  constructor() {}

  getMemo(id: number): Observable<Memo> {
    const memo = MEMOS.find((m) => m.id == id)!;
    return of(memo);
  }

  getMemos(): Observable<Memo[]> {
    const memos = of(MEMOS);
    return memos;
  }
}
