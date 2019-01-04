import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';

const appRoutes: Routes = [
  { path: 'addEntry', component: EntryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'displayLists', component: DisplayListComponent},
  { path: 'quiz',  component: QuizComponent},
  { path: 'result' , component: ResultComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    HomeComponent,
    DisplayListComponent,
    QuizComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
