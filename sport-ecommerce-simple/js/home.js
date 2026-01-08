/* ============================================
   HOME.JS - HOME PAGE FUNCTIONALITY
   ============================================
   This file handles:
   - Loading and displaying product data
   - Product interactions
   ============================================ */

/**
 * Mock Product Data
 * In a real application, this would come from a database/API
 */
const products = [
  {
    id: 1,
    name: "Giày Chạy Bộ Chuyên Nghiệp",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Chạy Bộ",
  },
  {
    id: 2,
    name: "Bóng Rổ Chuyên Nghiệp",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
    category: "Bóng Rổ",
  },
  {
    id: 3,
    name: "Găng Tay Tập Luyện",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    category: "Thể Hình",
  },
  {
    id: 4,
    name: "Áo Đấu Bóng Đá",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
    category: "Bóng Đá",
  },
  {
    id: 5,
    name: "Thảm Yoga Cao Cấp",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    category: "Thể Hình",
  },
  {
    id: 6,
    name: "Vợt Tennis",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1622163642999-9586b0f8b0a5?w=400&h=400&fit=crop",
    category: "Tennis",
  },
];

/**
 * Initialize Home Page when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Only run on home page
  if (document.getElementById("productsGrid")) {
    loadProducts();
  }
});

/**
 * Load Products: Display all products in the grid
 */
function loadProducts() {
  const productsGrid = document.getElementById("productsGrid");

  if (!productsGrid) {
    return;
  }

  // Clear existing content
  productsGrid.innerHTML = "";

  // Create product card for each product
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

/**
 * Create Product Card: Generate HTML for a single product
 * @param {Object} product - Product data object
 * @returns {HTMLElement} - Product card element
 */
function createProductCard(product) {
  // Create card container
  const card = document.createElement("div");
  card.className = "product-card";

  // Product image section
  const imageSection = document.createElement("div");
  imageSection.className = "product-image";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.loading = "lazy"; // Lazy loading for better performance

  const categoryBadge = document.createElement("span");
  categoryBadge.className = "product-category";
  categoryBadge.textContent = product.category;

  imageSection.appendChild(img);
  imageSection.appendChild(categoryBadge);

  // Product info section
  const infoSection = document.createElement("div");
  infoSection.className = "product-info";

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = product.name;

  const footer = document.createElement("div");
  footer.className = "product-footer";

  const price = document.createElement("span");
  price.className = "product-price";
  price.textContent = `${product.price.toFixed(0)}.000đ`;

  footer.appendChild(price);

  infoSection.appendChild(name);
  infoSection.appendChild(footer);

  // Assemble card
  card.appendChild(imageSection);
  card.appendChild(infoSection);

  return card;
}

