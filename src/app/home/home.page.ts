import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonLabel, IonThumbnail, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReviewService } from '../review.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonLabel, IonThumbnail, IonItem, RouterLinkWithHref, CommonModule, HttpClientModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage implements OnInit{
  movieReview:string = "";
  movies:any=[];

  constructor(private storage:Storage,private reviewService:ReviewService
    ) {}

  async ionWillEnter()
  {
    await this.storage.create();
    this.movieReview = await this.storage.get('review');
  }

  async gotoReview()
  {
    await Browser.open({url: '/review'});
  }

  async gotoAbout()
  {
    await Browser.open({url: '/about'});
  }

  ngOnInit(): void
  {
    this.reviewService.GetMovieData().subscribe
    (
      (data)=>
      {
        this.movies = data.Search;
      }
    );
  }
}
