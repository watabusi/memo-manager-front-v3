import { Component, OnInit } from '@angular/core';

import { Memo } from '../service-memo/memo';
import { MemoService } from '../service-memo/memo.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  title = 'メモ管理アプリ';

  memos: Memo[] = [];

  constructor(private memoService: MemoService) {}

  ngOnInit(): void {
    this.getMemosTop5();
  }

  /** 直近に編集されたメモ5つを取得 */
  getMemosTop5(): void {
    // DB側で並べ替えた後に取得するので、こちらでは並び替えられた上位5つだけ抽出すればいい
    this.memoService
      .getMemos()
      .subscribe((memos) => (this.memos = memos.slice(0, 5)));
  }
}
