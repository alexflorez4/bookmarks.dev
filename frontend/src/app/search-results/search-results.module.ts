import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { SnippetsModule } from '../snippets/snippets.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

const searchResultsRoutes: Routes = [
  {
    path: '',
    component: SearchResultsComponent
  }
];

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    RouterModule.forChild(searchResultsRoutes),
    CommonModule,
    SnippetsModule,
    SharedModule,
    MatTabsModule,
  ]
})
export class SearchResultsModule { }
