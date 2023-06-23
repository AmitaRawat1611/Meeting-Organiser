import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './main/sidenav/sidenav.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';

import { SharedModule } from './shared/shared.module';

import { HeaderInterceptor } from './headers.interceptor';
import { UserManageComponent } from './main/user-manage/user-manage.component';
import { MeetingComponent } from './main/meeting/meeting.component';
import { CreateUserComponent } from './main/create-user/create-user.component';
import { RequesttInterceptor } from './request.interceptor';

// import { LoginHeroComponent } from './login/login-hero/login-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    AdminComponent,
    MainComponent,
    SidenavComponent,
    DashboardComponent,
    UserManageComponent,
    MeetingComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequesttInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
