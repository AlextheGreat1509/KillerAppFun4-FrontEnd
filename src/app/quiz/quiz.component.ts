import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WordList} from '../../models/WordList';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ListEntry} from '../../models/ListEntry';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  wordListId: number;
  wordList: WordList;
  quizList: ListEntry[] = [];
  problemLanguage: string;
  translationLanguage: string;
  problemWord: string;
  translationWord: string;
  userAnswer: string;
  index: number = 0;
  correct: boolean;
  score: number = 0;
  total: number = 0;
  progress: number = 0;
  finished: boolean = false;

  public constructor(private http: HttpClient ,private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.wordListId = params['wordListId'];
      this.getListById();
    });
  }

  public getListById(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'text/plain'
      })
    };

    this.http.get<WordList>('http://localhost:8090/api/getlistbyid?id='+this.wordListId, httpOptions).subscribe(
      (val) => {
        this.wordList = val;
        this.total = this.wordList.listEntries.length;
        this.problemLanguage =  this.wordList.problemLanguage;
        this.translationLanguage = this.wordList.translationLanguage;
        this.quizList = this.wordList.listEntries;
        shuffle(this.quizList);
        function shuffle(a) {
          var j, x, i;
          for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
          }
          return a;
        }
        this.PrepareQuizQuestion();

      },
      response => {
      },
      () => {
      });
  }


  public PrepareQuizQuestion(): void {
    if (this.index < this.total ) {
      this.problemWord = this.quizList[this.index].problem;
      this.translationWord = this.quizList[this.index].translation;
      this.progress = (this.index / this.total * 100);
      this.index = this.index + 1;
    } else {
      this.QuizFinished();
    }
  }




  ngOnInit() {
  }

  public QuizFinished(){
    this.finished = true;
  }

  public DoQuiz(userAnswer: string) {
    if (userAnswer.toLowerCase() == this.translationWord.toLowerCase()){
      //Correct answer
      this.correct = true;
      this.score = this.score + 1;
    } else {
      //Incorrect answer
      this.correct = false;
    }
    this.userAnswer = "";
    this.PrepareQuizQuestion()

  }
}
