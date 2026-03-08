document.addEventListener('DOMContentLoaded', () => {
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    const itemsPerPage = isHomePage ? 12 : 20;
    let currentPage = 1;
    let currentData = window.directories || [];

    // Initial render
    if (isHomePage) {
        renderDirectories(currentData.slice(0, 12));
    } else {
        renderDirectories(currentData.slice(0, itemsPerPage));
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
});

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
                            <svg class="dr-circle-svg" width="20" height="20" viewBox="0 0 20 20">
                                <circle class="dr-circle-bg" cx="10" cy="10" r="${radius}"></circle>
                                <circle class="dr-circle-progress" cx="10" cy="10" r="${radius}" 
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

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

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
