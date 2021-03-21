import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from '../../../core/model/bookmark';
import { UserData } from '../../../core/model/user-data';
import { MyBookmarksStore } from '../../../core/user/my-bookmarks.store';

@Component({
  selector: 'app-user-bookmarks',
  templateUrl: './user-bookmarks.component.html',
  styleUrls: ['./user-bookmarks.component.scss']
})
export class UserBookmarksComponent implements OnChanges {

  userBookmarks$: Observable<Bookmark[]>;
  orderBy = 'LAST_CREATED'; // TODO move to enum orderBy values

  @Input()
  userData$: Observable<UserData>;

  @Input()
  userId: string;

  constructor(private myBookmarksStore: MyBookmarksStore) {
  }

  ngOnChanges() {
    if (this.userId) { // TODO - maybe consider doing different to pass the userId to child component
      this.userBookmarks$ = this.myBookmarksStore.getLastCreated$(this.userId, this.orderBy);
    }
  }

  getLastCreatedBookmarks() {
    this.orderBy = 'LAST_CREATED';
    this.userBookmarks$ = this.myBookmarksStore.getLastCreated$(this.userId, this.orderBy);
  }

  getMostLikedBookmarks() {
    this.orderBy = 'MOST_LIKES';
    this.userBookmarks$ = this.myBookmarksStore.getMostLiked$(this.userId, this.orderBy);
  }

  getMostUsedBookmarks() {
    this.orderBy = 'MOST_USED';
    this.userBookmarks$ = this.myBookmarksStore.getMostUsed$(this.userId, this.orderBy);
  }

}
