const sampleData = [{
  id: '\'obamacare\'',
  articles: [{
    partisanRank: 'L3',
    source: 'The New York Times',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/420194_448960124998_2006714158_n.jpg?oh=eb474d03a773119e1fb0e2ecb7f7be54&oe=596B7F80',
    date: '2017-03-14',
    headline: 'The Original Lie About Obamacare',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAUz0aymFv32ikP&url=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2017%2F03%2F14%2Fopinion%2F14leonhardtWeb%2F14leonhardtWeb-facebookJumbo.jpg&_nc_hash=AQDvB0Ulo6xZ4bF1',
    description: 'And how that lie led the Republicans into the mess they’re now in.',
    canonicalUrl: 'https://www.nytimes.com/2017/03/14/opinion/the-original-lie-about-obamacare.html?smid=fb-nytimes&smtyp=cur'
  }, {
    partisanRank: 'L2',
    source: 'Daily Kos',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12794441_10154047834719255_5302242364924208190_n.jpg?oh=c0bf85f83df68c3148e2f4462bb88ce0&oe=59287F49',
    date: '2017-03-14',
    headline: 'Know What Makes Nebraskans Confrontational? Threaten to Take Away Their Obamacare!',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDeMnlRMtEErNbz&url=http%3A%2F%2Fimages.dailykos.com%2Fimages%2F377158%2Fstory_image%2FFort4.JPG%3F1489469387&_nc_hash=AQDmdn4tiTUy3CnU',
    description: 'Responding to a flood of constituent requests to his office, US Congressman Jeff Fortenberry of Nebraska’s 1st District gave just three days notice to the public of a community town hall on Monday, 3/14/17 at 5:30 pm in Lincoln. 800+ Nebraskans...',
    canonicalUrl: 'http://www.dailykos.com/stories/2017/3/13/1643073/-Know-What-Makes-Nebraskans-Confrontational-Threaten-to-Take-Away-Their-Obamacare?detail=facebook'
  }, {
    partisanRank: 'L1',
    source: 'USA TODAY',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1010865_10151474071775667_343037047_n.png?oh=46b389c33501affd009d70a4bb10a406&oe=596A2E07',
    date: '2017-03-14',
    headline: 'Fact check: How accurate were CBO’s Obamacare predictions?',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBOB10VIrMFNMrb&url=http%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F083d16905ee2b8d439f17c535bbb84725e15b14f%2Fc%3D0-0-3683-2081%26r%3Dx1683%26c%3D3200x1680%2Flocal%2F-%2Fmedia%2F2017%2F03%2F14%2FUSATODAY%2FUSATODAY%2F636250810944554335-AP-Health-Care-Overhaul.jpg&_nc_hash=AQBfb9CzHrOlb5Kt',
    description: 'So, was the Congressional Budget Office really “way, way off … in every aspect” of how it predicted that Obamacare would work, as the White House...',
    canonicalUrl: 'http://usat.ly/2mFwKzy'
  }, {
    partisanRank: 'N',
    source: 'Detroit Free Press',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10670012_10152773537200530_758277983470617508_n.jpg?oh=da5719f93bf5ec0fc84b9ade3708ad9e&oe=596E9768',
    date: '2017-03-14',
    headline: 'Obamacare replacement hits Michigan\'s working poor the hardest',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQD5DWIC_7kPiNkn&url=http%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F9a0629bb9384864ef713eb243b19b9c340befc47%2Fc%3D0-278-5472-3370%26r%3Dx1683%26c%3D3200x1680%2Flocal%2F-%2Fmedia%2F2017%2F02%2F20%2FDetroitFreePress%2FDetroitFreePress%2F636231919562126130-AP-Congress-OTK.jpg&_nc_hash=AQCAu-oihhGrGxuT',
    description: 'Nonpartisan analysis suggests Michigan\'s Medicaid expansion will be hit hard by Republican health care plan',
    canonicalUrl: 'http://www.freep.com/story/news/politics/2017/03/13/obamacare-replacement-hits-michigans-working-poor-hardest/99142552/'
  }, {
    partisanRank: 'C1',
    source: 'The Hill',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12985451_10153703672994087_5860860619868875285_n.jpg?oh=466f9495f0a23d82bad4db1a27d3afd3&oe=596925E9',
    date: '2017-03-14',
    headline: 'GOP lawmaker: I will vote against GOP healthcare bill',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAJRsSlcNdeURiz&url=http%3A%2F%2Fthehill.com%2Fsites%2Fdefault%2Ffiles%2Farticle_images%2Froslehtinen031417getty.jpg&_nc_hash=AQCGGDgthCJ3F-oE',
    description: 'Her opposition signals a major problem for Paul Ryan in winning the support of moderate Republicans.',
    canonicalUrl: 'http://hill.cm/sgpCTLK'
  }, {
    partisanRank: 'C3',
    source: 'Fox News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/417751_10150581617531336_1949382366_n.jpg?oh=9415eb9a2479841902ad4d414266a1c2&oe=592C2286',
    date: '2017-03-14',
    headline: 'Eric Bolling: RyanCare Is Still ObamaCare. Here Are Five Ways to Start Over',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDm50b6JVkR3v5O&url=http%3A%2F%2Fa57.foxnews.com%2Fmedia2.foxnews.com%2FBrightCove%2F694940094001%2F2017%2F03%2F13%2F0%2F0%2F694940094001_5358115852001_5358096556001-vs.jpg%3Fve%3D1&_nc_hash=AQB0Fngsbtkbnzwx',
    description: 'As a staunch conservative and loyal supporter of President Trump from the very beginning, I am outraged by the events of the last two weeks.',
    canonicalUrl: 'http://www.foxnews.com/opinion/2017/03/14/eric-bolling-ryancare-is-still-obamacare-here-are-five-ways-to-start-over.html'
  }, {
    partisanRank: 'C4',
    source: 'The Dallas Morning News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14449982_10154169096853800_1585672512449107797_n.png?oh=6d947399e7c0ac720aa91197ab9d7401&oe=5973D7D5',
    date: '2017-03-14',
    headline: 'Low-income Texans would see federal assistance drop in GOP health care plan',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDuwPhB4XZkaTIa&url=https%3A%2F%2Fdallasnews.imgix.net%2F1489423210-650498112.jpg%3Fw%3D1200%26h%3D630%26format%3Djpg%26crop%3Dfaces%26fit%3Dcrop&_nc_hash=AQBpF24LsHJrYpZ_',
    description: 'Middle-class Texans who saw no federal help in paying for Obamacare would get some relief under the new GOP health care plan.',
    canonicalUrl: 'http://www.dallasnews.com/news/politics/2017/03/13/low-income-texans-see-federal-assistance-drop-gop-health-care-plan'
  }, {
    partisanRank: 'C5',
    source: 'The Kansas City Star',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c17.17.216.216/s50x50/263663_10150201074764094_4071675_n.jpg?oh=063929e2244b10e17f839ed3547581a5&oe=595D3F1C',
    date: '2017-03-14',
    headline: 'Beyond the Bubble: White House leans on state Republicans to sell GOP healthcare plan',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDQcLFZ1PZ2nYWV&url=http%3A%2F%2Fpics.mcclatchyinteractive.com%2Fnews%2Fpolitics-government%2F7e7qez%2Fpicture138365773%2FALTERNATES%2FLANDSCAPE_1140%2FAP_17066807264489&_nc_hash=AQAoLSklRyovFAxL',
    description: '"I don\'t think anyone really wants to go all-in on this plan"—lawmakers in Missouri and Kansas aren\'t exactly embracing "Obamacare 2.0," Bryan Lowry explains in our latest politics podcast.',
    canonicalUrl: 'http://www.kansascity.com/news/politics-government/article138365778.html#btb'
  }]
}, {
  id: '\'theresa-may\'',
  articles: [{
    partisanRank: 'L5',
    source: 'The Times of India',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14457373_10154629036722139_4431901373813970507_n.jpg?oh=421f3d5e364765cff5dab6ba916586c2&oe=592BD105',
    date: '2017-03-14',
    headline: 'Theresa May says will have Brexit trigger in \'coming days\'',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAOQgSGbVI_z84a&url=fbstaging%3A%2F%2Fgraph.facebook.com%2Fstaging_resources%2FMDExMDE1NTE4NDE0NzM2NzEzOTo2NjU4NjQzMg%3D%3D&_nc_hash=AQDF_Rmpm3oTC8hP',
    description: '"We remain on track with the timetable I set out six months ago," Theresa May said.',
    canonicalUrl: 'http://timesofindia.indiatimes.com/world/uk/theresa-may-says-will-have-brexit-trigger-in-coming-days/articleshow/57634338.cms?utm_source=facebook.com&utm_medium=referral&utm_campaign=TOI'
  }, {
    partisanRank: 'L3',
    source: 'BBC News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1926656_10151955586072217_265500303_n.png?oh=be3a78104d9320dc8f34b3261493a822&oe=595C705C',
    date: '2017-03-14',
    headline: '#IndyRef2: Theresa May \'should not block referendum\'',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDwtn47rlZ93kft&url=http%3A%2F%2Fichef-1.bbci.co.uk%2Fnews%2F1024%2Fcpsprodpb%2F102B0%2Fproduction%2F_95142266_pa.jpg&_nc_hash=AQBp3geqK-LAI72q',
    description: ' ',
    canonicalUrl: 'http://bbc.in/2mEZAjv'
  }, {
    partisanRank: 'L2',
    source: 'The Independent',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11051795_10152732082756636_6705742038347351188_n.png?oh=601cf9bc5dda3232bc25396590ec2133&oe=5927D6A8',
    date: '2017-03-14',
    headline: 'Theresa May \'will block Nicola Sturgeon second Scottish independence referendum\'',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAE1eyT0QqflfHr&url=https%3A%2F%2Fstatic.independent.co.uk%2Fs3fs-public%2Fthumbnails%2Fimage%2F2017%2F03%2F14%2F07%2Ftheresa-may-1.jpg&_nc_hash=AQBirGacysmJPm2S',
    description: 'Whoa',
    canonicalUrl: 'http://www.independent.co.uk/news/uk/politics/theresa-may-nicola-sturgeon-scottish-independence-second-referendum-a7628491.html?cmpid=facebook-post'
  }, {
    partisanRank: 'L1',
    source: 'Bloomberg',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12938226_10154061886856880_2984669091353955247_n.png?oh=01b8dc7073533d3069048770ad5d660b&oe=596EFF90',
    date: '2017-03-14',
    headline: 'Pound Tumbles After Theresa May Receives the Brexit Go-Ahead',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBbDShg3xgcEY14&url=https%3A%2F%2Fs3.amazonaws.com%2Fprod-cust-photo-posts-jfaikqealaka%2F3687-89813ec7bf15e286c3e708297e422dc2.jpg&_nc_hash=AQA8K9KMIqyO1NzE',
    description: 'It\'s fallen against all of its Group-of-10 peers.',
    canonicalUrl: 'http://bloom.bg/2mmyex0'
  }, {
    partisanRank: 'N',
    source: 'Daily Mail',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1231156_586524008074018_1083454926_n.png?oh=4aa9af1e3ff1611171dbc520d57d32dc&oe=59621528',
    date: '2017-03-14',
    headline: 'Sturgeon insists she DOES have a mandate to call a Scottish independence vote',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAUh9rt1rj0ef7w&url=http%3A%2F%2Fi.dailymail.co.uk%2Fi%2Fpix%2F2017%2F03%2F14%2F11%2F3E420E3E00000578-0-image-a-29_1489491486301.jpg&_nc_hash=AQDLEWW5arFfxddg',
    description: 'The SNP leader said she had been elected on a bigger share of the vote than the Tories secured in Westminster in 2015 and taunted the Prime Minister over not being \'elected by anyone\'.',
    canonicalUrl: 'http://dailym.ai/2mIniNx'
  }, {
    partisanRank: 'C1',
    source: 'Daily Express',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11665416_1118578774869047_898942630122989843_n.jpg?oh=96c46459d1f7458e6bf64413f0896f2f&oe=592E0993',
    date: '2017-03-14',
    headline: '\'At least I was elected!\' Nicola Sturgeon takes vicious SWIPE at May in brutal Twitter dig',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDFi4L4sdeBuAEi&url=fbstaging%3A%2F%2Fgraph.facebook.com%2Fstaging_resources%2FMDExNTQ2MTIwMTE1NDQ4MjQyOjcyMzkzODA1Ng%3D%3D&_nc_hash=AQCsx5gnOOUhKFfx',
    description: 'NICOLA STURGEON has taken a swipe at Theresa May this morning - reminding the Prime Minister she was never elected by the voting public.',
    canonicalUrl: 'http://www.express.co.uk/news/politics/778972/nicola-sturgeon-theresa-may-scottish-referendum-twitter-elected'
  }]
}, {
  id: '\'trump-tower\'',
  articles: [{
    partisanRank: 'L2',
    source: 'NBC News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1621673_805591539460878_8753611874853200748_n.png?oh=dc09a6711f42a37a040d1695737ffdec&oe=5930EDCB',
    date: '2017-03-14',
    headline: 'Justice Dept. asks for more time in Trump "wiretap" evidence request',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDcDl2H4xh1tUPu&url=http%3A%2F%2Fmedia3.s-nbcnews.com%2Fj%2Fnewscms%2F2017_11%2F1932076%2F170313-trump-tower-mn-0905_fb27357a82607de4993e79fb207a7ea5.nbcnews-fp-1200-800.jpg&_nc_hash=AQADA91rTgVG-vGq',
    description: 'Lawmakers may resort to a "compulsory process" if it doesn\'t get answers, a spokesman said.',
    canonicalUrl: 'http://nbcnews.to/2nhZOA9'
  }, {
    partisanRank: 'L1',
    source: 'The Raw Story',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c52.53.257.257/s50x50/10360839_10152703508732235_6694429870530559967_n.jpg?oh=a8652ddcb98e984fe4dbcd1d7c80a755&oe=592C7523',
    date: '2017-03-14',
    headline: '‘Were you lying, Mr. President?’: Mika Brzezinski slams Trump for missing wiretap proof deadline',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDVJjcK_gel0_H8&url=http%3A%2F%2Fwww.rawstory.com%2Fwp-content%2Fuploads%2F2017%2F03%2FScreen-Shot-2017-03-14-at-6.15.32-AM-800x430.png&_nc_hash=AQAgJXO4nyfeXHlG',
    description: 'The deadline came and went for President Donald Trump to provide evidence to Congress that former President Barack Obama wiretapped him in Trump Tower. “Morning Joe” host Mika Brzezinski',
    canonicalUrl: 'http://www.rawstory.com/2017/03/were-you-lying-mr-president-mika-brzezinski-slams-trump-for-wiretap-proof-deadline-629-am-got-it/'
  }, {
    partisanRank: 'N',
    source: 'Orlando Sentinel',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12801602_10153867140557557_2498446881977730040_n.jpg?oh=be1b7829fcb896f921b93dd0b301dae8&oe=595AF179',
    date: '2017-03-15',
    headline: 'Spicer says Trump is \'extremely confident\' DOJ will find evidence to back up wiretap claim',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBdH-fchDOC7sZu&url=http%3A%2F%2Fwww.trbimg.com%2Fimg-58c8619c%2Fturbine%2Fct-trump-wiretap-claim-20170314&_nc_hash=AQDx9B_Ijs8TKNZv',
    description: 'President Donald Trump is "extremely confident" that the Justice Department will find evidence to back up his claim that former president Barack Obama "had my \'wires tapped\' in Trump Tower" during the presidential campaign, even as the White House seeks to discourage the public from taking the president\'s comments literally.',
    canonicalUrl: 'http://www.orlandosentinel.com/news/politics/ct-trump-wiretap-claim-20170314-story.html'
  }, {
    partisanRank: 'C1',
    source: 'The Hill',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12985451_10153703672994087_5860860619868875285_n.jpg?oh=466f9495f0a23d82bad4db1a27d3afd3&oe=596925E9',
    date: '2017-03-14',
    headline: 'White House: Trump \'confident\' Justice Dept will find evidence of his wiretapping claim',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBd8RCcH3LqTTLK&url=http%3A%2F%2Fthehill.com%2Fsites%2Fdefault%2Ffiles%2Farticle_images%2Fobamatrumphandshake_111016gety.jpg&_nc_hash=AQBTpUtinG2Qaz3h',
    description: 'The Justice Department asked for more time to provide the House Intelligence Committee with evidence.',
    canonicalUrl: 'http://hill.cm/oIT3O04'
  }]
}, {
  id: '\'steve-king\'',
  articles: [{
    partisanRank: 'L4',
    source: 'The Mercury News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12933141_10154171446216337_975613998513985552_n.jpg?oh=041b8f1f031d7215f3ba54172010b152&oe=596620DE',
    date: '2017-03-14',
    headline: 'Eugene Robinson: White supremacism soars back into mainstream with Rep. Steve King',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCamMIEMvca0dl5&url=https%3A%2F%2Fechobox-media.s3.amazonaws.com%2Fsocial_media_images%2F443%2F443-1489516129-j28b24131tfaq1c38j02rbi9fpv93qaj.jpg&_nc_hash=AQARem0zxypKKBmn',
    description: 'Iowa Rep. Steve King, in the era of Donald Trump, brings white supremacism back in to the mainstream with unapologetic tweets about ‘Other people’s babies’.',
    canonicalUrl: 'http://bayareane.ws/2mG79Xq'
  }, {
    partisanRank: 'L3',
    source: 'The New York Times',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/420194_448960124998_2006714158_n.jpg?oh=eb474d03a773119e1fb0e2ecb7f7be54&oe=596B7F80',
    date: '2017-03-14',
    headline: 'Steve King, Hurling Insults at Immigrants, Is Rebuked by His Own Party',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAlK0cVdPVes6sY&url=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2017%2F03%2F14%2Fus%2F14king%2F14king-facebookJumbo.jpg&_nc_hash=AQDvxnvj0kQZvtMH',
    description: 'The comment on Twitter about immigrants by the Iowa Representative was praised by the white supremacist David Duke, but many Republicans were quick to condemn his inflammatory rhetoric.',
    canonicalUrl: 'https://www.nytimes.com/2017/03/13/us/politics/steve-king-babies-civilization.html?smid=fb-nytimes&smtyp=cur'
  }, {
    partisanRank: 'L2',
    source: 'CNN',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12289622_10154246192721509_1897912583584847639_n.png?oh=10ddeffb05da472de8a731a4792d47b2&oe=592A24DF',
    date: '2017-03-14',
    headline: 'Steve King: Blacks and Hispanics \'will be fighting each other\' before overtaking whites in population',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQA8PS1sfkM39xP_&url=http%3A%2F%2Fi2.cdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170313084542-steve-king-babies-1-super-tease.jpg&_nc_hash=AQByY2Qx1sCQMyp6',
    description: ' ',
    canonicalUrl: 'http://cnn.it/2nk6OfS'
  }, {
    partisanRank: 'L1',
    source: 'The Raw Story',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c52.53.257.257/s50x50/10360839_10152703508732235_6694429870530559967_n.jpg?oh=a8652ddcb98e984fe4dbcd1d7c80a755&oe=592C7523',
    date: '2017-03-14',
    headline: 'Major Iowa paper drops the hammer on the GOP: If you disagree with Steve King’s racism — end his career',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQA5wiBTY03qd7KI&url=http%3A%2F%2Fwww.rawstory.com%2Fwp-content%2Fuploads%2F2017%2F03%2Fsteve-king-800x430.jpg&_nc_hash=AQCXTyrzP1-K4r-F',
    description: 'Over the weekend, Iowa Rep. Steve King praised Dutch politician Geert Wilders and endorsed the right-wing lawmaker’s anti-immigration stance.',
    canonicalUrl: 'http://www.rawstory.com/2017/03/major-iowa-paper-drops-the-hammer-on-the-gop-if-you-disagree-with-steve-kings-racism-end-his-career/'
  }, {
    partisanRank: 'C1',
    source: 'The Hill',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12985451_10153703672994087_5860860619868875285_n.jpg?oh=466f9495f0a23d82bad4db1a27d3afd3&oe=596925E9',
    date: '2017-03-14',
    headline: 'Pelosi demands GOP strip Steve King of committee chair over \'racist\' remarks',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCFb3tZCQR3n7Lf&url=http%3A%2F%2Fthehill.com%2Fsites%2Fdefault%2Ffiles%2Fpelosinancy_030917gn_lead.jpg&_nc_hash=AQDOmNXidauEIM2J',
    description: '"Steve King’s racist statements must be called out as unacceptable, and the tepid, brush-off response from the Speaker and the GOP leadership is disgraceful."',
    canonicalUrl: 'http://hill.cm/6tHMCMO'
  }, {
    partisanRank: 'C3',
    source: 'My San Antonio from the Express-News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/13590272_10154284280555762_671073089560611250_n.jpg?oh=4a6e961082eb9c5a8b64215c81adef4c&oe=5971AC9A',
    date: '2017-03-14',
    headline: 'Rep. Steve King warns that \'our civilization\' can\'t be restored with \'somebody else\'s babies\'',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQBfzgs2Peu1vJuA&url=http%3A%2F%2Fww4.hdnux.com%2Fphotos%2F55%2F45%2F26%2F11949459%2F5%2FrawImage.jpg&_nc_hash=AQBaf9Gooinwonoe',
    description: 'Rep. Steve King, R-Iowa, has gained notoriety for his often contentious - and, occasionally, almost overtly racist - comments about immigration and the demographics of the United States. On Sunday, in a tweet about the nationalist Dutch politician Geert Wilders, King again appears to have crossed th...',
    canonicalUrl: 'http://trib.al/holzFmY'
  }]
}, {
  id: '\'sanctuary\'',
  articles: [{
    partisanRank: 'L2',
    source: 'NBC News',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/1621673_805591539460878_8753611874853200748_n.png?oh=dc09a6711f42a37a040d1695737ffdec&oe=5930EDCB',
    date: '2017-03-14',
    headline: 'Conservative cities see \'Sanctuary City\' term as scarlet letter',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDv4lh0I331Yaj-&url=http%3A%2F%2Fmedia3.s-nbcnews.com%2Fj%2Fnewscms%2F2017_10%2F1925631%2F170307-donald-trump-executive-order-mn-1610_a0eb7c92dd08fca2df95115c0ad7dc4a.nbcnews-fp-1200-800.jpg&_nc_hash=AQA1Tb_80F4rOsww',
    description: 'The term \'sanctuary city\' has been thrown around an awful lot recently, but truth be told it has no real legal definition.',
    canonicalUrl: 'http://nbcnews.to/2mnG2yv'
  }, {
    partisanRank: 'C1',
    source: 'The Washington Times',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15032166_10154886960104411_2087571460580968986_n.jpg?oh=4dee359703b1d59e7e99e1952d7cb77d&oe=59287086',
    date: '2017-03-14',
    headline: 'Number of sanctuary cities nears 500: Report',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDghIfuuA7SRUTM&url=http%3A%2F%2Fmedia.washtimes.com.s3.amazonaws.com%2Fmedia%2Fimage%2F2017%2F03%2F09%2FDeportation_18136.jpg-b69f9.jpg&_nc_hash=AQBRtcj06H2s_qGe',
    description: 'Nearly 500 jurisdictions are now sanctuary cities, according to a group that’s tracked the issue for more than a decade, and who said there’s been a massive surge in the number of places trying to thwart federal immigration agents since President Trump’s election.',
    canonicalUrl: 'http://www.washingtontimes.com/news/2017/mar/14/number-sanctuary-cities-nears-500-report/'
  }, {
    partisanRank: 'C3',
    source: 'Breitbart',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/227458_10152346853555354_25751187_n.jpg?oh=c960a50a25f08f37c08eff204db1f1da&oe=596FFE4B',
    date: '2017-03-14',
    headline: 'Texas Sanctuary County Faces Loss of Millions in State Funding',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQAhU44sqSxORwqO&url=http%3A%2F%2Fmedia.breitbart.com%2Fmedia%2F2017%2F01%2FHernandez-Abbott.png&_nc_hash=AQDefS7CTDXHTsLz',
    description: ' ',
    canonicalUrl: 'http://trib.al/uMcMvUM'
  }]
}, {
  id: '\'trumpcare\'',
  articles: [{
    partisanRank: 'L3',
    source: 'The New York Times',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/420194_448960124998_2006714158_n.jpg?oh=eb474d03a773119e1fb0e2ecb7f7be54&oe=596B7F80',
    date: '2017-03-14',
    headline: 'Trading Health Care for the Poor for Tax Cuts for the Rich',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCZ9FG5rkDXE3W9&url=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2017%2F03%2F14%2Fopinion%2F14tue1NEW%2F14tue1web-1489442247024-facebookJumbo.jpg&_nc_hash=AQD6bPWKtK6pL19_',
    description: 'A nonpartisan analysis reveals that President Trump’s promise of “insurance for everybody” is hollow.',
    canonicalUrl: 'https://www.nytimes.com/2017/03/13/opinion/trading-health-care-for-the-poor-for-tax-cuts-for-the-rich.html?smid=fb-nytimes&smtyp=cur'
  }, {
    partisanRank: 'L2',
    source: 'Daily Kos',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12794441_10154047834719255_5302242364924208190_n.jpg?oh=c0bf85f83df68c3148e2f4462bb88ce0&oe=59287F49',
    date: '2017-03-14',
    headline: 'CBO Analysis: 64-year-old will pay more than 1/2 their yearly income for TrumpCare',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCumzu7TUd2bKdC&url=http%3A%2F%2Fimages.dailykos.com%2Fimages%2F377022%2Fstory_image%2FIMG_1933.PNG%3F1489439429&_nc_hash=AQATuxJA6Fgusjnl',
    description: 'Devastating nugget in CBO analysis! TrumpCare devastates Seniors making $26,500 a year, to the tune of $14,600 of their total income to afford buying a TrumpCare plan. AARP had it right the age-tax will devastate Seniors. Bankruptcy will be the norm...',
    canonicalUrl: 'http://www.dailykos.com/story/2017/03/13/1643011/-CBO-Analysis-64-year-old-will-pay-more-than-1-2-their-yearly-income-for-TrumpCare?detail=facebook'
  }, {
    partisanRank: 'L1',
    source: 'The Raw Story',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/c52.53.257.257/s50x50/10360839_10152703508732235_6694429870530559967_n.jpg?oh=a8652ddcb98e984fe4dbcd1d7c80a755&oe=592C7523',
    date: '2017-03-14',
    headline: '‘It’s a disaster’: Chase Bank chief economist tears Trumpcare to pieces on CNN',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQCHTIICJbdpSGWA&url=http%3A%2F%2Fwww.rawstory.com%2Fwp-content%2Fuploads%2F2017%2F03%2FChase-Chief-Economist-Anthony-Chan-800x430.jpg&_nc_hash=AQAt6XsMf1GnmQlc',
    description: 'Chase Bank chief economist Anthony Chan likes some aspects of the Republicans’ proposed Obamacare replacement legislation — but not enough of them to prevent the bill from being what he calls “a disaster.”',
    canonicalUrl: 'http://www.rawstory.com/2017/03/its-a-disaster-chase-bank-chief-economist-tears-trumpcare-to-pieces-on-cnn/'
  }, {
    partisanRank: 'N',
    source: 'CNBC',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10891972_10153082667464369_8047543635589507632_n.png?oh=76bb84c441da6984918b861873879abc&oe=592CA04F',
    date: '2017-03-14',
    headline: 'CBO report on Trumpcare confirms it—You can\'t fix stupid (op-ed)',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQDbL8PFW_7_FUH2&url=http%3A%2F%2Ffm.cnbc.com%2Fapplications%2Fcnbc.com%2Fresources%2Fimg%2Feditorial%2F2017%2F03%2F14%2F104341030-104340557.1910x1000.jpg&_nc_hash=AQA-MLayYWJ6jkaH',
    description: 'Under the GOP health plan, 24 million people will "lose" coverage. But here\'s the real takeaway from the CBO report, says Jake Novak.\r\n',
    canonicalUrl: 'http://cnb.cx/2nAYuEA'
  }, {
    partisanRank: 'C1',
    source: 'The Hill',
    sourceThumbnail: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12985451_10153703672994087_5860860619868875285_n.jpg?oh=466f9495f0a23d82bad4db1a27d3afd3&oe=596925E9',
    date: '2017-03-14',
    headline: 'Schumer: GOP healthcare bill is in serious trouble',
    image: 'https://external.xx.fbcdn.net/safe_image.php?d=AQC45dfk-vFYDZs-&url=https%3A%2F%2Fs3.amazonaws.com%2Fprod-cust-photo-posts-jfaikqealaka%2F3352-fe0d1b68750da5980309e8b0e1376fdf.jpg&_nc_hash=AQB_12uY2g8LYctQ',
    description: '"It’s in trouble in the House; it’s in even more trouble in the Senate; and we Democrats are unified."',
    canonicalUrl: 'http://hill.cm/T2f430N'
  }]
}];

export default sampleData;
