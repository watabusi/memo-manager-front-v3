import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './top/top.component';
import { MemoViewComponent } from './memo-view/memo-view.component';
import { MemoAddComponent } from './memo-add/memo-add.component';
import { MemoDetailComponent } from './memo-detail/memo-detail.component';
import { TagManagerComponent } from './tag-manager/tag-manager.component';

/** パス群
 * path:パス
 * component:どのクラスのコンポーネントか
 * pathが空のものはデフォルトルートの設定、redirectToで遷移先を示してpathMatch:fullで完全一致を条件にしている
 */
const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'memoView', component: MemoViewComponent },
  { path: 'memoAdd', component: MemoAddComponent },
  { path: 'memoDetail', component: MemoDetailComponent },
  { path: 'memoDetail/:id', component: MemoDetailComponent },
  { path: 'tagManager', component: TagManagerComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
