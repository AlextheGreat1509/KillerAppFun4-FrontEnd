import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
import {until} from 'selenium-webdriver';
import titleContains = until.titleContains;


@Component({
  selector: 'app-entries',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public problemLanguage: any;
  public translationLanguage: any;
  public success: string;
  public inputsProblem : string[];
  public inputsTranslation : string[];
  public listTitle: string;
  public languageList: string[];
  public error: boolean;
  public person: string;

  constructor( private http: HttpClient, private router: Router) {
    this.inputsProblem = [""];
    this.inputsTranslation = [""];
    this.languageList = ["Dutch", "English", "French", "German"]
  }

  ngOnInit() {

  }
  trackByFn(index: any, item: any) {
    return index;
  }

  update(): void {
    if(this.inputsProblem[this.inputsProblem.length - 1].trim() !== ""){
      this.inputsProblem.push("");
      this.inputsTranslation.push("");
    }
    for (var i = 0; i < this.inputsProblem.length; i++){
      if (this.inputsProblem[i].trim() == "" && this.inputsProblem[i-1].trim() == "" && this.inputsTranslation[i].trim() == ""){
        this.inputsProblem.splice(i, 1);
        this.inputsTranslation.splice(i, 1);
      }
    }

  }

  public submitEntry(): void {
    if (this.problemLanguage == undefined  || this.translationLanguage == undefined || this.listTitle == undefined || this.person == undefined){
      this.error = true;
      return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const entry = JSON.stringify({problemWords: this.inputsProblem, translationWords: this.inputsTranslation, title: this.listTitle, problemLanguage: this.problemLanguage, translationLanguage: this.translationLanguage, person: this.person});
    this.http.post('http://localhost:8090/api/submit', entry, httpOptions).subscribe(
      (val) => {
        // POST call successful value returned in body
        this.success = val.toString();
      },
      response => {
        this.error = true;
      },
      () => {
        this.router.navigate(['displayLists']);
      });
  }
}


