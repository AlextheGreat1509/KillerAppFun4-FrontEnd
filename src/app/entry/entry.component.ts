import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public problem: string;
  public solution: string;
  public success: string;

  constructor(private http: HttpClient) {
  }

  public submitEntry(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const entry = JSON.stringify({problem: this.problem, solution: this.solution});
    this.http.post('http://localhost:8090/api/submit', entry, httpOptions).subscribe(
      (val) => {
        // POST call successful value returned in body
        this.success = val.toString();
      },
      response => {
        // POST call in error
      },
      () => {
        // The POST observable is now completed
      });
  }

  ngOnInit(): void {
  }
}


