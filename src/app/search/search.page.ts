import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Browser } from '@capacitor/browser';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SearchPage implements OnInit {

  searchResults: any[] = [];
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
  }

  onSearchChange(event: any) {
    const value = event.detail.value;

    if (value && value.trim() !== '') {
      this.reviewService.searchMovies(value).subscribe(
        (results) => {
          this.searchResults = results.movies; // Adjust based on actual API response
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }
  
  async gotoReview()
  {
    await Browser.open({url: '/review'});
  }

  async gotoAbout()
  {
    await Browser.open({url: '/about'});
  }

  async gotoHome()
  {
    await Browser.open({url: '/home'});
  }
}
