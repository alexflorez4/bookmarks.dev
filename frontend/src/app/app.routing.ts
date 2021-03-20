import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './not-found.component';
import { SnippetNotFoundComponent } from './not-found/snippet-not-found.component';

const routes: Routes = [
  {
    path: 'personal',
    loadChildren: () => import('app/personal/personal-bookmarks.module').then(m => m.PersonalBookmarksModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('app/user/dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('app/user-settings/user-settings.module').then(m => m.UserSettingsModule)
  },
  {
    path: 'public',
    loadChildren: () => import('app/public/public.module').then(m => m.PublicBookmarksModule)
  },
  {
    path: 'my-snippets',
    loadChildren: () => import('app/snippets/snippets.module').then(m => m.SnippetsModule)
  },
  {
    path: 'my-snippets',
    redirectTo: 'my-snippets',
  },
  {
    path: 'search',
    loadChildren: () => import('app/search-results/search-results.module').then(m => m.SearchResultsModule)
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {path: '404-snippet', component: SnippetNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];


/**
 * See App routing @https://angular.io/docs/ts/latest/guide/ngmodule.html
 */
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

