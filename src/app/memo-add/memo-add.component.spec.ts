import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoAddComponent } from './memo-add.component';

describe('MemoAddComponent', () => {
  let component: MemoAddComponent;
  let fixture: ComponentFixture<MemoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
