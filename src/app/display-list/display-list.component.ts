import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WordLists} from '../../models/WordLists';
@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  public lists: WordLists[] = [];
  private original;
  constructor(private http: HttpClient) { }

  trackByFn(index: any, item: any) {
    return index;
  }

  public getLists(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.get<WordLists>('http://localhost:8090/api/getlists', httpOptions).subscribe(
      (val) => {
        // POST call successful value returned in body
        console.log(val);
        this.original = val;
        for (var i = 0; i < this.original.length; i++) {
          this.lists[i] = val[i];
        }

      },
      response => {
        // POST call in error
      },
      () => {
        // The POST observable is now completed
        console.log(this.lists[0].listEntries[0].id);
      });
  }

  ngOnInit() {
    this.getLists();
  }

}
