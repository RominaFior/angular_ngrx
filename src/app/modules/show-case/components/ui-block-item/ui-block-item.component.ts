import { Component, OnInit } from '@angular/core';
import { ShowCaseService } from '../../services';


@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {
  listData: any = []

  constructor(private showCase: ShowCaseService){}

  ngOnInit():void {
    this.showCase.getDataApi()
    .subscribe((res) => {
      this.listData = res
    })
  }
}
