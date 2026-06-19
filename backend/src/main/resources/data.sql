CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    brand VARCHAR(100),
    price DECIMAL(19, 2) NOT NULL,
    category VARCHAR(100),
    available BOOLEAN DEFAULT TRUE,
    quantity INTEGER DEFAULT 0,
    release_date DATE,
    image_data BYTEA,
    image_name VARCHAR(255),
    image_type VARCHAR(50)
);

INSERT INTO products (id, name, description, brand, price, category, available, quantity, release_Date) VALUES
-- --- CATEGORY: SNEAKERS & RUNNING (10 items) ---
(1, 'Air Max Pulse', 'Next-gen cushioning lifestyle sneaker', 'Nike', 149.99, 'Sneakers', true, 50, '2026-01-15'),
(2, 'Ultraboost Light', 'High-performance running shoe with boost foam', 'Adidas', 180.00, 'Running', true, 40, '2026-02-10'),
(3, 'Classic Leather', 'Retro minimalist lifestyle sneaker', 'Reebok', 85.00, 'Sneakers', true, 65, '2025-11-05'),
(4, 'Speedcross 6', 'Trail running shoe with aggressive grip', 'Salomon', 140.00, 'Running', true, 25, '2026-03-01'),
(5, 'Chuck Taylor All Star', 'High-top canvas classic sneakers', 'Converse', 65.00, 'Sneakers', true, 100, '2025-01-01'),
(6, 'Gel-Kayano 30', 'Premium stability road running shoe', 'Asics', 160.00, 'Running', true, 30, '2026-02-20'),
(7, 'Old Skool', 'Classic skate shoe with iconic side stripe', 'Vans', 70.00, 'Sneakers', true, 85, '2025-05-12'),
(8, 'Cloudmonster', 'Max cushioning road running shoe', 'On Running', 170.00, 'Running', true, 20, '2026-04-11'),
(9, '990v6 Made in USA', 'Premium heritage lifestyle runner', 'New Balance', 200.00, 'Sneakers', true, 15, '2026-01-22'),
(10, 'RS-X Triple', 'Bulky retro-futuristic streetwear sneaker', 'Puma', 110.00, 'Sneakers', true, 45, '2025-10-18'),

-- --- CATEGORY: FORMAL & BOOTS (10 items) ---
(11, '1460 Smooth', 'Classic 8-eye leather combat boot', 'Dr. Martens', 170.00, 'Boots', true, 35, '2025-02-14'),
(12, 'Park Avenue Oxford', 'Premium handcrafted leather dress shoe', 'Allen Edmonds', 395.00, 'Formal', true, 12, '2025-08-30'),
(13, 'Chelsea Leather Boot', 'Sleek slip-on dress boot with elastic side', 'Timberland', 150.00, 'Boots', true, 28, '2025-10-05'),
(14, 'Penny Loafer Genuine', 'Classic slip-on polished leather loafer', 'Cole Haan', 130.00, 'Formal', true, 40, '2025-11-15'),
(15, '6-Inch Premium Waterproof', 'Iconic nubuck waterproof work boot', 'Timberland', 198.00, 'Boots', true, 50, '2025-09-01'),
(16, 'Monk Strap Brogues', 'Double strap formal leather shoe', 'Clarks', 110.00, 'Formal', true, 22, '2025-12-01'),
(17, 'Desert Boot', 'Original suede chukka boot with crepe sole', 'Clarks', 150.00, 'Boots', true, 60, '2025-03-20'),
(18, 'Wingtip Derby', 'Intricate perforated pattern dress shoe', 'Steve Madden', 95.00, 'Formal', true, 30, '2026-01-10'),
(19, 'Iron Ranger', 'Heavy-duty heritage oil-tanned leather boot', 'Red Wing', 349.99, 'Boots', true, 10, '2025-06-18'),
(20, 'Cap Toe Oxford', 'Synthetic budget-friendly wedding dress shoe', 'Bruno Marc', 45.00, 'Formal', true, 75, '2025-07-04'),

-- --- CATEGORY: ACCESSORIES & CARE (10 items) ---
(21, 'Premium Shoe Creep Protect', 'Water & stain repellent spray guard', 'Crep Protect', 15.00, 'Accessories', true, 200, '2025-01-10'),
(22, 'Sneaker Cleaning Kit', 'Includes solution, premium brush, and cloth', 'Reshoevn8r', 25.00, 'Accessories', true, 120, '2025-04-05'),
(23, 'Athletic Cushion Socks 3-Pack', 'Moisture-wicking crew length sport socks', 'Nike', 20.00, 'Accessories', true, 150, '2025-02-28'),
(24, 'Cedar Shoe Trees', 'Maintains shape and absorbs moisture in leather', 'Woodlore', 30.00, 'Accessories', true, 40, '2025-08-14'),
(25, 'No-Tie Elastic Laces', 'Heavy-duty tensional locking laces', 'Lock Laces', 9.99, 'Accessories', true, 300, '2025-03-11'),
(26, 'Memory Foam Insoles', 'Shock absorption replacement shoe inserts', 'Dr. Scholls', 18.50, 'Accessories', true, 80, '2025-06-01'),
(27, 'No-Show Liner Socks', 'Silicon grip non-slip casual socks', 'Adidas', 15.00, 'Accessories', true, 140, '2025-05-20'),
(28, 'Leather Conditioner Cream', 'Softens, preserves, and waterproofs leather', 'Lexol', 12.00, 'Accessories', true, 90, '2025-02-11'),
(29, 'Sneaker Deodorizer Balls', 'Twist-to-activate fresh scent odor eliminators', 'Sneaker Balls', 8.00, 'Accessories', true, 250, '2025-09-25'),
(30, 'Heavy Duty Boot Laces', 'Reinforced braided nylon replacement laces', 'Rhino Laces', 14.99, 'Accessories', true, 110, '2025-11-22');