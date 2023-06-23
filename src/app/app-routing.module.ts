import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UserManageComponent } from './main/user-manage/user-manage.component';
import { MeetingComponent } from './main/meeting/meeting.component';
import { AuthGuard } from './service/auth.guard';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {
    path: ' ',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'user-manage',
        component: UserManageComponent,
      },
      {
        path: 'meeting',
        component: MeetingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
