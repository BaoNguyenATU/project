import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/angular/standalone';

import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async gotoReview()
  {
    await Browser.open({url: '/review'});
  }
  async gotoHome()
  {
    await Browser.open({url: '/home'});
  }
}
