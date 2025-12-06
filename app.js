// Shopping Cart Service
const CartService = {
  items: [],

  addItem(food, quantity = 1) {
    const existingItem = this.items.find(item => item.id === food.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...food,
        quantity: quantity
      });
    }
    this.updateCartCount();
    this.saveCart();
  },

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.updateCartCount();
    this.saveCart();
  },

  updateQuantity(id, quantity) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(id);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  },

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  },

  clearCart() {
    this.items = [];
    this.updateCartCount();
    this.saveCart();
  },

  updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      const count = this.getItemCount();
      cartCount.textContent = count;
      cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
  },

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  },

  loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.items = JSON.parse(saved);
      this.updateCartCount();
    }
  }
};

// Food data service
const FoodingService = {
  phFoodsList: [
    {
      "id": 0,
      "name": "Adobo",
      "category": "Filipino Dish",
      "price": 999.00,
      "photo": "public/foods/adobo.jpg",
      "description": "Tender chicken simmered in soy sauce, vinegar, garlic, and peppercorns—classic Filipino comfort food. Known for its rich, savory aroma and perfect balance of salty and tangy flavors, Adobo is a dish that instantly reminds Filipinos of home. Slow cooking allows the flavors to deepen, creating a warm and comforting meal enjoyed during family gatherings. Each region and household has its own version, making Adobo not just a dish but a cultural symbol of Filipino identity passed down through generations."
    },
    {
      "id": 1,
      "name": "Bicol Express",
      "category": "Filipino Dish",
      "price": 90.00,
      "photo": "public/foods/bicol-express.jpg",
      "description": "A spicy and creamy dish made with pork, chilies, and coconut milk, inspired by the vibrant flavors of the Bicol region. The heat from siling labuyo blends smoothly with the richness of coconut milk, creating a bold flavor profile that spice lovers adore. Every bite is packed with warmth and excitement, showcasing the adventurous cooking style of Bicolanos. This dish reflects the region's identity—fiery, flavorful, and unforgettable."
    },
    {
      "id": 2,
      "name": "Chicharon",
      "category": "Pulutan",
      "price": 100.00,
      "photo": "public/foods/chicharon.jpg",
      "description": "Crispy deep-fried pork rinds, perfect as a snack or pulutan with sawsawan. Known for its addictive crunch, Chicharon is enjoyed everywhere—from street vendors to pasalubong stores. When dipped in spicy vinegar with garlic and chili, the flavors become even more irresistible. Often shared during gatherings or inuman sessions, this snack brings fun, excitement, and memories of Filipino street-food culture."
    },
    {
      "id": 3,
      "name": "Dinuguan",
      "category": "Filipino Dish",
      "price": 70.00,
      "photo": "public/foods/dinuguan.jpg",
      "description": "Savory pork stew cooked in rich, spiced blood sauce—best enjoyed with puto. Dinuguan offers a deep, hearty flavor created through slow simmering of pork, garlic, chili, and vinegar. Its thick, silky sauce and tender meat make it a comforting favorite during fiestas and family gatherings. While bold in appearance, the dish is beloved for its unique, flavorful, and authentic taste that highlights Filipino culinary creativity."
    },
    {
      "id": 4,
      "name": "Halo-Halo",
      "category": "Dessert",
      "price": 30.00,
      "photo": "public/foods/halo-halo.jpg",
      "description": "A refreshing mix of crushed ice, milk, sweet beans, jelly, and leche flan—perfect for hot days. Halo-halo is a vibrant dessert filled with layers of colorful ingredients, each adding a unique flavor and texture. From the chewiness of nata de coco to the smoothness of ube halaya, every scoop is a delightful surprise. Topped with leche flan and served cold, it is a nostalgic summer treat enjoyed in beaches, fiestas, and family outings across the Philippines."
    },
    {
      "id": 5,
      "name": "Menudo",
      "category": "Filipino Dish",
      "price": 70.00,
      "photo": "public/foods/menudo.jpg",
      "description": "A hearty stew of pork, potatoes, carrots, and raisins simmered in tomato sauce. Menudo is popularly served during birthdays and celebrations because of its colorful, festive appearance. The savory tomato base is perfectly balanced with the gentle sweetness of raisins, creating a warm and comforting flavor. This dish is a staple in Filipino homes, often prepared for gatherings and special family occasions."
    },
    {
      "id": 6,
      "name": "Pinakbet",
      "category": "Filipino Dish",
      "price": 70.00,
      "photo": "public/foods/pinakbet.jpg",
      "description": "A healthy mix of sautéed vegetables flavored with bagoong, a staple Ilocano favorite. Pinakbet combines the freshness of native vegetables like eggplant, okra, squash, and ampalaya, resulting in a wholesome and earthy dish. The bagoong adds a strong savory depth that enhances the natural flavors of the vegetables. This dish represents simple yet nourishing Filipino home cooking, rooted in tradition and regional pride."
    },
    {
      "id": 7,
      "name": "Sinigang",
      "category": "Filipino Dish",
      "price": 70.00,
      "photo": "public/foods/sinigang.jpg",
      "description": "A sour tamarind-based soup with tender pork and fresh vegetables—comforting and flavorful. Sinigang is loved for its refreshing asim that awakens the appetite. The broth, made tangy with tamarind, pairs well with vegetables like kangkong, gabi, and radish. Best served hot on rainy days, Sinigang brings warmth and familiarity, making it one of the most comforting Filipino dishes."
    },
    {
      "id": 8,
      "name": "Sisig",
      "category": "Pulutan",
      "price": 70.00,
      "photo": "public/foods/sisig.jpg",
      "description": "Sizzling chopped pork seasoned with calamansi, onions, and spices—crispy, savory, and iconic. Served on a hot sizzling plate, Sisig crackles with irresistible aroma and flavor. The combination of crunchy and tender textures, balanced with tangy calamansi and savory spices, makes it a favorite pulutan and main dish. Representing the pride of Pampanga, Sisig has become one of the Philippines' most beloved and recognizable dishes."
    },
    {
      "id": 9,
      "name": "Turon",
      "category": "Dessert",
      "price": 7.00,
      "photo": "public/foods/turon.jpg",
      "description": "Crispy fried banana rolls coated in caramelized sugar—a sweet and affordable Filipino snack. Turon is made with ripe saba bananas wrapped in lumpia wrapper and glazed until golden and crunchy. Often sold by street vendors, it is enjoyed by students, workers, and families alike. The sweet aroma of caramelized sugar and the warm, soft banana filling makes Turon a comforting treat perfect for merienda or dessert."
    }
  ],

  getAllPhFoods() {
    return this.phFoodsList;
  },

  getPhFoodsById(id) {
    return this.phFoodsList.find((phFoods) => phFoods.id === parseInt(id));
  },

  submitApplication(firstName, lastName, email, phone = '', foodName = '', quantity = 1, totalPrice = 0) {
    console.log(
      `Order received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}, phone: ${phone}, food: ${foodName}, quantity: ${quantity}, total: ${totalPrice}.`
    );
    const orderDetails = foodName 
      ? `Order Confirmed! 🎉\n\nItem: ${foodName}\nQuantity: ${quantity}\nTotal Price: ₱${totalPrice.toFixed(2)}\n\nCustomer Details:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nThank you for your order!`
      : `Application submitted!\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}`;
    alert(orderDetails);
  },

  submitOrder(orderDetails) {
    console.log('Order submitted:', orderDetails);
    // Here you would typically send the order to a backend server
    // For now, we'll just log it and show an alert
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
  }
};

// Router
const Router = {
  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  },

  handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const content = document.getElementById('app-content');

    if (hash === '/') {
      this.renderHome(content);
    } else if (hash === '/cart') {
      this.renderCart(content);
    } else if (hash === '/checkout') {
      this.renderCheckout(content);
    } else if (hash.startsWith('/details/')) {
      const id = hash.split('/details/')[1];
      this.renderDetails(content, id);
    } else {
      content.innerHTML = `
        <article style="text-align: center; padding: 4rem 2rem; background: rgba(255, 255, 255, 0.95); border-radius: 24px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);">
          <h1 style="font-size: 3rem; color: #2d3436; margin-bottom: 1rem;">404</h1>
          <p style="font-size: 1.2rem; color: #636e72; margin-bottom: 2rem;">Page not found</p>
          <a href="#/" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #ff6b35, #ff8c5a); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">Go back home</a>
        </article>
      `;
    }
  },

  renderHome(container) {
    let filteredFoodsList = FoodingService.getAllPhFoods();

    container.innerHTML = `
      <section class="search-section">
        <form id="filter-form">
          <input type="text" id="filter-input" placeholder="Search by category (e.g., Filipino Dish, Dessert, Pulutan)" />
          <button class="primary" type="button" id="search-btn">🔍 Search</button>
          <button class="secondary" type="button" id="clear-btn">Clear</button>
        </form>
      </section>
      <section class="results" id="results">
        ${this.renderFoodList(filteredFoodsList)}
      </section>
    `;

    // Add event listeners
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');
    const filterInput = document.getElementById('filter-input');

    const performSearch = () => {
      const text = filterInput.value;
      if (!text) {
        filteredFoodsList = FoodingService.getAllPhFoods();
      } else {
        filteredFoodsList = FoodingService.getAllPhFoods().filter((phFoods) =>
          phFoods?.category.toLowerCase().includes(text.toLowerCase())
        );
      }
      document.getElementById('results').innerHTML = this.renderFoodList(filteredFoodsList);
    };

    searchBtn.addEventListener('click', performSearch);

    clearBtn.addEventListener('click', () => {
      filterInput.value = '';
      filteredFoodsList = FoodingService.getAllPhFoods();
      document.getElementById('results').innerHTML = this.renderFoodList(filteredFoodsList);
    });

    filterInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });
  },

  renderFoodList(foods) {
    return foods.map(food => `
      <section class="listing">
        <img
          class="listing-photo"
          src="${food.photo}"
          alt="Photo of ${food.name}"
          crossorigin
        />
        <h2 class="listing-heading">${food.name}</h2>
        <p class="listing-location">${food.category}</p>
        <div class="listing-actions">
          <a href="#/details/${food.id}">View Details</a>
          <button class="listing-order-btn" onclick="Router.handleQuickOrder(${food.id})">Add to Cart</button>
        </div>
      </section>
    `).join('');
  },

  handleQuickOrder(id) {
    const food = FoodingService.getPhFoodsById(id);
    if (food) {
      CartService.addItem(food, 1);
      alert(`✅ ${food.name} added to cart!\nPrice: ₱${food.price.toFixed(2)}\n\nView your cart to checkout.`);
    }
  },

  renderDetails(container, id) {
    const phFoods = FoodingService.getPhFoodsById(id);

    if (!phFoods) {
      container.innerHTML = `
        <article style="text-align: center; padding: 4rem 2rem;">
          <h1 style="font-size: 3rem; color: var(--text-dark); margin-bottom: 1rem;">Food Not Found</h1>
          <p style="font-size: 1.2rem; color: var(--text-light); margin-bottom: 2rem;">The food item you're looking for doesn't exist.</p>
          <a href="#/" style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, var(--accent-color), #ff8c5a); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; box-shadow: var(--shadow-md);">Go back home</a>
        </article>
      `;
      return;
    }

    container.innerHTML = `
      <article>
        <img
          class="listing-photo"
          src="${phFoods.photo}"
          alt="Photo of ${phFoods.name}"
          crossorigin
        />
        <section class="listing-description">
          <h2 class="listing-heading">${phFoods.name}</h2>
          <p class="listing-location">${phFoods.category}</p>
        </section>
        <section class="listing-features">
          <h2 class="section-heading">About this food</h2>
          <ul>
            <li>Price: ₱${phFoods.price.toFixed(2)}</li>
            <li>${phFoods.description}</li>
          </ul>
        </section>
        <section class="order-section">
          <h2 class="section-heading">Order Now</h2>
          <p style="color: var(--text-light); margin-bottom: 1.5rem;">Ready to order? Choose an option below:</p>
          <div class="order-buttons">
            <button class="btn-order" onclick="Router.showOrderModal(${phFoods.id})">🛒 Order Now</button>
            <button class="btn-add-cart" onclick="Router.handleAddToCart(${phFoods.id})">➕ Add to Cart (Qty: 1)</button>
            <a href="#/" class="btn-back">← Back to Menu</a>
          </div>
        </section>
        <section class="listing-apply">
          <h2 class="section-heading">Contact Information</h2>
          <p style="color: var(--text-light); margin-bottom: 1.5rem;">Fill out your details to complete your order:</p>
          <form id="apply-form">
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" name="firstName" required />
            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" name="lastName" required />
            <label for="email">Email</label>
            <input id="email" type="email" name="email" required />
            <label for="phone">Phone Number</label>
            <input id="phone" type="tel" name="phone" placeholder="+63 XXX XXX XXXX" required />
            <label for="quantity">Quantity</label>
            <input id="quantity" type="number" name="quantity" min="1" value="1" required />
            <button type="submit" class="primary">Complete Order</button>
          </form>
        </section>
      </article>
    `;

    // Add form submit handler
    const form = document.getElementById('apply-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const quantity = parseInt(formData.get('quantity') || '1');
      const totalPrice = phFoods.price * quantity;
      
      FoodingService.submitApplication(
        formData.get('firstName') || '',
        formData.get('lastName') || '',
        formData.get('email') || '',
        formData.get('phone') || '',
        phFoods.name,
        quantity,
        totalPrice
      );
      form.reset();
    });
  },

  showOrderModal(id) {
    const food = FoodingService.getPhFoodsById(id);
    if (!food) return;

    const modal = document.getElementById('order-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
      <div class="modal-header">
        <h2>Order ${food.name}</h2>
        <p class="modal-subtitle">${food.category}</p>
      </div>
      <div class="modal-food-info">
        <img src="${food.photo}" alt="${food.name}" class="modal-food-image" />
        <div class="modal-food-details">
          <p class="modal-description">${food.description}</p>
          <p class="modal-price">Price: <strong>₱${food.price.toFixed(2)}</strong> each</p>
        </div>
      </div>
      <div class="modal-quantity">
        <label for="modal-quantity-input">Quantity:</label>
        <div class="quantity-controls">
          <button class="qty-btn-modal" onclick="Router.decreaseModalQuantity()">-</button>
          <input type="number" id="modal-quantity-input" value="1" min="1" max="99" />
          <button class="qty-btn-modal" onclick="Router.increaseModalQuantity()">+</button>
        </div>
      </div>
      <div class="modal-total">
        <p>Subtotal: <strong id="modal-subtotal">₱${food.price.toFixed(2)}</strong></p>
      </div>
      <div class="modal-actions">
        <button class="btn-modal-add-cart" onclick="Router.addToCartFromModal(${food.id})">➕ Add to Cart</button>
        <button class="btn-modal-order" onclick="Router.orderFromModal(${food.id})">🛒 Order Now</button>
      </div>
    `;

    modal.style.display = 'block';
    this.currentModalFood = food;
    this.updateModalTotal();
    
    // Update total when quantity changes
    const qtyInput = document.getElementById('modal-quantity-input');
    qtyInput.addEventListener('input', () => this.updateModalTotal());
    qtyInput.addEventListener('change', () => this.updateModalTotal());
  },

  closeOrderModal() {
    const modal = document.getElementById('order-modal');
    modal.style.display = 'none';
    this.currentModalFood = null;
  },

  increaseModalQuantity() {
    const qtyInput = document.getElementById('modal-quantity-input');
    const currentQty = parseInt(qtyInput.value) || 1;
    qtyInput.value = Math.min(currentQty + 1, 99);
    this.updateModalTotal();
  },

  decreaseModalQuantity() {
    const qtyInput = document.getElementById('modal-quantity-input');
    const currentQty = parseInt(qtyInput.value) || 1;
    qtyInput.value = Math.max(currentQty - 1, 1);
    this.updateModalTotal();
  },

  updateModalTotal() {
    if (!this.currentModalFood) return;
    const qtyInput = document.getElementById('modal-quantity-input');
    const quantity = parseInt(qtyInput.value) || 1;
    const total = this.currentModalFood.price * quantity;
    const subtotalEl = document.getElementById('modal-subtotal');
    if (subtotalEl) {
      subtotalEl.textContent = `₱${total.toFixed(2)}`;
    }
  },

  addToCartFromModal(id) {
    const food = FoodingService.getPhFoodsById(id);
    if (!food) return;
    
    const qtyInput = document.getElementById('modal-quantity-input');
    const quantity = parseInt(qtyInput.value) || 1;
    
    CartService.addItem(food, quantity);
    this.closeOrderModal();
    alert(`✅ ${food.name} (${quantity}x) added to cart!\nTotal: ₱${(food.price * quantity).toFixed(2)}\n\nView your cart to checkout.`);
  },

  orderFromModal(id) {
    const food = FoodingService.getPhFoodsById(id);
    if (!food) return;
    
    const qtyInput = document.getElementById('modal-quantity-input');
    const quantity = parseInt(qtyInput.value) || 1;
    
    CartService.addItem(food, quantity);
    this.closeOrderModal();
    window.location.hash = '#/cart';
  },

  handleOrder(id) {
    // Keep this for backward compatibility, but use modal instead
    this.showOrderModal(id);
  },

  handleAddToCart(id) {
    const food = FoodingService.getPhFoodsById(id);
    if (food) {
      CartService.addItem(food, 1);
      alert(`✅ ${food.name} added to cart!\nPrice: ₱${food.price.toFixed(2)}\n\nYou can continue shopping or proceed to checkout.`);
    }
  },

  renderCart(container) {
    if (CartService.items.length === 0) {
      container.innerHTML = `
        <article style="text-align: center; padding: 4rem 2rem; background: rgba(255, 255, 255, 0.95); border-radius: 24px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);">
          <div style="font-size: 5rem; margin-bottom: 1rem;">🛒</div>
          <h1 style="font-size: 2.5rem; color: #2d3436; margin-bottom: 1rem;">Your Cart is Empty</h1>
          <p style="font-size: 1.2rem; color: #636e72; margin-bottom: 2rem;">Start adding delicious Filipino food to your cart!</p>
          <a href="#/" style="display: inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #ff6b35, #ff8c5a); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">Browse Menu</a>
        </article>
      `;
      return;
    }

    const total = CartService.getTotal();
    const itemsHtml = CartService.items.map(item => `
      <div class="cart-item">
        <img src="${item.photo}" alt="${item.name}" class="cart-item-image" />
        <div class="cart-item-details">
          <h3 class="cart-item-name">${item.name}</h3>
          <p class="cart-item-category">${item.category}</p>
          <p class="cart-item-price">₱${item.price.toFixed(2)} each</p>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="Router.decreaseQuantity(${item.id})">-</button>
          <span class="cart-item-quantity">${item.quantity}</span>
          <button class="qty-btn" onclick="Router.increaseQuantity(${item.id})">+</button>
        </div>
        <div class="cart-item-total">
          <p class="cart-item-total-price">₱${(item.price * item.quantity).toFixed(2)}</p>
          <button class="remove-btn" onclick="Router.removeFromCart(${item.id})">🗑️ Remove</button>
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <article class="cart-page">
        <h1 class="cart-title">🛒 Shopping Cart</h1>
        <div class="cart-items">
          ${itemsHtml}
        </div>
        <div class="cart-summary">
          <div class="cart-summary-row">
            <span>Subtotal:</span>
            <span>₱${total.toFixed(2)}</span>
          </div>
          <div class="cart-summary-row">
            <span>Delivery Fee:</span>
            <span>₱50.00</span>
          </div>
          <div class="cart-summary-row total">
            <span>Total:</span>
            <span>₱${(total + 50).toFixed(2)}</span>
          </div>
          <div class="cart-actions">
            <a href="#/" class="btn-continue">← Continue Shopping</a>
            <button class="btn-checkout" onclick="Router.proceedToCheckout()">Proceed to Checkout</button>
          </div>
        </div>
      </article>
    `;
  },

  increaseQuantity(id) {
    const item = CartService.items.find(item => item.id === id);
    if (item) {
      CartService.updateQuantity(id, item.quantity + 1);
      this.renderCart(document.getElementById('app-content'));
    }
  },

  decreaseQuantity(id) {
    const item = CartService.items.find(item => item.id === id);
    if (item && item.quantity > 1) {
      CartService.updateQuantity(id, item.quantity - 1);
      this.renderCart(document.getElementById('app-content'));
    }
  },

  removeFromCart(id) {
    if (confirm('Remove this item from cart?')) {
      CartService.removeItem(id);
      this.renderCart(document.getElementById('app-content'));
    }
  },

  proceedToCheckout() {
    if (CartService.items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    window.location.hash = '#/checkout';
  },

  renderCheckout(container) {
    if (CartService.items.length === 0) {
      window.location.hash = '#/cart';
      return;
    }

    const total = CartService.getTotal();
    const deliveryFee = 50;
    const grandTotal = total + deliveryFee;

    const orderSummary = CartService.items.map(item => 
      `${item.quantity}x ${item.name} - ₱${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    container.innerHTML = `
      <article class="checkout-page">
        <h1 class="checkout-title">Checkout</h1>
        <div class="checkout-content">
          <div class="checkout-form-section">
            <h2 class="section-heading">Delivery Information</h2>
            <form id="checkout-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="checkout-first-name">First Name *</label>
                  <input id="checkout-first-name" type="text" name="firstName" required />
                </div>
                <div class="form-group">
                  <label for="checkout-last-name">Last Name *</label>
                  <input id="checkout-last-name" type="text" name="lastName" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="checkout-email">Email *</label>
                  <input id="checkout-email" type="email" name="email" required />
                </div>
                <div class="form-group">
                  <label for="checkout-phone">Phone Number *</label>
                  <input id="checkout-phone" type="tel" name="phone" placeholder="+63 XXX XXX XXXX" required />
                </div>
              </div>
              <div class="form-group">
                <label for="checkout-address">Delivery Address *</label>
                <textarea id="checkout-address" name="address" rows="3" placeholder="Street, Barangay, City" required></textarea>
              </div>
              <div class="form-group">
                <label for="checkout-notes">Special Instructions (Optional)</label>
                <textarea id="checkout-notes" name="notes" rows="2" placeholder="Any special requests or delivery instructions..."></textarea>
              </div>
            </form>
          </div>
          <div class="checkout-summary-section">
            <h2 class="section-heading">Order Summary</h2>
            <div class="checkout-items">
              ${CartService.items.map(item => `
                <div class="checkout-item">
                  <span>${item.quantity}x ${item.name}</span>
                  <span>₱${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              `).join('')}
            </div>
            <div class="checkout-totals">
              <div class="checkout-total-row">
                <span>Subtotal:</span>
                <span>₱${total.toFixed(2)}</span>
              </div>
              <div class="checkout-total-row">
                <span>Delivery Fee:</span>
                <span>₱${deliveryFee.toFixed(2)}</span>
              </div>
              <div class="checkout-total-row final">
                <span>Total:</span>
                <span>₱${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <div class="checkout-actions">
              <a href="#/cart" class="btn-back-checkout">← Back to Cart</a>
              <button class="btn-place-order" onclick="Router.placeOrder()">Place Order</button>
            </div>
          </div>
        </div>
      </article>
    `;
  },

  placeOrder() {
    const form = document.getElementById('checkout-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const total = CartService.getTotal();
    const deliveryFee = 50;
    const grandTotal = total + deliveryFee;

    const orderDetails = {
      items: CartService.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.price * item.quantity
      })),
      customer: {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        notes: formData.get('notes') || ''
      },
      totals: {
        subtotal: total,
        deliveryFee: deliveryFee,
        total: grandTotal
      }
    };

    // Save order
    FoodingService.submitOrder(orderDetails);

    // Clear cart
    CartService.clearCart();

    // Show success message
    alert(`✅ Order Placed Successfully!\n\nOrder Total: ₱${grandTotal.toFixed(2)}\n\nWe'll contact you soon at ${formData.get('phone')} to confirm your order.\n\nThank you for choosing Timplado PH!`);

    // Redirect to home
    window.location.hash = '#/';
  }
};

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
  CartService.loadCart();
  Router.init();
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById('order-modal');
    if (event.target === modal) {
      Router.closeOrderModal();
    }
  };
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      Router.closeOrderModal();
    }
  });
});


