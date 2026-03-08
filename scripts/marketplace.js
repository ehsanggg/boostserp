const websites = [
    { url: "https://www.msn.com/", name: "MSN News", category: "General", da: 95, dr: 93, traffic: "35M", description: "Global news and entertainment portal with massive reach, delivering high-impact backlinks from one of the internet's most trusted domains." },
    { url: "http://dailytrust.com/", name: "Daily Trust", category: "General", da: 80, dr: 75, traffic: "1M", description: "Leading West African news platform with high domain authority, covering international politics, local business, and deep cultural insights." },
    { url: "http://inkl.com/", name: "Inkl", category: "General", da: 47, dr: 49, traffic: "350k", description: "Premium curated news service focusing on high-quality journalism, offering a unique opportunity for high-authority guest placement." },
    { url: "https://www.re-thinkingthefuture.com/", name: "RTF Architecture", category: "Home Architect", da: 58, dr: 52, traffic: "330k", description: "International architecture and design excellence platform, showcasing award-winning urban projects and emerging trends in global design." },
    { url: "https://www.ilounge.com/", name: "iLounge", category: "General", da: 82, dr: 76, traffic: "120k", description: "The world's leading independent guide to iPod, iPhone, and iPad digital media, serving a tech-savvy audience since 2001." },
    { url: "https://spacecoastdaily.com/", name: "Space Coast Daily", category: "General", da: 75, dr: 74, traffic: "101k", description: "High-traffic regional news outlet from the Florida Space Coast, perfect for business, space, and technology-related guest posting." },
    { url: "https://theenterpriseworld.com/", name: "Enterprise World", category: "General", da: 44, dr: 49, traffic: "115k", description: "Global business magazine highlighting the success stories of entrepreneurs and the latest innovations in corporate strategy and tech." },
    { url: "https://signalscv.com/", name: "The Signal", category: "General", da: 77, dr: 76, traffic: "80k", description: "The primary source for community news in the Santa Clarita Valley, providing local authority and high-relevance geographic backlinks." },
    { url: "http://ranktracker.com/", name: "Ranktracker", category: "Tech & Marketing", da: 39, dr: 72, traffic: "47k", description: "Internationally recognized SEO tool and digital marketing insights platform, trusted by professionals for industry-leading data and guides." },
    { url: "http://technology.org/", name: "Technology Org", category: "Tech", da: 61, dr: 72, traffic: "113k", description: "Global science and technology news hub, featuring daily articles on the latest breakthroughs in research, engineering, and digital innovation." },
    { url: "https://analyticsinsight.net/", name: "Analytics Insight", category: "Tech", da: 70, dr: 81, traffic: "400k", description: "The first platform in India to focus on AI, Big Data, and Robotics, reaching thought leaders and tech innovators worldwide." },
    { url: "http://bmmagazine.co.uk/", name: "Business Matters", category: "General", da: 62, dr: 77, traffic: "32k", description: "The UK's largest monthly magazine for entrepreneurs and small-to-medium-sized businesses, delivering expert corporate advice." },
    { url: "https://robinwaite.com/", name: "Robin Waite", category: "Tech", da: 37, dr: 54, traffic: "17k", description: "Strategic business coaching platform and digital insight center, offering high-authority placements for leadership and productivity content." },
    { url: "https://www.thehansindia.com/", name: "The Hans India", category: "General", da: 73, dr: 78, traffic: "40k", description: "One of the fastest-growing English language newspapers in India, covering national news, business, and entertainment for a global audience." },
    { url: "https://goodmenproject.com/", name: "Good Men Project", category: "Family", da: 81, dr: 80, traffic: "15k", description: "The only international platform starting conversations about the changing roles of men, reaching millions of visitors interested in family and society." },
    { url: "https://holycitysinner.com/", name: "Holy City Sinner", category: "General", da: 47, dr: 58, traffic: "13k", description: "The largest independent daily news source in Charleston, perfect for local authority and niche-relevant lifestyle or business content." },
    { url: "https://www.bbntimes.com/", name: "BBN Times", category: "General", da: 72, dr: 71, traffic: "104k", description: "Global media company featuring expert articles by CEOs and industry veterans on AI, economics, and future technology trends." },
    { url: "https://ukjournal.co.uk/", name: "UK Journal", category: "General", da: 57, dr: 33, traffic: "15k", description: "A premier UK-based publication for breaking news, trending features, and high-impact opinion pieces on politics and culture." },
    { url: "https://ecommercefastlane.com/", name: "eCommerce Fastlane", category: "Business & Finance", da: 40, dr: 45, traffic: "45k", description: "Top-rated resource and hub for Shopify entrepreneurs, providing actionable insights for scaling digital stores and online brands." },
    { url: "https://www.e-architect.com/", name: "e-architect", category: "Home Improvement", da: 80, dr: 75, traffic: "9k", description: "One of the world's most comprehensive architecture websites, featuring award-winning designs and professional architectural resources." },
    { url: "https://www.abcmoney.co.uk/", name: "ABC Money", category: "General", da: 71, dr: 61, traffic: "50k", description: "A leading UK financial news outlet and investment hub, offering deep insights into the stock market, banking, and global economics." },
    { url: "https://www.cryptotimes.io/", name: "The Crypto Times", category: "Crypto", da: 50, dr: 51, traffic: "92k", description: "Real-time news platform for the blockchain and cryptocurrency industry, trusted by investors for technical analysis and trend reports." },
    { url: "https://1883magazine.com/", name: "1883 Magazine", category: "Fashion", da: 55, dr: 63, traffic: "62k", description: "Cutting-edge fashion, music, and arts publication based in London, showcasing creative talent and high-end lifestyle trends." },
    { url: "https://azbigmedia.com/", name: "AZ Big Media", category: "General", da: 68, dr: 65, traffic: "60k", description: "Arizona's largest business news and lifestyle network, providing critical authority for local business and real estate sectors." },
    { url: "http://kahawatungu.com/", name: "KahawaTungu", category: "General", da: 52, dr: 54, traffic: "22k", description: "Renowned investigative news platform based in Kenya, covering politics and social justice issues with high editorial standards." },
    { url: "https://insightssuccess.com/", name: "Insights Success", category: "General", da: 48, dr: 50, traffic: "50k", description: "The best business magazine for technology leaders, featuring the latest trends in cloud, enterprise, and digital transformation." },
    { url: "https://www.mirrorreview.com/", name: "Mirror Review", category: "General", da: 67, dr: 63, traffic: "51k", description: "Global platform dedicated to highlighting technology leaders and their innovative solutions in the modern corporate landscape." },
    { url: "http://urbanmatter.com/", name: "UrbanMatter", category: "General", da: 53, dr: 75, traffic: "16k", description: "Hyper-local city guide and lifestyle publication focusing on the heart of Chicago and other major metros, great for local SEO." },
    { url: "http://todaynews.co.uk/", name: "Today News UK", category: "General", da: 44, dr: 47, traffic: "17k", description: "A trusted source for daily news across the United Kingdom, covering a wide range of topics from technology to business and travel." },
    { url: "http://otsnews.co.uk/", name: "OTS News", category: "General", da: 42, dr: 46, traffic: "38k", description: "Leading local media platform for the Southport region, providing high-value local backlinks for businesses targeting the UK market." },
    { url: "http://fashionweekonline.com/", name: "Fashion Week Online", category: "Fashion", da: 71, dr: 71, traffic: "47k", description: "The ultimate global resource for the international fashion circuit, covering major runways from New York to Paris and Milan." },
    { url: "https://iemlabs.com/", name: "IEM Labs", category: "General", da: 60, dr: 83, traffic: "21k", description: "Expert cybersecurity training and digital security services hub, offering high-authority links in the technical and IT defense niche." },
    { url: "https://betterthisworld.com/", name: "Better This World", category: "General", da: 45, dr: 55, traffic: "16k", description: "Sustainability and social impact journalism platform, dedicated to stories of environmental progress and ethical corporate responsibility." },
    { url: "https://www.venisonmagazine.com/", name: "Venison Magazine", category: "General", da: 25, dr: 44, traffic: "30k", description: "Contemporary art journal and visual showcase, perfect for high-authority links in the creative, design, and fine arts sectors." },
    { url: "http://hollywoodprogressive.com/", name: "Hollywood Progressive", category: "Food & Entertainment", da: 37, dr: 33, traffic: "20k", description: "A provocative intersection of politics and entertainment, providing social commentary on global issues and media culture." },
    { url: "http://laprogressive.com/", name: "LA Progressive", category: "Law", da: 48, dr: 45, traffic: "10k", description: "Social justice and law-focused commentary based in Los Angeles, covering civil rights and constitutional issues with high authority." },
    { url: "https://www.readability.com/", name: "Readability", category: "General", da: 66, dr: 62, traffic: "8k", description: "The premier tool for content consumption and better online reading habits, with a long-standing reputation for high domain authority." },
    { url: "https://wheon.com/", name: "Wheon", category: "General", da: 63, dr: 55, traffic: "27k", description: "A versatile insights platform covering health, lifestyle, and modern technology trends for a curious and engaged global audience." }
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
                    <td colspan="6" class="px-12 py-32 text-center bg-slate-50/30">
                        <div class="flex flex-col items-center">
                            <div class="w-20 h-20 bg-white shadow-xl rounded-full flex items-center justify-center mb-6">
                                <i data-lucide="search-x" class="w-10 h-10 text-slate-300"></i>
                            </div>
                            <h3 class="text-2xl font-black text-slate-900 mb-2 italic">No Authority Matches</h3>
                            <p class="text-slate-500 font-medium">Try adjusting your search or category filters.</p>
                            <button onclick="window.location.reload()" class="mt-8 bg-primary-blue text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-primary-blue/20">Clear All Filters</button>
                        </div>
                    </td>
                </tr>
            `;
            lucide.createIcons();
            return;
        }

        data.forEach((site, index) => {
            const domain = site.url.replace('https://', '').replace('http://', '').split('/')[0];
            const logoUrl = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

            const tr = document.createElement('tr');
            tr.className = `group border-b border-slate-50 hover:bg-primary-blue/[0.02] transition-all duration-300 animate-fade-in`;
            tr.style.animationDelay = `${index * 50}ms`;
            tr.innerHTML = `
                <td class="px-12 py-10">
                    <div class="flex items-center gap-6">
                        <div class="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-3 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                             <div class="absolute inset-0 bg-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src="${logoUrl}" alt="${site.name}" class="w-full h-full object-contain relative z-10" onerror="this.src='https://ui-avatars.com/api/?name=${site.name}&background=0ea5e9&color=fff&bold=true'">
                        </div>
                        <div>
                            <div class="flex items-center gap-3 mb-1.5">
                                <p class="font-black text-slate-900 text-xl font-heading italic tracking-tight">${site.name}</p>
                                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i>
                            </div>
                            <p class="text-[13px] font-medium text-slate-500 max-w-[400px] leading-relaxed group-hover:text-slate-700 transition-colors italic">${site.description}</p>
                        </div>
                    </div>
                </td>
                <td class="px-8 py-10">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-8 text-[10px] font-black text-slate-400 uppercase">DA</span>
                            <div class="flex-1 h-1.5 bg-slate-100 rounded-full w-24 overflow-hidden">
                                <div class="h-full bg-primary-blue" style="width: ${site.da}%"></div>
                            </div>
                            <span class="text-sm font-black text-slate-900">${site.da}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-8 text-[10px] font-black text-slate-400 uppercase">DR</span>
                            <div class="flex-1 h-1.5 bg-slate-100 rounded-full w-24 overflow-hidden">
                                <div class="h-full bg-emerald-500" style="width: ${site.dr}%"></div>
                            </div>
                            <span class="text-sm font-black text-slate-900">${site.dr}</span>
                        </div>
                    </div>
                </td>
                <td class="px-8 py-10">
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center gap-2">
                             <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                <i data-lucide="trending-up" class="w-4 h-4 text-emerald-500"></i>
                             </div>
                            <p class="font-black text-slate-900 text-xl font-heading tracking-tight italic">${site.traffic}</p>
                        </div>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-10">Monthly Reach</p>
                    </div>
                </td>
                <td class="px-8 py-10">
                    <div class="flex flex-wrap gap-2 max-w-[150px]">
                        <span class="whitespace-nowrap px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm group-hover:border-primary-blue group-hover:text-primary-blue transition-colors">
                            ${site.category}
                        </span>
                    </div>
                </td>
                <td class="px-8 py-10">
                    <div class="group/price flex flex-col">
                        <p class="font-black text-slate-900 text-2xl font-heading tracking-tighter italic decoration-primary-blue decoration-2 group-hover:underline underline-offset-4 transition-all">VIP Access</p>
                        <p class="text-[10px] font-black text-primary-blue uppercase tracking-widest">Premium Placement</p>
                    </div>
                </td>
                <td class="px-12 py-10 text-right">
                    <a href="contact" class="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-blue transition-all shadow-2xl hover:shadow-primary-blue/30 transform hover:-translate-y-1 active:scale-95">
                        Reserve Now <i data-lucide="zap" class="w-4 h-4 text-yellow-400"></i>
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
            filterChips.forEach(c => {
                c.classList.remove('filter-active');
                c.classList.add('text-slate-400');
            });
            chip.classList.add('filter-active');
            chip.classList.remove('text-slate-400');
            activeCategory = chip.getAttribute('data-category');
            filterData();
        });
    });

    // Initial Render
    renderTable(websites);
});
