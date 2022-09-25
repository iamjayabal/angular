import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  title = '';
  arr: any;

  constructor(private cf: ChangeDetectorRef) {}

  ngOnInit(): void {
    setInterval(() => {
      this.arr = [Math.random()];
      // this.cf.detectChanges();
    }, 1000);
  }

  parent() {
    console.log('Parent');
    return 'Parent';
  }
}
