import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/core';
import { ShowCaseService } from '../../services';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  listItems: ItemModel[] = [];
  listItems$: Observable<any> = new Observable();

  constructor(showCase: ShowCaseService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {}
}
