import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ModuleWithProviders } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';


export const appRoutes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },
  {
    path: 'posts/:userId', component: PostsComponent },
  {
    path: 'comments/:postId', component: CommentsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);



/*

{
  path: 'courses/:courseId', component: CourseComponent,
  children: [
  {
    path: '', redirectTo: 'course-statistic', pathMatch: 'full'
  },
  {
    path: 'course-statistic', component: CourseStatisticComponent,
    canActivate: [ CourseTabRouteService ],
  },
  {
    path: 'course-description', component: CourseDescriptionComponent
  },
  {
    path: 'course-settings', component: CourseSettingsComponent
  },
  {
    path: 'course-reviews', component: CourseReviewsComponent,
    canActivate: [ CourseTabRouteService ],
  },
  {
    path: 'course-flags', component: CourseFlagsComponent,
    canActivate: [ CourseTabRouteService ],
  },
  {
    path: 'course-annotations', component: CourseAnnotationsComponent
  }

]
}*/
