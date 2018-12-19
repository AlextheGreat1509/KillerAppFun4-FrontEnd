import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WordList} from '../../models/WordList';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  public noLists: boolean= false;
  public lists: WordList[] = [];
  private original;
  constructor(private http: HttpClient, private router: Router) { }

  trackByFn(index: any, item: any) {
    return index;
  }

  public getLists(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.get<WordList>('http://localhost:8090/api/getlists', httpOptions).subscribe(
      (val) => {
        // POST call successful value returned in body
        this.original = val;
        for (var i = 0; i < this.original.length; i++) {
          this.lists[i] = val[i];
        }

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
  }

  ngOnInit() {
    this.getLists();
  }

  quizById(id: any) {
    this.router.navigate(['quiz'] , { queryParams: { "wordListId": this.lists[id].id } });
  }
}
