import { Component, input } from '@angular/core';
import { TimelineItem } from '../../models/TimelineItem';
import {
  CommonModule,
  NgTemplateOutlet,
  registerLocaleData,
} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeTr from '@angular/common/locales/tr';
import localeRu from '@angular/common/locales/ru';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEn);
registerLocaleData(localeTr);
registerLocaleData(localeRu);
registerLocaleData(localeDe);
registerLocaleData(localeEs);

@Component({
  selector: 'timeline-event',
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: './timeline-event.component.html',
  styleUrl: './timeline-event.component.scss',
  standalone: true,
})
export class TimelineEventComponent {
  /**
   * The timeline item to display.
   */
  public readonly item = input.required<TimelineItem>();

  public readonly dateFormat = input.required<string>();

  public readonly language = input.required<string>();

  ngOnInit(): void {}
}
