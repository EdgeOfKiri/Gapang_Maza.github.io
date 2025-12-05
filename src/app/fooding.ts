import { Injectable } from '@angular/core';
import { PhfoodsInfo } from './phfoods';

@Injectable({
  providedIn: 'root',
})
export class FoodingService {
  readonly baseUrl = '/foods';
  protected phFoodsList: PhfoodsInfo[] = [
    {
    "id": 0,
    "name": "Adobo",
    "category": "Filipino Dish",
    "price": 999.00,
    "photo": "/foods/adobo.jpg",
    "description": "Tender chicken simmered in soy sauce, vinegar, garlic, and peppercorns—classic Filipino comfort food. Known for its rich, savory aroma and perfect balance of salty and tangy flavors, Adobo is a dish that instantly reminds Filipinos of home. Slow cooking allows the flavors to deepen, creating a warm and comforting meal enjoyed during family gatherings. Each region and household has its own version, making Adobo not just a dish but a cultural symbol of Filipino identity passed down through generations."
  },
  {
    "id": 1,
    "name": "Bicol Express",
    "category": "Filipino Dish",
    "price": 90.00,
    "photo": "/foods/bicol-express.jpg",
    "description": "A spicy and creamy dish made with pork, chilies, and coconut milk, inspired by the vibrant flavors of the Bicol region. The heat from siling labuyo blends smoothly with the richness of coconut milk, creating a bold flavor profile that spice lovers adore. Every bite is packed with warmth and excitement, showcasing the adventurous cooking style of Bicolanos. This dish reflects the region’s identity—fiery, flavorful, and unforgettable."
  },
  {
    "id": 2,
    "name": "Chicharon",
    "category": "Pulutan",
    "price": 100.00,
    "photo": "/foods/chicharon.jpg",
    "description": "Crispy deep-fried pork rinds, perfect as a snack or pulutan with sawsawan. Known for its addictive crunch, Chicharon is enjoyed everywhere—from street vendors to pasalubong stores. When dipped in spicy vinegar with garlic and chili, the flavors become even more irresistible. Often shared during gatherings or inuman sessions, this snack brings fun, excitement, and memories of Filipino street-food culture."
  },
  {
    "id": 3,
    "name": "Dinuguan",
    "category": "Filipino Dish",
    "price": 70.00,
    "photo": "/foods/dinuguan.jpg",
    "description": "Savory pork stew cooked in rich, spiced blood sauce—best enjoyed with puto. Dinuguan offers a deep, hearty flavor created through slow simmering of pork, garlic, chili, and vinegar. Its thick, silky sauce and tender meat make it a comforting favorite during fiestas and family gatherings. While bold in appearance, the dish is beloved for its unique, flavorful, and authentic taste that highlights Filipino culinary creativity."
  },
  {
    "id": 4,
    "name": "Halo-Halo",
    "category": "Dessert",
    "price": 30.00,
    "photo": "/foods/halo-halo.jpg",
    "description": "A refreshing mix of crushed ice, milk, sweet beans, jelly, and leche flan—perfect for hot days. Halo-halo is a vibrant dessert filled with layers of colorful ingredients, each adding a unique flavor and texture. From the chewiness of nata de coco to the smoothness of ube halaya, every scoop is a delightful surprise. Topped with leche flan and served cold, it is a nostalgic summer treat enjoyed in beaches, fiestas, and family outings across the Philippines."
  },
  {
    "id": 5,
    "name": "Menudo",
    "category": "Filipino Dish",
    "price": 70.00,
    "photo": "/foods/menudo.jpg",
    "description": "A hearty stew of pork, potatoes, carrots, and raisins simmered in tomato sauce. Menudo is popularly served during birthdays and celebrations because of its colorful, festive appearance. The savory tomato base is perfectly balanced with the gentle sweetness of raisins, creating a warm and comforting flavor. This dish is a staple in Filipino homes, often prepared for gatherings and special family occasions."
  },
  {
    "id": 6,
    "name": "Pinakbet",
    "category": "Filipino Dish",
    "price": 70.00,
    "photo": "/foods/pinakbet.jpg",
    "description": "A healthy mix of sautéed vegetables flavored with bagoong, a staple Ilocano favorite. Pinakbet combines the freshness of native vegetables like eggplant, okra, squash, and ampalaya, resulting in a wholesome and earthy dish. The bagoong adds a strong savory depth that enhances the natural flavors of the vegetables. This dish represents simple yet nourishing Filipino home cooking, rooted in tradition and regional pride."
  },
  {
    "id": 7,
    "name": "Sinigang",
    "category": "Filipino Dish",
    "price": 70.00,
    "photo": "/foods/sinigang.jpg",
    "description": "A sour tamarind-based soup with tender pork and fresh vegetables—comforting and flavorful. Sinigang is loved for its refreshing asim that awakens the appetite. The broth, made tangy with tamarind, pairs well with vegetables like kangkong, gabi, and radish. Best served hot on rainy days, Sinigang brings warmth and familiarity, making it one of the most comforting Filipino dishes."
  },
  {
    "id": 8,
    "name": "Sisig",
    "category": "Pulutan",
    "price": 70.00,
    "photo": "/foods/sisig.jpg",
    "description": "Sizzling chopped pork seasoned with calamansi, onions, and spices—crispy, savory, and iconic. Served on a hot sizzling plate, Sisig crackles with irresistible aroma and flavor. The combination of crunchy and tender textures, balanced with tangy calamansi and savory spices, makes it a favorite pulutan and main dish. Representing the pride of Pampanga, Sisig has become one of the Philippines’ most beloved and recognizable dishes."
  },
  {
    "id": 9,
    "name": "Turon",
    "category": "Dessert",
    "price": 7.00,
    "photo": "/foods/turon.jpg",
    "description": "Crispy fried banana rolls coated in caramelized sugar—a sweet and affordable Filipino snack. Turon is made with ripe saba bananas wrapped in lumpia wrapper and glazed until golden and crunchy. Often sold by street vendors, it is enjoyed by students, workers, and families alike. The sweet aroma of caramelized sugar and the warm, soft banana filling makes Turon a comforting treat perfect for merienda or dessert."
  },
  ];
  getAllPhFoods():PhfoodsInfo[] {
    return this.phFoodsList;
  }
  getPhFoodsById(id: number): PhfoodsInfo | undefined {
    return this.phFoodsList.find((phFoods) => phFoods.id === id);
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Foods are received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
