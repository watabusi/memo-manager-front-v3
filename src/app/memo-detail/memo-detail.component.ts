import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Memo } from '../service-memo/memo';
import { MemoService } from '../service-memo/memo.service';
import { Tag } from '../service-tag/tag';
import { TagService } from '../service-tag/tag.service';

@Component({
  selector: 'app-memo-detail',
  templateUrl: './memo-detail.component.html',
  styleUrls: ['./memo-detail.component.css'],
})
export class MemoDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private memoService: MemoService,
    private tagService: TagService,
    private location: Location
  ) { }

  memo: Memo | undefined;
  tags: Tag[] = [];

  ngOnInit(): void {
    this.getMemo();
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  getMemo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.memoService.getMemo(id).subscribe((memo) => (this.memo = memo));
  }

  update(): void { }
}
