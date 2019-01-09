import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WordList} from '../../models/WordList';
import {ActivatedRoute} from '@angular/router';
import {Result} from '../../models/Result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  noResults = false;
  email: string;
  lists: Result[] = [];
  original;
  hasEmail = false;

  public constructor(private http: HttpClient ,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.getResults();
    });
  }

  ngOnInit() {
  }

  getResults() {
    this.hasEmail = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      })
    };

    if (this.email != undefined) {
      this.http.get<Result>('http://localhost:8080/api/getresultsbyemail?email=' + this.email, httpOptions).subscribe(
        (val) => {
          // POST call successful value returned in body
          this.original = val;
          this.lists.length = 0;
          console.log(val);
          for (var i = 0; i < this.original.length; i++) {
            this.lists[i] = val[i];
          }
          this.noResults = false;
          this.hasEmail = true;

        },
        response => {
          if (typeof this.lists == 'undefined' || this.lists.length < 1) {
            this.noResults = true;
          }
        },
        () => {
          if (typeof this.lists == 'undefined' || this.lists.length < 1) {
            this.noResults = true;
          }
        });
    } else{
      this.hasEmail = false;
    }
  }
}
