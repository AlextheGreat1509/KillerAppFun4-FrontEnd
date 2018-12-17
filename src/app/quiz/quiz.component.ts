import { Component, OnInit } from '@angular/core';
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
  problemWord: string;
  translationWord: string;
  userAnswer: string;
  index: number = 0;
  correct: boolean;
  score: number = 0;
  total: number = 0;
  progress: number = 0;

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
        this.quizList.push(this.wordList.listEntries.splice((Math.floor(Math.random() * this.wordList.listEntries.length)), 1)[0]);
        this.PrepareQuizQuestion();

      },
      response => {
      },
      () => {
      });
  }

  public PrepareQuizQuestion(): void {
    //TODO problem in check
    if (this.index <= this.quizList.length) {
      this.problemWord = this.quizList[this.index].problem;
      this.translationWord = this.quizList[this.index].translation;
      this.progress = this.index / this.total * 100;
      this.index = this.index + 1;
    } else {
      this.QuizFinished();
    }
  }




  ngOnInit() {
  }

  public QuizFinished(){

  }

  public DoQuiz(userAnswer: string) {
    if (userAnswer == this.translationWord){
      //Correct answer
      this.correct = true;
      this.score = this.score + 1;
    } else {
      //Incorrect answer
      this.correct = false;
    }
    this.PrepareQuizQuestion()

  }
}
