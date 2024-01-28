import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

@Component({
  standalone: true,
  selector: 'is-even',
  templateUrl: 'is-even.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IsEvenComponent {
  counter = input.required<number>();
  isEven =  computed(() => this.counter() % 2 === 0);
}
