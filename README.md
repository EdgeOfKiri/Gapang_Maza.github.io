# FoodStores - Filipino Food Showcase

A simple web application showcasing Filipino foods, converted from Angular to plain HTML, CSS, and JavaScript.

## Features

- Browse a collection of Filipino dishes
- Filter foods by category
- View detailed information about each food
- Submit order applications

## File Structure

```
FoodStores/
├── index.html          # Main HTML file
├── app.js              # JavaScript application logic
├── styles.css          # All CSS styles
├── public/             # Static assets
│   ├── foods/          # Food images
│   ├── logo.png        # Logo
│   └── favicon.ico     # Favicon
└── README.md           # This file
```

## How to Use

### Local Development

1. Simply open `index.html` in a web browser, or
2. Use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Navigate to `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select the branch (usually `main` or `master`)
4. Select the root folder
5. Click Save
6. Your site will be available at `https://yourusername.github.io/repository-name`

## Navigation

- Home page: `index.html` or `index.html#/`
- Food details: `index.html#/details/{id}` (where {id} is the food ID, 0-9)

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- No frameworks or dependencies required

## Browser Support

Works in all modern browsers that support:
- ES6 JavaScript features
- CSS Grid
- Hash-based routing

## Notes

- The application uses hash-based routing (`#/` and `#/details/{id}`)
- All food data is stored in `app.js`
- Images are located in the `public/foods/` directory
- No build process required - just open and use!
