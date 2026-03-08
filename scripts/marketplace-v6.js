const websites = [
    { url: "https://www.msn.com/", name: "MSN News", category: "General", price: "$240", tat: "5 Days", da: "95", dr: "93", traffic: "35M", type: "Guest post", links: "Dofollow", description: "Global news and entertainment portal with massive reach, delivering high-impact backlinks from one of the internet's most trusted domains." },
    { url: "http://dailytrust.com/", name: "Daily Trust", category: "General", price: "$320", tat: "6 Days", da: "80", dr: "75", traffic: "1M", type: "Guest post", links: "DOFOLLOW", description: "Leading West African news platform with high domain authority, covering international politics, local business, and deep cultural insights." },
    { url: "http://inkl.com/", name: "Inkl", category: "General", price: "$240", tat: "7 Days", da: "47", dr: "49", traffic: "350k", type: "Guest post", links: "DOFOLLOW", description: "Premium curated news service focusing on high-quality journalism, offering a unique opportunity for high-authority guest placement." },
    { url: "https://www.re-thinkingthefuture.com/", name: "RTF Architecture", category: "Home Architect", price: "$320", tat: "8 Days", da: "58", dr: "52", traffic: "330k", type: "Guest post", links: "Dofollow", description: "International architecture and design excellence platform, showcasing award-winning urban projects and emerging trends in global design." },
    { url: "https://www.ilounge.com/", name: "iLounge", category: "General", price: "$400", tat: "9 Days", da: "82", dr: "76", traffic: "120k", type: "Guest post", links: "DOFOLLOW", description: "The world's leading independent guide to iPod, iPhone, and iPad digital media, serving a tech-savvy audience since 2001." },
    { url: "https://spacecoastdaily.com/", name: "Space Coast Daily", category: "General", price: "$120", tat: "10 Days", da: "75", dr: "74", traffic: "101k", type: "Guest post", links: "Dofollow", description: "High-traffic regional news outlet from the Florida Space Coast, perfect for business, space, and technology-related guest posting." },
    { url: "https://theenterpriseworld.com/", name: "Enterprise World", category: "General", price: "$260", tat: "4 Days", da: "44", dr: "49", traffic: "115k", type: "Guest post", links: "DOFOLLOW", description: "Global business magazine highlighting the success stories of entrepreneurs and the latest innovations in corporate strategy and tech." },
    { url: "https://signalscv.com/", name: "The Signal", category: "General", price: "$380", tat: "5 Days", da: "77", dr: "76", traffic: "80k", type: "Guest post", links: "Dofollow", description: "The primary source for community news in the Santa Clarita Valley, providing local authority and high-relevance geographic backlinks." },
    { url: "http://ranktracker.com/", name: "Ranktracker", category: "Tech & Marketing", price: "$300", tat: "6 Days", da: "39", dr: "72", traffic: "47k", type: "Guest post", links: "DOFOLLOW", description: "Internationally recognized SEO tool and digital marketing insights platform, trusted by professionals for industry-leading data and guides." },
    { url: "http://technology.org/", name: "Technology", category: "Tech", price: "$400", tat: "7 Days", da: "61", dr: "72", traffic: "113k", type: "Guest post", links: "Dofollow", description: "Global science and technology news hub, featuring daily articles on the latest breakthroughs in research, engineering, and digital innovation." },
    { url: "https://analyticsinsight.net/", name: "Analytics Insight", category: "Tech", price: "$300", tat: "8 Days", da: "70", dr: "81", traffic: "400k", type: "Guest post", links: "DOFOLLOW", description: "The first platform in India to focus on AI, Big Data, and Robotics, reaching thought leaders and tech innovators worldwide." },
    { url: "http://bmmagazine.co.uk/", name: "Business Matters", category: "General", price: "$240", tat: "9 Days", da: "62", dr: "77", traffic: "32k", type: "Guest post", links: "Dofollow", description: "The UK's largest monthly magazine for entrepreneurs and small-to-medium-sized businesses, delivering expert corporate advice." },
    { url: "https://robinwaite.com/", name: "Robin Waite", category: "Tech", price: "$240", tat: "10 Days", da: "37", dr: "54", traffic: "17k", type: "Link insertion", links: "DOFOLLOW", description: "Strategic business coaching platform and digital insight center, offering high-authority placements for leadership and productivity content." },
    { url: "https://www.thehansindia.com/", name: "The Hans India", category: "General", price: "$400", tat: "11 Days", da: "73", dr: "78", traffic: "40k", type: "Guest post", links: "Dofollow", description: "One of the fastest-growing English language newspapers in India, covering national news, business, and entertainment for a global audience." },
    { url: "https://goodmenproject.com/", name: "Good Men Project", category: "Family", price: "$300", tat: "12 Days", da: "81", dr: "80", traffic: "15k", type: "Guest post", links: "Dofollow", description: "The only international platform starting conversations about the changing roles of men, reaching millions of visitors interested in family and society." },
    { url: "https://holycitysinner.com/", name: "Holy City Sinner", category: "General", price: "$240", tat: "13 Days", da: "47", dr: "58", traffic: "13k", type: "Guest post", links: "DOFOLLOW", description: "The largest independent daily news source in Charleston, perfect for local authority and niche-relevant lifestyle or business content." },
    { url: "https://www.bbntimes.com/", name: "BBN Times", category: "General", price: "$600", tat: "14 Days", da: "72", dr: "71", traffic: "104k", type: "Guest post", links: "Dofollow", description: "Global media company featuring expert articles by CEOs and industry veterans on AI, economics, and future technology trends." },
    { url: "https://ukjournal.co.uk/", name: "UK Journal", category: "General", price: "$240", tat: "15 Days", da: "57", dr: "33", traffic: "15k", type: "Guest post", links: "DOFOLLOW", description: "A premier UK-based publication for breaking news, trending features, and high-impact opinion pieces on politics and culture." },
    { url: "https://ecommercefastlane.com/", name: "Ecommerce", category: "Business and Finance", price: "$400", tat: "16 Days", da: "40", dr: "45", traffic: "45k", type: "Guest post", links: "Dofollow", description: "Leading source for Shopify entrepreneurs, scalers, and digital marketers seeking to optimize their online presence." },
    { url: "https://www.e-architect.com/", name: "e-architect", category: "Home Improvement", price: "$400", tat: "17 Days", da: "80", dr: "75", traffic: "9k", type: "Guest post", links: "Dofollow", description: "One of the leading architecture resources globally, featuring world-class designs and architectural projects." },
    { url: "https://www.abcmoney.co.uk/", name: "ABC Money", category: "General", price: "$300", tat: "18 Days", da: "71", dr: "61", traffic: "50k", type: "Guest Post", links: "DOFOLLOW", description: "Reliable UK financial news portal providing critical business and investing news to professional audiences." },
    { url: "https://www.cryptotimes.io/", name: "Crypto Times", category: "Crypto", price: "$500", tat: "19 Days", da: "50", dr: "51", traffic: "92k", type: "Guest Post", links: "Dofollow", description: "Leading cryptocurrency and blockchain news source, delivering real-time updates and expert market analysis." },
    { url: "https://1883magazine.com/", name: "1883 Magazine", category: "Fashion", price: "$200", tat: "20 Days", da: "55", dr: "63", traffic: "62k", type: "Guest post", links: "DOFOLLOW", description: "High-end fashion, music, and art magazine based in London, known for its creative excellence." },
    { url: "https://azbigmedia.com/", name: "AZ Big Media", category: "General", price: "$300", tat: "5 Days", da: "68", dr: "65", traffic: "60k", type: "Guest Post", links: "Dofollow", description: "Arizona's largest and most trusted news network for business, real estate, and lifestyle trends." },
    { url: "http://kahawatungu.com/", name: "KahawaTungu", category: "General", price: "$240", tat: "6 Days", da: "52", dr: "54", traffic: "22k", type: "Guest post", links: "DOFOLLOW", description: "Popular investigative news and social commentary platform delivering high engagement for East African audiences." },
    { url: "https://insightssuccess.com/", name: "Insights Success", category: "General", price: "$160", tat: "7 Days", da: "48", dr: "50", traffic: "50k", type: "Guest Post", links: "Dofollow", description: "Global business magazine highlighting the success of companies and tech innovators across various industries." },
    { url: "https://www.mirrorreview.com/", name: "Mirror Review", category: "General", price: "$180", tat: "8 Days", da: "67", dr: "63", traffic: "51K", type: "Guest Post", links: "DOFOLLOW", description: "Technology magazine focused on showcasing modern business leaders and their digital transformation stories." },
    { url: "http://urbanmatter.com/", name: "UrbanMatter", category: "General", price: "$300", tat: "9 Days", da: "53", dr: "75", traffic: "16k", type: "Guest Post", links: "Dofollow", description: "Leading city guide and urban lifestyle publication focused on culture, entertainment, and local community news." },
    { url: "http://todaynews.co.uk/", name: "Today News UK", category: "General", price: "$180", tat: "11 Days", da: "44", dr: "47", traffic: "17k", type: "Guest Post", links: "Dofollow", description: "Reliable news source for the latest updates in technology, business, and current affairs in the United Kingdom." },
    { url: "http://otsnews.co.uk/", name: "OTS News", category: "General", price: "$160", tat: "12 Days", da: "42", dr: "46", traffic: "38k", type: "Guest Post", links: "Dofollow", description: "Key local news outlet for the Southport area, providing high-authority local backlinks for UK-focused businesses." },
    { url: "http://fashionweekonline.com/", name: "Fashion Week", category: "Fashion", price: "$300", tat: "13 Days", da: "71", dr: "71", traffic: "47k", type: "Guest post", links: "Dofollow", description: "The premier resource for fashion week news and model portfolios, capturing the global high-fashion industry." },
    { url: "https://betterthisworld.com/", name: "Better This World", category: "General", price: "$380", tat: "3-7Days", da: "45", dr: "55", traffic: "16k", type: "Guest Post", links: "Dofollow", description: "Platform dedicated to positive societal change, sustainability, and ethical business practices globally." },
    { url: "http://hollywoodprogressive.com/", name: "Hollywood Progressive", category: "Food and Entertainment", price: "$160", tat: "3-7Days", da: "37", dr: "33", traffic: "20k", type: "Guest Post", links: "Dofollow", description: "Connecting the entertainment industry with social commentary and political updates for a wide demographic." },
    { url: "http://laprogressive.com/", name: "LA Progressive", category: "Law", price: "$300", tat: "3-7Days", da: "48", dr: "45", traffic: "10k", type: "Guest Post", links: "DOFOLLOW", description: "Political and social justice magazine based in Los Angeles, focusing on law, human rights, and civil issues." },
    { url: "https://www.readability.com/", name: "Readability", category: "General", price: "$120", tat: "3-7Days", da: "66", dr: "62", traffic: "8k", type: "Guest Post", links: "Dofollow", description: "Global tool for improving content consumption, known for its high authority and consistent audience engagement." },
    { url: "https://wheon.com/", name: "Wheon", category: "General", price: "$180", tat: "3-7Days", da: "63", dr: "55", traffic: "27k", type: "Guest Post", links: "Dofollow", description: "A high-authority general interest news portal covering science, lifestyle, and global digital trends." },
    { url: "https://plainenglish.io/", name: "Plain English", category: "Tech", price: "$400", tat: "3-7Days", da: "54", dr: "76", traffic: "60K", type: "Guest post", links: "Do-Follow", description: "Top-tier publication for JavaScript developers and tech enthusiasts seeking coding excellence and tutorials." },
    { url: "http://portotheme.com/", name: "Porto Theme", category: "Tech", price: "$200", tat: "3-7Days", da: "70", dr: "90", traffic: "9K", type: "Guest post", links: "Do-Follow", description: "Elite WordPress and eCommerce theme development authority with huge domain ranking." },
    { url: "https://hackread.com/", name: "Hackread", category: "Tech", price: "$460", tat: "3-7Days", da: "77", dr: "77", traffic: "13K", type: "Guest post", links: "Do-Follow", description: "Globally recognized cybersecurity and privacy news platform for industry leadership." },
    { url: "http://androidheadlines.com/", name: "Android Headlines", category: "Tech", price: "$900", tat: "3-7Days", da: "85", dr: "78", traffic: "65K", type: "Guest post", links: "Do-Follow", description: "Premier mobile technology publication delivering the latest Android news and hardware reviews." },
    { url: "http://Autogpt.net/", name: "Autogpt", category: "Tech", price: "$600", tat: "3-7Days", da: "60", dr: "66", traffic: "80K", type: "Guest post", links: "Do-Follow", description: "Leading source for AI automation and autonomous agent research and implementation guides." },
    { url: "https://addicted2success.com/", name: "Addicted2Success", category: "Tech", price: "$440", tat: "3-7Days", da: "61", dr: "73", traffic: "9K", type: "Guest post", links: "Do-Follow", description: "Entrepreneurial hub for tech success stories, motivation, and leadership innovation." },
    { url: "http://iprovpn.com/", name: "Iprovpn", category: "Tech", price: "$1,300", tat: "3-7Days", da: "37", dr: "63", traffic: "370K", type: "Guest post", links: "Do-Follow", description: "Technical cybersecurity portal focusing on digital privacy, VPN technology, and data security." },
    { url: "https://www.talkandroid.com/", name: "Talkandroid", category: "Tech", price: "$300", tat: "3-7Days", da: "75", dr: "69", traffic: "33K", type: "Guest post", links: "Do-Follow", description: "Massive community-driven news source for Android tablets, phones, and mobile ecosystems." },
    { url: "https://www.spacedaily.com/", name: "Spacedaily", category: "Tech", price: "$400", tat: "3-7Days", da: "68", dr: "73", traffic: "60K", type: "Guest post", links: "Do-Follow", description: "Global aerospace and technology news hub covering space exploration and satellite developments." },
    { url: "http://tabletmonkeys.com/", name: "Tabletmonkeys", category: "Tech", price: "$300", tat: "3-7Days", da: "55", dr: "49", traffic: "8.5K", type: "Guest post", links: "Do-Follow", description: "Major hardware review portal for tablet computing and mobile productivity tools." },
    { url: "http://www.criticalhit.net/", name: "Criticalhit", category: "Tech", price: "$460", tat: "3-7Days", da: "79", dr: "65", traffic: "30K", type: "Guest post", links: "Do-Follow", description: "Diverse tech and gaming news source with huge authority in the digital entertainment space." },
    { url: "https://hacker9.com/", name: "Hacker9", category: "Tech", price: "$400", tat: "3-7Days", da: "67", dr: "74", traffic: "350K", type: "Guest post", links: "Do-Follow", description: "Leading technical platform for ethical hacking, software, and cybersecurity education." },
    { url: "http://tribuneonlineng.com/", name: "Tribuneonline", category: "Tech", price: "$340", tat: "3-7Days", da: "75", dr: "75", traffic: "585K", type: "Guest post", links: "Do-Follow", description: "High-traffic media outlet covering national news with a powerful tech and digital industry focus." },
    { url: "http://qrius.com/", name: "Qrius", category: "Tech", price: "$240", tat: "3-7Days", da: "54", dr: "68", traffic: "61K", type: "Guest post", links: "Do-Follow", description: "Elitist news and explanations platform focused on tech-economy intersections for leaders." }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('websiteSearch');
    const tableBody = document.getElementById('marketplaceBody');
    const filterChips = document.querySelectorAll('.filter-chip');
    let activeCategory = 'All Categories';

    function renderTable(data) {
        tableBody.innerHTML = '';
        if (data.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" class="px-12 py-32 text-center bg-slate-50/30"><div class="flex flex-col items-center"><div class="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center mb-6"><i data-lucide="search-x" class="w-8 h-8 text-slate-300"></i></div><h3 class="text-xl font-black text-slate-900 mb-2 italic">No Authority Matches</h3><p class="text-black font-medium text-sm">Try adjusting your filters.</p></div></td></tr>`;
            lucide.createIcons();
            return;
        }

        data.forEach((site, index) => {
            const domain = site.url.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0];
            const logoUrl = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

            const tr = document.createElement('tr');
            tr.className = `group border-b border-slate-50 hover:bg-primary-blue/[0.015] transition-all duration-300 animate-fade-in`;
            tr.style.animationDelay = `${index * 20}ms`;
            tr.innerHTML = `
                <td class="px-8 py-10">
                    <div class="flex items-center gap-6">
                        <div class="w-20 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-2 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                             <div class="absolute inset-0 bg-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src="${logoUrl}" alt="${site.name}" class="w-full h-full object-contain relative z-10" onerror="this.src='https://ui-avatars.com/api/?name=${site.name}&background=0ea5e9&color=fff&bold=true'">
                        </div>
                        <div class="max-w-[400px]">
                            <div class="flex items-center gap-2 mb-1">
                                <a href="${site.url}" target="_blank" class="font-black text-slate-900 text-xl font-heading italic tracking-tight hover:text-primary-blue transition-colors underline decoration-primary-blue/0 hover:decoration-primary-blue/30 decoration-2 underline-offset-4">${site.name}</a>
                                <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-300"></i>
                            </div>
                            <p class="text-[14px] font-medium text-black leading-snug group-hover:text-slate-700 transition-colors italic">${site.description}</p>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-10">
                    <div class="flex flex-col gap-2 justify-center">
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-8 text-[10px] font-black text-slate-400 uppercase">DA</span>
                            <div class="flex-1 h-2 bg-slate-100 rounded-full w-24 overflow-hidden">
                                <div class="h-full bg-primary-blue" style="width: ${site.da}%"></div>
                            </div>
                            <span class="text-[14px] font-black text-slate-900">${site.da}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-8 text-[10px] font-black text-slate-400 uppercase">DR</span>
                            <div class="flex-1 h-2 bg-slate-100 rounded-full w-24 overflow-hidden">
                                <div class="h-full bg-emerald-500" style="width: ${site.dr}%"></div>
                            </div>
                            <span class="text-[14px] font-black text-slate-900">${site.dr}</span>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-10 text-center">
                    <div class="flex flex-col gap-1 items-center">
                        <p class="font-black text-slate-900 text-2xl font-heading italic tracking-tight">${site.traffic}</p>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Traffic</p>
                    </div>
                </td>
                <td class="px-6 py-10 text-center">
                    <div class="flex flex-col gap-3 items-center">
                         <span class="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600 shadow-sm">${site.links}</span>
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">${site.type}</p>
                    </div>
                </td>
                <td class="px-6 py-10">
                    <div class="flex flex-col min-w-[100px] items-start">
                        <p class="font-black text-slate-900 text-2xl font-heading tracking-tighter italic leading-none mb-1">${site.price}</p>
                        <p class="text-[10px] font-black text-emerald-500 uppercase tracking-widest">${site.tat} TAT</p>
                    </div>
                </td>
                <td class="px-8 py-10 text-right">
                    <a href="contact" class="inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-primary-blue transition-all shadow-xl hover:shadow-primary-blue/30 transform hover:-translate-y-1 active:scale-95">
                        Get Link <i data-lucide="zap" class="w-4 h-4 text-yellow-400"></i>
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
            const matchesSearch = site.name.toLowerCase().includes(searchTerm) || site.url.toLowerCase().includes(searchTerm);
            const matchesCategory = activeCategory === 'All Categories' || site.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
        renderTable(filtered);
    }

    searchInput.addEventListener('input', filterData);
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('filter-active', 'text-slate-400'));
            filterChips.forEach(c => c.classList.add('text-slate-400'));
            chip.classList.add('filter-active');
            chip.classList.remove('text-slate-400');
            activeCategory = chip.getAttribute('data-category');
            filterData();
        });
    });

    renderTable(websites);
});
