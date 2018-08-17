// Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighcardComponent } from './components/projects/highcard/highcard.component';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '../../node_modules/@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { KsuComponent } from './components/ksu/ksu.component';
import { It4683Component } from './components/ksu/it4683/it4683.component';
import { ThisWebsiteComponent } from './components/projects/this-website/this-website.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '#', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/highcard', component: HighcardComponent },
  { path: 'projects/this-website', component: ThisWebsiteComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ksu', component: KsuComponent },
  { path: 'ksu/it4683', component: It4683Component },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HighcardComponent,
    AboutComponent,
    ProjectsComponent,
    KsuComponent,
    It4683Component,
    ThisWebsiteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    MDBBootstrapModule.forRoot()
  ],
  exports: [RouterModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
