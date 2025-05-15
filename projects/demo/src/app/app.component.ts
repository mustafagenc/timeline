import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import data from './timelineData.json';
import {
  TimelineComponent,
  TimelineItem,
  TimelineItemPosition,
} from '@mustafagenc/timeline';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'Timeline Demo';

  public timelineItems: TimelineItem[] = [];

  constructor() {
    const mappedData: TimelineItem[] = data.map((item: any) => {
      return {
        ...item,
        date: new Date(item.date),
        position: item.position as TimelineItemPosition,
      };
    });

    this.timelineItems = mappedData;
  }
}
