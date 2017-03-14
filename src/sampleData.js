const sampleData = [{
  id: 'trump',
  articles: [{
    partisanRank: 'L4',
    source: 'The Mercury News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12933141_10154171446216337_975613998513985552_n.jpg?oh=041b8f1f031d7215f3ba54172010b152&oe=596620DE',
    date: '2017-03-12',
    headline: 'Photos: Melania Trump begins to embrace new role as first lady',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAhYzFtNNiKLoJS&url=https%3A%2F%2Fechobox-media.s3.amazonaws.com%2Fsocial_media_images%2F443%2F443-1489270970-1p295hrhjuhi6ti9hdhcmiiu9fu7c6ga.jpg&_nc_hash=AQCiMV6vd2hlJBRU',
    description: 'Melania Trump’s invitation for high-powered women to join her at the White House was about more than the lunch they would eat, or the stated purpose of honoring ...',
    canonicalUrl: 'https://www.facebook.com/mercurynews/posts/10155296833441337'
  },
  {
    partisanRank: 'L3',
    source: 'San Francisco Chronicle',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c1.0.50.50/p50x50/12744176_10153903009384524_2043072041592185478_n.jpg?oh=923238ae164d0d9433149460b05d3c36&oe=592C0E21',
    date: '2017-03-12',
    headline: '3 terrifying possible reasons for Trump’s rant about Obama | Robert Reich',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDEYpbNgkvohslV&url=http%3A%2F%2Fww3.hdnux.com%2Fphotos%2F57%2F53%2F45%2F12499270%2F5%2FrawImage.jpg&_nc_hash=AQCe7pF8T_hJdBhE',
    description: 'Whatever the reason for Trump’s rant, America is in deep trouble.',
    canonicalUrl: 'https://www.facebook.com/sanfranciscochronicle/posts/10155131105814524'
  },
  {
    partisanRank: 'L2',
    source: 'The Hollywood Reporter',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10411111_10152362746067750_5893148296353161546_n.jpg?oh=2dcd5bfe02397f3263f030462d9bf832&oe=59700F81',
    date: '2017-03-12',
    headline: 'Scarlett Johansson is Ivanka Trump in "Complicit" Perfume Ad on \'SNL\'',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQD2TQbgsGGVA8ji&url=http%3A%2F%2Fcdn1.thr.com%2Fsites%2Fdefault%2Ffiles%2F2017%2F03%2Fscarjo_as_ivanka.jpg&_nc_hash=AQDXs8L-wGih0lS9',
    description: '"She’s beautiful, she’s powerful, she’s complicit."',
    canonicalUrl: 'https://www.facebook.com/HollywoodReporter/posts/10154231173837750'
  },
  {
    partisanRank: 'L1',
    source: 'Washington Post',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/13626470_10153958733697293_5637011089315584460_n.png?oh=8e9c74b3a74d1efb329cbb6af6de5f69&oe=59617D68',
    date: '2017-03-12',
    headline: 'McCain to Trump: Retract wiretapping claim or prove it',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDHaSPruT9D0qXg&url=https%3A%2F%2Fimg.washingtonpost.com%2Frf%2Fimage_1484w%2F2010-2019%2FWashingtonPost%2F2016%2F10%2F17%2FEditorial-Opinion%2FImages%2FSenate_2016_Arizona_Debate-b230d-1702.jpg&_nc_hash=AQBUGeekGFaFkazW',
    description: '\'I have no reason to believe that the charge is true,\' the Republican senator said.',
    canonicalUrl: 'https://www.facebook.com/washingtonpost/posts/10154870814102293'
  },
  {
    partisanRank: 'N',
    source: 'NBC News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1621673_805591539460878_8753611874853200748_n.png?oh=dc09a6711f42a37a040d1695737ffdec&oe=5930EDCB',
    date: '2017-03-12',
    headline: 'After pledging to donate salary, Trump administration declines to release proof',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAQnCcu6tJz2SDs&url=http%3A%2F%2Fmedia1.s-nbcnews.com%2Fj%2Fnewscms%2F2017_10%2F1924711%2F170306-trump-oval-office-white-house-948p_c0450f180bfdc7077ce6d119a0cfa747.nbcnews-fp-1200-800.jpg&_nc_hash=AQB9wPTDfFuV8emH',
    description: 'Federal law mandates the president receive a $400,000 annual salary, paid out once a month.',
    canonicalUrl: 'https://www.facebook.com/NBCNews/posts/1736238889729467'
  },
  {
    partisanRank: 'C1',
    source: 'The Hill',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12985451_10153703672994087_5860860619868875285_n.jpg?oh=466f9495f0a23d82bad4db1a27d3afd3&oe=596925E9',
    date: '2017-03-12',
    headline: 'House Intel Committee asks Trump to give evidence of wiretapping claims by Monday',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCJEP24B6njkKCV&url=http%3A%2F%2Fthehill.com%2Fsites%2Fdefault%2Ffiles%2Fblogs%2Ftrump635100034.jpg&_nc_hash=AQCNLZm2d2HtznDs',
    description: 'Trump has kept his distance from the press since making the accusation.',
    canonicalUrl: 'https://www.facebook.com/TheHill/posts/10154653875024087'
  },
  {
    partisanRank: 'C2',
    source: 'The Florida Times-Union',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/282294_10150913583864790_1387558218_n.jpg?oh=31949bdcaa84143311ecd1c8c7c24a1c&oe=59341489',
    date: '2017-03-12',
    headline: 'McCain to Trump: Provide wiretap evidence or retract claim',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBCTjdXujoBLsN1&url=http%3A%2F%2Fjacksonville.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2F1620078_web0_031317JohnMcCain1240.jpg&_nc_hash=AQBDvVDRYKdhYm-B',
    description: 'Associated Press',
    canonicalUrl: 'https://www.facebook.com/FLTimesUnion/posts/10154611167944790'
  },
  {
    partisanRank: 'C3',
    source: 'The Denver Post',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1185249_10151638533154440_2044291716_n.jpg?oh=a9c37bdb23e9aa7f02f41ed58777c9cd&oe=592E2B82',
    date: '2017-03-12',
    headline: 'House panel wants any evidence Trump’s phones were tapped',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQC-OF2tafUb6GeJ&url=http%3A%2F%2Fwww.denverpost.com%2Fwp-content%2Fuploads%2F2017%2F03%2F644947488.jpg%3Fw%3D1024%26h%3D683&_nc_hash=AQAIIQ9n_ND6cMjb',
    description: 'The request was made in a letter sent by committee chairman, Rep. Devin Nunes, R-Calif., and the panel’s ranking Democrat, Rep. Adam Schiff, D-Calif.',
    canonicalUrl: 'https://www.facebook.com/denverpost/posts/10154653940719440'
  },
  {
    partisanRank: 'C5',
    source: 'Knoxville News Sentinel',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14724529_10154516507302649_2882560088089650079_n.png?oh=a0b3c498354f7ae3c12d09dad592c1ee&oe=592710A7',
    date: '2017-03-12',
    headline: 'EPA cuts could be costly to Tennessee',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQC7irkZMCzoSoTz&url=http%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F2736d7a6d12f28b3e75e8e6ed84c1e27359398ac%2Fc%3D0-0-5561-3142%26r%3Dx1683%26c%3D3200x1680%2Flocal%2F-%2Fmedia%2F2017%2F02%2F08%2FTennGroup%2FKnoxville%2F636221592840053835-McClung-03.jpg&_nc_hash=AQD28WGulavB0g4k',
    description: 'Possible Trump administration-backed cuts to EPA could hurt Tennessee',
    canonicalUrl: 'https://www.facebook.com/knoxnews/posts/10155018740662649'
  }
]
},
{
  id: 'judge',
  articles: [{
    partisanRank: 'L1',
    source: 'Newsday',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1382227_10151909989989449_806534758_n.jpg?oh=14ea40751d9874d963b26035b654b28d&oe=59260D48',
    date: '2017-03-12',
    headline: 'Melee breaks out at Nassau traffic court',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBUUKqbpmQmHjHH&url=http%3A%2F%2Fcdn.newsday.com%2Fpolopoly_fs%2F1.13245987.1489282104%21%2FhttpImage%2Fimage.jpeg_gen%2Fderivatives%2Flandscape_1280%2Fimage.jpeg&_nc_hash=AQBHibSuVvLXQbxy',
    description: '“When the judge has to put somebody in a chokehold, we got a problem.”',
    canonicalUrl: 'https://www.facebook.com/newsday/posts/10155049905959449'
  },
  {
    partisanRank: 'N',
    source: 'CNBC',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10891972_10153082667464369_8047543635589507632_n.png?oh=76bb84c441da6984918b861873879abc&oe=592CA04F',
    date: '2017-03-12',
    headline: 'Trump\'s revised travel ban dealt first court setback',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCsIu9ODvpSLmsn&url=http%3A%2F%2Ffm.cnbc.com%2Fapplications%2Fcnbc.com%2Fresources%2Fimg%2Feditorial%2F2017%2F03%2F10%2F104334423-GettyImages-635100034.1910x1000.jpg&_nc_hash=AQDDvA4JCh1z89Le',
    description: 'Judge bars enforcement of the policy to deny U.S. entry to the wife and child of a Syrian refugee granted asylum in the United States.',
    canonicalUrl: 'https://www.facebook.com/cnbc/posts/10155299740939369'
  },
  {
    partisanRank: 'C1',
    source: 'Daily Express',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11665416_1118578774869047_898942630122989843_n.jpg?oh=96c46459d1f7458e6bf64413f0896f2f&oe=592E0993',
    date: '2017-03-12',
    headline: 'Illegal immigrant handed £40,000 as judge says prolific criminal was ‘locked up too long’',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQC0BTuvrG1_KWtF&url=http%3A%2F%2Fcdn.images.express.co.uk%2Fimg%2Fdynamic%2F1%2F750x445%2F778085.jpg&_nc_hash=AQCqyHyA3zOI0BYM',
    description: 'THOUSANDS of pounds of taxpayers money has been handed to a prolific criminal who has lived illegally in Britain for 17 years after a judge ruled the Iranian was locked up for “too long”.',
    canonicalUrl: 'https://www.facebook.com/DailyExpress/posts/1542932695766984'
  }
]
},
{
  id: 'healthcare',
  articles: [{
    partisanRank: 'L3',
    source: 'The Baltimore Sun',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10603227_10152755868784712_2664903037313031020_n.jpg?oh=f7df7067dc3fbcef2b0d755bf03866be&oe=59704BCD',
    date: '2017-03-12',
    headline: 'Millions might lose health coverage? Not to hear Republican leaders tell it',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAlHgqlEugAoWsI&url=http%3A%2F%2Fwww.trbimg.com%2Fimg-58c58a97%2Fturbine%2Fct-gop-healthcare-20170312&_nc_hash=AQApl06qojXpuo_y',
    description: 'Depending on whom you ask in GOP leadership, people will gain coverage if the Republican alternative to the Affordable Care Act passes Congress.',
    canonicalUrl: 'https://www.facebook.com/baltimoresun/posts/10155122897919712'
  },
  {
    partisanRank: 'L1',
    source: 'CBS News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c2.0.50.50/p50x50/11052868_10153128917450950_7657871426571821819_n.jpg?oh=16615c76b5c5b3c311b4cbea386b271e&oe=5971C560',
    date: '2017-03-12',
    headline: 'Bernie Sanders calls new health care bill "a tax break for the top 2 percent"',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCLLmkt7yOqtxul&url=http%3A%2F%2Fcbsnews1.cbsistatic.com%2Fhub%2Fi%2F2017%2F03%2F12%2F5edd9696-64ea-49de-863a-22116b1add1a%2Fsanders.jpg&_nc_hash=AQDW-rGGpNsPwzUG',
    description: ' ',
    canonicalUrl: 'https://www.facebook.com/CBSNews/posts/10154440151100950'
  },
  {
    partisanRank: 'N',
    source: 'Detroit Free Press',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10670012_10152773537200530_758277983470617508_n.jpg?oh=da5719f93bf5ec0fc84b9ade3708ad9e&oe=596E9768',
    date: '2017-03-12',
    headline: 'Republicans\' health care proposal is doomed',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCnU1TKY1vvV2Iq&url=http%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F36617138d868a693cfa548979a08ac66a9a22808%2Fc%3D0-72-787-517%26r%3Dx633%26c%3D1200x630%2Flocal%2F-%2Fmedia%2F2017%2F03%2F10%2FDetroitFreePress%2FDetroitFreePress%2F636247772319900891-ABM-Healthcare-Web.jpg&_nc_hash=AQDqCspODn5lvMiD',
    description: 'GOP tries to have its cake and feed it to everyone else at the same time.',
    canonicalUrl: 'https://www.facebook.com/detroitfreepress/posts/10155173797355530'
  },
  {
    partisanRank: 'C1',
    source: 'Washington Examiner',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12507324_10153546664844160_8681130256481102644_n.png?oh=f5bf5e70215cd8a8136e53f9c3b661f5&oe=592D33F1',
    date: '2017-03-12',
    headline: 'Cotton warns: Supporting healthcare bill will cost the GOP its House majority in 2018',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAy8xMn7inO4bHa&url=https%3A%2F%2Fs3.amazonaws.com%2Fprod-cust-photo-posts-jfaikqealaka%2F3552-8ffb4e0f6c7cdc0926593c9752a8af79.jpg&_nc_hash=AQCfKrrE0k_4Rms-',
    description: 'Sen. Tom Cotton, R-Ark., Sunday warned House Republicans could pay the ultimate price in the 2018 elections if they vote in support of the Obamacare replacement bill. I would say to my friends in the House of Representatives, with whom I served, do not walk the plank and vote for a bill that cannot ...',
    canonicalUrl: 'https://www.facebook.com/WashingtonExaminer/posts/10154701496214160'
  }
]
},
{
  id: 'congress',
  articles: [{
    partisanRank: 'L5',
    source: 'The Times of India',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14457373_10154629036722139_4431901373813970507_n.jpg?oh=421f3d5e364765cff5dab6ba916586c2&oe=592BD105',
    date: '2017-03-12',
    headline: 'In Goa, BJP to stake claim to form govt, state unit wants Parrikar as CM',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQC5Ouf1iU4D0jfI&url=http%3A%2F%2Ftimesofindia.indiatimes.com%2Fphoto%2F57604110.cms%3F120762&_nc_hash=AQA3pAUWB5trXykz',
    description: 'BJP and the Congress are locked in a post-poll battle to secure the support of smaller parties for government formation.',
    canonicalUrl: 'https://www.facebook.com/TimesofIndia/posts/10155176385982139'
  },
  {
    partisanRank: 'L4',
    source: 'The Economist',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1380143_10151921706179060_1648026702_n.png?oh=c0733eb2e4960366036e40201c9ccaf0&oe=595F25B4',
    date: '2017-03-12',
    headline: 'Donald Trump’s habit of making accusations without evidence is corrosive',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCFH07tiGd-9tpA&url=https%3A%2F%2Fs3.amazonaws.com%2Fprod-cust-photo-posts-jfaikqealaka%2F783-190a5e1a346adc191e1e93896df49151.png&_nc_hash=AQCSlKjQyTaC0xco',
    description: 'Everything-gate',
    canonicalUrl: 'https://www.facebook.com/TheEconomist/posts/10155185242119060'
  },
  {
    partisanRank: 'L3',
    source: 'The Baltimore Sun',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10603227_10152755868784712_2664903037313031020_n.jpg?oh=f7df7067dc3fbcef2b0d755bf03866be&oe=59704BCD',
    date: '2017-03-12',
    headline: 'Millions might lose health coverage? Not to hear Republican leaders tell it',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAlHgqlEugAoWsI&url=http%3A%2F%2Fwww.trbimg.com%2Fimg-58c58a97%2Fturbine%2Fct-gop-healthcare-20170312&_nc_hash=AQApl06qojXpuo_y',
    description: 'Depending on whom you ask in GOP leadership, people will gain coverage if the Republican alternative to the Affordable Care Act passes Congress.',
    canonicalUrl: 'https://www.facebook.com/baltimoresun/posts/10155122897919712'
  },
  {
    partisanRank: 'L1',
    source: 'CBS News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c2.0.50.50/p50x50/11052868_10153128917450950_7657871426571821819_n.jpg?oh=16615c76b5c5b3c311b4cbea386b271e&oe=5971C560',
    date: '2017-03-12',
    headline: 'Marines nude photo scandal expands to all branches of military',
    image: 'https://external.xx.fbcdn.net/safe_image.php?url=http%3A%2F%2Fcbsnews1.cbsistatic.com%2Fhub%2Fi%2F2017%2F03%2F09%2F926ae6e8-1a58-4cc9-aeda-375423becf34%2Fevening-news-1830-clean-20170309-cr470c-01-frame-4856.png&_nc_hash=AQD7oQpurbXn31Hj',
    description: ' ',
    canonicalUrl: 'https://www.facebook.com/CBSNews/posts/10154438499675950'
  },
  {
    partisanRank: 'N',
    source: 'Yahoo News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c28.28.347.347/s50x50/1234558_10151822723996037_1232781499_n.jpg?oh=7ae8319c73b353ec2b8a41b143ac8e56&oe=5927FF9E',
    date: '2017-03-12',
    headline: 'GOP congressman says the poor ‘just don’t want health care’',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQC3sIrkAYtvWQHJ&url=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FX3E8IBo4yTWA.S6vtUz95A--%2FaD0zMTg3O3c9NDc4ODtzbT0xO2FwcGlkPXl0YWNoeW9u%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen-US%2Fhomerun%2Ftime_72%2Fbe1624a25ea960da8285dd9a68267062&_nc_hash=AQBKkq-WowuuMRuO',
    description: 'Roger Marshall spent three decades as a doctor before coming to Congress',
    canonicalUrl: 'https://www.facebook.com/yahoonews/posts/10155391900326037'
  },
  {
    partisanRank: 'C1',
    source: 'Washington Examiner',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12507324_10153546664844160_8681130256481102644_n.png?oh=f5bf5e70215cd8a8136e53f9c3b661f5&oe=592D33F1',
    date: '2017-03-12',
    headline: 'McCain expects more bombshells to come in Trump-Russia investigation',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCnII01ftk6freu&url=https%3A%2F%2Fs3.amazonaws.com%2Fprod-cust-photo-posts-jfaikqealaka%2F3552-37fe0356859d929f53597fbc2f9c0d54.jpg&_nc_hash=AQCLSb4Pv0rGmsmR',
    description: 'Sen. John McCain, R-Ariz., expects Congress\' investigation into President Trump and Russia to reveal additional, unprecedented details about both parties. There\'s a lot of things about our relations with Russia that trouble me a lot, McCain told CNN State of the Union host Jake Tapper on Sunday morn...',
    canonicalUrl: 'https://www.facebook.com/WashingtonExaminer/posts/10154701769229160'
  },
  {
    partisanRank: 'C5',
    source: 'Knoxville News Sentinel',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14724529_10154516507302649_2882560088089650079_n.png?oh=a0b3c498354f7ae3c12d09dad592c1ee&oe=592710A7',
    date: '2017-03-12',
    headline: 'EPA cuts could be costly to Tennessee',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQC7irkZMCzoSoTz&url=http%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F2736d7a6d12f28b3e75e8e6ed84c1e27359398ac%2Fc%3D0-0-5561-3142%26r%3Dx1683%26c%3D3200x1680%2Flocal%2F-%2Fmedia%2F2017%2F02%2F08%2FTennGroup%2FKnoxville%2F636221592840053835-McClung-03.jpg&_nc_hash=AQD28WGulavB0g4k',
    description: 'Possible Trump administration-backed cuts to EPA could hurt Tennessee',
    canonicalUrl: 'https://www.facebook.com/knoxnews/posts/10155018740662649'
  }
]
},
{
  id: 'war',
  articles: [{
    partisanRank: 'L5',
    source: 'The Times of India',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14457373_10154629036722139_4431901373813970507_n.jpg?oh=421f3d5e364765cff5dab6ba916586c2&oe=592BD105',
    date: '2017-03-12',
    headline: 'Meet the Jaipur man who ran BJP\'s war room in UP',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBQyWBZO-SpD7PH&url=http%3A%2F%2Ftimesofindia.indiatimes.com%2Fphoto%2F57602359.cms%3F288647&_nc_hash=AQDQE0kFnQpzoMwr',
    canonicalUrl: 'https://www.facebook.com/TimesofIndia/posts/10155176029312139'
  },
  {
    partisanRank: 'L4',
    source: 'The Economist',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1380143_10151921706179060_1648026702_n.png?oh=c0733eb2e4960366036e40201c9ccaf0&oe=595F25B4',
    date: '2017-03-12',
    headline: 'INTERACTIVE: Why the nuclear threat level is rising',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBW71M_gc3yC5QH&url=https%3A%2F%2Fs3.amazonaws.com%2Fprod-cust-photo-posts-jfaikqealaka%2F783-1bc7fe7b0076069dfb9c47dacb45cafa.png&_nc_hash=AQBvAb9FaqtwflRN',
    description: 'From the archive',
    canonicalUrl: 'https://www.facebook.com/TheEconomist/posts/10155183061894060'
  },
  {
    partisanRank: 'L3',
    source: 'San Francisco Chronicle',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c1.0.50.50/p50x50/12744176_10153903009384524_2043072041592185478_n.jpg?oh=923238ae164d0d9433149460b05d3c36&oe=592C0E21',
    date: '2017-03-12',
    headline: 'California to fight if EPA eases emissions rule',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBEn0iN7huv0EBs&url=http%3A%2F%2Fww3.hdnux.com%2Fphotos%2F57%2F62%2F20%2F12526654%2F5%2FrawImage.jpg&_nc_hash=AQBUwFisg00-4ZVk',
    description: 'The Trump administration is expected to start rolling back tough limits on carbon pollution from cars and trucks this week, and may be considering a plan to revoke California’s authority to set its own pollution standards for vehicles.',
    canonicalUrl: 'https://www.facebook.com/sanfranciscochronicle/posts/10155131503964524'
  },
  {
    partisanRank: 'L2',
    source: 'The Independent',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11051795_10152732082756636_6705742038347351188_n.png?oh=601cf9bc5dda3232bc25396590ec2133&oe=5927D6A8',
    date: '2017-03-12',
    headline: 'World War 3 is coming',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBpYGmibpI4gGbA&url=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2017%2F03%2F10%2F13%2Fworld-war-3.jpg&_nc_hash=AQC5K6X_Zhtl-VGI',
    description: 'Very worrying',
    canonicalUrl: 'https://www.facebook.com/TheIndependentOnline/posts/10154580379911636'
  },
  {
    partisanRank: 'L1',
    source: 'The Wall Street Journal',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10425183_10153042997503128_8853743190705642331_n.jpg?oh=e47987652c394cef7deeb4d0a3ebafd3&oe=595D49E0',
    date: '2017-03-13',
    headline: 'Turkey-Netherlands Row Escalates as Dutch Deport Minister',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCOl0gZWiRVIym_&url=https%3A%2F%2Fsi.wsj.net%2Fpublic%2Fresources%2Fimages%2FBN-SL190_2ZkhV_G_20170311082048.jpg&_nc_hash=AQCeSaK7HnIvSEs2',
    description: 'The feud between Turkey and the Netherlands, which had been brewing for days, boiled over Saturday night, when Dutch authorities deported a Turkish minister from Rotterdam as she attempted to hold an unauthorized political rally.',
    canonicalUrl: 'https://www.facebook.com/wsj/posts/10155611775693128'
  },
  {
    partisanRank: 'C1',
    source: 'Newsmax',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c2.0.50.50/p50x50/250562_10150201307517377_7328715_n.jpg?oh=4372133dd0ebe1b075b7558a25f17024&oe=59335A35',
    date: '2017-03-12',
    headline: 'Michael Savage Slams CNN for \'Communist\' Attacks on Trump',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCgkpxjX6ivpw4G&url=http%3A%2F%2Fcdn.newsmax.com%2Fgetattachment%2Fcdff455b-53f2-4347-872c-5722fc261a44%2Fsavage-600-500-ap.jpg.aspx%3Fwidth%3D300%26height%3D248&_nc_hash=AQB8r1F6Y_D9n7Wh',
    description: 'Top radio host Michael Savage on Friday defended President Donald Trump\'s war on the media, comparing many in American press to the "far left" and even the old Soviet Communist press.',
    canonicalUrl: 'https://www.facebook.com/newsmax/posts/10154248049947377'
  },
  {
    partisanRank: 'C2',
    source: 'Breitbart',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/227458_10152346853555354_25751187_n.jpg?oh=c960a50a25f08f37c08eff204db1f1da&oe=596FFE4B',
    date: '2017-03-12',
    headline: 'Second Explosion Rocks Sweden in 24 Hours, Suspected Bomb',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBuwa8CE0PB0Zzp&url=http%3A%2F%2Fmedia.breitbart.com%2Fmedia%2F2017%2F03%2FGettyImages-518374670.jpg&_nc_hash=AQBW4MlDZqzqd6xb',
    description: ' ',
    canonicalUrl: 'https://www.facebook.com/Breitbart/posts/10158755014015354'
  }
]
},
{
  id: 'college',
  articles: [{
    partisanRank: 'L4',
    source: 'The Economist',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1380143_10151921706179060_1648026702_n.png?oh=c0733eb2e4960366036e40201c9ccaf0&oe=595F25B4',
    date: '2017-03-12',
    headline: 'Free speech has been claimed by conservatives',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBJfvHq30zc_wo-&url=https%3A%2F%2Fs3.amazonaws.com%2Fprod-cust-photo-posts-jfaikqealaka%2F783-5c3e614adfbc9e4b3ddb2989cd212080.jpg&_nc_hash=AQBLepQdo2ODkDSm',
    description: 'Middlebury College and the generational clash within liberalism',
    canonicalUrl: 'https://www.facebook.com/TheEconomist/posts/10155184592054060'
  },
  {
    partisanRank: 'L2',
    source: 'The New York Times',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/420194_448960124998_2006714158_n.jpg?oh=eb474d03a773119e1fb0e2ecb7f7be54&oe=596B7F80',
    date: '2017-03-12',
    headline: 'The Dangerous Safety of College',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBtlAYo8Yp0rN2c&url=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2017%2F03%2F12%2Fopinion%2Fsunday%2F12bruni%2F12bruni-facebookJumbo.jpg&_nc_hash=AQDotOFxQ_4oAXIJ',
    description: 'The ugly protest at Middlebury is a wake-up call. We’re failing today’s students.',
    canonicalUrl: 'https://www.facebook.com/nytimes/posts/10151109394484999'
  },
  {
    partisanRank: 'L1',
    source: 'The Atlantic',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/311180_10151302641288487_1823603358_n.jpg?oh=8d2714f581601bc7e189837a01f96748&oe=5968BEFA',
    date: '2017-03-12',
    headline: 'You probably should have majored in computer science',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQD7_QEN3KCDGzcs&url=https%3A%2F%2Fqzprod.files.wordpress.com%2F2017%2F03%2Fstudents-contemplate-careers.jpg%3Fquality%3D80%26strip%3Dall%26w%3D1600&_nc_hash=AQAbiOwD3n_B0gzt',
    description: 'The ratio of recent college graduates to open jobs is insane.',
    canonicalUrl: 'https://www.facebook.com/TheAtlantic/posts/10155202371963487'
  },
  {
    partisanRank: 'N',
    source: 'Detroit Free Press',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10670012_10152773537200530_758277983470617508_n.jpg?oh=da5719f93bf5ec0fc84b9ade3708ad9e&oe=596E9768',
    date: '2017-03-12',
    headline: 'Michigan a No. 7 seed, will play Oklahoma State in NCAA tournament',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQC6dJqlWUHmOs3T&url=http%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2Fcd2cb17292a572a6816dacbbf11a12f93477f101%2Fc%3D0-256-2988-1944%26r%3Dx633%26c%3D1200x630%2Flocal%2F-%2Fmedia%2F2017%2F03%2F12%2FDetroitFreePress%2FDetroitFreePress%2F636249372538928942-AP-B10-Michigan-Wisconsin-Ba-3-.jpg&_nc_hash=AQDDIoJd-7u-AC_5',
    description: 'U-M enters the NCAA tournament as a No. 7 seed and will play Oklahoma State in the first round on Friday',
    canonicalUrl: 'https://www.facebook.com/detroitfreepress/posts/10155176076430530'
  },
  {
    partisanRank: 'C1',
    source: 'Milwaukee Journal Sentinel',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1463121_10152067171543816_1808788188_n.jpg?oh=04021e6bd6196f37c54aa69139d5adbc&oe=59685696',
    date: '2017-03-12',
    headline: 'Marquette seeded No. 10 in NCAA Tournament',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCvZ0p4EmK0-geT&url=http%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F61910a428f9ce649187ff9631a0c78aea8fee2ad%2Fc%3D0-98-4866-2847%26r%3Dx1683%26c%3D3200x1680%2Flocal%2F-%2Fmedia%2F2017%2F03%2F12%2FWIGroup%2FMilwaukee%2F636249373683976282-AP-Xavier-Marquette-Basketball.1.jpg&_nc_hash=AQCHQjOxsguaegx_',
    description: 'The wait is over for the Marquette men\'s basketball team. The Golden Eagles are going dancing again.',
    canonicalUrl: 'https://www.facebook.com/journalsentinel/posts/10155302461033816'
  },
  {
    partisanRank: 'C3',
    source: 'St. Louis Post-Dispatch',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14022090_10154511115504885_1831531032348027270_n.png?oh=27a72d756ac465bbc2cb16c5c60c8a14&oe=5966DD55',
    date: '2017-03-12',
    headline: 'Columbus: Hip neighborhoods, fun attractions make it worth a visit',
    image: 'https://external.xx.fbcdn.net/safe_image.php?url=http%3A%2F%2Fbloximages.newyork1.vip.townnews.com%2Fstltoday.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2Fd%2F7e%2Fd7e0a710-4f84-59e1-a910-efd70cc67123%2F58c022628ee38.image.jpg%3Fresize%3D1200%252C771&_nc_hash=AQCRV-wgfa1k20cy',
    description: 'What we found was a fun college town, a booming arts town and a bunch of colorful neighborhoods sprinkled throughout the city.',
    canonicalUrl: 'https://www.facebook.com/STLPD/posts/10155191522639885'
  },
  {
    partisanRank: 'C5',
    source: 'The Kansas City Star',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c17.17.216.216/s50x50/263663_10150201074764094_4071675_n.jpg?oh=063929e2244b10e17f839ed3547581a5&oe=595D3F1C',
    date: '2017-03-12',
    headline: 'KU gets No. 1 seed in NCAA Tourney, Jayhawks’ Final Four path goes through Tulsa, KC',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAEiUBNpWTBC4R3&url=http%3A%2F%2Fwww.kansascity.com%2Fsports%2Fcollege%2Fbig-12%2Funiversity-of-kansas%2Fwwqbdn%2Fpicture138086698%2FALTERNATES%2FLANDSCAPE_1140%2Fjayhawks&_nc_hash=AQAopPuG5Ep8LDck',
    description: 'What do you think of the Jayhawks\' draw in the tournament? Can they go all the way to the championship?',
    canonicalUrl: 'https://www.facebook.com/kansascitystar/posts/10154597032809094'
  }
]
}
];

export default sampleData;
