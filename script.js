document.addEventListener('DOMContentLoaded', () => {
    const products = [
        // ID 1: Camara web 1080p
        { id: 1, name: 'Camara web 1080p', category: 'Periféricos', brand: 'Loogitech', price: 65, stock: 15, image: 'imagenes/descarga (1).jpg', bestSeller: true, onSale: false }, // Price updated
        // ID 2: Mouse
        { id: 2, name: 'Mouse gamer Razer cobra RGB', category: 'Periféricos', brand: 'Razer', price: 40, originalPrice: 55, stock: 25, image: 'imagenes/D_Q_NP_879184-MLU73709958761_122023-O.jpg', bestSeller: false, onSale: true }, // Price updated
        // ID 3: Monitor
        { id: 3, name: 'Monitor Samsung 27" Curvo F390', category: 'Periféricos', brand: 'Samsung', price: 200, originalPrice: 240, stock: 10, image: 'imagenes/Monitor-Samsung-27-Curvo-F390-60hz-1920-X-1080.jpg', bestSeller: true, onSale: true }, // Price updated
        // ID 4: Auriculares
        { id: 4, name: 'Auriculares Inalámbricos Bluetooth Sony WH-CH520 Negro', category: 'Periféricos', brand: 'Sony', price: 120, stock: 8, image: 'imagenes/descarga.jpg', bestSeller: false, onSale: false }, // Price updated
        // ID 5: Micrófono
        { id: 5, name: 'Micrófono Gadnic MIC-40PRO Condensador USB', category: 'Periféricos', brand: 'Gadnic', price: 90, stock: 12, image: 'imagenes/descarga (2).jpg', bestSeller: false, onSale: false }, // Price updated
        // ID 6: Disco Duro
        { id: 6, name: 'Disco Duro Externo 2TB WD Elements USB 3.0', category: 'Componentes de PC', brand: 'Elements', price: 95, originalPrice: 110, stock: 30, image: 'imagenes/descarga (3).jpg', bestSeller: true, onSale: true }, // Price updated
        // ID 7: Procesador
        { id: 7, name: 'Procesador AMD Ryzen 5 5600X', category: 'Componentes de PC', brand: 'AMD', price: 150, stock: 20, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.24.58.jpg', bestSeller: false, onSale: false }, // Price updated
        // ID 8: Placa de Video
        { id: 8, name: 'Placa de video RTX 30 serie 3070', category: 'Componentes de PC', brand: 'NVIDIA', price: 350, stock: 18, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.05.jpg', bestSeller: false, onSale: false }, // Price updated
        // ID 9: Memoria RAM
        { id: 9, name: 'Kit de memoria de 32 GB DDR4', category: 'Componentes de PC', brand: 'Corsair', price: 80, stock: 7, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.19.jpg', bestSeller: false, onSale: false }, // Price updated
        // ID 10: Placa Madre Asus Prime X870-p Wifi
        { id: 10, name: 'Motherboard Asus Prime X870-p Wifi Amd Am5 Atx Ddr5 Pcie 5.0', category: 'Componentes de PC', brand: 'AMD', price: 210, originalPrice: 250, stock: 10, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.22.jpg', bestSeller: false, onSale: true }, // Price updated
        // ID 11: Placa Madre Gigabyte Amd A520m V2 D
        { id: 11, name: 'Motherboard Gigabyte Amd A520m V2 Ddr4 Gamer Colo Negro', category: 'Componentes de PC', brand: 'Gigabyte', price: 75, stock: 22, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.24.jpg', bestSeller: true, onSale: false }, // Price updated
        // ID 12: Disco Sólido
        { id: 12, name: 'Disco Sólido SSD Kingston A400 960GB', category: 'Componentes de PC', brand: 'Kingston', price: 70, stock: 14, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.28.jpg', bestSeller: false, onSale: false }, // Price updated
        // ID 13: Gabinete Gamer Thermaltake X4 Fans View 380 Tg Ar
        { id: 13, name: 'Gabinete Gamer Thermaltake X4 Fans View 380 Tg Argb Blanco', category: 'Componentes de PC', brand: 'Thermaltake', price: 110, stock: 28, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.30.jpg', bestSeller: false, onSale: false }, // Price updated
        // ID 14: Gabinete Gamer Cougar Duoface RGB e-ATX
        { id: 14, name: 'Gabinete Gamer Cougar Duoface RGB e-ATX', category: 'Componentes de PC', brand: 'Cougar', price: 95, stock: 17, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.32.jpg', bestSeller: false, onSale: false }, // Price updated
        // ID 15: Monitor
        { id: 15, name: 'Monitor Valkyrie Vh2410v2 200hz-144hz G-sync 24 1ms Ips Hdr', category: 'Periféricos', brand: 'Valkyrie', price: 160, stock: 20, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.35.jpg', bestSeller: false, onSale: false }, // Price updated
        // Nuevos productos adicionales
        // ID 16: Teclado
        { id: 16, name: 'Teclado Redragon Ucal Pro Wireless 75%', category: 'Periféricos', brand: 'Redragon', price: 70, originalPrice: 90, stock: 12, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.36.jpg', bestSeller: true, onSale: true }, // Price updated
        // ID 17: Placa de Video RTX 3070 Ti
        { id: 17, name: 'Placa De Video RTX 3070 Ti 8 GB Gddr6x', category: 'Componentes de PC', brand: 'NVIDIA', price: 450, stock: 8, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.24.57.jpg', bestSeller: false, onSale: false }, // Category unified, Price updated
        // ID 18: Procesador Gamer Ryzen 7 5700X
        { id: 18, name: 'Procesador Gamer Ryzen 7 5700X y 3.4ghz S/video', category: 'Componentes de PC', brand: 'AMD', price: 200, stock: 35, image: 'imagenes/WhatsApp Image 2025-06-05 at 10.25.38.jpg', bestSeller: false, onSale: false } // Category unified, Price updated
    ];

    let cartItems = []; // Array para almacenar los productos del carrito

    const productListDiv = document.getElementById('productList');
    const currentSectionTitle = document.getElementById('currentSectionTitle');
    const mainNav = document.getElementById('mainNav');
    const searchBar = document.getElementById('searchBar');
    const brandsDropdownContainer = document.getElementById('brandsDropdownContainer');

    // Elementos del DOM para el carrito
    const cartIcon = document.getElementById('cartIcon');
    const cartItemCountSpan = document.getElementById('cartItemCount');
    const shoppingCartDiv = document.getElementById('shoppingCart');
    const cartItemsListDiv = document.getElementById('cartItemsList');
    const cartTotalSpan = document.getElementById('cartTotal');
    const closeCartButton = document.getElementById('closeCartButton');
    const checkoutButton = document.getElementById('checkoutButton');
    const clearCartButton = document.getElementById('clearCartButton');

    // Helper function to create a product card HTML
    function createProductCardHtml(product) {
        let priceHtml = `<p class="price">$${product.price.toFixed(2)}</p>`;
        if (product.onSale && product.originalPrice) {
            priceHtml = `
                <p class="price">
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    $${product.price.toFixed(2)}
                </p>
            `;
        }

        const isOutOfStock = product.stock === 0;
        const quantityInputHtml = isOutOfStock ?
            `<input type="number" id="quantity-input-${product.id}" class="product-quantity" value="0" min="0" max="0" aria-label="Cantidad del producto ${product.name}" disabled>` :
            `<input type="number" id="quantity-input-${product.id}" class="product-quantity" value="1" min="1" max="${product.stock}" aria-label="Cantidad del producto ${product.name}">`;
        
        const addToCartButtonHtml = isOutOfStock ?
            `<button class="add-to-cart-btn" data-product-id="${product.id}" disabled>Sin Stock</button>` :
            `<button class="add-to-cart-btn" data-product-id="${product.id}">Añadir al Pedido</button>`;

        return `
            ${product.bestSeller ? '<span class="badge best-seller-badge">Más Vendido</span>' : ''}
            ${product.onSale ? '<span class="badge on-sale-badge">Oferta!</span>' : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Marca: ${product.brand}</p>
            <p>Categoría: ${product.category}</p>
            ${priceHtml}
            <p class="stock">Disponibles: ${product.stock > 0 ? product.stock : 'Agotado'}</p>
            <div class="product-interaction">
                <label for="quantity-input-${product.id}">Cantidad:</label>
                ${quantityInputHtml}
                ${addToCartButtonHtml}
            </div>
        `;
    }

    // Function to display products in a simple (flat) list
    function displayProductsSimple(filteredProducts) {
        productListDiv.innerHTML = ''; // Clear existing products
        currentSectionTitle.style.display = 'block';

        if (filteredProducts.length === 0) {
            productListDiv.innerHTML = '<p class="no-results">No se encontraron productos que coincidan con su búsqueda.</p>';
            return;
        }

        const productGrid = document.createElement('div');
        productGrid.classList.add('product-grid');

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.dataset.productId = product.id;
            productCard.innerHTML = createProductCardHtml(product);
            productGrid.appendChild(productCard);
        });
        productListDiv.appendChild(productGrid);
    }

    // Function to display products grouped by category for the home page
    function displayProductsGrouped(allProducts) {
        productListDiv.innerHTML = ''; // Clear existing products
        currentSectionTitle.style.display = 'none'; // Hide the main title on home view

        const categories = [...new Set(allProducts.map(p => p.category))].sort();

        categories.forEach(category => {
            const groupDiv = document.createElement('div');
            groupDiv.classList.add('product-group');

            const groupTitle = document.createElement('h2');
            groupTitle.classList.add('group-title');
            groupTitle.textContent = category;
            groupDiv.appendChild(groupTitle);

            const categoryProducts = allProducts.filter(p => p.category === category);
            
            const productGrid = document.createElement('div');
            productGrid.classList.add('product-grid');

            categoryProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.dataset.productId = product.id;
                productCard.innerHTML = createProductCardHtml(product);
                productGrid.appendChild(productCard);
            });
            groupDiv.appendChild(productGrid);
            productListDiv.appendChild(groupDiv);
        });
    }

    // --- Funciones del Carrito ---
    function saveCart() {
        localStorage.setItem('mercadoMundiCart', JSON.stringify(cartItems));
        updateCartIconCount();
    }

    function loadCart() {
        const storedCart = localStorage.getItem('mercadoMundiCart');
        if (storedCart) {
            cartItems = JSON.parse(storedCart);
        }
        renderCart(); // renderCart también llamará a updateCartIconCount
    }

    function updateCartIconCount() {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartItemCountSpan.textContent = totalItems;
    }

    function addToCart(productId, quantity) {
        const productInStore = products.find(p => p.id.toString() === productId);
        if (!productInStore) {
            console.error("Producto no encontrado:", productId);
            return;
        }

        if (isNaN(quantity) || quantity <= 0) {
            alert("La cantidad debe ser mayor que cero.");
            const productCardQuantityInput = document.getElementById(`quantity-input-${productId}`);
            if (productCardQuantityInput) productCardQuantityInput.value = 1;
            return;
        }

        // Si el producto está agotado, no permitir añadir al carrito desde la tarjeta.
        if (productInStore.stock === 0) {
            alert(`Lo sentimos, ${productInStore.name} está actualmente agotado.`);
            return;
        }

        if (quantity > productInStore.stock) {
            alert(`Lo sentimos, solo quedan ${productInStore.stock} unidades de ${productInStore.name}. No puedes añadir ${quantity}.`);
            const productCardQuantityInput = document.getElementById(`quantity-input-${productId}`);
            if (productCardQuantityInput) productCardQuantityInput.value = productInStore.stock > 0 ? Math.min(1, productInStore.stock) : 1; // Reset or set to available stock
            return;
        }

        // Disminuir stock en el array principal de productos
        productInStore.stock -= quantity;

        // Actualizar o añadir al carrito
        const existingItem = cartItems.find(item => item.id.toString() === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            // Añadir una copia con los detalles necesarios para el carrito
            cartItems.push({ 
                id: productInStore.id, 
                name: productInStore.name, 
                price: productInStore.price, 
                image: productInStore.image,
                // Puedes añadir más propiedades si las usas en la renderización del carrito
                // originalPrice: productInStore.originalPrice, 
                // brand: productInStore.brand, 
                quantity: quantity 
            });
        }
        alert(`Añadido al pedido: ${quantity} x ${productInStore.name}`);
        saveCart();
        renderCart();
        // Re-renderizar la vista actual para reflejar cambios de stock en las tarjetas de producto
        if (window.currentViewParams) {
            updateView(window.currentViewParams.section, window.currentViewParams.value);
        } else {
            updateView('home'); 
        }
    }

    function renderCart() {
        cartItemsListDiv.innerHTML = ''; 
        if (cartItems.length === 0) {
            cartItemsListDiv.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío.</p>';
            cartTotalSpan.textContent = '$0.00';
            if(checkoutButton) checkoutButton.disabled = true;
            if(clearCartButton) clearCartButton.disabled = true;
            updateCartIconCount(); // Asegura que el contador del ícono se actualice
            return;
        }

        if(checkoutButton) checkoutButton.disabled = false;
        if(clearCartButton) clearCartButton.disabled = false;
        let total = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.dataset.productId = item.id;

            const productInStoreForCartItem = products.find(p => p.id === item.id);
            const maxQuantityInCart = item.quantity + (productInStoreForCartItem ? productInStoreForCartItem.stock : 0);

            const subtotal = item.price * item.quantity;
            total += subtotal;
            
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price ? item.price.toFixed(2) : 'N/A'} x ${item.quantity} = $${subtotal.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <input type="number" class="quantity-input cart-quantity-input" value="${item.quantity}" min="1" max="${maxQuantityInCart}" data-product-id="${item.id}" aria-label="Cantidad de ${item.name} en el carrito">
                    <button class="remove-item-btn" data-product-id="${item.id}" aria-label="Eliminar ${item.name} del carrito">&times;</button>
                </div>
            `;
            cartItemsListDiv.appendChild(itemElement);
        });

        cartTotalSpan.textContent = `$${total.toFixed(2)}`;
        updateCartIconCount();
    }

    function updateCartItemQuantity(productId, newQuantity) {
        const itemIndex = cartItems.findIndex(i => i.id.toString() === productId);
        if (itemIndex === -1) return;
        
        const itemInCart = cartItems[itemIndex];
        const productInStore = products.find(p => p.id.toString() === productId); 

        if (!productInStore) {
            console.error("Definición del producto no encontrada para el artículo del carrito:", productId);
            const inputField = cartItemsListDiv.querySelector(`.cart-quantity-input[data-product-id="${productId}"]`);
            if (inputField) inputField.value = itemInCart.quantity;
            return;
        }

        const originalCartQuantity = itemInCart.quantity;
        newQuantity = parseInt(newQuantity);

        if (isNaN(newQuantity)) {
             const inputField = cartItemsListDiv.querySelector(`.cart-quantity-input[data-product-id="${productId}"]`);
             if (inputField) inputField.value = originalCartQuantity;
             return;
        }

        if (newQuantity <= 0) {
            removeFromCart(productId); // Esto ya maneja el stock y re-renderiza
            return;
        }

        const quantityDifference = newQuantity - originalCartQuantity;

        if (quantityDifference > 0) { // Aumentando cantidad
            if (quantityDifference > productInStore.stock) {
                alert(`Solo puedes añadir ${productInStore.stock} unidades más de ${productInStore.name}. (Tienes ${originalCartQuantity} en carrito y quedan ${productInStore.stock} en stock).`);
                const inputField = cartItemsListDiv.querySelector(`.cart-quantity-input[data-product-id="${productId}"]`);
                if (inputField) inputField.value = originalCartQuantity; 
                return;
            }
            productInStore.stock -= quantityDifference;
        } else if (quantityDifference < 0) { // Disminuyendo cantidad
            productInStore.stock += Math.abs(quantityDifference);
        }

        itemInCart.quantity = newQuantity;
        
        saveCart();
        renderCart(); // Re-renderiza el carrito, actualizando los 'max' de los inputs
        // Re-renderizar la vista principal de productos
        if (window.currentViewParams) {
            updateView(window.currentViewParams.section, window.currentViewParams.value);
        } else {
            updateView('home');
        }
    }

    function removeFromCart(productId) {
        const itemIndex = cartItems.findIndex(item => item.id.toString() === productId);
        if (itemIndex === -1) return;

        const itemToRemove = cartItems[itemIndex];
        const productInStore = products.find(p => p.id.toString() === productId);

        if (productInStore) {
            productInStore.stock += itemToRemove.quantity; // Devolver stock
        } else {
            console.warn(`Producto con ID ${productId} no encontrado al intentar reponer stock.`);
        }

        cartItems.splice(itemIndex, 1); // Eliminar del carrito
        
        saveCart();
        renderCart();
        // Re-renderizar la vista principal de productos
        if (window.currentViewParams) {
            updateView(window.currentViewParams.section, window.currentViewParams.value);
        } else {
            updateView('home');
        }
    }
    // --- Fin Funciones del Carrito ---

    // Variable global para almacenar los parámetros de la vista actual
    window.currentViewParams = { section: 'home', value: '' };

    // Function to update the main view based on section and value
    function updateView(section, value = '') {
        window.currentViewParams = { section, value }; // Almacena la vista actual

        let filteredProducts = [];
        let title = '';

        if (section === 'home') {
            displayProductsGrouped(products);
            currentSectionTitle.textContent = 'Mercado Mundi'; // Default home title
            currentSectionTitle.style.display = 'block'; // Ensure it's shown if coming from other sections
            currentSectionTitle.dataset.currentSection = 'home'; 
            currentSectionTitle.dataset.currentValue = '';
            return; // Exit early as home has special grouping
        }

        switch (section) {
            case 'category':
                filteredProducts = products.filter(p => p.category === value);
                title = `Categoría: ${value}`;
                break;
            case 'brand':
                filteredProducts = products.filter(p => p.brand === value);
                title = `Marca: ${value}`;
                break;
            case 'search':
                if (value.trim() === '') {
                    // If search is cleared, go back to home view
                    updateView('home');
                    return; 
                } else {
                    const searchTerm = value.toLowerCase();
                    filteredProducts = products.filter(p =>
                        p.name.toLowerCase().includes(searchTerm) ||
                        p.brand.toLowerCase().includes(searchTerm) ||
                        p.category.toLowerCase().includes(searchTerm)
                    );
                    title = `Resultados para "${value}"`;
                }
                break;
            default:
                filteredProducts = products; // Should ideally not be reached if initial 'home' is handled
                title = 'Todos nuestros productos';
                break;
        }

        currentSectionTitle.textContent = title;
        currentSectionTitle.dataset.currentSection = section; 
        currentSectionTitle.dataset.currentValue = value;
        displayProductsSimple(filteredProducts); // Use simple display for filtered views
    }

    // Function to populate the brands dropdown
    function populateBrandsDropdown() {
        const brands = [...new Set(products.map(p => p.brand))].sort(); // Get unique brands and sort
        brandsDropdownContainer.innerHTML = '';
        brands.forEach(brand => {
            const brandLink = document.createElement('a');
            brandLink.href = '#';
            brandLink.textContent = brand;
            brandLink.dataset.section = 'brand';
            brandLink.dataset.value = brand;
            brandsDropdownContainer.appendChild(brandLink);
        });
    }

    // Event listeners for navigation (event delegation)
    mainNav.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'A' && target.closest('.dropdown-content')) {
            // Click on a dropdown item (brand)
            event.preventDefault(); 
            updateView(target.dataset.section, target.dataset.value);
        } else if (target.tagName === 'A' && target.dataset.section) {
            // Click on a main navigation item (home, category)
            event.preventDefault();
            // Special handling for "Componentes" to ensure it shows "Componentes de PC"
            if (target.dataset.section === 'category' && target.dataset.value === 'Componentes') {
                updateView('category', 'Componentes de PC');
            } else {
                updateView(target.dataset.section, target.dataset.value);
            }
        }
    });

    // Event listener for the search bar
    searchBar.addEventListener('input', (event) => {
        updateView('search', event.target.value);
    });

    // Event listener for "Add to Cart" buttons using event delegation on the <main> element
    document.querySelector('main').addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productId = event.target.dataset.productId;
            const quantityInput = document.getElementById(`quantity-input-${productId}`);
            let quantity = quantityInput ? parseInt(quantityInput.value) : 1;

            if (isNaN(quantity) || quantity < 1) {
                alert("Por favor, introduce una cantidad válida.");
                if(quantityInput) quantityInput.value = 1; // Reset to 1
                quantity = 1; // Default to 1 if invalid
            }
            addToCart(productId, quantity);
        }
    });

    // --- Event Listeners para el Carrito ---
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            shoppingCartDiv.classList.toggle('open');
        });
    }
    // Si solo el contador es clickeable (en caso de que el ícono no se cargue)
    if (cartItemCountSpan && !cartIcon) { 
         cartItemCountSpan.addEventListener('click', () => {
            shoppingCartDiv.classList.toggle('open');
        });
    }

    if (closeCartButton) {
        closeCartButton.addEventListener('click', () => {
            shoppingCartDiv.classList.remove('open');
        });
    }

    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            if (cartItems.length > 0 && confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
                // Restaurar stock para cada artículo en el carrito
                cartItems.forEach(cartItem => {
                    const productInStore = products.find(p => p.id === cartItem.id);
                    if (productInStore) {
                        productInStore.stock += cartItem.quantity;
                    }
                });

                cartItems = [];
                saveCart(); // Guarda el carrito vacío y actualiza el contador del ícono
                renderCart(); // Renderiza la UI del carrito vacío

                // Re-renderizar la vista principal de productos para reflejar el stock restaurado
                if (window.currentViewParams) {
                    updateView(window.currentViewParams.section, window.currentViewParams.value);
                } else {
                    updateView('home');
                }
            }
        });
    }

    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (cartItems.length === 0) {
                alert('Tu carrito está vacío.');
                return;
            }
            
            let orderSummary = "Resumen del Pedido:\n";
            let totalAmount = 0;
            cartItems.forEach(item => {
                orderSummary += `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n`;
                totalAmount += item.price * item.quantity;
            });
            orderSummary += `\nTotal: $${totalAmount.toFixed(2)}`;

            // La actualización de stock ya se hace en tiempo real al añadir/modificar/eliminar del carrito.
            alert(`¡Gracias por tu compra!\n${orderSummary}\n\nEl stock de los productos ya fue actualizado.`);
            
            // Vaciar carrito
            cartItems = [];
            saveCart();
            renderCart(); // Actualiza la vista del carrito (debería estar vacío)
            
            // Re-renderiza la vista actual de productos para reflejar los cambios de stock
            if (window.currentViewParams) {
                 updateView(window.currentViewParams.section, window.currentViewParams.value);
            } else {
                 updateView('home'); // Fallback a la página de inicio
            }

            shoppingCartDiv.classList.remove('open'); // Cierra el carrito después de "finalizar compra"
        });
    }

    // Delegación de eventos para acciones dentro de los artículos del carrito
    if (cartItemsListDiv) {
        cartItemsListDiv.addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-item-btn')) {
                const productId = event.target.dataset.productId;
                removeFromCart(productId);
            }
        });

        cartItemsListDiv.addEventListener('change', (event) => { // 'change' se dispara cuando el input pierde el foco o se presiona Enter
            if (event.target.classList.contains('cart-quantity-input')) {
                const productId = event.target.dataset.productId;
                const newQuantity = parseInt(event.target.value);
                updateCartItemQuantity(productId, newQuantity);
            }
        });

        cartItemsListDiv.addEventListener('input', (event) => { // 'input' para feedback inmediato al teclear
            if (event.target.classList.contains('cart-quantity-input')) {
                // Validar mientras se escribe para no exceder el stock total posible
                const productId = event.target.dataset.productId;
                const itemInCart = cartItems.find(i => i.id.toString() === productId);
                const productInStore = products.find(p => p.id.toString() === productId);

                if (itemInCart && productInStore) {
                    const currentValInInput = parseInt(event.target.value);
                    if (isNaN(currentValInInput) && event.target.value !== "") return; // Permite campo vacío o entrada inválida temporalmente

                    // Máximo que puede tener en el carrito = lo que ya tiene + lo que queda en tienda
                    const maxAllowedInCart = itemInCart.quantity + productInStore.stock; 

                    if (currentValInInput > maxAllowedInCart) {
                        event.target.value = maxAllowedInCart;
                        // No alertar en 'input' para no ser molesto, 'change' lo manejará.
                    } else if (currentValInInput < 1 && event.target.value !== "") { 
                        event.target.value = 1; 
                    }
                }
            }
        });
    }
    // --- Fin Event Listeners para el Carrito ---

    // Initial setup
    populateBrandsDropdown();
    loadCart(); // Carga el carrito desde localStorage al iniciar
    updateView('home'); // Muestra la vista de inicio por defecto
});