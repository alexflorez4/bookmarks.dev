import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';
import { Snippet } from '../../../core/model/snippet';

@Component({
  selector: 'app-snippet-card-body',
  templateUrl: './snippet-card-body.component.html',
    styleUrls: [ './snippet-card-body.component.scss' ]
})
export class SnippetCardBodyComponent  implements  AfterViewInit, AfterViewChecked {

  @Input()
  snippet: Snippet;

  @Input()
  queryText: string;

  @Input()
  inList = false;

  show = false; // add one more property
  public showMoreText = false;

  @ViewChild('codeletCardBody', {static: false}) elementView: ElementRef;
  public viewHeight: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
  }

  ngAfterViewChecked(): void {
    const show = this.viewHeight > 180;
    if (show !== this.show) { // check if it change, tell CD update view
      this.show = show;
      this.changeDetectorRef.detectChanges();
    }
  }

}
