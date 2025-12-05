import { Component, input } from '@angular/core';
import { PhfoodsInfo } from '../phfoods';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ph-foods',
  imports: [RouterLink],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="phFoods().photo"
        alt="Exterior photo of {{ phFoods().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ phFoods().name }}</h2>
      <p class="listing-location">{{ phFoods().category }}</p>
      <a [routerLink]="['/details', phFoods().id]">Learn More</a>
    </section>
  `,
  styleUrl: './ph-foods.css',
})
export class PhFoods {
  phFoods = input.required<PhfoodsInfo>();
}
