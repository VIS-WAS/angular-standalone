import { Route } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { GeaturerdComponent } from './geaturerd/geaturerd.component';
import { AboutComponent } from '../about/about.component';

export const COURSE_ROUTES: Route[] = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'featured',
    component: GeaturerdComponent,
  },
];
