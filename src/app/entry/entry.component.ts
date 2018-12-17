import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-entries',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public problem: string;
  public solution: string;
  public success: string;
  public inputsDutch : string[];
  public inputsEnglish : string[];
  public listTitle: string;

  constructor( private http: HttpClient) {
    this.inputsDutch = [""];
    this.inputsEnglish = [""];
  }

  ngOnInit() {

  }
  trackByFn(index: any, item: any) {
    return index;
  }

  update(): void {
    if(this.inputsDutch[this.inputsDutch.length - 1].trim() !== ""){
      this.inputsDutch.push("");
      this.inputsEnglish.push("");
    }
    for (var i = 0; i < this.inputsDutch.length; i++){
      if (this.inputsDutch[i].trim() == "" && this.inputsDutch[i-1].trim() == "" && this.inputsEnglish[i].trim() == ""){
        this.inputsDutch.splice(i, 1);
        this.inputsEnglish.splice(i, 1);
      }
    }

  }

  public submitEntry(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const entry = JSON.stringify({problemWords: this.inputsDutch, translationWords: this.inputsEnglish, title: this.listTitle});
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
}


