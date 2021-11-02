import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MemoViewComponent } from './memo-view/memo-view.component';
import { AppRoutingModule } from './app-routing.module';
import { MemoAddComponent } from './memo-add/memo-add.component';
import { MemoDetailComponent } from './memo-detail/memo-detail.component';
import { TagManagerComponent } from './tag-manager/tag-manager.component';
import { StringCutPipe } from './string-cut.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MemoViewComponent,
    MemoAddComponent,
    MemoDetailComponent,
    TagManagerComponent,
    StringCutPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
