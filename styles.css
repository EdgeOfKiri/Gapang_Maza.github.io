/* Global Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary-color: #2c5530;
  --secondary-color: #4a7c59;
  --accent-color: #ff6b35;
  --text-dark: #2d3436;
  --text-light: #636e72;
  --bg-light: #f8f9fa;
  --white: #ffffff;
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);
}

body {
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

/* Header Styles */
.main-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.header-content {
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.brand-logo {
  height: 60px;
  width: auto;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  background: transparent;
  mix-blend-mode: multiply;
  object-fit: contain;
}

/* Remove white background from logo if present */
.logo-link img {
  background: transparent !important;
}

/* Alternative: if logo has white background, use this */
@supports (backdrop-filter: blur(10px)) {
  .brand-logo {
    background: rgba(255, 255, 255, 0);
  }
}

.brand-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: -0.5px;
}

/* Main Content */
main {
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 0 2rem 4rem 2rem;
}

.content {
  width: 100%;
}

/* Search Section */
.search-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  margin-bottom: 3rem;
}

.search-section form {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.search-section input[type="text"] {
  flex: 1;
  min-width: 400px;
  padding: 1.25rem 1.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1.1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: var(--white);
}

.search-section input[type="text"]:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  transform: translateY(-2px);
}

.search-section button {
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  white-space: nowrap;
}

.search-section button.primary {
  background: linear-gradient(135deg, var(--accent-color), #ff8c5a);
  color: var(--white);
}

.search-section button.secondary {
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-dark);
  border: 2px solid #e0e0e0;
}

.search-section button.primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  background: linear-gradient(135deg, #ff8c5a, var(--accent-color));
}

.search-section button.secondary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-color);
  background: var(--white);
}

.search-section button:active {
  transform: translateY(0);
}

/* Results Grid */
.results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
  width: 100%;
}

/* Food Card Styles */
.listing {
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.listing:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.listing::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color), #ff8c5a, #ffa366);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.listing:hover::before {
  opacity: 1;
}

.listing-photo {
  height: 280px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.listing:hover .listing-photo {
  transform: scale(1.05);
}

.listing-heading {
  color: var(--text-dark);
  padding: 1.25rem 1.5rem 0.5rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.listing-location {
  padding: 0 1.5rem 1rem 1.5rem;
  color: var(--text-light);
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.listing-actions {
  display: flex;
  gap: 1rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
  flex-wrap: wrap;
}

section.listing a,
.listing-order-btn {
  display: inline-block;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: var(--white);
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
  flex: 1;
  min-width: 120px;
  text-align: center;
}

.listing-order-btn {
  background: linear-gradient(135deg, var(--accent-color), #ff8c5a);
}

section.listing a:hover,
.listing-order-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

section.listing a:hover {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
}

.listing-order-btn:hover {
  background: linear-gradient(135deg, #ff8c5a, var(--accent-color));
}

section.listing a::after {
  content: " →";
  margin-left: 8px;
  transition: transform 0.3s ease;
  display: inline-block;
}

section.listing a:hover::after {
  transform: translateX(5px);
}

/* Details Page Styles */
article {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: var(--shadow-xl);
  margin-top: 2rem;
}

article .listing-photo {
  height: 500px;
  width: 45%;
  object-fit: cover;
  border-radius: 20px;
  float: right;
  margin-left: 2rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-lg);
}

.listing-description {
  margin-bottom: 2rem;
  clear: right;
}

.listing-description .listing-heading {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-dark);
  line-height: 1.2;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.listing-description .listing-location {
  font-size: 1.25rem;
  color: var(--text-light);
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.listing-features {
  margin: 3rem 0;
  clear: both;
}

.listing-features > .section-heading {
  color: var(--text-dark);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
}

.listing-features > .section-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color), #ff8c5a);
  border-radius: 2px;
}

.listing-features li {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: var(--text-dark);
  padding-left: 1.5rem;
  position: relative;
}

.listing-features li::before {
  content: '🍽️';
  position: absolute;
  left: 0;
  top: 0;
}

.listing-features li:first-child {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
}

.listing-features li:first-child::before {
  content: '💰';
}

.listing-features ul {
  list-style-type: none;
  padding: 0;
}

.listing-apply {
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 2px solid #e0e0e0;
  clear: both;
}

.listing-apply .section-heading {
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: var(--text-dark);
  font-weight: 600;
}

label {
  color: var(--text-dark);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-top: 1.5rem;
  display: block;
  letter-spacing: 0.5px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"] {
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: var(--white);
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.listing-apply button {
  margin-top: 1.5rem;
  padding: 1rem 3rem;
  border: none;
  background: linear-gradient(135deg, var(--accent-color), #ff8c5a);
  color: var(--white);
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.listing-apply button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  background: linear-gradient(135deg, #ff8c5a, var(--accent-color));
}

.listing-apply button:active {
  transform: translateY(0);
}

/* Order Button Styles */
.order-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e0e0e0;
  clear: both;
}

.order-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.btn-order,
.btn-add-cart,
.btn-back {
  padding: 1.25rem 2.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
  font-family: inherit;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-order {
  background: linear-gradient(135deg, var(--accent-color), #ff8c5a);
  color: var(--white);
  flex: 1;
  min-width: 200px;
}

.btn-order:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  background: linear-gradient(135deg, #ff8c5a, var(--accent-color));
}

.btn-add-cart {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--white);
  flex: 1;
  min-width: 200px;
}

.btn-add-cart:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
}

.btn-back {
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-dark);
  border: 2px solid #e0e0e0;
  flex: 0 0 auto;
}

.btn-back:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-color);
  background: var(--white);
}

/* Responsive Styles */
@media (max-width: 1024px) {
  article .listing-photo {
    width: 100%;
    height: 400px;
    float: none;
    margin-left: 0;
    margin-bottom: 2rem;
  }

  .listing-description .listing-heading {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  main {
    padding: 0 1rem 2rem 1rem;
  }

  .header-content {
    padding: 0 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .search-section input[type="text"] {
    min-width: 100%;
  }

  .brand-text {
    font-size: 1.4rem;
  }

  .brand-logo {
    height: 50px;
  }

  .results {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .search-section {
    padding: 1.5rem;
  }

  .search-section form {
    flex-direction: column;
  }

  .search-section input[type="text"] {
    width: 100%;
    min-width: auto;
  }

  .search-section button {
    width: 100%;
  }

  article {
    padding: 2rem 1.5rem;
  }

  .listing-description .listing-heading {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .results {
    grid-template-columns: 1fr;
  }

  .brand-text {
    font-size: 1.2rem;
  }

  .brand-logo {
    height: 40px;
  }

  article {
    padding: 1.5rem 1rem;
  }
}

/* Loading Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content > * {
  animation: fadeIn 0.5s ease-out;
}
