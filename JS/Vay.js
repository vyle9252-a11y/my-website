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

  const products = [{
            id: 1,
            title: "Narris Skirt",
            vendor: "RECHIC",
            price: 470000,
            priceStr: "470.000",
            img: "https://rechicbrand.com/wp-content/uploads/2025/04/78_e8198951abc04290a6c7c70c84367455-1152x1536.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2025/04/258_d83d6bd78c454553bab7bf781e2b3acf-1152x1536.jpg"],
            colors: ["#F5F5DC"],
            stock: true,
            sizes: {
                S: true,
                M: true,
                L: false,
                XL: true
            },
            description: "Chân váy Narris Skirt là biểu tượng của sự thanh lịch vượt thời gian. Chất liệu tweed cao cấp cùng đường xẻ tà tinh tế tạo nên một phong thái duyên dáng và quý phái, hoàn hảo cho những quý cô yêu thích vẻ đẹp trang nhã và sang trọng."
        },
        {
            id: 2,
            title: "Wickly Skirt",
            vendor: "RECHIC",
            price: 430000,
            priceStr: "430.000",
            img: "https://rechicbrand.com/wp-content/uploads/2025/04/6_321958fe641845a18403957fa37d2366.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2025/04/8_33c59e078ff14739bab449cd63bebf63-1152x1536.jpg"],
            colors: ["#000080"],
            stock: true,
            sizes: {
                S: false,
                M: true,
                L: true,
                XL: false
            },
            description: "Chân váy Wickly Skirt mang đến một vẻ đẹp năng động nhưng không kém phần kiêu sa. Thiết kế xếp ly tinh xảo tạo sự bồng bềnh nhẹ nhàng, tôn lên đôi chân thon dài một cách quyến rũ. Đây là lựa chọn hoàn hảo cho phong cách trẻ trung, hiện đại và đầy cá tính."
        },
        {
            id: 3,
            title: "Maria Skirt",
            vendor: "RECHIC",
            price: 360000,
            priceStr: "360.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/248-2.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/251-2.jpg"],
            colors: ["#F5F5DC"],
            stock: false,
            sizes: {
                S: true,
                M: false,
                L: true,
                XL: true
            },
            description: "Maria Skirt là hiện thân của sự thuần khiết và quý phái. Màu trắng tinh khôi cùng phom dáng A-line cổ điển, tạo nên vẻ đẹp thanh lịch và tinh tế. Chiếc váy này là mảnh ghép không thể thiếu trong tủ đồ của những quý cô yêu phong cách tối giản mà sang trọng."
        },
        {
            id: 4,
            title: "Globe Skirt",
            vendor: "RECHIC",
            price: 290000,
            priceStr: "290.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/54-5.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/53-6.jpg"],
            colors: ["#8B4513"],
            stock: true,
            sizes: {
                S: true,
                M: true,
                L: true,
                XL: false
            },
            description: "Globe Skirt mang đến vẻ đẹp hoài cổ pha lẫn hiện đại. Chất liệu mềm mại kết hợp cùng thiết kế xếp ly nhẹ nhàng, tạo nên sự chuyển động uyển chuyển, tôn vinh nét nữ tính và duyên dáng. Chiếc váy này là lựa chọn tuyệt vời cho những buổi dạo phố hoặc hẹn hò lãng mạn."
        },
        {
            id: 5,
            title: "Karie Skirt",
            vendor: "RECHIC",
            price: 595000,
            priceStr: "595.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/10/122.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/10/115.jpg"],
            colors: ["#000080", "#EAEAEA", "#FFFFF0"],
            stock: true,
            sizes: {
                S: false,
                M: true,
                L: false,
                XL: true
            },
            description: "Karie Skirt là biểu tượng của sự tự do và phóng khoáng. Thiết kế denim cá tính kết hợp cùng những đường cắt tinh tế tạo nên một phong cách mạnh mẽ nhưng vẫn giữ được nét quyến rũ. Đây là chiếc váy dành cho những cô nàng hiện đại, không ngại thể hiện cá tính."
        },
        {
            id: 6,
            title: "Yadra Skirt",
            vendor: "RECHIC",
            price: 400000,
            priceStr: "400.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/133.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/128.jpg"],
            colors: ["#000080", "#F5F5DC"],
            stock: false,
            sizes: {
                S: true,
                M: true,
                L: false,
                XL: true
            },
            description: "Yadra Skirt mang vẻ đẹp của sự giản đơn và tinh tế. Chất liệu denim cao cấp, bền bỉ và thoải mái, cùng kiểu dáng A-line ôm nhẹ, tôn lên vẻ đẹp tự nhiên của người phụ nữ. Chiếc váy này là sự lựa chọn hoàn hảo cho những ngày dạo phố đầy năng động."
        },
        {
            id: 7,
            title: "Loly Skirt",
            vendor: "RECHIC",
            price: 500000,
            priceStr: "500.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/47-6.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/54-7.jpg"],
            colors: ["#778899", "#808080"],
            stock: false,
            sizes: {
                S: true,
                M: true,
                L: true,
                XL: false
            },
            description: "Loly Skirt là một tuyên ngôn về sự sang trọng và quyền lực. Thiết kế ôm sát, tôn lên đường cong cơ thể một cách hoàn hảo, cùng chất liệu cao cấp tạo nên sự quý phái và lôi cuốn. Chiếc váy này là điểm nhấn cho vẻ đẹp trưởng thành và đẳng cấp."
        },
        {
            id: 8,
            title: "Lilie Skirt",
            vendor: "RECHIC",
            price: 500000,
            priceStr: "500.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/38-6.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/37-6.jpg"],
            colors: ["#800000", "#FF4500"],
            stock: false,
            sizes: {
                S: false,
                M: false,
                L: true,
                XL: true
            },
            description: "Chân váy Lilie Skirt mang vẻ đẹp rực rỡ và lôi cuốn. Màu đỏ nổi bật cùng thiết kế xếp ly tinh tế tạo nên một tổng thể đầy sức sống và quyến rũ. Đây là chiếc váy dành cho những quý cô muốn thể hiện sự tự tin và đam mê của mình."
        },
        {
            id: 9,
            title: "Jeremy Skirt",
            vendor: "RECHIC",
            price: 400000,
            priceStr: "400.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/12/155_ff14e55baf3f42e185212c4c1232354f-768x1024.jpg",
            images: ["ihttps://rechicbrand.com/wp-content/uploads/2024/12/156_c4ca2c153d6c4a75bf748c23a920c191.jpg"],
            colors: ["#000000", "#F0E68C"],
            stock: true,
            sizes: {
                S: true,
                M: false,
                L: false,
                XL: false
            },
            description: "Jeremy Skirt là sự kết hợp hoàn hảo giữa nét cổ điển và hiện đại. Thiết kế váy chữ A đơn giản nhưng đầy tinh tế, mang đến sự thanh lịch và duyên dáng. Chiếc váy này là lựa chọn không thể thiếu cho những buổi dạo phố hoặc các sự kiện thường ngày."
        },
        {
            id: 10,
            title: "Kretie Skirt",
            vendor: "RECHIC",
            price: 400000,
            priceStr: "400.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/80.jpg",
            images: ["image_7eb4c7.jpghttps://rechicbrand.com/wp-content/uploads/2024/09/rechic.jpg"],
            colors: ["#1F3A93"],
            stock: true,
            sizes: {
                S: false,
                M: true,
                L: true,
                XL: false
            },
            description: "Chân váy Kretie Skirt với màu sắc tươi mới, mang đến vẻ đẹp rạng rỡ và trẻ trung. Thiết kế đơn giản nhưng vẫn giữ được nét tinh tế, dễ dàng phối hợp với nhiều phong cách khác nhau, tạo nên sự năng động và thoải mái."
        },
        {
            id: 11,
            title: "Artemis Skirt",
            vendor: "RECHIC",
            price: 510000,
            priceStr: "510.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/191-1.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/197-1.jpg"],
            colors: ["#A9A9A9"],
            stock: false,
            sizes: {
                S: true,
                M: true,
                L: false,
                XL: true
            },
            description: "Artemis Skirt là hiện thân của sự sang trọng và tinh tế. Thiết kế phom dài cùng chất liệu vải cao cấp, tạo nên một phong thái quý phái, lôi cuốn. Đây là lựa chọn hoàn hảo cho những sự kiện quan trọng, giúp bạn tỏa sáng một cách đẳng cấp."
        },
        {
            id: 12,
            title: "Jocasta Skirt",
            vendor: "RECHIC",
            price: 330000,
            priceStr: "330.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/2-12.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/4-9.jpg"],
            colors: ["#800000"],
            stock: true,
            sizes: {
                S: true,
                M: false,
                L: true,
                XL: true
            },
            description: "Jocasta Skirt mang vẻ đẹp của sự tự tin và quyến rũ. Màu đỏ nổi bật cùng thiết kế váy mini, tạo nên một phong cách gợi cảm và cuốn hút. Đây là chiếc váy dành cho những quý cô muốn thể hiện sự cá tính và sức hấp dẫn của mình."
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

