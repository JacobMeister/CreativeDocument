import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  { path: 'creativedocument', component:  InfoComponent},
  { path: 'blog/:id', component:  BlogComponent},
  { path: 'about', component:  InfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}