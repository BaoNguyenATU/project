import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonBackButton, IonButtons } from '@ionic/angular/standalone';

import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonBackButton, IonButtons]
})
export class ReviewPage implements OnInit {

  movieReview:string = "";

  constructor(private storage:Storage, private router:Router) { }

  async ionWillEnter()
  {
    await this.storage.create();
    this.movieReview = await this.storage.get('review');
  }

  async saveReview()
  {
    //alert(this.myStatus);
    await this.storage.set('review', this.movieReview)
    .then
    (
      ()=>
      {
        this.router.navigate(['/home']);
      }
    )
    .catch
    (
      (error)=>
      {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
