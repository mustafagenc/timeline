import { TimelineItemIcon } from './TimelineItemIcon';
import { TimelineItemLink } from './TimelineItemLink';
import { TimelineItemPosition } from './TimelineItemPosition';

interface TimelineItem {
  title: string;
  description: string;
  date: Date;
  icon: TimelineItemIcon;
  links?: Array<TimelineItemLink>;
  position?: TimelineItemPosition;
}

export type { TimelineItem };
