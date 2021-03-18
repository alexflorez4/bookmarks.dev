import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowtoSaveComponent } from './howto-save/howto-save.component';
import { HowtoSearchComponent } from './howto-search/howto-search.component';
import { HowToBookmarkletComponent } from './howto-bookmarklets/how-to-bookmarklet.component';
import { HowToSnippetComponent } from './howto-snippets/how-to-snippet.component';
import { HowtoRoutingModule } from './howto-routing.module';
import { HowtoComponent } from './howto.component';
import { HowtoGetStartedComponent } from './howto-get-started/howto-get-started.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AddBookmarkBookmarkletComponent } from './shared/add-bookmark-bookmarklet.component';
import { AddSnippetBookmarkletComponent } from './shared/add-snippet-bookmarklet.component';
import { HowtoHotkeysComponent } from './howto-hotkeys/howto-hotkeys.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    HowtoComponent,
    HowtoGetStartedComponent,
    HowtoSaveComponent,
    HowtoSearchComponent,
    HowToBookmarkletComponent,
    HowToSnippetComponent,
    AddBookmarkBookmarkletComponent,
    AddSnippetBookmarkletComponent,
    HowtoHotkeysComponent
  ],
  exports: [
  ],
    imports: [
        HowtoRoutingModule,
        CommonModule,
        MatExpansionModule,
        MatTabsModule
    ]
})
export class HowtoModule { }
