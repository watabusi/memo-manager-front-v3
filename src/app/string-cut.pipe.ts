import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCut'
})
/** 文字列を途中でカットして末尾に3点リーダーを追加するpipe */
export class StringCutPipe implements PipeTransform {

  /** カット処理
   * 引数：value:文字列、cutNumber:制限文字数(半角計算)
   */
  transform(value: string, cutNumber: number): string {

    let isSlice = false;

    // 全角半角混合で、制限文字数より小さくなるまでスライスする
    while (this.valueLength(value) > cutNumber) {
      value = value.slice(0, value.length - 1);
      isSlice = true;
    }

    // スライスされている時のみ末尾に3点リーダーをついかする
    if (isSlice) {
      value += "…";
    }

    return value;
  }

  /** 半角=1,全角=2としての文字数カウント */
  valueLength(value: string): number {

    let len = 0;

    // 半角か全角か判別してカウントする
    for (let i = 0; i < value.length; i++) {
      (value[i].match(/[ -~]/)) ? len += 1 : len += 2;
    }
    return len;
  }

}
