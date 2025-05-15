import {
  Component,
  DoCheck,
  input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Languages from '../../constants/languages';
import { TimelineItem } from '../../models/TimelineItem';
import { TimelineEventComponent } from '../timeline-event/timeline-event.component';

@Component({
  selector: 'timeline',
  imports: [CommonModule, TimelineEventComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnChanges, DoCheck {
  readonly language = input<Languages>('tr');
  readonly dateFormat = input<string>('dd MMM yyyy');
  readonly items = input<TimelineItem[]>([]);

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  public getItems(): TimelineItem[] {
    const sortByDateDescending = (a: TimelineItem, b: TimelineItem): number =>
      b.date.getTime() - a.date.getTime();

    return this.items().sort(sortByDateDescending);
  }
}
