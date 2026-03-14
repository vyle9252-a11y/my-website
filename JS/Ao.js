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
// Dữ liệu sản phẩm
const products = [
    {
        id: 1,
        title: "Áo Nariss",
        vendor: "RECHIC",
        price: 625000,
        priceStr: "625.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/04/257_07ff193593b844e09350f0d6eb63ab7e.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/04/257_07ff193593b844e09350f0d6eb63ab7e.jpg"],
        colors: ["#607B8C", "#B0C4DE"],
        stock: true,
        sizes: {
            S: true,
            M: true,
            L: false,
            XL: true
        },
        description: "Áo Nariss - bản hòa tấu của sự thanh lịch và nét duyên dáng tinh tế. Từng đường cắt may tỉ mỉ, chất liệu mềm mại, mỏng nhẹ ôm trọn đường nét cơ thể một cách khéo léo, mang đến cảm giác thoải mái và tự do trong từng cử chỉ, mang đến phong thái quý phái của người phụ nữ hiện đại."
    },
    {
        id: 2,
        title: "Áo Caplr",
        vendor: "RECHIC",
        price: 40000,
        priceStr: "40.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/04/10_ed2fb975e29e457b9c7fe727c6f4f87b.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/04/10_ed2fb975e29e457b9c7fe727c6f4f87b.jpg"],
        colors: ["#FFFFFF", "#000000"],
        stock: true,
        sizes: {
            S: false,
            M: true,
            L: true,
            XL: false
        },
        description: "Áo Caplr - vẻ đẹp tối giản nhưng không hề mờ nhạt. Chất liệu cao cấp cùng thiết kế tinh gọn là tuyên ngôn cho sự tự tin và thanh lịch, là điểm nhấn nhẹ nhàng cho mọi bộ trang phục, làm nổi bật thần thái sang trọng của bạn."
    },
    {
        id: 3,
        title: "Áo Wicky",
        vendor: "RECHIC",
        price: 40000,
        priceStr: "40.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/04/5_35e891dee82b434f9d4acb084b048a55.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/04/5_35e891dee82b434f9d4acb084b048a55.jpg"],
        colors: ["#000000", "#FFFFFF"],
        stock: false,
        sizes: {
            S: true,
            M: false,
            L: true,
            XL: true
        },
        description: "Áo Wicky - một tác phẩm nghệ thuật của sự tinh tế. Chất vải mềm mại như nhung, ôm ấp cơ thể, mang lại cảm giác thoải mái tuyệt đối. Thiết kế đơn giản nhưng đầy cuốn hút, giúp bạn tỏa sáng một cách tự nhiên và thanh thoát."
    },
    {
        id: 4,
        title: "Áo Pidio",
        vendor: "RECHIC",
        price: 40000,
        priceStr: "40.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/03/14_b2d956db6dee44bbbcdfb85625d808ed.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/03/14_b2d956db6dee44bbbcdfb85625d808ed.jpg"],
        colors: ["#1F3A93"],
        stock: true,
        sizes: {
            S: true,
            M: true,
            L: true,
            XL: false
        },
        description: "Áo Pidio - viên ngọc quý của sự trẻ trung và hiện đại. Gam màu nổi bật, cuốn hút mọi ánh nhìn, là biểu tượng của sự tự do và cá tính. Với Pidio, bạn không chỉ mặc một chiếc áo, bạn đang khoác lên mình sự tự tin và năng lượng tươi mới."
    },
    {
        id: 5,
        title: "Áo Zilly",
        vendor: "RECHIC",
        price: 80000,
        priceStr: "80.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/03/15_f4cf14e0059b4ef88d909c52251b47f1.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/03/15_f4cf14e0059b4ef88d909c52251b47f1.jpg"],
        colors: ["#1F3A93", "#EAEAEA"],
        stock: false,
        sizes: {
            S: false,
            M: true,
            L: false,
            XL: true
        },
        description: "Áo Zilly - biểu tượng của sự sang trọng và tinh tế. Thiết kế hiện đại, cắt may hoàn hảo, tôn vinh vẻ đẹp hình thể một cách đầy nghệ thuật. Đây là lựa chọn lý tưởng cho những buổi tiệc đêm hay các sự kiện quan trọng, giúp bạn luôn tỏa sáng và nổi bật."
    },
    {
        id: 6,
        title: "Áo Richell",
        vendor: "RECHIC",
        price: 90000,
        priceStr: "90.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/03/1_89da99b59cec4a0dae566dfface65d4c.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/03/1_89da99b59cec4a0dae566dfface65d4c.jpg"],
        colors: ["#000000", "#FFD700"],
        stock: true,
        sizes: {
            S: true,
            M: true,
            L: false,
            XL: true
        },
        description: "Áo Richell - sự kết hợp hoàn hảo giữa nét cổ điển và hiện đại. Kiểu dáng đơn giản nhưng tinh tế, dễ dàng kết hợp với mọi trang phục, tạo nên một phong cách thanh lịch và sang trọng. Chiếc áo này là tuyên ngôn cho gu thẩm mỹ vượt trội."
    },
    {
        id: 7,
        title: "Áo Lilie",
        vendor: "RECHIC",
        price: 75000,
        priceStr: "75.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/03/55_48400d26cb964ebab1c39c5727bd6908.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/03/55_48400d26cb964ebab1c39c5727bd6908.jpg"],
        colors: ["#B0B0B0", "#EAEAEA"],
        stock: true,
        sizes: {
            S: false,
            M: true,
            L: true,
            XL: false
        },
        description: "Áo Lilie - vẻ đẹp của sự thuần khiết và dịu dàng. Chất liệu cao cấp, mềm mại như cánh hoa, mang lại cảm giác thoải mái tuyệt đối. Thiết kế đơn giản nhưng đầy lôi cuốn, giúp bạn tỏa sáng một cách tự nhiên và thanh thoát."
    },
    {
        id: 8,
        title: "Áo Tristan",
        vendor: "RECHIC",
        price: 95000,
        priceStr: "95.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/46.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/46.jpg"],
        colors: ["#ADD8E6", "#0000FF"],
        stock: true,
        sizes: {
            S: true,
            M: false,
            L: true,
            XL: true
        },
        description: "Áo Tristan - một thiết kế tinh tế, lấy cảm hứng từ vẻ đẹp của những nàng thơ. Từng đường may, từng chi tiết đều được chăm chút tỉ mỉ, tạo nên một tác phẩm nghệ thuật đầy cuốn hút. Tristan không chỉ là trang phục, mà là biểu tượng của sự kiêu sa và lãng mạn."
    },
    {
        id: 9,
        title: "Áo Diras",
        vendor: "RECHIC",
        price: 65000,
        priceStr: "65.000",
        img: "https://rechicbrand.com/wp-content/uploads/2024/11/70_aeeb2e55e0ad487d91f208b32d190f70.png",
        images: ["https://rechicbrand.com/wp-content/uploads/2024/11/70_aeeb2e55e0ad487d91f208b32d190f70.png"],
        colors: ["#FF69B4", "#ADD8E6"],
        stock: false,
        sizes: {
            S: true,
            M: false,
            L: false,
            XL: false
        },
        description: "Áo Diras - sự pha trộn táo bạo giữa vẻ đẹp độc đáo và phong cách hiện đại. Kiểu dáng lạ mắt cùng màu sắc nổi bật tạo nên một tổng thể đầy cá tính, giúp bạn tự tin thể hiện chất riêng và thu hút mọi ánh nhìn."
    },
    {
        id: 10,
        title: "Áo Ansel",
        vendor: "RECHIC",
        price: 84000,
        priceStr: "84.000",
        img: "https://rechicbrand.com/wp-content/uploads/2024/09/131.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2024/09/131.jpg"],
        colors: ["#000000", "#F5F5DC"],
        stock: true,
        sizes: {
            S: false,
            M: true,
            L: true,
            XL: false
        },
        description: "Áo Ansel - năng động nhưng không kém phần sang trọng. Thiết kế thông minh mang lại cảm giác thoải mái tối đa, trong khi vẫn giữ được sự tinh tế và cuốn hút. Đây là lựa chọn hoàn hảo cho những quý cô yêu thích sự tiện nghi mà vẫn muốn tỏa sáng."
    },
    {
        id: 11,
        title: "Áo Salana",
        vendor: "RECHIC",
        price: 70000,
        priceStr: "70.000",
        img: "https://rechicbrand.com/wp-content/uploads/2024/12/1_f3d15fd8162b4d05a2c01545e27cdb11.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2024/12/1_f3d15fd8162b4d05a2c01545e27cdb11.jpg"],
        colors: ["#FFFFFF", "#800080"],
        stock: false,
        sizes: {
            S: true,
            M: true,
            L: false,
            XL: true
        },
        description: "Áo Salana - vẻ đẹp của sự tối giản nhưng đầy quyền lực. Thiết kế đơn giản, tinh tế, là minh chứng cho câu nói 'Less is more'. Chiếc áo này không chỉ là trang phục, mà là biểu tượng của gu thời trang thanh lịch và đẳng cấp."
    },
    {
        id: 12,
        title: "Áo Una",
        vendor: "RECHIC",
        price: 79000,
        priceStr: "79.000",
        img: "https://rechicbrand.com/wp-content/uploads/2025/02/65_cd67b3e596b743c5b14cb1ca04704edc.jpg",
        images: ["https://rechicbrand.com/wp-content/uploads/2025/02/65_cd67b3e596b743c5b14cb1ca04704edc.jpg"],
        colors: ["#000000", "#FFC0CB"],
        stock: true,
        sizes: {
            S: true,
            M: false,
            L: true,
            XL: true
        },
        description: "Áo Una - một biểu tượng của sự quyến rũ và lôi cuốn. Thiết kế ôm sát, tôn vinh đường cong cơ thể một cách tinh tế. Áo Una không chỉ giúp bạn tỏa sáng mà còn khẳng định sự tự tin và phong cách gợi cảm, đầy sức hút."
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

