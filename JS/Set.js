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
        const products = [{
            id: 1,
            title: "Nocie Set",
            vendor: "RECHIC",
            price: 110000,
            priceStr: "110.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/12/12_7e8862a8706c4fb19b3cc52ebf2f66c2.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/12/13_3ba040ad2fcc40c1bfff5f8a44f1e428.jpg"],
            colors: ["#F0E68C"],
            stock: true,
            sizes: {
                S: true,
                M: true,
                L: false,
                XL: true
            },
            description: "Nocie Set mang đến sự tươi mới và thanh lịch. Set đồ này là sự kết hợp hoàn hảo giữa vẻ đẹp truyền thống và phong cách hiện đại, phù hợp cho những cô nàng yêu thích sự nhẹ nhàng, tinh tế và duyên dáng."
        },
        {
            id: 2,
            title: "Roxana Set",
            vendor: "RECHIC",
            price: 830000,
            priceStr: "830.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/11/63_bc477636c947476e953c29a5a07a2ae2-3.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/11/2_ff3e5729d63a4186b8cc7a4bea9f1f73.jpg"],
            colors: ["#ADD8E6", "#C0C0C0"],
            stock: true,
            sizes: {
                S: false,
                M: true,
                L: true,
                XL: false
            },
            description: "Roxana Set mang vẻ đẹp năng động nhưng không kém phần kiêu sa. Thiết kế áo bèo nhún cùng quần shorts xếp ly tạo sự bồng bềnh nhẹ nhàng, tôn lên đôi chân thon dài một cách quyến rũ. Đây là lựa chọn hoàn hảo cho phong cách trẻ trung, hiện đại và đầy cá tính."
        },
        {
            id: 3,
            title: "Kindy Set",
            vendor: "RECHIC",
            price: 870000,
            priceStr: "870.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/11/93_c903255ef1504f6585cda39282381ced-1.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/11/95_7d60735274c742a691d5f59140a4cf2c-1.jpg"],
            colors: ["#C8A2C8"],
            stock: false,
            sizes: {
                S: true,
                M: false,
                L: true,
                XL: true
            },
            description: "Kindy Set là hiện thân của sự thuần khiết và quý phái. Màu tím nhạt tinh khôi cùng phom dáng A-line cổ điển, tạo nên vẻ đẹp thanh lịch và tinh tế. Set đồ này là mảnh ghép không thể thiếu trong tủ đồ của những quý cô yêu phong cách tối giản mà sang trọng."
        },
        {
            id: 4,
            title: "Caily Set",
            vendor: "RECHIC",
            price: 790000,
            priceStr: "790.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/10/4-5.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/10/3-5.jpg"],
            colors: ["#F5F5DC"],
            stock: true,
            sizes: {
                S: true,
                M: true,
                L: true,
                XL: false
            },
            description: "Caily Set mang đến vẻ đẹp hoài cổ pha lẫn hiện đại. Chất liệu tweed mềm mại kết hợp cùng thiết kế xếp ly nhẹ nhàng, tạo nên sự chuyển động uyển chuyển, tôn vinh nét nữ tính và duyên dáng. Set đồ này là lựa chọn tuyệt vời cho những buổi dạo phố hoặc hẹn hò lãng mạn."
        },
        {
            id: 5,
            title: "Odette Set",
            vendor: "RECHIC",
            price: 900000,
            priceStr: "900.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/18_5db032782d31472dbb4f4b1a99589b75-1.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/25_4abd67bff21c42708c443287789624b2-1.jpg"],
            colors: ["#808080", "#000000"],
            stock: true,
            sizes: {
                S: false,
                M: true,
                L: false,
                XL: true
            },
            description: "Odette Set là biểu tượng của sự tự do và phóng khoáng. Thiết kế áo vest cá tính kết hợp cùng quần shorts tinh tế tạo nên một phong cách mạnh mẽ nhưng vẫn giữ được nét quyến rũ. Đây là set đồ dành cho những cô nàng hiện đại, không ngại thể hiện cá tính."
        },
        {
            id: 6,
            title: "Zuli Set",
            vendor: "RECHIC",
            price: 940000,
            priceStr: "940.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/09/116-1.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/09/117-1.jpg"],
            colors: ["#F5F5DC"],
            stock: false,
            sizes: {
                S: true,
                M: true,
                L: false,
                XL: true
            },
            description: "Zuli Set mang vẻ đẹp của sự giản đơn và tinh tế. Chất liệu linen cao cấp, bền bỉ và thoải mái, cùng kiểu dáng quần ống rộng ôm nhẹ, tôn lên vẻ đẹp tự nhiên của người phụ nữ. Set đồ này là sự lựa chọn hoàn hảo cho những ngày dạo phố đầy năng động."
        },
        {
            id: 7,
            title: "Carla Set",
            vendor: "RECHIC",
            price: 870000,
            priceStr: "870.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/11/85_27bca7c93c1149ce9cadefcf8b33ab69.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/11/83_bb7e345291624b1bb124aa1298012bc8.jpg"],
            colors: ["#FFFFFF"],
            stock: false,
            sizes: {
                S: true,
                M: true,
                L: true,
                XL: false
            },
            description: "Carla Set là một tuyên ngôn về sự sang trọng và quyền lực. Thiết kế áo bèo nhún, tôn lên đường cong cơ thể một cách hoàn hảo, cùng chất liệu cao cấp tạo nên sự quý phái và lôi cuốn. Set đồ này là điểm nhấn cho vẻ đẹp trưởng thành và đẳng cấp."
        },
        {
            id: 8,
            title: "Nelvin Set",
            vendor: "RECHIC",
            price: 690000,
            priceStr: "690.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/11/74_4d6151ade6ae4be7a89a2d09d9f677f2-1.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/11/75_6c66b657f9ed4a82b5c0edd888eb9ae7.jpg"],
            colors: ["#000000", "#FF0000"],
            stock: false,
            sizes: {
                S: false,
                M: false,
                L: true,
                XL: true
            },
            description: "Nelvin Set mang vẻ đẹp rực rỡ và lôi cuốn. Màu đen nổi bật cùng thiết kế corset và chân váy ngắn, tạo nên một tổng thể đầy sức sống và quyến rũ. Đây là set đồ dành cho những quý cô muốn thể hiện sự tự tin và đam mê của mình."
        },
        {
            id: 9,
            title: "Icelal Set",
            vendor: "RECHIC",
            price: 930000,
            priceStr: "930.000",
            img: "https://rechicbrand.com/wp-content/uploads/2024/12/9_0481b90b25c247faa010be13e84ef715.jpg",
            images: ["https://rechicbrand.com/wp-content/uploads/2024/12/12_7fd26fac3942409988bdce0b1326cb23.jpg"],
            colors: ["#D3D3D3"],
            stock: true,
            sizes: {
                S: true,
                M: false,
                L: false,
                XL: false
            },
            description: "Icelal Set là sự kết hợp hoàn hảo giữa nét cổ điển và hiện đại. Thiết kế áo vest và quần shorts đơn giản nhưng đầy tinh tế, mang đến sự thanh lịch và duyên dáng. Set đồ này là lựa chọn không thể thiếu cho những buổi dạo phố hoặc các sự kiện thường ngày."
        },
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

