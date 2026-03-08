const websites = [
    { url: "https://www.msn.com/", name: "MSN News", category: "General", price: "$240", tat: "5 Days", da: 95, dr: 93, traffic: "35M", type: "Guest post", links: "Dofollow", description: "Global news and entertainment portal with massive reach, delivering high-impact backlinks from one of the internet's most trusted domains." },
    { url: "http://dailytrust.com/", name: "Daily Trust", category: "General", price: "$320", tat: "6 Days", da: 80, dr: 75, traffic: "1M", type: "Guest post", links: "DOFOLLOW", description: "Leading West African news platform with high domain authority, covering international politics, local business, and deep cultural insights." },
    { url: "http://inkl.com/", name: "Inkl", category: "General", price: "$240", tat: "7 Days", da: 47, dr: 49, traffic: "350k", type: "Guest post", links: "DOFOLLOW", description: "Premium curated news service focusing on high-quality journalism, offering a unique opportunity for high-authority guest placement." },
    { url: "https://www.re-thinkingthefuture.com/", name: "RTF Architecture", category: "Home Architect", price: "$320", tat: "8 Days", da: 58, dr: 52, traffic: "330k", type: "Guest post", links: "Dofollow", description: "International architecture and design excellence platform, showcasing award-winning urban projects and emerging trends in global design." },
    { url: "https://www.ilounge.com/", name: "iLounge", category: "General", price: "$400", tat: "9 Days", da: 82, dr: 76, traffic: "120k", type: "Guest post", links: "DOFOLLOW", description: "The world's leading independent guide to iPod, iPhone, and iPad digital media, serving a tech-savvy audience since 2001." },
    { url: "https://spacecoastdaily.com/", name: "Space Coast Daily", category: "General", price: "$120", tat: "10 Days", da: 75, dr: 74, traffic: "101k", type: "Guest post", links: "Dofollow", description: "High-traffic regional news outlet from the Florida Space Coast, perfect for business, space, and technology-related guest posting." },
    { url: "https://theenterpriseworld.com/", name: "Enterprise World", category: "General", price: "$260", tat: "4 Days", da: 44, dr: 49, traffic: "115k", type: "Guest post", links: "DOFOLLOW", description: "Global business magazine highlighting the success stories of entrepreneurs and the latest innovations in corporate strategy and tech." },
    { url: "https://signalscv.com/", name: "The Signal", category: "General", price: "$380", tat: "5 Days", da: 77, dr: 76, traffic: "80k", type: "Guest post", links: "Dofollow", description: "The primary source for community news in the Santa Clarita Valley, providing local authority and high-relevance geographic backlinks." },
    { url: "http://ranktracker.com/", name: "Ranktracker", category: "Tech & Marketing", price: "$300", tat: "6 Days", da: 39, dr: 72, traffic: "47k", type: "Guest post", links: "DOFOLLOW", description: "Internationally recognized SEO tool and digital marketing insights platform, trusted by professionals for industry-leading data and guides." },
    { url: "http://technology.org/", name: "Technology", category: "Tech", price: "$400", tat: "7 Days", da: 61, dr: 72, traffic: "113k", type: "Guest post", links: "Dofollow", description: "Global science and technology news hub, featuring daily articles on the latest breakthroughs in research, engineering, and digital innovation." },
    { url: "https://analyticsinsight.net/", name: "Analytics Insight", category: "Tech", price: "$300", tat: "8 Days", da: 70, dr: 81, traffic: "400k", type: "Guest post", links: "DOFOLLOW", description: "The first platform in India to focus on AI, Big Data, and Robotics, reaching thought leaders and tech innovators worldwide." },
    { url: "http://bmmagazine.co.uk/", name: "Business Matters", category: "General", price: "$240", tat: "9 Days", da: 62, dr: 77, traffic: "32k", type: "Guest post", links: "Dofollow", description: "The UK's largest monthly magazine for entrepreneurs and small-to-medium-sized businesses, delivering expert corporate advice." },
    { url: "https://robinwaite.com/", name: "Robin Waite", category: "Tech", price: "$240", tat: "10 Days", da: 37, dr: 54, traffic: "17k", type: "Link insertion", links: "DOFOLLOW", description: "Strategic business coaching platform and digital insight center, offering high-authority placements for leadership and productivity content." },
    { url: "https://www.thehansindia.com/", name: "The Hans India", category: "General", price: "$400", tat: "11 Days", da: 73, dr: 78, traffic: "40k", type: "Guest post", links: "Dofollow", description: "One of the fastest-growing English language newspapers in India, covering national news, business, and entertainment for a global audience." },
    { url: "https://goodmenproject.com/", name: "Good Men Project", category: "Family", price: "$300", tat: "12 Days", da: 81, dr: 80, traffic: "15k", type: "Guest post", links: "Dofollow", description: "The only international platform starting conversations about the changing roles of men, reaching millions of visitors interested in family and society." },
    { url: "https://holycitysinner.com/", name: "Holy City Sinner", category: "General", price: "$240", tat: "13 Days", da: 47, dr: 58, traffic: "13k", type: "Guest post", links: "DOFOLLOW", description: "The largest independent daily news source in Charleston, perfect for local authority and niche-relevant lifestyle or business content." },
    { url: "https://www.bbntimes.com/", name: "BBN Times", category: "General", price: "$600", tat: "14 Days", da: 72, dr: 71, traffic: "104k", type: "Guest post", links: "Dofollow", description: "Global media company featuring expert articles by CEOs and industry veterans on AI, economics, and future technology trends." },
    { url: "https://ukjournal.co.uk/", name: "UK Journal", category: "General", price: "$240", tat: "15 Days", da: 57, dr: 33, traffic: "15k", type: "Guest post", links: "DOFOLLOW", description: "A premier UK-based publication for breaking news, trending features, and high-impact opinion pieces on politics and culture." },
    { url: "https://ecommercefastlane.com/", name: "Ecommerce", category: "Business and Finance", price: "$400", tat: "16 Days", da: 40, dr: 45, traffic: "45k", type: "Guest post", links: "Dofollow", description: "Leading source for Shopify entrepreneurs, scalers, and digital marketers seeking to optimize their online presence." },
    { url: "https://www.e-architect.com/", name: "e-architect", category: "Home Improvement", price: "$400", tat: "17 Days", da: 80, dr: 75, traffic: "9k", type: "Guest post", links: "Dofollow", description: "One of the leading architecture resources globally, featuring world-class designs and architectural projects." },
    { url: "https://www.abcmoney.co.uk/", name: "ABC Money", category: "General", price: "$300", tat: "18 Days", da: 71, dr: 61, traffic: "50k", type: "Guest Post", links: "DOFOLLOW", description: "Reliable UK financial news portal providing critical business and investing news to professional audiences." },
    { url: "https://www.cryptotimes.io/", name: "Crypto Times", category: "Crypto", price: "$500", tat: "19 Days", da: 50, dr: 51, traffic: "92k", type: "Guest Post", links: "Dofollow", description: "Leading cryptocurrency and blockchain news source, delivering real-time updates and expert market analysis." },
    { url: "https://1883magazine.com/", name: "1883 Magazine", category: "Fashion", price: "$200", tat: "20 Days", da: 55, dr: 63, traffic: "62k", type: "Guest post", links: "DOFOLLOW", description: "High-end fashion, music, and art magazine based in London, known for its creative excellence." },
    { url: "https://azbigmedia.com/", name: "AZ Big Media", category: "General", price: "$300", tat: "5 Days", da: 68, dr: 65, traffic: "60k", type: "Guest Post", links: "Dofollow", description: "Arizona's largest and most trusted news network for business, real estate, and lifestyle trends." },
    { url: "http://kahawatungu.com/", name: "KahawaTungu", category: "General", price: "$240", tat: "6 Days", da: 52, dr: 54, traffic: "22k", type: "Guest post", links: "DOFOLLOW", description: "Popular investigative news and social commentary platform delivering high engagement for East African audiences." },
    { url: "https://insightssuccess.com/", name: "Insights Success", category: "General", price: "$160", tat: "7 Days", da: 48, dr: 50, traffic: "50k", type: "Guest Post", links: "Dofollow", description: "Global business magazine highlighting the success of companies and tech innovators across various industries." },
    { url: "https://www.mirrorreview.com/", name: "Mirror Review", category: "General", price: "$180", tat: "8 Days", da: 67, dr: 63, traffic: "51K", type: "Guest Post", links: "DOFOLLOW", description: "Technology magazine focused on showcasing modern business leaders and their digital transformation stories." },
    { url: "http://urbanmatter.com/", name: "UrbanMatter", category: "General", price: "$300", tat: "9 Days", da: 53, dr: 75, traffic: "16k", type: "Guest Post", links: "Dofollow", description: "Leading city guide and urban lifestyle publication focused on culture, entertainment, and local community news." },
    { url: "http://todaynews.co.uk/", name: "Today News UK", category: "General", price: "$180", tat: "11 Days", da: 44, dr: 47, traffic: "17k", type: "Guest Post", links: "Dofollow", description: "Reliable news source for the latest updates in technology, business, and current affairs in the United Kingdom." },
    { url: "http://otsnews.co.uk/", name: "OTS News", category: "General", price: "$160", tat: "12 Days", da: 42, dr: 46, traffic: "38k", type: "Guest Post", links: "Dofollow", description: "Key local news outlet for the Southport area, providing high-authority local backlinks for UK-focused businesses." },
    { url: "http://fashionweekonline.com/", name: "Fashion Week", category: "Fashion", price: "$300", tat: "13 Days", da: 71, dr: 71, traffic: "47k", type: "Guest post", links: "Dofollow", description: "The premier resource for fashion week news and model portfolios, capturing the global high-fashion industry." },
    { url: "https://iemlabs.com/", name: "IEM Labs", category: "General", price: "$240", tat: "14 Days", da: 60, dr: 83, traffic: "21k", type: "Guest post", links: "Dofollow", description: "Technical education and cybersecurity excellence platform delivering high-impact industry insights." },
    { url: "https://betterthisworld.com/", name: "Better This World", category: "General", price: "$380", tat: "3-7 Days", da: 45, dr: 55, traffic: "16k", type: "Guest Post", links: "Dofollow", description: "Platform dedicated to positive societal change, sustainability, and ethical business practices globally." },
    { url: "https://www.venisonmagazine.com/", name: "Venison Magazine", category: "General", price: "$240", tat: "3-7 Days", da: 25, dr: 44, traffic: "30k", type: "Guest post", links: "DOFOLLOW", description: "Contemporary art publication featuring profiles on emerging and established artists across the globe." },
    { url: "http://hollywoodprogressive.com/", name: "Hollywood Progressive", category: "Entertainment", price: "$160", tat: "3-7 Days", da: 37, dr: 33, traffic: "20k", type: "Guest Post", links: "Dofollow", description: "Connecting the entertainment industry with social commentary and political updates for a wide demographic." },
    { url: "http://laprogressive.com/", name: "LA Progressive", category: "Law", price: "$300", tat: "3-7 Days", da: 48, dr: 45, traffic: "10k", type: "Guest Post", links: "DOFOLLOW", description: "Political and social justice magazine based in Los Angeles, focusing on law, human rights, and civil issues." },
    { url: "https://www.readability.com/", name: "Readability", category: "General", price: "$120", tat: "3-7 Days", da: 66, dr: 62, traffic: "8k", type: "Guest Post", links: "Dofollow", description: "Global tool for improving content consumption, known for its high authority and consistent audience engagement." },
    { url: "https://wheon.com/", name: "Wheon", category: "General", price: "$180", tat: "3-7 Days", da: 63, dr: 55, traffic: "27k", type: "Guest Post", links: "Dofollow", description: "A high-authority general interest news portal covering science, lifestyle, and global digital trends." },
    { url: "https://henof.com/", name: "Henof", category: "General", price: "$180", tat: "3-7 Days", da: 73, dr: 66, traffic: "3k", type: "Guest Post", links: "Dofollow", description: "Curated resource for lifestyle news, health trends, and personal development guides." },
    { url: "https://www.allperfectstories.com/", name: "All Perfect Stories", category: "General", price: "$380", tat: "3-7 Days", da: 62, dr: 55, traffic: "3k", type: "Guest Post", links: "DOFOLLOW", description: "Multidisciplinary platform sharing compelling narratives on business, tech, and cultural evolutions." },
    { url: "https://www.europeanbusinessreview.com/", name: "European Business Review", category: "General", price: "OFF", tat: "3-7 Days", da: 56, dr: 52, traffic: "7k", type: "Guest Post", links: "Dofollow", description: "The leading business intelligence source for European corporate leaders and institutional investors." },
    { url: "https://worldfinancialreview.com/", name: "World Financial Review", category: "General", price: "OFF", tat: "3-7 Days", da: 48, dr: 51, traffic: "2k", type: "Guest Post", links: "Dofollow", description: "Global financial analysis and political insight for C-suite executives and financial decision makers." },
    { url: "https://www.europeanfinancialreview.com/", name: "European Financial Review", category: "General", price: "OFF", tat: "3-7 Days", da: 48, dr: 45, traffic: "1k", type: "Guest Post", links: "Dofollow", description: "In-depth European economic analysis and financial leadership trends for professional investors." },
    { url: "http://networkustad.com/", name: "Network Ustad", category: "Tech", price: "$140", tat: "3-7 Days", da: 62, dr: 70, traffic: "5k", type: "Guest Post", links: "DOFOLLOW", description: "Highly technical blog focusing on networking architecture, server configurations, and hardware reviews." },
    { url: "https://ultraupdates.com/", name: "Ultra Updates", category: "General", price: "$180", tat: "3-7 Days", da: 79, dr: 71, traffic: "3k", type: "Guest Post", links: "Dofollow", description: "A massive hub for technology tips, high-resolution imagery, and digital lifestyle updates." },
    { url: "https://www.uniquenewsonline.com/", name: "Unique News Online", category: "General", price: "$180", tat: "3-7 Days", da: 54, dr: 58, traffic: "7k", type: "Guest Post", links: "Dofollow", description: "Breaking news portal covering international current events, tech trends, and entertainment." },
    { url: "https://dgmnews.com/", name: "DGM News", category: "General", price: "$200", tat: "3-7 Days", da: 51, dr: 56, traffic: "10k", type: "Guest post", links: "Dofollow", description: "Digital media news focused on technology, entrepreneurship, and emerging market trends." },
    { url: "https://londonlovesbusiness.com/", name: "London Loves Business", category: "General", price: "$500", tat: "3-7 Days", da: 60, dr: 74, traffic: "10k", type: "Guest post", links: "DOFOLLOW", description: "The dynamic online newspaper for London’s high-growth entrepreneurs and business leaders." },
    { url: "https://doms2cents.com/", name: "Doms2Cents", category: "General", price: "$180", tat: "3-7 Days", da: 54, dr: 46, traffic: "2k", type: "Guest post", links: "Dofollow", description: "Entertainment and celebrity news source with a strong focus on popular culture and digital media." },
    { url: "https://lic-merchant.com/", name: "LIC Merchant", category: "General", price: "$180", tat: "3-7 Days", da: 55, dr: 44, traffic: "600", type: "Guest post", links: "DOFOLLOW", description: "Business and insurance sector authority site providing niche expertise and targeted insights." },
    { url: "http://marketbusinessnews.com/", name: "Market Business News", category: "General", price: "$50", tat: "3-7 Days", da: 75, dr: 77, traffic: "1k", type: "Guest Post", links: "Dofollow", description: "Source for business and economic news, featuring daily world market research and analysis." },
    { url: "https://illustratedteacup.com/", name: "Illustrated Teacup", category: "General", price: "$380", tat: "3-7 Days", da: 70, dr: 67, traffic: "2k", type: "Guest post", links: "DOFOLLOW", description: "Lifestyle and arts publication with high aesthetic standards and a loyal creative audience." },
    { url: "https://nyweekly.com/", name: "NY Weekly", category: "General", price: "$160", tat: "3-7 Days", da: 60, dr: 74, traffic: "8k", type: "Guest Post", links: "Dofollow", description: "New York city-based news weekly covering business, entertainment, and social change." },
    { url: "https://ceoweley.com/", name: "CEO Weekly", category: "General", price: "$160", tat: "3-7 Days", da: 61, dr: 67, traffic: "1k", type: "Guest Post", links: "Dofollow", description: "Leading online source for executive profiles, business strategies, and corporate success stories." },
    { url: "https://ocnjdaily.com/", name: "OCNJ Daily", category: "Business and Finance", price: "$160", tat: "3-7 Days", da: 48, dr: 63, traffic: "25k", type: "Guest post", links: "Dofollow", description: "Key news and community updates for Ocean City, providing high local authority placements." },
    { url: "https://seaislenews.com/", name: "Sea Isle News", category: "Business and Finance", price: "$160", tat: "3-7 Days", da: 35, dr: 49, traffic: "8k", type: "Guest post", links: "Dofollow", description: "Reliable source for coastal news and business updates, offering localized link equity." },
    { url: "http://trendingus.com/", name: "Trending Us", category: "General", price: "$320", tat: "3-7 Days", da: 55, dr: 52, traffic: "45k", type: "Guest post", links: "Dofollow", description: "India-based trending news portal covering lifestyle, gadget reviews, and digital growth." },
    { url: "https://thedatascientist.com/", name: "The Data Scientist", category: "General", price: "$200", tat: "3-7 Days", da: 52, dr: 52, traffic: "36k", type: "Guest post", links: "DOFOLLOW", description: "Technical publication for AI, machine learning, and advanced data analytics research." },
    { url: "https://theusaleaders.com/", name: "The USA Leaders", category: "General", price: "$200", tat: "3-7 Days", da: 58, dr: 40, traffic: "12k", type: "Guest post", links: "DOFOLLOW", description: "Showcasing industry leaders and innovative business technologies across the United States." },
    { url: "https://www.theeducationmagazine.com/", name: "Education Magazine", category: "General", price: "$200", tat: "3-7 Days", da: 62, dr: 59, traffic: "2k", type: "Guest post", links: "DOFOLLOW", description: "A premier source for educational trends, institution rankings, and leadership profiles." },
    { url: "https://businessnewstips.com/", name: "Business News Tips", category: "Business and Finance", price: "$200", tat: "3-7 Days", da: 59, dr: 45, traffic: "6.5K", type: "Guest post", links: "Dofollow", description: "Practical enterprise advice and digital marketing tips for small business growth." },
    { url: "https://thepinnaclelist.com/", name: "The Pinnacle List", category: "Home Improvement", price: "$180", tat: "3-7 Days", da: 55, dr: 62, traffic: "10k", type: "Guest post", links: "DOFOLLOW", description: "The premier global luxury real estate and lifestyle publication for high-end audiences." },
    { url: "https://businessapac.com/", name: "Business APAC", category: "General", price: "$180", tat: "3-7 Days", da: 61, dr: 18, traffic: "10k", type: "Guest post", links: "DOFOLLOW", description: "Leading Asian-Pacific business magazine exploring corporate growth and digital innovation." },
    { url: "https://globalhealthcaremagazine.com/", name: "Global Healthcare Magazine", category: "General", price: "$180", tat: "3-7 Days", da: 39, dr: 41, traffic: "200", type: "Guest post", links: "Dofollow", description: "Healthcare industry insights and medical technology trends for clinical professionals." },
    { url: "http://harlemworldmagazine.com/", name: "Harlem World Magazine", category: "General", price: "$180", tat: "3-7 Days", da: 54, dr: 71, traffic: "3k", type: "Guest post", links: "DOFOLLOW", description: "The premier lifestyle brand for the Harlem community, focusing on local business and culture." },
    { url: "http://metapress.com/", name: "Metapress", category: "General", price: "$200", tat: "3-7 Days", da: 77, dr: 81, traffic: "34k", type: "Guest post", links: "Dofollow", description: "Massive digital library and archive providing high-authority placements across all niches." },
    { url: "http://soup.io/", name: "Soup.io", category: "General", price: "$180", tat: "3-7 Days", da: 80, dr: 78, traffic: "4k", type: "Guest post", links: "Dofollow", description: "Established microblogging service turned high-authority content platform for SEO equity." },
    { url: "https://hardreset.info/", name: "Hard Reset", category: "Tech", price: "$180", tat: "3-7 Days", da: 60, dr: 60, traffic: "250k", type: "Guest post", links: "Dofollow", description: "Massive database for mobile device instructions, reaching a huge global tech audience." },
    { url: "https://imei.info/", name: "IMEI.info", category: "Tech", price: "$180", tat: "3-7 Days", da: 71, dr: 69, traffic: "1M", type: "Guest post", links: "DOFOLLOW", description: "The internet's primary source for mobile device checking and hardware identification." },
    { url: "https://computertechreviews.com/", name: "Computer Tech Reviews", category: "Tech", price: "$180", tat: "3-7 Days", da: 61, dr: 71, traffic: "7k", type: "Guest post", links: "DOFOLLOW", description: "In-depth hardware analysis and software guides for tech-savvy consumers." },
    { url: "https://supanet.com/", name: "Supanet", category: "General", price: "$180", tat: "3-7 Days", da: 56, dr: 67, traffic: "17k", type: "Guest post", links: "DOFOLLOW", description: "UK-based internet service portal providing business and tech news to a massive audience." },
    { url: "https://monomousumi.com/", name: "Monomousumi", category: "Education", price: "$180", tat: "3-7 Days", da: 59, dr: 55, traffic: "60k", type: "Guest post", links: "DOFOLLOW", description: "Educational and creative writing platform with huge search volume and organic growth." },
    { url: "https://thenewsgod.com/", name: "The News God", category: "General", price: "$200", tat: "3-7 Days", da: 61, dr: 60, traffic: "3k", type: "Guest post", links: "DOFOLLOW", description: "Alternative news and digital culture hub delivering high-authority link equity." },
    { url: "https://breakingac.com/", name: "Breaking AC", category: "General", price: "$180", tat: "3-7 Days", da: 41, dr: 45, traffic: "34k", type: "Guest post", links: "Dofollow", description: "Primary source for Atlantic City crime and community news, providing local authority." },
    { url: "http://tastefullspace.com/", name: "Tastefull Space", category: "General", price: "$180", tat: "3-7 Days", da: 54, dr: 10, traffic: "100", type: "Guest post", links: "DOFOLLOW", description: "Niche lifestyle and home decor platform focusing on creative living solutions." },
    { url: "https://www.urbansplatter.com/", name: "Urban Splatter", category: "Architecture", price: "$200", tat: "3-7 Days", da: 45, dr: 60, traffic: "32k", type: "Guest post", links: "DOFOLLOW", description: "High-authority architecture and urban design blog with a massive design-focused audience." },
    { url: "https://kahawatungu.com/", name: "Kahawa Tungu", category: "General", price: "$200", tat: "3-7 Days", da: 47, dr: 55, traffic: "16k", type: "Guest post", links: "Dofollow", description: "Investigative journalism and breaking news platform from East Africa." },
    { url: "http://luxurytravelmagazine.com/", name: "Luxury Travel", category: "Travel", price: "$180", tat: "3-7 Days", da: 52, dr: 71, traffic: "9k", type: "Guest post", links: "Dofollow", description: "Elite travel guide for the world’s most discerning jetsetters and industry insiders." },
    { url: "http://puretravel.com/", name: "Pure Travel", category: "Travel", price: "$200", tat: "3-7 Days", da: 44, dr: 59, traffic: "500", type: "Guest post", links: "DOFOLLOW", description: "Adventure travel and organic tourism portal with a focus on sustainable exploration." },
    { url: "http://drifttravel.com/", name: "Drift Travel", category: "Travel", price: "$300", tat: "3-7 Days", da: 38, dr: 62, traffic: "7k", type: "Guest post", links: "Dofollow", description: "Digital publication showcasing unique global destinations and luxury cruise experiences." },
    { url: "http://travelblog.org/", name: "Travel Blog", category: "Travel", price: "$160", tat: "3-7 Days", da: 72, dr: 71, traffic: "2k", type: "Guest post", links: "DOFOLLOW", description: "One of the oldest and most trusted community blogging platforms for global travelers." },
    { url: "https://www.reveriepage.com/", name: "Reverie Page", category: "Fashion", price: "$220", tat: "3-7 Days", da: 32, dr: 54, traffic: "41k", type: "Guest post", links: "DOFOLLOW", description: "Curated lifestyle and fashion aesthetic portal for trendsetters and creative thinkers." },
    { url: "https://lovewhatmatters.com/", name: "Love What Matters", category: "Family", price: "$5,000", tat: "3-7 Days", da: 65, dr: 68, traffic: "10k", type: "Guest Post", links: "DOFOLLOW", description: "Massive emotional story-telling platform with huge social signals and brand authority." },
    { url: "http://sheenmagazine.com/", name: "Sheen Magazine", category: "Beauty", price: "$880", tat: "3-7 Days", da: 64, dr: 69, traffic: "7k", type: "Guest Post", links: "Dofollow", description: "The ultimate beauty guide and celebrity lifestyle source for the urban demographic." },
    { url: "https://technologiest.org/", name: "Technologiest", category: "General", price: "$400", tat: "3-7 Days", da: 53, dr: 57, traffic: "13k", type: "Guest Post", links: "DOFOLLOW", description: "Showcasing the intersection of humanity and technological advancement." },
    { url: "https://aijourn.com/", name: "AI Journ", category: "Tech", price: "$80", tat: "3-7 Days", da: 42, dr: 69, traffic: "3.5K", type: "Guest post", links: "Do-Follow", description: "Dedicated publication for artificial intelligence news, ethical debates, and futures." },
    { url: "https://idevicecentral.com/", name: "iDevice Central", category: "Tech", price: "$80", tat: "3-7 Days", da: 57, dr: 37, traffic: "4.2K", type: "Guest post", links: "Do-Follow", description: "The primary source for iOS jailbreaking news and mobile hardware tinkering." },
    { url: "https://bestforandroid.com/", name: "Best For Android", category: "Tech", price: "$600", tat: "3-7 Days", da: 48, dr: 62, traffic: "750K", type: "Guest post", links: "Do-Follow", description: "Massive hardware review and mobile software optimization database." },
    { url: "https://computingforgeeks.com/", name: "Computing For Geeks", category: "Tech", price: "OFF", tat: "3-7 Days", da: 50, dr: 73, traffic: "3.5K", type: "Guest post", links: "Do-Follow", description: "Technical documentation and linux system administration tutorials for dev-ops." },
    { url: "https://phandroid.com/", name: "Phandroid", category: "Tech", price: "OFF", tat: "3-7 Days", da: 82, dr: 74, traffic: "7K", type: "Guest post", links: "Do-Follow", description: "The world's first dedicated Android news source with massive authority." },
    { url: "https://www.redmondpie.com/", name: "Redmond Pie", category: "Tech", price: "$260", tat: "3-7 Days", da: 77, dr: 73, traffic: "40K", type: "Guest post", links: "No-Follow", description: "Focusing on technology news, reviews and 'how-to' guides for Microsoft and Apple." },
    { url: "https://applemagazine.com/", name: "Apple Magazine", category: "Tech", price: "$600", tat: "3-7 Days", da: 49, dr: 62, traffic: "30K", type: "Guest post", links: "Do-Follow", description: "Premium lifestyle magazine for enthusiasts of the Apple digital ecosystem." },
    { url: "https://feedbuzzard.com/", name: "Feed Buzzard", category: "Tech", price: "$340", tat: "3-7 Days", da: 56, dr: 66, traffic: "14K", type: "Guest post", links: "Do-Follow", description: "Aggregating the best in technology news and viral digital marketing trends." },
    { url: "https://viraltimesmagazine.com/", name: "Viral Times", category: "Tech", price: "$60", tat: "3-7 Days", da: 66, dr: 54, traffic: "7K", type: "Guest post", links: "Do-Follow", description: "Capturing the zeitgeist of internet culture and emerging tech sensations." },
    { url: "https://disquantified.org/", name: "Disquantified", category: "Tech", price: "$240", tat: "3-7 Days", da: 50, dr: 64, traffic: "13.5K", type: "Guest post", links: "Do-Follow", description: "Exploring the data-driven world through a technical and humanitarian lens." },
    { url: "https://turdwords.com/", name: "Turd Words", category: "Tech", price: "$70", tat: "3-7 Days", da: 19, dr: 18, traffic: "5.5K", type: "Guest post", links: "Do-Follow", description: "Niche blog focusing on software development oddities and creative tech writing." },
    { url: "https://www.geniusfirms.com/", name: "Genius Firms", category: "Busines", price: "$160", tat: "3-7 Days", da: 36, dr: 60, traffic: "11K", type: "Guest post", links: "Do-Follow", description: "Recognizing the most innovative and technical companies in the digital world." },
    { url: "https://www.speakrj.com/", name: "Speak RJ", category: "Tech", price: "$160", tat: "3-7 Days", da: 39, dr: 42, traffic: "30K", type: "Guest post", links: "Do-Follow", description: "Social media analytics and technical influencer marketing insights platform." }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('websiteSearch');
    const tableBody = document.getElementById('marketplaceBody');
    const filterChips = document.querySelectorAll('.filter-chip');
    const paginationContainer = document.getElementById('paginationContainer');

    let activeCategory = 'All Categories';
    let currentPage = 1;
    const itemsPerPage = 15;
    let filteredData = [...websites];

    // Circular Progress Constants
    const radius = 14;
    const svgSize = 32;
    const circumference = 2 * Math.PI * radius;

    function renderTable() {
        tableBody.innerHTML = '';
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = filteredData.slice(startIndex, endIndex);

        if (pageData.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" class="px-12 py-32 text-center bg-slate-50/30"><div class="flex flex-col items-center"><div class="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center mb-6"><i data-lucide="search-x" class="w-8 h-8 text-slate-300"></i></div><h3 class="text-xl font-black text-slate-900 mb-2 italic">No Authority Matches</h3><p class="text-black font-medium text-sm">Try adjusting your filters.</p></div></td></tr>`;
            lucide.createIcons();
            if (paginationContainer) paginationContainer.innerHTML = '';
            return;
        }

        pageData.forEach((site, index) => {
            const domain = site.url.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0];
            const logoUrl = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;

            const tr = document.createElement('tr');
            tr.className = `group border-b border-slate-50 hover:bg-primary-blue/[0.015] transition-all duration-300 animate-fade-in`;
            tr.style.animationDelay = `${index * 5}ms`;

            tr.innerHTML = `
                <td class="px-8 py-8">
                    <div class="flex items-center gap-6">
                        <div class="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-2 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img src="${logoUrl}" alt="${site.name}" class="w-full h-full object-contain" onerror="this.src='https://ui-avatars.com/api/?name=${site.name}&background=0ea5e9&color=fff&bold=true'">
                        </div>
                        <div class="max-w-[400px]">
                            <div class="flex items-center gap-3 mb-1">
                                <a href="${site.url}" target="_blank" class="font-black text-primary-blue text-lg font-sans italic tracking-tight hover:text-slate-900 transition-colors flex items-center gap-2">
                                    ${site.name}
                                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                                </a>
                                <span class="px-2 py-0.5 bg-slate-100 rounded text-[8px] font-black uppercase tracking-widest text-slate-500">${site.category}</span>
                            </div>
                            <p class="text-[13px] font-medium text-black leading-snug italic font-sans line-clamp-2">${site.description}</p>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-8 font-sans">
                    <div class="flex items-center gap-6 justify-center">
                        <div class="flex flex-col items-center gap-1.5 metric-trigger" data-value="${site.da || 0}" data-type="da">
                            <div class="relative w-10 h-10 flex items-center justify-center">
                                <svg class="dr-circle-svg w-10 h-10" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}">
                                    <circle class="dr-circle-bg" cx="${svgSize / 2}" cy="${svgSize / 2}" r="${radius}"></circle>
                                    <circle class="dr-circle-progress da-progress-circle" cx="${svgSize / 2}" cy="${svgSize / 2}" r="${radius}" 
                                            stroke-dasharray="${circumference}" 
                                            stroke-dashoffset="${circumference}"
                                            style="stroke: #0ea5e9"></circle>
                                </svg>
                                <span class="absolute text-[11px] font-black text-black da-counter">0</span>
                            </div>
                            <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">DA</span>
                        </div>
                        <div class="flex flex-col items-center gap-1.5 metric-trigger" data-value="${site.dr || 0}" data-type="dr">
                            <div class="relative w-10 h-10 flex items-center justify-center">
                                <svg class="dr-circle-svg w-10 h-10" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}">
                                    <circle class="dr-circle-bg" cx="${svgSize / 2}" cy="${svgSize / 2}" r="${radius}"></circle>
                                    <circle class="dr-circle-progress dr-progress-circle" cx="${svgSize / 2}" cy="${svgSize / 2}" r="${radius}" 
                                            stroke-dasharray="${circumference}" 
                                            stroke-dashoffset="${circumference}"
                                            style="stroke: #10b981"></circle>
                                </svg>
                                <span class="absolute text-[11px] font-black text-black dr-counter">0</span>
                            </div>
                            <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">DR</span>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-8 text-center font-sans">
                    <div class="flex items-center justify-center gap-4">
                        <div class="flex flex-col gap-1 items-center">
                            <p class="font-black text-black text-xl font-sans italic tracking-tight">${site.traffic}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Traffic</p>
                        </div>
                        <!-- Mini Trend Graph (Sparkline) -->
                        <div class="w-12 h-8 flex items-end gap-0.5 pb-1">
                            <div class="w-1.5 bg-emerald-100 rounded-t-sm animate-pulse" style="height: 30%"></div>
                            <div class="w-1.5 bg-emerald-200 rounded-t-sm" style="height: 45%"></div>
                            <div class="w-1.5 bg-emerald-300 rounded-t-sm" style="height: 35%"></div>
                            <div class="w-1.5 bg-emerald-400 rounded-t-sm" style="height: 60%"></div>
                            <div class="w-1.5 bg-emerald-500 rounded-t-sm shadow-[0_0_8px_rgba(16,185,129,0.3)]" style="height: 85%"></div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-8 text-center font-sans">
                    <div class="flex flex-col gap-2 items-center">
                         <span class="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-black">${site.links}</span>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">${site.type}</p>
                    </div>
                </td>
                <td class="px-6 py-8 font-sans">
                    <div class="flex flex-col min-w-[80px] items-start">
                        <p class="font-black text-black text-xl font-sans tracking-tighter italic leading-none mb-1">${site.price}</p>
                        <p class="text-[9px] font-black text-emerald-500 uppercase tracking-widest">${site.tat}</p>
                    </div>
                </td>
                <td class="px-8 py-8 text-right font-sans">
                    <a href="contact" class="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-blue transition-all shadow-md hover:shadow-primary-blue/20">
                        Get Link <i data-lucide="zap" class="w-3.5 h-3.5 text-yellow-400"></i>
                    </a>
                </td>
            `;
            tableBody.appendChild(tr);
        });
        lucide.createIcons();
        renderPaginationUI();
        initAnimations();
    }

    function renderPaginationUI() {
        if (!paginationContainer) return;
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        paginationContainer.innerHTML = '';

        if (totalPages <= 1) return;

        // Previous
        const prevBtn = document.createElement('button');
        prevBtn.className = `w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary-blue hover:text-white hover:border-primary-blue'}`;
        prevBtn.innerHTML = `<i data-lucide="chevron-left" class="w-4 h-4"></i>`;
        prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; renderTable(); window.scrollTo({ top: 500, behavior: 'smooth' }); } };
        paginationContainer.appendChild(prevBtn);

        // Page Numbers Logic
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        if (endPage - startPage < 4) startPage = Math.max(1, endPage - 4);

        for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `w-10 h-10 flex items-center justify-center rounded-lg font-black text-xs transition-all ${currentPage === i ? 'bg-primary-blue text-white shadow-md' : 'bg-white border border-slate-100 text-slate-400 hover:border-primary-blue hover:text-primary-blue'}`;
            pageBtn.innerText = i;
            pageBtn.onclick = () => { currentPage = i; renderTable(); window.scrollTo({ top: 500, behavior: 'smooth' }); };
            paginationContainer.appendChild(pageBtn);
        }

        // Next
        const nextBtn = document.createElement('button');
        nextBtn.className = `w-10 h-10 flex items-center justify-center rounded-lg border border-slate-100 transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary-blue hover:text-white hover:border-primary-blue'}`;
        nextBtn.innerHTML = `<i data-lucide="chevron-right" class="w-4 h-4"></i>`;
        nextBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; renderTable(); window.scrollTo({ top: 500, behavior: 'smooth' }); } };
        paginationContainer.appendChild(nextBtn);

        lucide.createIcons();
    }

    function initAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const row = entry.target;
                    const triggers = row.querySelectorAll('.metric-trigger');

                    triggers.forEach(trigger => {
                        const value = parseInt(trigger.getAttribute('data-value'));
                        const type = trigger.getAttribute('data-type');
                        const circle = trigger.querySelector(`.${type}-progress-circle`);
                        const counter = trigger.querySelector(`.${type}-counter`);

                        const offset = circumference - (value / 100) * circumference;
                        circle.style.strokeDashoffset = offset;
                        animateValue(counter, 0, value, 800);
                    });

                    observer.unobserve(row);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('#marketplaceBody tr').forEach(row => observer.observe(row));
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function filterData() {
        const searchTerm = searchInput.value.toLowerCase();
        filteredData = websites.filter(site => {
            const matchesSearch = site.name.toLowerCase().includes(searchTerm) || site.url.toLowerCase().includes(searchTerm);
            const matchesCategory = activeCategory === 'All Categories' || site.category.toLowerCase().includes(activeCategory.toLowerCase());
            return matchesSearch && matchesCategory;
        });
        currentPage = 1;
        renderTable();
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

    renderTable();
});
