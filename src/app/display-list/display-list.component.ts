import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WordList} from '../../models/WordList';
import {NavigationExtras, Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  public noLists: boolean= false;
  public lists: WordList[] = [];
  private original;
  public searchEntry: string;
  constructor(private http: HttpClient, private router: Router) { }

  trackByFn(index: any, item: any) {
    return index;
  }

  ngOnInit() {
  }

  quizById(id: any) {
    this.router.navigate(['quiz'] , { queryParams: { "wordListId": this.lists[id].id , "email": this.searchEntry} });
  }

  search() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      })
    };

    if (this.searchEntry != undefined) {
      this.http.get<WordList>(AppComponent.getHost() + 'api/getlistsbyemail?email=' + this.searchEntry, httpOptions).subscribe(
        (val) => {
          // POST call successful value returned in body
          this.original = val;
          this.lists.length = 0;
          for (var i = 0; i < this.original.length; i++) {
            this.lists[i] = val[i];
          }
          this.noLists = false;

        },
        response => {
          if (typeof this.lists == 'undefined' || this.lists.length < 1) {
            this.noLists = true;
          }
        },
        () => {
          if (typeof this.lists == 'undefined' || this.lists.length < 1) {
            this.noLists = true;
          }
        });
    } else{
      this.noLists = true;
    }
  }
}
