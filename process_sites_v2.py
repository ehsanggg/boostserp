import json

data = """
Websites URLS	Category	Prices	Tat	DA	DR	Traffic	Type	LINKS
https://www.msn.com/	General	$240	5 Days	95	93	35M	Guest post	Dofollow
http://dailytrust.com/	general	$320	6 Days	80	75	1M	Guest post	DOFOLLOW
http://inkl.com/	General	$240	7 Days	47	49	350k	Guest post	DOFOLLOW
https://www.re-thinkingthefuture.com/	Home arcitect	$320	8 Days	58	52	330k	Guest post	Dofollow
https://www.ilounge.com/	General	$400	9 Days	82	76	120k	Guest post	DOFOLLOW
https://spacecoastdaily.com/	General	$120	10 Days 	75	74	101k	Guest post	Dofollow
https://theenterpriseworld.com/	General	$260	4 Days	44	49	115k	Guest post	DOFOLLOW
https://signalscv.com/	general	$380	5 Days	77	76	80k	Guest post	Dofollow
http://ranktracker.com/	Tech digital marketing	$300	6 Days	39	72	47k	Guest post	DOFOLLOW
http://technology.org/	Tech	$400	7 Days	61	72	113k	Guest post	Dofollow
https://analyticsinsight.net/	Tech	$300	8 Days	70	81	400k	Guest post	DOFOLLOW
http://bmmagazine.co.uk/	general	$240	9 Days	62	77	32k	Guest post	Dofollow
https://robinwaite.com/	Tech	$240	10 Days	37	54	17k	Link insertion	DOFOLLOW
https://www.thehansindia.com/	general	$400	11 Days	73	78	40k	Guest post	Dofollow
https://goodmenproject.com/	Family	$300	12 Days	81	80	15k	Guest post	Dofollow
https://holycitysinner.com/	general	$240	13 Days	47	58	13k	Guest post	DOFOLLOW
https://www.bbntimes.com/	general	$600	14 Days	72	71	104k	Guest post	Dofollow
https://ukjournal.co.uk/	general	$240	15 Days	57	33	15k	Guest post	DOFOLLOW
https://ecommercefastlane.com/	business and finance	$400	16 Days	40	45	45k	Guest post	Dofollow
https://www.e-architect.com/	home improvement	$400	17 Days	80	75	9k	Guest post	Dofollow
https://www.abcmoney.co.uk/	general	$300	18 Days	71	61	50k	Guest Post	DOFOLLOW
https://www.cryptotimes.io/	crypto	$500	19 Days	50	51	92k	Guest Post	Dofollow
https://1883magazine.com/	Fashion	$200	20 Days	55	63	62k	Guest post	DOFOLLOW
https://azbigmedia.com/	General	$300	5 Days	68	65	60k	Guest Post	Dofollow
http://kahawatungu.com/	general	$240	6 Days	52	54	22k	Guest post	DOFOLLOW
https://insightssuccess.com/	General	$160	7 Days	48	50	50k	Guest Post	Dofollow
https://www.mirrorreview.com/	General	$180	8 Days	67	63	51K	Guest Post	DOFOLLOW
http://urbanmatter.com/	General	$300	9 Days	53	75	16k	Guest Post	Dofollow
http://ukjournal.co.uk/	general	$240	10 Days	59	58	13k	Guest post	Dofollow
http://todaynews.co.uk/	General	$180	11 Days	44	47	17k	Guest Post	Dofollow
http://otsnews.co.uk/	General	$160	12 Days	42	46	38k	Guest Post	Dofollow
http://fashionweekonline.com/	fashion	$300	13 Days		71	47k	Guest post	Dofollow
https://iemlabs.com/	general	$240	14 Days	60	83	21k	Guest post	Dofollow
http://goodmenproject.com/	family	$200	15 Days	82	79	15k	Guest Post	Dofollow
https://holycitysinner.com/	general	$260	3-7Days	48	62	13k	Guest post	DOFOLLOW
https://betterthisworld.com/	General	$380	3-7Days	45	55	16k	Guest Post	Dofollow
https://www.venisonmagazine.com/	general	$240	3-7Days	25	44	30k	Guest post	DOFOLLOW
http://hollywoodprogressive.com/	Food Entertainment	$160	3-7Days	37	33	20k	Guest Post	Dofollow
http://laprogressive.com/	law	$300	3-7Days	48	45	10k	Guest Post	DOFOLLOW
https://www.readability.com/	General	$120	3-7Days	66	62	8k	Guest Post	Dofollow
https://wheon.com/	General	$180	3-7Days	63	55	27k	Guest Post	Dofollow
https://henof.com/	General	$180	3-7Days	73	66	3k	Guest Post	Dofollow
https://www.allperfectstories.com/	General	$380	3-7Days	62	55	3k	Guest Post	DOFOLLOW
https://www.europeanbusinessreview.com/	General	OFF	3-7Days	56	52	7k	Guest Post	Dofollow
https://worldfinancialreview.com/	General	OFF	3-7Days	48	51	2k	Guest Post	Dofollow
https://www.europeanfinancialreview.com/	General	OFF	3-7Days	48	45	1k	Guest Post	Dofollow
http://networkustad.com/	Tech	$140	3-7Days	62	70	5k	Guest Post	DOFOLLOW
https://ultraupdates.com/	General	$180	3-7Days	79	71	3k	Guest Post	DOFOLLOW
https://www.uniquenewsonline.com/	General	$180	3-7Days	54	58	7k	Guest Post	DOFOLLOW
https://dgmnews.com/	general	$200	3-7Days	51	56	10k	Guest post	Dofollow
https://londonlovesbusiness.com/	general	$500	3-7Days	60	74	10k	Guest post	DOFOLLOW
https://doms2cents.com/	General	$180	3-7Days	54	46	2k	Guest post	Dofollow
https://lic-merchant.com/	General	$180	3-7Days	55	44	600	Guest post	DOFOLLOW
http://marketbusinessnews.com/	General	$50	3-7Days	75	77	1k	Guest Post	Dofollow
https://illustratedteacup.com/	general	$380	3-7Days	70	67	2k	Guest post	DOFOLLOW
https://nyweekly.com/	General	$160	3-7Days	60	74	8k	Guest Post	Dofollow
https://ceoweekly.com/	General	$160	3-7Days	61	67	1k	Guest Post	Dofollow
https://ocnjdaily.com/	business and finance	$160	3-7Days	48	63	25k	Guest post	Dofollow
https://seaislenews.com/	business and finance	$160	3-7Days	35	49	8k	Guest post	Dofollow
http://trendingus.com/	general	$320	3-7Days	55	52	45k	Guest post	Dofollow
https://thedatascientist.com/	general	$200	3-7Days	52	52	36k	Guest post	Dofollow
https://theusaleaders.com/	general	$200	3-7Days	58	40	12k	Guest post	Dofollow
https://www.theeducationmagazine.com/	general	$200	3-7Days	62	59	2k	Guest post	Dofollow
https://businessnewstips.com/	business and finance	$200	3-7Days	59	45	6.5K	Guest post	Dofollow
https://thepinnaclelist.com/	home improvement	$180	3-7Days	55	62	10k	Guest post	DOFOLLOW
https://theeducationmagazine.com/	general	$180	3-7Days	58	36	2k	Guest post	Dofollow
https://businessapac.com/	general	$180	3-7Days	61	18	10k	Guest post	DOFOLLOW
https://globalhealthcaremagazine.com/	general	$180	3-7Days	39	41	200	Guest post	Dofollow
http://harlemworldmagazine.com/	general	$180	3-7Days	54	71	3k	Guest post	DOFOLLOW
http://metapress.com/	general	$200	3-7Days	77	81	34k	Guest post	Dofollow
http://soup.io/	general	$180	3-7Days	80	78	4k	Guest post	Dofollow
https://hardreset.info/	general	$180	3-7Days	60	60	250k	Guest post	Dofollow
https://imei.info/	general	$180	3-7Days	71	69	1M	Guest post	DOFOLLOW
https://computertechreviews.com/	general	$180	3-7Days	61	71	7k	Guest post	Dofollow
https://supanet.com/	general	$180	3-7Days	56	67	17k	Guest post	DOFOLLOW
https://monomousumi.com/	general	$180	3-7Days	59	55	60k	Guest post	Dofollow
https://thenewsgod.com	general	$200	3-7Days	61	60	3k	Guest post	DOFOLLOW
https://breakingac.com	general	$180	3-7Days	41	45	34k	Guest post	Dofollow
http://ultraupdates.com/	general	$180	3-7Days	76	43	100	Guest post	DOFOLLOW
http://tastefullspace.com/	general	$180	3-7Days	54	10	100	Guest post	DOFOLLOW
https://www.urbansplatter.com/	general	$200	3-7Days	45	60	32k	Guest post	DOFOLLOW
http://ocnjdaily.com/	general	$180	3-7Days	47	66	30k	Guest post	DOFOLLOW
https://seaislenews.com/	general	$180	3-7Days	34	55	8k	Guest post	Dofollow
http://thedatascientist.com/	Tech	$180	3-7Days	36	41	30k	Guest post	DOFOLLOW
https://kahawatungu.com/	General	$200	3-7Days	47	55	16k	Guest post	Dofollow
http://europeanfinancialreview.com/	general	$180	3-7Days	47	62	500	Guest post	DOFOLLOW
http://worldfinancialreview.com/	General	$180	3-7Days	49	73	500	Guest post	DOFOLLOW
http://europeanbusinessreview.com/	General	$180	3-7Days	56	79	1k	Guest post	DOFOLLOW
http://luxurytravelmagazine.com/	Travel	$180	3-7Days	52	71	9k	Guest post	Dofollow
http://puretravel.com/	Travel	$200	3-7Days	44	59	500	Guest post	Dofollow
http://drifttravel.com/	Travel	$300	3-7Days	38	62	7k	Guest post	Dofollow
http://travelblog.org/	Travel	$160	3-7Days	72	71	2k	Guest post	Dofollow
https://fashionweekonline.com/	fashion	$240	3-7Days	64	71	45k	Guest post	Dofollow
https://1883magazine.com/	fashion	$200	3-7Days	52	61	57k	Guest post	Dofollow
https://www.reveriepage.com/	fashion	$220	3-7Days	32	54	41k	Guest post	Dofollow
lovewhatmatters.com	Family	$5,000	3-7Days	65	68	10k	Guest Post	DOFOLLOW
http://sheenmagazine.com/	General	$880	3-7Days	64	69	7k	Guest Post	Dofollow
https://technologiest.org/	general	$400	3-7Days	53	57	13k	Guest Post	Dofollow
https://plainenglish.io/	Tech	400$	3-7Days	54	76	60K	Guest post 	Do-Follow
portotheme.com	Tech	200$	3-7Days	70	90	9K	Guest post 	Do-Follow
https://hackread.com/	Tech	460$	3-7Days	77	77	13K	Guest post 	Do-Follow
https://aijourn.com/	Tech	80$	3-7Days	42	69	3.5K	Guest post 	Do-Follow
idevicecentral.com	Tech	80$	3-7Days	57	37	4.2K	Guest post 	Do-Follow
https://bestforandroid.com/	Tech	600$	3-7Days	48	62	750K	Guest post 	Do-Follow
androidheadlines.com	Tech	900$	3-7Days	85	78	65K	Guest post 	Do-Follow
Autogpt.net	Tech	600$	3-7Days	60	66	80K	Guest post 	Do-Follow
https://addicted2success.com/	Tech	440$	3-7Days	61	73	9K	Guest post 	Do-Follow
iprovpn.com	Tech	1,300$	3-7Days	37	63	370K	Guest post 	Do-Follow
https://www.talkandroid.com/	Tech	300$	3-7Days	75	69	33K	Guest post 	Do-Follow
https://computingforgeeks.com/	Tech	off	3-7Days	50	73	3.5K	Guest post 	Do-Follow
https://phandroid.com/	Tech	off	3-7Days	82	74	7K	Guest post 	Do-Follow
https://www.redmondpie.com/	Tech	260$	3-7Days	77	73	40K	Guest post 	No-Follow
https://www.spacedaily.com/	Tech	400$	3-7Days	68	73	60K	Guest post 	Do-Follow
tabletmonkeys.com	Tech	300$	3-7Days	55	49	8.5K	Guest post 	Do-Follow
www.criticalhit.net	Tech	460$	3-7Days	79	65	30K	Guest post 	Do-Follow
https://hacker9.com/	Tech	400$	3-7Days	67	74	350K	Guest post 	Do-Follow
applemagazine.com	Tech	600$	3-7Days	49	62	30K	Guest post 	Do-Follow
feedbuzzard.com	Tech	340$	3-7Days	56	66	14K	Guest post 	Do-Follow
viraltimesmagazine.com	Tech	60$	3-7Days	66	54	7K	Guest post 	Do-Follow
tribuneonlineng.com	Tech	340$	3-7Days	75	75	585K	Guest post 	Do-Follow
disquantified.org	Tech	240$	3-7Days	50	64	13.5K	Guest post 	Do-Follow
https://turdwords.com/	Tech	70$	3-7Days	19	18	5.5K	Guest post 	Do-Follow
https://www.geniusfirms.com/	Tech	160$	3-7Days	36	60	11K	Guest post 	Do-Follow
https://www.speakrj.com/	Tech	160$	3-7Days	39	42	30K	Guest post 	Do-Follow
qrius.com	Tech	240$	3-7Days	54	68	61K	Guest post 	Do-Follow
"""

sites = []
lines = [l.strip() for l in data.strip().split("\n") if l.strip()]

def get_name(url):
    clean_url = url.replace('https://', '').replace('http://', '').replace('www.', '').split('/')[0]
    parts = clean_url.split('.')
    if len(parts) > 1:
        name = parts[-2].capitalize()
        if len(parts) > 2 and len(parts[-2]) < 3:
             name = parts[-3].capitalize()
        return name
    return clean_url

for line in lines[1:]:
    cols = line.split("\t")
    if len(cols) < 5: continue
    
    url = cols[0].strip()
    if not url.startswith('http'):
        url = 'https://' + url
        
    category = cols[1].strip().title()
    price = cols[2].strip()
    tat = cols[3].strip()
    da = cols[4].strip()
    dr = cols[5].strip()
    traffic = cols[6].strip()
    type_ = cols[7].strip()
    links = cols[8].strip()
    
    name = get_name(url)
    
    descriptions = {
        "General": "A high-authority global news and general interest platform, perfect for diverse link building and massive audience reach.",
        "Tech": "A premier technology and innovation hub, delivering expert insights and high-impact digital authority for tech brands.",
        "Business And Finance": "Leading business and financial media outlet providing critical authority and corporate trust for professional placements.",
        "Home Improvement": "A comprehensive resource for architecture, interior design, and home renovation excellence with a refined global audience.",
        "Fashion": "High-end fashion and lifestyle publication, showcasing trends and creative talent for the modern style-conscious demographic.",
        "Family": "Respected community and family-focused platform, ideal for societal commentary and niche-relevant lifestyle placement.",
        "Travel": "Global travel and destination discovery network, offering elite authority and high engagement for the tourism industry.",
        "Crypto": "Real-time cryptocurrency and blockchain innovation hub, trusted by investors for digital transformation insights."
    }
    
    desc = descriptions.get(category, "Authoritative media platform providing premium guest posting opportunities and high-impact digital PR solutions.")
    
    sites.append({
        "url": url,
        "name": name,
        "category": category,
        "price": price,
        "tat": tat,
        "da": da or "0",
        "dr": dr or "0",
        "traffic": traffic,
        "type": type_,
        "links": links,
        "description": desc
    })

with open("d:\\Temp\\work\\sites_final.json", "w") as f:
    json.dump(sites, f, indent=4)
