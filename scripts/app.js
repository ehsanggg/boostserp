document.addEventListener('DOMContentLoaded', () => {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    const itemsPerPage = isHomePage ? 12 : 32; // Updated to 32 per user request
    let currentPage = 1;
    let currentData = window.directories || [];

    // Initial render - Robust check for grids
    const directoryGrid = document.getElementById('directory-grid');
    const guestPostGrid = document.getElementById('featured-guest-posts-grid');

    if (directoryGrid) {
        if (isHomePage) {
            renderDirectories(currentData.slice(0, 12));
        } else {
            renderDirectories(currentData.slice(0, itemsPerPage));
        }
    }

    if (guestPostGrid && window.featuredGuestPosts) {
        renderFeaturedGuestPosts(window.featuredGuestPosts);
    }

    // Initialize Global Filters
    window.filterDirectories = (status) => {
        currentData = status === 'all'
            ? window.directories
            : window.directories.filter(d => d.status === status);

        currentPage = 1;
        const limit = isHomePage ? 12 : itemsPerPage;
        renderDirectories(currentData.slice(0, limit), false);
        updateActiveFilter(status);

        if (!isHomePage) {
            updateLoadMoreVisibility(currentData.length > itemsPerPage);
        }
    };

    window.loadMore = () => {
        currentPage++;
        const nextItems = currentData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        renderDirectories(nextItems, true);

        if (currentPage * itemsPerPage >= currentData.length) {
            updateLoadMoreVisibility(false);
        }
    };

    function renderDirectories(data, append = false) {
        const grid = document.getElementById('directory-grid');
        if (!grid) return;

        if (!append && data.length === 0) {
            grid.innerHTML = '<div class="col-span-full py-20 text-center text-black">No directories found.</div>';
            return;
        }

        const cardsHtml = data.map(dir => {
            const logoSrc = dir.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(dir.name)}&background=f1f5f9&color=38bdf8&bold=true`;
            const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(dir.name)}&background=f1f5f9&color=38bdf8&bold=true`;

            // Circular Progress Math
            const radius = 8.5;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (dir.dr / 100) * circumference;

            return `
            <div class="glass-hover glass p-6 rounded-2xl flex flex-col h-full group animate-fade-in shadow-sm hover:shadow-xl">
                <div class="flex items-center justify-between mb-6">
                    <div class="w-12 h-12 bg-white rounded-xl border border-slate-100 p-2 flex items-center justify-center overflow-hidden shadow-sm">
                        <img src="${logoSrc}" alt="${dir.name}" 
                             loading="lazy"
                             class="w-full h-full object-contain" 
                             onerror="this.src='${fallbackLogo}'; this.onerror=null;">
                    </div>
                    <div class="flex items-center space-x-3">
                        <span class="px-2 py-1 rounded-md text-[9px] font-bold tracking-wider ${getStatusClass(dir.status)}">
                            ${dir.status.toUpperCase()}
                        </span>
                        <div class="dr-pill" title="Domain Rating: ${dir.dr}">
                            <div class="relative w-5 h-5 flex items-center justify-center">
                                <svg class="dr-circle-svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle class="dr-circle-bg" cx="10" cy="10" r="${radius}" fill="none"></circle>
                                    <circle class="dr-circle-progress" cx="10" cy="10" r="${radius}" 
                                            fill="none"
                                            stroke-dasharray="${circumference}" 
                                            stroke-dashoffset="${offset}"></circle>
                                </svg>
                            </div>
                            <span class="text-xs font-bold">DR: ${dir.dr}</span>
                        </div>
                    </div>
                </div>
                <h3 class="text-lg font-extrabold mb-1 text-slate-900 group-hover:text-primary-blue transition-colors line-clamp-1">${dir.name}</h3>
                <p class="text-black text-sm mb-6 flex-grow leading-relaxed line-clamp-2">${dir.description}</p>
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div class="flex items-center space-x-2">
                        <span class="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-tight ${getTypeClass(dir.type)}">
                            ${dir.type}
                        </span>
                    </div>
                    <a href="${dir.visit_link}" target="_blank" class="visit-btn">
                        <span>Visit Website</span>
                        <i data-lucide="external-link"></i>
                    </a>
                </div>
            </div>
        `}).join('');

        if (append) {
            grid.insertAdjacentHTML('beforeend', cardsHtml);
        } else {
            grid.innerHTML = cardsHtml;
        }

        // Inject CTA Banner logic for Directories page
        if (!isHomePage && data.length > 0) {
            const bannerIndex = append ? currentPage : 1;

            if (bannerIndex <= 4 && (append || data.length >= 32)) {
                const ctaHtml = `
                <div class="col-span-full mt-8 mb-8 animate-fade-in banner-injection" data-banner-id="${bannerIndex}">
                    <div class="bg-white border-2 border-primary-blue/20 rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-blue/5 relative overflow-hidden group">
                        <!-- Decorative background element -->
                        <div class="absolute top-0 right-0 w-48 h-48 bg-primary-blue/5 rounded-full -mr-24 -mt-24 blur-3xl transition-transform group-hover:scale-110"></div>
                        <div class="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full -ml-16 -mb-16 blur-3xl transition-transform group-hover:scale-110"></div>

                        <div class="relative flex flex-col items-center text-center max-w-2xl mx-auto">
                            <div class="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center mb-4 shadow-inner">
                                <i data-lucide="bot" class="w-6 h-6 text-primary-blue"></i>
                            </div>
                            
                            <h2 class="text-3xl md:text-4xl font-black font-heading mb-3 text-slate-900 tracking-tight italic">
                                Tired of manual submissions?
                            </h2>
                            
                            <p class="text-slate-600 text-lg font-medium mb-6 leading-relaxed italic">
                                Let us submit your website to <span class="text-primary-blue font-bold">100+ directories</span> while you focus on what you do best - <span class="text-slate-900 font-bold uppercase tracking-wider text-sm">building amazing products.</span>
                            </p>
                            
                            <a href="submit-site#pricing" class="group/btn relative inline-flex items-center gap-2 bg-primary-blue hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-black transition-all text-lg shadow-2xl shadow-primary-blue/20 transform hover:-translate-y-1 active:scale-95 overflow-hidden">
                                <span class="relative z-10 font-black italic">Get Started Now</span>
                                <i data-lucide="arrow-right" class="w-5 h-5 transition-transform group-hover/btn:translate-x-1 relative z-10"></i>
                                <div class="absolute inset-0 bg-gradient-to-r from-primary-blue to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                            </a>
                        </div>
                    </div>
                </div>
                `;
                grid.insertAdjacentHTML('beforeend', ctaHtml);
            }
        }

        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
});

function getStatusClass(status) {
    switch (status) {
        case 'Free':
        case 'Freemium': return 'bg-green-50 text-green-600 border border-green-100';
        case 'Paid': return 'bg-blue-50 text-blue-600 border border-blue-100';
        default: return 'bg-slate-50 text-slate-600';
    }
}

function getTypeClass(type) {
    if (type.toLowerCase() === 'dofollow') {
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100';
    }
    return 'bg-slate-100 text-black border border-slate-200';
}

function updateActiveFilter(status) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        if (btn.getAttribute('onclick')?.includes(`'${status}'`)) {
            btn.classList.add('bg-primary-blue', 'text-white', 'shadow-md');
            btn.classList.remove('text-black', 'bg-transparent');
        } else {
            btn.classList.remove('bg-primary-blue', 'text-white', 'shadow-md');
            btn.classList.add('text-black', 'bg-transparent');
        }
    });
}

function updateLoadMoreVisibility(visible) {
    const container = document.getElementById('load-more-container');
    if (container) {
        container.classList.toggle('hidden', !visible);
    }
}

function renderFeaturedGuestPosts(data) {
    const grid = document.getElementById('featured-guest-posts-grid');
    if (!grid) return;

    const cardsHtml = data.map(site => {
        const domain = site.url.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0];
        const logoUrl = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
        const fallbackLogo = `https://ui-avatars.com/api/?name=${encodeURIComponent(site.name)}&background=0ea5e9&color=fff&bold=true`;

        // Circular Progress Math for DA and DR
        const radius = 8.5;
        const circumference = 2 * Math.PI * radius;
        const drOffset = circumference - (site.dr / 100) * circumference;

        return `
        <div class="glass-hover glass p-6 rounded-2xl flex flex-col h-full group animate-fade-in shadow-sm hover:shadow-xl">
            <div class="flex items-center justify-between mb-6">
                <div class="w-12 h-12 bg-white rounded-xl border border-slate-100 p-2 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src="${logoUrl}" alt="${site.name}" 
                         loading="lazy"
                         class="w-full h-full object-contain" 
                         onerror="this.src='${fallbackLogo}'; this.onerror=null;">
                </div>
                <div class="flex items-center space-x-3">
                    <span class="px-2 py-1 rounded-md text-[9px] font-bold tracking-wider bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
                        ${site.category.toUpperCase()}
                    </span>
                    <div class="dr-pill" title="Domain Rating: ${site.dr}">
                        <div class="relative w-5 h-5 flex items-center justify-center">
                            <svg class="dr-circle-svg" width="20" height="20" viewBox="0 0 20 20">
                                <circle class="dr-circle-bg" cx="10" cy="10" r="${radius}"></circle>
                                <circle class="dr-circle-progress" cx="10" cy="10" r="${radius}" 
                                        stroke-dasharray="${circumference}" 
                                        stroke-dashoffset="${drOffset}"
                                        style="stroke: #10b981"></circle>
                            </svg>
                        </div>
                        <span class="text-[10px] font-bold">DR: ${site.dr}</span>
                    </div>
                </div>
            </div>
            <h3 class="text-lg font-extrabold mb-1 text-slate-900 group-hover:text-primary-blue transition-colors line-clamp-1 italic">${site.name}</h3>
            <p class="text-black text-sm mb-6 flex-grow leading-relaxed line-clamp-2 italic font-medium">${site.description}</p>
            
            <div class="flex items-center gap-4 mb-6">
                 <div class="flex flex-col">
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Price</p>
                    <p class="font-black text-slate-900 italic tracking-tight">${site.price}</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Traffic</p>
                    <p class="font-black text-primary-blue italic tracking-tight">${site.traffic}</p>
                </div>
                 <div class="flex flex-col">
                    <p class="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">TAT</p>
                    <p class="font-black text-emerald-500 italic tracking-tight">${site.tat}</p>
                </div>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <a href="contact" class="visit-btn group/link w-full justify-center">
                    <span>Get Link</span>
                    <i data-lucide="zap" class="w-4 h-4 text-yellow-400 ml-2"></i>
                </a>
            </div>
        </div>
    `}).join('');

    grid.innerHTML = cardsHtml;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}
