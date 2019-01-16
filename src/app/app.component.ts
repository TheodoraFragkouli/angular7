import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dream-app';
  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDIWdcAntDQlu0CZU4acI1PjGLWcLDh11g",
      authDomain: "udemy-ng-26e8a.firebaseapp.com"});
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
