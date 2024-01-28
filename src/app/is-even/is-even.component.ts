import {ChangeDetectionStrategy, Component, computed, Input, input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  standalone: true,
  selector: 'is-even',
  templateUrl: 'is-even.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IsEvenComponent implements OnChanges {

  @Input()
  counter!: number
  isEven = false;



  ngOnChanges(changes: SimpleChanges): void {
    if(changes['counter']) {
      this.isEven =  this.counter % 2 === 0
    }
  }

}
