// Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighcardComponent } from './projects/highcard/highcard.component';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '../../node_modules/@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './projects/projects.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/highcard', component: HighcardComponent, data: { title: 'High Card Project' } },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HighcardComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true}),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
