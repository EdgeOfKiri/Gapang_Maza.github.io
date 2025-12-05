import { Component,inject } from '@angular/core';
import { PhFoods } from '../ph-foods/ph-foods';
import { PhfoodsInfo } from '../phfoods';
import { FoodingService } from '../fooding';

@Component({
  selector: 'app-home',
  imports: [PhFoods],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by category" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
    @for(phFoods of filteredFoodsList; track $index) {
      <app-ph-foods [phFoods]="phFoods" />
    }
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  phFoodList: PhfoodsInfo[] = [];
  FoodingService: FoodingService = inject(FoodingService);
  filteredFoodsList: PhfoodsInfo[] = [];
  constructor() {
    this.phFoodList = this.FoodingService.getAllPhFoods();
    this.filteredFoodsList = this.phFoodList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredFoodsList = this.phFoodList;
      return;
    }

    this.filteredFoodsList = this.phFoodList.filter((PhFoods) => 
    PhFoods?.category.toLowerCase().includes(text.toLowerCase()),
  );
  }
}
