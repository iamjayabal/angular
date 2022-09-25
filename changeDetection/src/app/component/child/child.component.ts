import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() arr: any;
  number = 0;

  constructor(private cf: ChangeDetectorRef) {}

  ngOnInit(): void {
    setInterval(() => {
      this.number = Math.random();
      this.cf.detectChanges();
    }, 1000);
  }

  child() {
    console.log('Child');
    return 'Child';
  }
}
