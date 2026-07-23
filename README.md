### Hero
 <img src="https://github.com/mainishanhoon/SoleMate/blob/master/frontend/public/Hero.png" alt="Hero"/>

### Add Product Form
 <img src="https://github.com/mainishanhoon/SoleMate/blob/master/frontend/public/Add%20Product%20Form.png" alt="Add Product Form"/>

### Products
 <img src="https://github.com/mainishanhoon/SoleMate/blob/master/frontend/public/Products.png" alt="Products"/>

### AI Assistant
 <img src="https://github.com/mainishanhoon/SoleMate/blob/master/frontend/public/AI%20Assistant.webp" alt="AI Assistant"/>

# 🈸 SoleMate - Backend

Spring Boot backend service for the SoleMate application. This API handles product management, multi-brand cataloging, and image handling.

## 📜 API Documentation

| Method | Endpoint                            | Description                               |
| :--- |:------------------------------------|:------------------------------------------|
| `GET` | `/api/product`                      | Fetch all available products.             |
| `GET` | `/api/product/{id}`                 | Get specific product details by ID.       |
| `GET` | `/api/product/{id}/image`           | Retrieve binary image data for a product. |
| `GET` | `/api/product/search?keyword={key}` | Search products by keyword.               |
| `POST` | `/api/product/add`                 | Add a new product (Multipart/Form-Data).  |
| `POST` | `/api/chat`                        | Triggers SoleMate AI Assistant.           |
| `PUT` | `/api/product/{id}`                 | Update an existing product and image.     |
| `DELETE` | `/api/product/{id}`              | Delete a product by its ID.               |

## 🛠️ Tech Stack
*   **Language:** TypeScript & Java 21
*   **Framework:** Spring Boot 4.0.6, Spring AI & React Router
*   **Database:** PostgreSQL
*   **Form Handling:** CONFORM.

## ⚙️ Configuration
The backend is configured to accept requests from your frontend development server:
*   **CORS Policy:** `http://localhost:5173`

## 📝 Request Details (Multipart/Form-Data)
For `POST /add` and `PUT /{id}`, the API requires a `multipart/form-data` request containing:
1.  **`product`**: The product details as a JSON object.
2.  **`imageFile`**: The image file to be uploaded.

---

# 🚪 SoleMate - Frontend

The frontend interface for the SoleMate, built with modern web technologies to provide a seamless user experience for discovering footwear. It utilizes Local Storage for adding items into cart.

## 📁 Project Structure

```text
app/
├── components/   # Reusable UI components
├── lib/          # Utilities and helper functions
├── providers/    # Context providers (Theme, Auth, etc.)
├── routes/       # Application routing logic
│   └── products/ # Product-specific views (add, detail, list)
├── schema/       # Data validation schemas
└── types/        # TypeScript interface definitions
```

## 👨‍🏫 Setup & Installation

1. **Clone the repository:**
2. 
   ```bash
   git clone https://github.com/mainishanhoon/SoleMate.git
