// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighcardComponent } from './projects/highcard/highcard.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { CommonModule } from '../../node_modules/@angular/common';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  // { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'projects/highcard', component: HighcardComponent, data: { title: 'High Card Project' } },
  { path: 'highcard', component: HighcardComponent, data: { title: 'High Card Project' } },
  { path: 'test', component: TestcomponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HighcardComponent,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
