// === DOM Elements ===
const toggleFilterBtn = document.getElementById('toggleFilterBtn');
const productFilter = document.getElementById('productFilter');
const colorSwatchesFilter = document.querySelectorAll('.filter-section .color-circle');
const sizeButtonsFilter = document.querySelectorAll('.filter-section .size-btn');
const collectionButtonsFilter = document.querySelectorAll('.filter-section .collection-btn');
const productsContainer = document.getElementById('productsContainer');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const filterToggleBtn = document.getElementById('filter-btn');
const filterContainer = document.getElementById('filterContainer');
const closeFilterBtn = document.getElementById('close-btn');
const clearFilterBtn = document.getElementById('clear-btn');
const applyFilterBtn = document.getElementById('apply-btn');
const userInfo = document.querySelector('.user-info');
// DOM cho thanh tìm kiếm
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchContainer = document.querySelector('.search-box');
// Global variables for cart state
let cartItems = [];
let cartCount = 0;
// DOM elements
const cartIconBtn = document.querySelector('.cart-icon');
const successPopup = document.getElementById('addToCartToast');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const totalPriceEl = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');

// === Product Data ===
const products = [
    {
        id: 1,
        title: "Kindy Set",
        vendor: "RECHIC",
        price: 950000,
        priceStr: "950.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2024/12/9_12514ef6184c46b9929c7696009c4828-768x1024.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2024/12/11_9b7107885d474c7a88d2e493a248c5c2-768x1024.jpg"],
        colors: ["#FFFFFF", "#000000"],
        stock: true,
        sizes: { S: true, M: true, L: false, XL: true },
        description: "Bộ Kindy Set mang đến vẻ đẹp năng động, trẻ trung mà không kém phần thanh lịch, là lựa chọn hoàn hảo cho những buổi dạo phố cuối tuần."
    },
    {
        id: 2,
        title: "Zuli Set",
        vendor: "RECHIC",
        price: 1350000,
        priceStr: "1.350.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2024/12/1_f3d15fd8162b4d05a2c01545e27cdb11-768x890.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2024/12/4_e7fcab90bb9444fb95027af7c96b26c6.jpg"],
        colors: ["#696969"],
        stock: true,
        sizes: { S: true, M: true, L: true, XL: false },
        description: "Zuli Set là sự kết hợp tinh tế giữa áo và chân váy, với chất liệu cao cấp và kiểu dáng ôm sát, tôn vinh vóc dáng quý phái, kiêu sa của nàng tiểu thư."
    },
    {
        id: 3,
        title: "Eristi Short",
        vendor: "RECHIC",
        price: 700000,
        priceStr: "700.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/04/41_5307aafcc2e14dc7b3afa02b939ef777-768x1024.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/04/40_ec47b1fa347341df8bf44dbc049687c8.jpg"],
        colors: ["#808080"],
        stock: false,
        sizes: { S: true, M: true, L: false, XL: false },
        description: "Quần short Eristi được thiết kế độc đáo, phù hợp với phong cách tiểu thư năng động, mang đến sự thoải mái mà vẫn giữ được nét sang trọng."
    },
    {
        id: 4,
        title: "Carla Set",
        vendor: "RECHIC",
        price: 1100000,
        priceStr: "1.100.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/03/50.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/03/52.jpg"],
        colors: ["#ADD8E6", "#FFFFFF"],
        stock: true,
        sizes: { S: true, M: false, L: true, XL: true },
        description: "Carla Set với tông màu pastel dịu nhẹ, thiết kế nữ tính, là lựa chọn lý tưởng cho những quý cô yêu thích vẻ đẹp thanh lịch, cổ điển nhưng vẫn hợp thời trang."
    },
    {
        id: 5,
        title: "Cheryl Top",
        vendor: "RECHIC",
        price: 650000,
        priceStr: "650.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/135.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/23_a63a9f0e1e274327adcd79b55f8ad93b.jpg"],
        colors: ["#FFFFFF"],
        stock: true,
        sizes: { S: false, M: true, L: true, XL: true },
        description: "Áo Cheryl Top mang phong cách casual, nhưng với họa tiết tinh tế, giúp bạn dễ dàng phối đồ để có một vẻ ngoài trẻ trung và cuốn hút."
    },
    {
        id: 6,
        title: "Artemis Top",
        vendor: "RECHIC",
        price: 850000,
        priceStr: "850.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/149.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2024/12/4_0e3ecf523c914e6b91c8558a2f7c0065.jpg"],
        colors: ["#D2B48C"],
        stock: true,
        sizes: { S: true, M: true, L: true, XL: true },
        description: "Áo Artemis Top với thiết kế peplum độc đáo, tôn lên vòng eo thon gọn, mang đến vẻ ngoài sang trọng, quý phái cho các buổi tiệc hoặc sự kiện đặc biệt."
    },
    {
        id: 7,
        title: "Artemis Skirt",
        vendor: "RECHIC",
        price: 900000,
        priceStr: "900.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/134.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/9_e66734d49d1c48d6aa0154d2b398059d.jpg"],
        colors: ["#808080"],
        stock: false,
        sizes: { S: true, M: true, L: false, XL: false },
        description: "Chân váy Artemis Skirt với chất liệu vải tuýt cổ điển, tạo nên phong cách quý tộc, là mảnh ghép hoàn hảo cho set đồ công sở sang trọng."
    },
    {
        id: 8,
        title: "Aboli Top",
        vendor: "RECHIC",
        price: 750000,
        priceStr: "750.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/153.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/150.jpg"],
        colors: ["#ADD8E6"],
        stock: true,
        sizes: { S: true, M: true, L: true, XL: true },
        description: "Áo Aboli Top với chi tiết bèo nhún và tay áo phồng, mang lại vẻ ngoài lãng mạn, ngọt ngào, đậm chất tiểu thư."
    },
    {
        id: 9,
        title: "Aster Top",
        vendor: "RECHIC",
        price: 800000,
        priceStr: "800.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/5-3.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/7-3.jpg"],
        colors: ["#8B0000", "#FFFFFF"],
        stock: true,
        sizes: { S: true, M: true, L: true, XL: true },
        description: "Áo Aster Top với họa tiết kẻ sọc độc đáo, phối cùng áo sơ mi trắng, tạo nên một phong cách preppy hiện đại, trẻ trung và thanh lịch."
    },
    {
        id: 10,
        title: "Lydia Dress",
        vendor: "RECHIC",
        price: 1450000,
        priceStr: "1.450.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/155.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/156.jpg"],
        colors: ["#000000"],
        stock: true,
        sizes: { S: true, M: true, L: true, XL: false },
        description: "Đầm Lydia với thiết kế tối giản, sang trọng, cùng chi tiết nếp gấp tinh tế, là sự lựa chọn không thể thiếu cho các quý cô yêu thích vẻ đẹp vượt thời gian."
    },
    {
        id: 11,
        title: "Keira Top",
        vendor: "RECHIC",
        price: 700000,
        priceStr: "700.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/46.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/48.jpg"],
        colors: ["#8B0000"],
        stock: true,
        sizes: { S: true, M: true, L: true, XL: true },
        description: "Áo Keira Top mang màu sắc nổi bật, cùng kiểu dáng đơn giản nhưng thanh thoát, giúp nàng trở thành tâm điểm của mọi ánh nhìn."
    },
    {
        id: 12,
        title: "Earl Dress",
        vendor: "RECHIC",
        price: 1200000,
        priceStr: "1.200.000₫",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/36_8d75da2a67354eb5aa07b10fd899305b.png",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/37_c320e2df16074fbfafd9db4b81d64a23.png"],
        colors: ["#FFC0CB"],
        stock: false,
        sizes: { S: true, M: false, L: true, XL: false },
        description: "Đầm Earl Dress màu hồng pastel với chất liệu mềm mại, ôm sát cơ thể, là biểu tượng của sự nữ tính, ngọt ngào và quyến rũ."
    }
];
const productsPerPage = 8;
let currentPage = 1;
const allPrices = products.map(p => p.price);
const minProductPrice = Math.min(...allPrices);
const maxProductPrice = Math.max(...allPrices);
let currentMinPrice = minProductPrice;
let currentMaxPrice = maxProductPrice;
let selectedColors = [];
let selectedSizes = [];
let selectedCollections = [];
let searchQuery = '';

// === Filter Functions ===
function updatePriceInputs() {
    const minInput = document.getElementById('minPriceInput');
    const maxInput = document.getElementById('maxPriceInput');
    if (minInput) minInput.value = currentMinPrice;
    if (maxInput) maxInput.value = currentMaxPrice;
}
function updatePriceRange() {
    const rangeInput = document.querySelectorAll('.range-input input');
    const priceInput = document.querySelectorAll('.price-input input');
    const progress = document.querySelector('.slider .progress');
    const priceGap = 10000;
    rangeInput.forEach(input => {
        input.addEventListener('input', e => {
            let minVal = parseInt(rangeInput[0].value);
            let maxVal = parseInt(rangeInput[1].value);
            if ((maxVal - minVal) < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap;
                    minVal = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                    maxVal = minVal + priceGap;
                }
            }
            currentMinPrice = minVal;
            currentMaxPrice = maxVal;
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            updateProgress(minVal, maxVal);
        });
    });
    priceInput.forEach(input => {
        input.addEventListener("input", e => {
            let minPrice = parseInt(priceInput[0].value);
            let maxPrice = parseInt(priceInput[1].value);
            if ((maxPrice - minPrice >= priceGap) && maxPrice <= maxProductPrice) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                    currentMinPrice = minPrice;
                } else {
                    rangeInput[1].value = maxPrice;
                    currentMaxPrice = maxPrice;
                }
                updateProgress(currentMinPrice, currentMaxPrice);
            }
        });
    });
    function updateProgress(minVal, maxVal) {
        if (progress) {
            progress.style.left = ((minVal - minProductPrice) / (maxProductPrice - minProductPrice)) * 100 + "%";
            progress.style.right = 100 - ((maxVal - minProductPrice) / (maxProductPrice - minProductPrice)) * 100 + "%";
        }
    }
}
// === Product Rendering ===
function renderProducts() {
    productsContainer.innerHTML = '';
    const filteredProducts = products.filter(product => {
        const isPriceMatch = product.price >= currentMinPrice && product.price <= currentMaxPrice;
        const isColorMatch = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
        const isSizeMatch = selectedSizes.length === 0 || Object.entries(product.sizes).some(([size, available]) => available && selectedSizes.includes(size));
        const isCollectionMatch = selectedCollections.length === 0 || selectedCollections.includes(product.vendor);
        const isSearchMatch = !searchQuery || 
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return isPriceMatch && isColorMatch && isSizeMatch && isCollectionMatch && isSearchMatch;
    });
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = filteredProducts.slice(start, end);
    let allModalsHTML = '';
    if (productsToShow.length === 0) {
        productsContainer.innerHTML = '<p class="no-products-message">Không tìm thấy sản phẩm nào phù hợp với bộ lọc hoặc tìm kiếm.</p>';
    } else {
        productsToShow.forEach(product => {
            const sizesAvailable = Object.entries(product.sizes)
                .filter(([size, available]) => available)
                .map(([size]) => size)
                .join(' / ');
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.img}" alt="${product.title}" />
                <div class="sizes-overlay">${sizesAvailable}</div>
                <button class="details-btn" data-id="${product.id}">Xem chi tiết</button>
            `;
            productsContainer.appendChild(card);
            allModalsHTML += `
                <div class="modal modal-fullscreen fade" id="productModal-${product.id}" tabindex="-1" aria-labelledby="productModalLabel-${product.id}" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                            <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-carousel">
                                ${createCarouselHTML(product)}
                            </div>
                            <div class="modal-details">
                                <div class="product-title-modal" id="modalTitle-${product.id}">${product.title}</div>
                                <div class="product-price-modal" id="modalPrice-${product.id}">${product.priceStr} VNĐ</div>
                                <div>Màu sắc</div>
                                <div class="color-options" id="modalColors-${product.id}">${createColorButtons(product)}</div>
                                <div>Kích thước</div>
                                <div class="size-options" id="modalSizes-${product.id}">${createSizeButtons(product)}</div>
                                <div class="quantity-selector">
                                    <span>Số lượng</span>
                                    <button class="quantity-btn qtyMinus" data-id="${product.id}">-</button>
                                    <input type="text" class="quantity-input qtyInput" data-id="${product.id}" value="1" readonly>
                                    <button class="quantity-btn qtyPlus" data-id="${product.id}">+</button>
                                </div>
                                <div class="action-buttons">
                                    <button class="action-btn" id="addToCartBtn-${product.id}" data-id="${product.id}">Thêm vào giỏ hàng</button>
                                    <button class="action-btn primary" id="buyNowBtn-${product.id}" data-id="${product.id}">Mua ngay</button>
                                </div>
                                <div class="product-description-modal" id="modalDescription-${product.id}">
                                    ${product.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    const modalContainer = document.getElementById('modalContainer') || (() => {
        const div = document.createElement('div');
        div.id = 'modalContainer';
        document.body.appendChild(div);
        return div;
    })();
    modalContainer.innerHTML = allModalsHTML;
    prevPageBtn.textContent = `Trang ${currentPage - 1 > 0 ? currentPage - 1 : 1}`;
    nextPageBtn.textContent = ` Trang ${currentPage + 1 > totalPages ? totalPages : currentPage + 1}`;
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;
    attachEventListeners();
    // Hiệu ứng fade-in cho kết quả
    productsContainer.style.opacity = 0;
    setTimeout(() => {
        productsContainer.style.transition = 'opacity 0.5s ease-in-out';
        productsContainer.style.opacity = 1;
    }, 100);
}
// === Helper Functions ===
function createCarouselHTML(product) {
    let carouselIndicators = '';
    let carouselInner = '';
    product.images.forEach((src, idx) => {
        carouselIndicators += `<button type="button" data-bs-target="#modalCarousel-${product.id}" data-bs-slide-to="${idx}" class="${idx === 0 ? 'active' : ''}" aria-label="Slide ${idx + 1}"></button>`;
        carouselInner += `<div class="carousel-item ${idx === 0 ? 'active' : ''}"><img src="${src}" class="d-block w-100" alt="${product.title} image ${idx + 1}"></div>`;
    });
    return `
        <div id="modalCarousel-${product.id}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">${carouselIndicators}</div>
            <div class="carousel-inner">${carouselInner}</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#modalCarousel-${product.id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Trước</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#modalCarousel-${product.id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Sau</span>
            </button>
        </div>
    `;
}
function createColorButtons(product) {
    return product.colors.map((color, index) => {
        return `<div class="color-circle ${index === 0 ? 'selected' : ''}" style="background-color: ${color};" data-color="${color}" data-id="${product.id}"></div>`;
    }).join('');
}
function createSizeButtons(product) {
    return Object.entries(product.sizes)
        .filter(([size, available]) => available)
        .map(([size], index) => `<button type="button" class="size-btn ${index === 0 ? 'selected' : ''}" data-size="${size}" data-id="${product.id}">${size}</button>`)
        .join('');
}
// === Event Listeners ===
function attachEventListeners() {
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const productModal = new bootstrap.Modal(document.getElementById(`productModal-${id}`));
            productModal.show();
        });
    });
    document.querySelectorAll('.qtyMinus').forEach(btn => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            const input = document.querySelector(`.qtyInput[data-id="${id}"]`);
            let val = parseInt(input.value) || 1;
            if (val > 1) {
                input.value = val - 1;
            }
        };
    });
    document.querySelectorAll('.qtyPlus').forEach(btn => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            const input = document.querySelector(`.qtyInput[data-id="${id}"]`);
            let val = parseInt(input.value) || 1;
            input.value = val + 1;
        };
    });
    document.querySelectorAll('.modal .color-circle').forEach(btn => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            document.querySelectorAll(`.modal .color-circle[data-id="${id}"]`).forEach(c => c.classList.remove('selected'));
            btn.classList.add('selected');
        };
    });
    document.querySelectorAll('.modal .size-btn').forEach(btn => {
        btn.onclick = () => {
            const id = btn.dataset.id;
            document.querySelectorAll(`.modal .size-btn[data-id="${id}"]`).forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        };
    });
    document.querySelectorAll('[id^="addToCartBtn-"]').forEach(btn => {
        btn.onclick = () => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            const modalBody = document.getElementById(`productModal-${id}`);
            const qty = parseInt(modalBody.querySelector(`.qtyInput[data-id="${id}"]`).value);
            const selectedColor = modalBody.querySelector(`.color-circle.selected[data-id="${id}"]`)?.dataset.color || '#000000';
            const selectedSize = modalBody.querySelector(`.size-btn.selected[data-id="${id}"]`)?.dataset.size || 'M';
            const existingItem = cartItems.find(item => item.id === product.id && item.size === selectedSize && item.color === selectedColor);
            if (existingItem) {
                existingItem.quantity += qty;
            } else {
                cartItems.push({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image: product.img,
                    size: selectedSize,
                    color: selectedColor,
                    quantity: qty
                });
            }
            updateCartDisplay();
            const toast = new bootstrap.Toast(successPopup);
            toast.show();
        };
    });
    document.querySelectorAll('[id^="buyNowBtn-"]').forEach(btn => {
        btn.onclick = () => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            const modalBody = document.getElementById(`productModal-${id}`);
            const qty = modalBody.querySelector(`.qtyInput[data-id="${id}"]`).value;
            const selectedColor = modalBody.querySelector(`.color-circle.selected[data-id="${id}"]`)?.dataset.color || 'N/A';
            const selectedSize = modalBody.querySelector(`.size-btn.selected[data-id="${id}"]`)?.dataset.size || 'N/A';
            showBuyNowModal(product, qty, selectedColor, selectedSize);
        };
    });
}
// === New Functions for Combined Modal ===
function showBuyNowModal(product, quantity, color, size) {
    const existingModal = document.getElementById('buyNowStepModal');
    if (existingModal) {
        existingModal.remove();
    }
    const modalHTML = `
        <div class="modal fade" id="buyNowStepModal" tabindex="-1" aria-labelledby="buyNowStepModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content horizontal-steps">
                    <div id="step1" class="step-content">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="step-header">
                        </div>
                        <div class="step-body horizontal-body">
                            <div class="order-summary-left">
                                <img src="${product.img}" alt="${product.title}" class="order-item-img">
                                <div class="product-details">
                                    <p><strong>${product.title}</strong></p>
                                    <p>Màu: <span style="background-color: ${color}; display: inline-block; width: 15px; height: 15px; border: 1px solid #ccc; vertical-align: middle;"></span></p>
                                    <p>Kích thước: ${size}</p>
                                    <p>Số lượng: ${quantity}</p>
                                    <p class="product-price">${product.priceStr}</p>
                                    <p class="total-price"><strong>Tổng tiền: ${(product.price * quantity).toLocaleString('vi-VN')}₫</strong></p>
                                </div>
                            </div>
                            <div class="customer-info-right">
                                <form id="customerInfoForm" class="row g-3">
                                    <h5 class="w-100">Thông tin khách hàng</h5>
                                    <div class="col-md-6">
                                        <label for="customerName" class="form-label">Họ và tên</label>
                                        <input type="text" class="form-control" id="customerName" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="customerPhone" class="form-label">Số điện thoại</label>
                                        <input type="tel" class="form-control" id="customerPhone" required>
                                    </div>
                                    <div class="col-12">
                                        <label for="customerAddress" class="form-label">Địa chỉ</label>
                                        <input type="text" class="form-control" id="customerAddress" required>
                                    </div>
                                </form>
                                <div class="payment-section mt-4">
                                    <h5 class="w-100">Phương thức thanh toán</h5>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="paymentMethod" id="paymentCod" value="COD" checked>
                                        <label class="form-check-label" for="paymentCod">
                                            Thanh toán khi nhận hàng (COD)
                                        </label>
                                    </div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="radio" name="paymentMethod" id="paymentBank" value="Bank">
                                        <label class="form-check-label" for="paymentBank">
                                            Chuyển khoản
                                        </label>
                                    </div>
                                    <div id="qrCodeOptions" class="qr-code-options mt-2" style="display: none;">
                                        <p>Chọn ví điện tử để thanh toán:</p>
                                        <div class="payment-options d-flex gap-3">
                                            <div class="payment-option text-center">
                                                <img src="https://homepage.momocdn.net/blogscontents/momo-upload-api-220808102122-637955508824191258.png" alt="Momo QR" data-target="momo-qr">
                                                <span>Momo</span>
                                            </div>
                                            <div class="payment-option text-center">
                                                <img src="https://simg.zalopay.com.vn/zlp-website/assets/1_icon_e5ec4564e3.png" alt="ZaloPay QR" data-target="zalopay-qr">
                                                <span>ZaloPay</span>
                                            </div>
                                            <div class="payment-option text-center">
                                                <img src="https://kalite.vn/wp-content/uploads/2021/09/maqrkalite.jpg" alt="VNPay QR" data-target="vnpay-qr">
                                                <span>VNPay</span>
                                            </div>
                                        </div>
                                        <div id="qrCodeDisplay" class="text-center mt-3">
                                            <p class="text-muted">Mã QR sẽ hiển thị tại đây sau khi bạn chọn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="step-footer">
                            <button type="button" class="btn btn-primary" id="confirmPaymentBtn">Xác nhận mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="paymentSuccessModal" tabindex="-1" aria-labelledby="paymentSuccessModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="paymentSuccessModalLabel">MUA HÀNG</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p>MUA HÀNG THÀNH CÔNG!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const buyNowModal = new bootstrap.Modal(document.getElementById('buyNowStepModal'));
    buyNowModal.show();
    document.getElementById('confirmPaymentBtn').addEventListener('click', () => {
        const form = document.getElementById('customerInfoForm');
        if (form.checkValidity()) {
            buyNowModal.hide();
            cartItems = []; // Clear cart after successful purchase
            updateCartDisplay();
            const successModal = new bootstrap.Modal(document.getElementById('paymentSuccessModal'));
            successModal.show();
        } else {
            form.reportValidity();
        }
    });
    const paymentBankRadio = document.getElementById('paymentBank');
    const qrCodeOptions = document.getElementById('qrCodeOptions');
    if (paymentBankRadio && qrCodeOptions) {
        paymentBankRadio.addEventListener('change', (e) => {
            if (e.target.checked) {
                qrCodeOptions.style.display = 'block';
            }
        });
    }
    const paymentCodRadio = document.getElementById('paymentCod');
    if (paymentCodRadio && qrCodeOptions) {
        paymentCodRadio.addEventListener('change', (e) => {
            if (e.target.checked) {
                qrCodeOptions.style.display = 'none';
            }
        });
    }
    document.querySelectorAll('.payment-option img').forEach(img => {
        img.addEventListener('click', (e) => {
            const qrTarget = e.target.dataset.target;
            let qrCodeSrc = '';
            if (qrTarget === 'momo-qr') {
                qrCodeSrc = 'https://example.com/momo-qr.jpg'; // Replace with actual Momo QR .jpg URL
            } else if (qrTarget === 'zalopay-qr') {
                qrCodeSrc = 'https://example.com/zalopay-qr.jpg'; // Replace with actual ZaloPay QR .jpg URL
            } else if (qrTarget === 'vnpay-qr') {
                qrCodeSrc = 'https://example.com/vnpay-qr.jpg'; // Replace with actual VNPay QR .jpg URL
            }
            const qrCodeDisplay = document.getElementById('qrCodeDisplay');
            if (qrCodeDisplay) {
                qrCodeDisplay.innerHTML = `<p>Quét mã QR để thanh toán:</p><img src="${qrCodeSrc}" alt="Mã QR thanh toán" class="qr-code-img" style="width: 200px; height: 200px;">`;
            }
            document.querySelectorAll('.payment-option').forEach(option => option.classList.remove('selected'));
            e.target.closest('.payment-option').classList.add('selected');
        });
    });
}
// Xử lý thanh toán từ giỏ hàng
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cartItems.length > 0) {
            showBuyNowModalFromCart();
        } else {
            alert('Giỏ hàng của bạn đang trống!');
        }
    });
}

function showBuyNowModalFromCart() {
    const existingModal = document.getElementById('buyNowStepModal');
    if (existingModal) {
        existingModal.remove();
    }
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const modalHTML = `
        <div class="modal fade" id="buyNowStepModal" tabindex="-1" aria-labelledby="buyNowStepModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content horizontal-steps">
                    <div id="step1" class="step-content">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="step-header"></div>
                        <div class="step-body horizontal-body">
                            <div class="order-summary-left">
                                ${cartItems.map(item => `
                                    <div class="cart-item-summary">
                                        <img src="${item.image}" alt="${item.name}" class="order-item-img">
                                        <div class="product-details">
                                            <p><strong>${item.name}</strong></p>
                                            <p>Màu: <span style="background-color: ${item.color}; display: inline-block; width: 15px; height: 15px; border: 1px solid #ccc; vertical-align: middle;"></span></p>
                                            <p>Kích thước: ${item.size}</p>
                                            <p>Số lượng: ${item.quantity}</p>
                                            <p class="product-price">${(item.price).toLocaleString('vi-VN')}₫</p>
                                            <p class="total-price"><strong>Tổng: ${(item.price * item.quantity).toLocaleString('vi-VN')}₫</strong></p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="customer-info-right">
                                <form id="customerInfoForm" class="row g-3">
                                    <h5 class="w-100">Thông tin khách hàng</h5>
                                    <div class="col-md-6">
                                        <label for="customerName" class="form-label">Họ và tên</label>
                                        <input type="text" class="form-control" id="customerName" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="customerPhone" class="form-label">Số điện thoại</label>
                                        <input type="tel" class="form-control" id="customerPhone" required>
                                    </div>
                                    <div class="col-12">
                                        <label for="customerAddress" class="form-label">Địa chỉ</label>
                                        <input type="text" class="form-control" id="customerAddress" required>
                                    </div>
                                </form>
                                <div class="payment-section mt-4">
                                    <h5 class="w-100">Phương thức thanh toán</h5>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="paymentMethod" id="paymentCod" value="COD" checked>
                                        <label class="form-check-label" for="paymentCod">
                                            Thanh toán khi nhận hàng (COD)
                                        </label>
                                    </div>
                                    <div class="form-check mt-2">
                                        <input class="form-check-input" type="radio" name="paymentMethod" id="paymentBank" value="Bank">
                                        <label class="form-check-label" for="paymentBank">
                                            Chuyển khoản
                                        </label>
                                    </div>
                                    <div id="qrCodeOptions" class="qr-code-options mt-2" style="display: none;">
                                        <p>Chọn ví điện tử để thanh toán:</p>
                                        <div class="payment-options d-flex gap-3">
                                            <div class="payment-option text-center">
                                                <img src="https://homepage.momocdn.net/blogscontents/momo-upload-api-220808102122-637955508824191258.png" alt="Momo QR" data-target="momo-qr">
                                                <span>Momo</span>
                                            </div>
                                            <div class="payment-option text-center">
                                                <img src="https://simg.zalopay.com.vn/zlp-website/assets/1_icon_e5ec4564e3.png" alt="ZaloPay QR" data-target="zalopay-qr">
                                                <span>ZaloPay</span>
                                            </div>
                                            <div class="payment-option text-center">
                                                <img src="https://kalite.vn/wp-content/uploads/2021/09/maqrkalite.jpg" alt="VNPay QR" data-target="vnpay-qr">
                                                <span>VNPay</span>
                                            </div>
                                        </div>
                                        <div id="qrCodeDisplay" class="text-center mt-3">
                                            <p class="text-muted">Mã QR sẽ hiển thị tại đây sau khi bạn chọn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="step-footer">
                            <p class="total-price"><strong>Tổng tiền: ${total.toLocaleString('vi-VN')}₫</strong></p>
                            <button type="button" class="btn btn-primary" id="confirmPaymentBtn">Xác nhận mua hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="paymentSuccessModal" tabindex="-1" aria-labelledby="paymentSuccessModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="paymentSuccessModalLabel">MUA HÀNG</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p>MUA HÀNG THÀNH CÔNG!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const buyNowModal = new bootstrap.Modal(document.getElementById('buyNowStepModal'));
    buyNowModal.show();
    document.getElementById('confirmPaymentBtn').addEventListener('click', () => {
        const form = document.getElementById('customerInfoForm');
        if (form.checkValidity()) {
            buyNowModal.hide();
            cartItems = []; // Clear cart after successful purchase
            updateCartDisplay();
            const successModal = new bootstrap.Modal(document.getElementById('paymentSuccessModal'));
            successModal.show();
        } else {
            form.reportValidity();
        }
    });
    const paymentBankRadio = document.getElementById('paymentBank');
    const qrCodeOptions = document.getElementById('qrCodeOptions');
    if (paymentBankRadio && qrCodeOptions) {
        paymentBankRadio.addEventListener('change', (e) => {
            if (e.target.checked) {
                qrCodeOptions.style.display = 'block';
            }
        });
    }
    const paymentCodRadio = document.getElementById('paymentCod');
    if (paymentCodRadio && qrCodeOptions) {
        paymentCodRadio.addEventListener('change', (e) => {
            if (e.target.checked) {
                qrCodeOptions.style.display = 'none';
            }
        });
    }
    document.querySelectorAll('.payment-option img').forEach(img => {
        img.addEventListener('click', (e) => {
            const qrTarget = e.target.dataset.target;
            let qrCodeSrc = '';
            if (qrTarget === 'momo-qr') {
                qrCodeSrc = 'https://example.com/momo-qr.jpg'; // Replace with actual Momo QR .jpg URL
            } else if (qrTarget === 'zalopay-qr') {
                qrCodeSrc = 'https://example.com/zalopay-qr.jpg'; // Replace with actual ZaloPay QR .jpg URL
            } else if (qrTarget === 'vnpay-qr') {
                qrCodeSrc = 'https://example.com/vnpay-qr.jpg'; // Replace with actual VNPay QR .jpg URL
            }
            const qrCodeDisplay = document.getElementById('qrCodeDisplay');
            if (qrCodeDisplay) {
                qrCodeDisplay.innerHTML = `<p>Quét mã QR để thanh toán:</p><img src="${qrCodeSrc}" alt="Mã QR thanh toán" class="qr-code-img" style="width: 200px; height: 200px;">`;
            }
            document.querySelectorAll('.payment-option').forEach(option => option.classList.remove('selected'));
            e.target.closest('.payment-option').classList.add('selected');
        });
    });
}
// Xử lý dropdown user
if (userInfo) {
    userInfo.addEventListener('click', () => {
        const expanded = userInfo.classList.toggle('active');
        userInfo.setAttribute('aria-expanded', expanded);
    });
    document.addEventListener('click', (e) => {
        if (!userInfo.contains(e.target)) {
            userInfo.classList.remove('active');
            userInfo.setAttribute('aria-expanded', false);
        }
    });
}
// Xử lý sự kiện phân trang
if (prevPageBtn) {
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
        }
    });
}
if (nextPageBtn) {
    nextPageBtn.addEventListener('click', () => {
        const filteredProductsCount = products.filter(product => {
            const isPriceMatch = product.price >= currentMinPrice && product.price <= currentMaxPrice;
            const isColorMatch = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
            const isSizeMatch = selectedSizes.length === 0 || Object.entries(product.sizes).some(([size, available]) => available && selectedSizes.includes(size));
            const isCollectionMatch = selectedCollections.length === 0 || selectedCollections.includes(product.vendor);
            const isSearchMatch = !searchQuery || 
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return isPriceMatch && isColorMatch && isSizeMatch && isCollectionMatch && isSearchMatch;
        }).length;
        const totalPages = Math.ceil(filteredProductsCount / productsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
        }
    });
}
// Xử lý logic của Filter Modal
if (filterToggleBtn) {
    filterToggleBtn.addEventListener('click', () => {
        filterContainer.classList.add('show');
    });
}
if (closeFilterBtn) {
    closeFilterBtn.addEventListener('click', () => {
        filterContainer.classList.remove('show');
    });
}
if (clearFilterBtn) {
    clearFilterBtn.addEventListener('click', () => {
        currentMinPrice = minProductPrice;
        currentMaxPrice = maxProductPrice;
        selectedColors = [];
        selectedSizes = [];
        selectedCollections = [];
        searchQuery = ''; // Reset tìm kiếm khi clear filter
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.filter-section button, .filter-section .color-circle').forEach(btn => {
            btn.classList.remove('selected');
        });
        const rangeInput = document.querySelectorAll('.range-input input');
        if (rangeInput.length > 1) {
            rangeInput[0].value = minProductPrice;
            rangeInput[1].value = maxProductPrice;
        }
        updatePriceInputs();
        updatePriceRange();
        currentPage = 1;
        renderProducts();
    });
}
if (applyFilterBtn) {
    applyFilterBtn.addEventListener('click', () => {
        const minInput = document.getElementById('minPriceInput');
        const maxInput = document.getElementById('maxPriceInput');
        if (minInput) currentMinPrice = parseInt(minInput.value) || minProductPrice;
        if (maxInput) currentMaxPrice = parseInt(maxInput.value) || maxProductPrice;
        currentPage = 1;
        renderProducts();
        filterContainer.classList.remove('show');
    });
}
// Xử lý các lựa chọn lọc trong modal
colorSwatchesFilter.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.dataset.color;
        btn.classList.toggle('selected');
        if (btn.classList.contains('selected')) {
            selectedColors.push(color);
        } else {
            selectedColors = selectedColors.filter(c => c !== color);
        }
    });
});
sizeButtonsFilter.forEach(btn => {
    btn.addEventListener('click', () => {
        const size = btn.dataset.size;
        btn.classList.toggle('selected');
        if (btn.classList.contains('selected')) {
            selectedSizes.push(size);
        } else {
            selectedSizes = selectedSizes.filter(s => s !== size);
        }
    });
});
collectionButtonsFilter.forEach(btn => {
    btn.addEventListener('click', () => {
        const collection = btn.dataset.collection;
        btn.classList.toggle('selected');
        if (btn.classList.contains('selected')) {
            selectedCollections.push(collection);
        } else {
            selectedCollections = selectedCollections.filter(c => c !== collection);
        }
    });
});
// Function to update cart display
function updateCartDisplay() {
    cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
    cartItemsContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Giỏ hàng của bạn đang trống.</p>';
        totalPriceEl.textContent = '0₫';
    } else {
        let total = 0;
        cartItems.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const itemHtml = `
                <div class="cart-item-row flex items-center space-x-4 p-4 border rounded-lg bg-gray-50">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-md">
                    <div class="cart-product-info flex-1">
                        <h6>${item.name}</h6>
                        <span>Màu: ${item.color}, Kích cỡ: ${item.size}</span>
                    </div>
                    <div class="cart-quantity-selector flex items-center border rounded-md">
                        <button class="px-2 py-1 text-gray-600 hover:bg-gray-200" onclick="updateItemQuantity(${item.id}, -1)">-</button>
                        <input type="text" value="${item.quantity}" readonly class="w-10 text-center bg-transparent border-none">
                        <button class="px-2 py-1 text-gray-600 hover:bg-gray-200" onclick="updateItemQuantity(${item.id}, 1)">+</button>
                    </div>
                    <p class="cart-subtotal font-bold text-gray-800 w-24 text-right">${itemTotal.toLocaleString('vi-VN')}₫</p>
                    <button class="cart-delete-btn text-gray-400 hover:text-red-500 transition-all" onclick="removeItem(${item.id})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.innerHTML += itemHtml;
        });
        totalPriceEl.textContent = total.toLocaleString('vi-VN') + '₫';
    }
}
// Function to update item quantity in cart
window.updateItemQuantity = function(id, delta) {
    const item = cartItems.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeItem(id);
        } else {
            updateCartDisplay();
        }
    }
}
// Function to remove item from cart
window.removeItem = function(id) {
    cartItems = cartItems.filter(item => item.id !== id);
    updateCartDisplay();
}
// Cart icon click handler to show modal
cartIconBtn.addEventListener('click', () => {
    const modalInstance = new bootstrap.Modal(cartModal);
    modalInstance.show();
});
// Thêm hiệu ứng và chức năng cho thanh tìm kiếm
if (searchInput && searchBtn && searchContainer) {
    searchBtn.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        } else {
            searchQuery = '';
            searchInput.value = '';
            currentPage = 1;
            renderProducts();
        }
    });
    searchInput.addEventListener('focus', () => {
        searchInput.classList.add('focused');
    });
    searchInput.addEventListener('blur', () => {
        searchInput.classList.remove('focused');
    });
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchQuery = searchInput.value.trim();
            currentPage = 1;
            renderProducts();
        }
    });
    searchBtn.addEventListener('click', () => {
        if (searchContainer.classList.contains('active') && searchInput.value.trim()) {
            searchQuery = searchInput.value.trim();
            currentPage = 1;
            renderProducts();
        }
    });
}
// Khởi tạo ban đầu
updatePriceInputs();
updatePriceRange();
renderProducts();