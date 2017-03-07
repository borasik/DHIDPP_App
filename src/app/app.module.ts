import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './app.home.component';
import { LoginComponent } from './app.login.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'app/views/homepage.html',
  //   canActivate: [AuthGuard],
  //   pathMatch: 'full'
  // }

  { path: '', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpModule],
  declarations: [AppComponent, HomeComponent, LoginComponent],
  providers: [AuthGuard, AuthService, LoginComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
