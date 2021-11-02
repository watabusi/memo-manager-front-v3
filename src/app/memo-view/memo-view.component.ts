import { Component, OnInit } from '@angular/core';

import { Memo } from '../service-memo/memo';
import { MemoService } from '../service-memo/memo.service';
import { MemoTag } from '../service-memotag/memo-tag';
import { MemoTagService } from '../service-memotag/memo-tag.service';
import { Tag } from '../service-tag/tag';
import { TagService } from '../service-tag/tag.service';

@Component({
  selector: 'app-memo-view',
  templateUrl: './memo-view.component.html',
  styleUrls: ['./memo-view.component.css'],
})
export class MemoViewComponent implements OnInit {
  memos: Memo[] = [];
  tags: Tag[] = [];
  memotags: MemoTag[] = [];
  sMemos: Memo[] = [];

  pickUpTag = 'all';
  sortColum = 'default';
  isUpperSort = true;

  constructor(
    private memoService: MemoService,
    private tagService: TagService,
    private memotagService: MemoTagService
  ) {}

  ngOnInit(): void {
    this.getMemos();
    this.getSMemos();
    this.getTags();
    this.getMemoTags();
  }

  getMemos(): void {
    this.memoService.getMemos().subscribe((memos) => (this.memos = memos));
  }

  getSMemos(): void {
    this.memoService.getMemos().subscribe((memos) => (this.sMemos = memos));
  }

  getTags(): void {
    this.tagService.getTags().subscribe((tags) => (this.tags = tags));
  }

  getMemoTags(): void {
    this.memotagService
      .getMemoTags()
      .subscribe((memotags) => (this.memotags = memotags));
  }

  sortMemos(): void {
    this.sMemos = [];

    if (this.pickUpTag == 'all') {
      this.sMemos = this.memos;
    } else if (this.pickUpTag == 'none') {
      this.memos.forEach((e) => {
        let tagNone = true;
        this.memotags.forEach((e2) => {
          if (e.id == e2.memoId) {
            tagNone = false;
          }
        });
        if (tagNone) {
          this.sMemos.push(e);
        }
      });
    } else {
      let tagId = 0;
      this.tags.forEach((element) => {
        if (element.tag == this.pickUpTag) {
          tagId = element.id;
        }
      });

      // 宣言時に空でもいいから代入しないと実行時に警告で止められてしまう
      let memoIds: number[] = [];

      this.memotags.forEach((element) => {
        if (element.tagId == tagId) {
          memoIds.push(element.memoId);
        }
      });

      console.log('this comment is before_sMemos.push');
      if (memoIds.length > 0) {
        for (let i = 0; i < memoIds.length; i++) {
          this.sMemos.push(this.memos[memoIds[i] - 1]);
        }
      }
    }

    // ログが出力されないので、そもそもソートされていない
    // caseの値はoptionタグのvalueの中身を記述するべきだが、勘違いして「登録順(デフォルト)」など表示するための文字列で比較していた　当然すべて引っかからず延々とreturn0していた
    // また、tsのソートはソートした配列を直接書き換えるのではなくあくまでソートした結果を戻り値として返すため、代入先がなければ結果を残さない　その部分も勘違いしており、ただソートを実行しただけになっていた
    this.sMemos = this.sMemos.sort((a, b) => {
      console.log('sortLog');
      switch (this.sortColum) {
        case 'default':
          if (this.isUpperSort) {
            console.log('upper_defolt');
            return a.id - b.id;
          } else {
            console.log('lower_defolt');
            return b.id - a.id;
          }

        case 'title':
          return a.title < b.title ? -1 : 1;
        case 'upDay':
          return a.upday < b.upday ? -1 : 1;
      }
      return 0;
    });
    this.sMemos = this.sMemos;
  }
}
