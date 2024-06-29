import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((com) => com.AboutComponent),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/course-routing').then((mod) => mod.COURSE_ROUTES),
  },
];
