// ===== Theme Management =====
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return prefersDark.matches ? 'dark' : 'light';
}

// Initialize theme
setTheme(getPreferredTheme());

// Theme toggle click
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Listen for system theme changes
prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// ===== Navigation =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
});

// ===== Gallery =====
const galleryGrid = document.getElementById('galleryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Render gallery cards
function renderGallery(filter = 'all') {
    const filteredData = filter === 'all' 
        ? brandsData 
        : brandsData.filter(brand => brand.category === filter);
    
    galleryGrid.innerHTML = filteredData.map(brand => `
        <div class="gallery-card" data-id="${brand.id}" data-category="${brand.category}">
            <div class="gallery-images">
                <div class="gallery-img">
                    <img src="${brand.originalImage}" alt="${brand.originalBrand}" loading="lazy">
                    <span class="img-label original">Asli</span>
                </div>
                <div class="gallery-img">
                    <img src="${brand.fakeImage}" alt="${brand.fakeBrand}" loading="lazy">
                    <span class="img-label fake">Palsu</span>
                </div>
            </div>
            <div class="gallery-info">
                <span class="gallery-category">${brand.categoryNameEn}</span>
                <h3 class="gallery-title">${brand.fakeBrand}</h3>
                <p class="gallery-subtitle">Meniru: ${brand.originalBrand}</p>
                <p class="gallery-preview">${brand.description}</p>
                <div class="gallery-cta">
                    <span>Lihat Analisis Hukum</span>
                    <span>→</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click events to cards
    document.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
    });
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGallery(btn.dataset.filter);
    });
});

// ===== Modal =====
function openModal(brandId) {
    const brand = brandsData.find(b => b.id === brandId);
    if (!brand) return;
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-img">
                <img src="${brand.originalImage}" alt="${brand.originalBrand}">
                <span class="modal-img-label original">Merek Asli</span>
            </div>
            <div class="modal-img">
                <img src="${brand.fakeImage}" alt="${brand.fakeBrand}">
                <span class="modal-img-label fake">Merek Palsu</span>
            </div>
        </div>
        
        <div class="modal-title-section">
            <span class="modal-category">${brand.categoryName}</span>
            <h2 class="modal-title">${brand.fakeBrand} vs ${brand.originalBrand}</h2>
            <p class="modal-subtitle">${brand.categoryNameEn}</p>
        </div>
        
        <div class="modal-section">
            <h3>📝 Deskripsi Kasus</h3>
            <p>${brand.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>🔍 Analisis Persamaan Pada Pokoknya</h3>
            <p><strong style="color: var(--danger);">Terjadi Pelanggaran</strong> — Merek <strong>${brand.fakeBrand}</strong> memiliki <em>persamaan pada pokoknya</em> dengan <strong>${brand.originalBrand}</strong> karena dapat menimbulkan kebingungan di kalangan konsumen (<em>likelihood of confusion</em>). Hal ini melanggar <strong>Pasal 6 ayat (1) UU Merek No. 15 Tahun 2001</strong> yang melarang pendaftaran merek yang memiliki kemiripan dengan merek terdaftar untuk barang/jasa sejenis.</p>
        </div>
        
        <div class="modal-section">
            <h3>📋 Elemen yang Ditiru</h3>
            <ul>
                ${brand.analysis.elemenDitiru.map(el => `<li>${el}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>⚠️ Dampak Bagi Brand Asli</h3>
            <ul>
                ${brand.analysis.dampakBrandAsli.map(d => `<li>${d}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>⚖️ Pasal UU Merek No. 15 Tahun 2001 yang Dilanggar</h3>
            <div>
                ${brand.analysis.pasalTerkait.map(p => `
                    <div class="legal-tag">
                        <strong>${p.pasal}</strong><br>
                        <small>${p.keterangan}</small>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3>🎯 Kesimpulan Analisis</h3>
            <p><strong>${brand.fakeBrand}</strong> terbukti melakukan pelanggaran merek terhadap <strong>${brand.originalBrand}</strong> dengan kategori <em>${brand.categoryName}</em>.</p>
            <p style="margin-top: 0.75rem;"><strong>Konsekuensi Hukum:</strong></p>
            <ul>
                <li><strong>Sanksi Pidana (Pasal 90-91):</strong> Penjara maksimal 5 tahun dan/atau denda hingga Rp1 miliar</li>
                <li><strong>Gugatan Perdata (Pasal 76):</strong> Ganti rugi dan penghentian penggunaan merek</li>
                <li><strong>Penyitaan (Pasal 94):</strong> Barang hasil pelanggaran dapat disita dan dimusnahkan</li>
            </ul>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
document.querySelector('.modal-overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Initialize gallery
renderGallery();

// ===== Category Tabs (in Categories Section) =====
const tabBtns = document.querySelectorAll('.tab-btn');
const categoryCards = document.querySelectorAll('.category-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        // Update active tab
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter category cards
        categoryCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Image Lightbox =====
const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(imageSrc, caption) {
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImage.src = '';
}

// Close lightbox events
lightboxClose.addEventListener('click', closeLightbox);
document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Add click event to images (using event delegation)
document.addEventListener('click', (e) => {
    // Check if clicked on gallery image
    const galleryImg = e.target.closest('.gallery-img img');
    if (galleryImg) {
        e.stopPropagation(); // Prevent opening modal
        const label = galleryImg.closest('.gallery-img').querySelector('.img-label');
        const caption = label ? (label.classList.contains('original') ? 'Merek Asli' : 'Merek Palsu') : '';
        openLightbox(galleryImg.src, caption);
        return;
    }
    
    // Check if clicked on modal image
    const modalImg = e.target.closest('.modal-img img');
    if (modalImg) {
        const label = modalImg.closest('.modal-img').querySelector('.modal-img-label');
        const caption = label ? label.textContent : '';
        openLightbox(modalImg.src, caption);
        return;
    }
});

console.log('🎓 Fake Brand Indonesia - Album Digital');
console.log('📚 Tugas UAS Hukum Kekayaan Intelektual');
console.log('👤 Putra Ramadhan - 202351051 - Ilmu Komputer');
