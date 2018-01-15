import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  /**
   * 性別代碼轉換
   * 
   * @param {string} sex 
   * @returns {*} 
   * @memberof SexPipe
   */
  transform(sex: string): any {
    if ('F'.indexOf(sex) > -1) {
      return '女';
    } else if ('M'.indexOf(sex) > -1) {
      return '男';
    } else {
      return '';
    }
  }

}
