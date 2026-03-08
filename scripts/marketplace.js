const websites = [
    { url: "https://www.msn.com/", name: "MSN", category: "General", da: 95, dr: 93, traffic: "35M", description: "Global news and entertainment portal with massive reach." },
    { url: "http://dailytrust.com/", name: "Daily Trust", category: "General", da: 80, dr: 75, traffic: "1M", description: "Leading Nigerian news platform with high authority." },
    { url: "http://inkl.com/", name: "Inkl", category: "General", da: 47, dr: 49, traffic: "350k", description: "Curated news service focusing on high-quality journalism." },
    { url: "https://www.re-thinkingthefuture.com/", name: "RTF", category: "Home Architect", da: 58, dr: 52, traffic: "330k", description: "Global platform for architecture and design excellence." },
    { url: "https://www.ilounge.com/", name: "iLounge", category: "General", da: 82, dr: 76, traffic: "120k", description: "Independent guide to iPod, iPhone, and iPad digital media." },
    { url: "https://spacecoastdaily.com/", name: "Space Coast Daily", category: "General", da: 75, dr: 74, traffic: "101k", description: "Local news and features from the Florida Space Coast." },
    { url: "https://theenterpriseworld.com/", name: "The Enterprise World", category: "General", da: 44, dr: 49, traffic: "115k", description: "Business magazine showcasing entrepreneurial journeys." },
    { url: "https://signalscv.com/", name: "The Signal", category: "General", da: 77, dr: 76, traffic: "80k", description: "Santa Clarita Valley's primary daily news source." },
    { url: "http://ranktracker.com/", name: "Ranktracker", category: "Tech & Marketing", da: 39, dr: 72, traffic: "47k", description: "SEO tools and digital marketing insights platform." },
    { url: "http://technology.org/", name: "Technology Org", category: "Tech", da: 61, dr: 72, traffic: "113k", description: "Science and technology news from around the world." },
    { url: "https://analyticsinsight.net/", name: "Analytics Insight", category: "Tech", da: 70, dr: 81, traffic: "400k", description: "Focus on AI, Big Data, and Robotics industry trends." },
    { url: "http://bmmagazine.co.uk/", name: "Business Matters", category: "General", da: 62, dr: 77, traffic: "32k", description: "UK's leading magazine for entrepreneurs and SMEs." },
    { url: "https://robinwaite.com/", name: "Robin Waite", category: "Tech", da: 37, dr: 54, traffic: "17k", description: "Business coaching and digital strategy insights." },
    { url: "https://www.thehansindia.com/", name: "The Hans India", category: "General", da: 73, dr: 78, traffic: "40k", description: "English-language daily newspaper from India." },
    { url: "https://goodmenproject.com/", name: "The Good Men Project", category: "Family", da: 81, dr: 80, traffic: "15k", description: "Conversations about the changing roles of men in the 21st century." },
    { url: "https://holycitysinner.com/", name: "Holy City Sinner", category: "General", da: 47, dr: 58, traffic: "13k", description: "Charleston's most popular independent news site." },
    { url: "https://www.bbntimes.com/", name: "BBN Times", category: "General", da: 72, dr: 71, traffic: "104k", description: "Expert articles on tech, business, and economics." },
    { url: "https://ukjournal.co.uk/", name: "UK Journal", category: "General", da: 57, dr: 33, traffic: "15k", description: "General interest news and features from the UK." },
    { url: "https://ecommercefastlane.com/", name: "eCommerce Fastlane", category: "Business & Finance", da: 40, dr: 45, traffic: "45k", description: "Insights and tools for Shopify store owners." },
    { url: "https://www.e-architect.com/", name: "e-architect", category: "Home Improvement", da: 80, dr: 75, traffic: "9k", description: "International architecture website and resource." },
    { url: "https://www.abcmoney.co.uk/", name: "ABC Money", category: "General", da: 71, dr: 61, traffic: "50k", description: "Financial news and investment insights hub." },
    { url: "https://www.cryptotimes.io/", name: "The Crypto Times", category: "Crypto", da: 50, dr: 51, traffic: "92k", description: "Latest news and trends from the world of blockchain." },
    { url: "https://1883magazine.com/", name: "1883 Magazine", category: "Fashion", da: 55, dr: 63, traffic: "62k", description: "Exploration of music, fashion, and the arts." },
    { url: "https://azbigmedia.com/", name: "AZ Big Media", category: "General", da: 68, dr: 65, traffic: "60k", description: "Business, lifestyle, and real estate news from Arizona." },
    { url: "http://kahawatungu.com/", name: "KahawaTungu", category: "General", da: 52, dr: 54, traffic: "22k", description: "Kenya's leading source for investigative news." },
    { url: "https://insightssuccess.com/", name: "Insights Success", category: "General", da: 48, dr: 50, traffic: "50k", description: "Platform for business leaders and tech innovations." },
    { url: "https://www.mirrorreview.com/", name: "Mirror Review", category: "General", da: 67, dr: 63, traffic: "51k", description: "Showcasing technology and business trends globally." },
    { url: "http://urbanmatter.com/", name: "UrbanMatter", category: "General", da: 53, dr: 75, traffic: "16k", description: "Hyper-local city guides and lifestyle news." },
    { url: "http://todaynews.co.uk/", name: "Today News UK", category: "General", da: 44, dr: 47, traffic: "17k", description: "Breaking news and features from across the United Kingdom." },
    { url: "http://otsnews.co.uk/", name: "OTS News", category: "General", da: 42, dr: 46, traffic: "38k", description: "Local news and media platform from Southport." },
    { url: "http://fashionweekonline.com/", name: "Fashion Week Online", category: "Fashion", da: 71, dr: 71, traffic: "47k", description: "Comprehensive calendar and coverage of fashion weeks." },
    { url: "https://iemlabs.com/", name: "IEM Labs", category: "General", da: 60, dr: 83, traffic: "21k", description: "Cybersecurity training and expert services." },
    { url: "https://betterthisworld.com/", name: "Better This World", category: "General", da: 45, dr: 55, traffic: "16k", description: "Sustainability and social impact-focused platform." },
    { url: "https://www.venisonmagazine.com/", name: "Venison Magazine", category: "General", da: 25, dr: 44, traffic: "30k", description: "Contemporary art journal and creative showcase." },
    { url: "http://hollywoodprogressive.com/", name: "Hollywood Progressive", category: "Food & Entertainment", da: 37, dr: 33, traffic: "20k", description: "Political and social commentary from Hollywood." },
    { url: "http://laprogressive.com/", name: "LA Progressive", category: "Law", da: 48, dr: 45, traffic: "10k", description: "Social justice and law-focused commentary." },
    { url: "https://www.readability.com/", name: "Readability", category: "General", da: 66, dr: 62, traffic: "8k", description: "Tool for better reading and content consumption." },
    { url: "https://wheon.com/", name: "Wheon", category: "General", da: 63, dr: 55, traffic: "27k", description: "Insights on health, tech, and lifestyle trends." }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('websiteSearch');
    const tableBody = document.getElementById('marketplaceBody');
    const filterChips = document.querySelectorAll('.filter-chip');
    let activeCategory = 'All Categories';

    function renderTable(data) {
        tableBody.innerHTML = '';
        if (data.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="px-12 py-20 text-center">
                        <div class="flex flex-col items-center">
                            <i data-lucide="search-x" class="w-12 h-12 text-slate-300 mb-4"></i>
                            <p class="text-slate-500 font-bold">No websites matching your search.</p>
                            <button onclick="window.location.reload()" class="mt-4 text-primary-blue font-bold hover:underline">Clear all filters</button>
                        </div>
                    </td>
                </tr>
            `;
            lucide.createIcons();
            return;
        }

        data.forEach(site => {
            const domain = site.url.replace('https://', '').replace('http://', '').split('/')[0];
            const logoUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

            const tr = document.createElement('tr');
            tr.className = 'border-b border-slate-50 hover:bg-slate-50/50 transition-all';
            tr.innerHTML = `
                <td class="px-12 py-8">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-2 shadow-sm">
                            <img src="${logoUrl}" alt="${site.name}" class="w-full h-full object-contain" onerror="this.src='https://ui-avatars.com/api/?name=${site.name}&background=0ea5e9&color=fff'">
                        </div>
                        <div>
                            <p class="font-black text-slate-900 text-lg">${site.name}</p>
                            <p class="text-xs font-bold text-slate-400 max-w-[250px] leading-relaxed">${site.description}</p>
                        </div>
                    </div>
                </td>
                <td class="px-8 py-8">
                    <div class="flex items-center gap-4">
                        <span class="badge-metric bg-blue-50 text-blue-600">DA ${site.da}</span>
                        <span class="badge-metric bg-emerald-50 text-emerald-600">DR ${site.dr}</span>
                    </div>
                </td>
                <td class="px-8 py-8">
                    <div class="flex items-center gap-2">
                        <i data-lucide="trending-up" class="w-4 h-4 text-emerald-500"></i>
                        <p class="font-bold text-slate-900 text-lg">${site.traffic}</p>
                    </div>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Users</p>
                </td>
                <td class="px-8 py-8">
                    <span class="px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500">${site.category}</span>
                </td>
                <td class="px-8 py-8">
                    <p class="font-black text-slate-900 text-2xl font-heading tracking-tight italic">Contact Us</p>
                </td>
                <td class="px-12 py-8 text-right">
                    <a href="contact" class="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-slate-900 transition-all shadow-xl shadow-primary-blue/20 transform hover:-translate-y-1 active:scale-95">
                        Order Link <i data-lucide="sparkles" class="w-4 h-4"></i>
                    </a>
                </td>
            `;
            tableBody.appendChild(tr);
        });
        lucide.createIcons();
    }

    function filterData() {
        const searchTerm = searchInput.value.toLowerCase();
        const filtered = websites.filter(site => {
            const matchesSearch = site.name.toLowerCase().includes(searchTerm) ||
                site.description.toLowerCase().includes(searchTerm) ||
                site.url.toLowerCase().includes(searchTerm);
            const matchesCategory = activeCategory === 'All Categories' || site.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
        renderTable(filtered);
    }

    searchInput.addEventListener('input', filterData);

    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('filter-active', 'bg-primary-blue', 'text-white'));
            chip.classList.add('filter-active', 'bg-primary-blue', 'text-white');
            activeCategory = chip.getAttribute('data-category');
            filterData();
        });
    });

    // Initial Render
    renderTable(websites);
});
