import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  UiBlockItemComponent,
  UiFilterComponent,
  UiItemComponent,
  UiSearchComponent,
} from './components';
import { ShowCasePageComponent } from './page';
import { ShowCaseRoutingModule } from './show-case-routing.module';

@NgModule({
  declarations: [
    UiSearchComponent,
    UiFilterComponent,
    ShowCasePageComponent,
    UiItemComponent,
    UiBlockItemComponent,
  ],
  imports: [CommonModule, ShowCaseRoutingModule, FormsModule],
})
export class ShowCaseModule {}
