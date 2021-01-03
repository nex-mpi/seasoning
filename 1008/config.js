
  const w = 1008;
  const h = 756;
  const scale = 1;
  const nSubPlanes = 1;
  const layers = 16;
  const sublayers = 12;

  const planes = [[1.929,1.9381687559131169,1.9474250883621955,1.956770258116033,1.9662055502604787,1.9757322747875465,1.9853517672017318,1.995065389144127,2.004874529034954,2.014780602735142,2.0247850542276105,2.0348893563189634,2.0450950113622866,2.055403552001812,2.0658165419402157,2.076335576729357,2.0869622845853026,2.0976983272285046,2.1085454007500455,2.1195052365049007,2.130579602033204,2.1417703020105456,2.1530791792283743,2.1645081156056323,2.176059033232771,2.1877338954493837,2.199534707956709,2.2114635199663395,2.2235224253865105,2.2357135640474146,2.248039122967049,2.260501337659162,2.273102493484956,2.285844927050242,2.2987310276498585,2.3117632387612295,2.3249440595890003,2.3382760466628354,2.3517618154904953,2.365404042268455,2.3792054656524044,2.3931688885900995,2.40729718021913,2.4215932778323115,2.436060188913529,2.450700993246985,2.465518845102977,2.4805169755034484,2.4956986945707365,2.5110673939631036,2.5266265494008127,2.5423797232867065,2.558330567425428,2.5744828258456587,2.590840337729936,2.6074070404568848,2.624186972760917,2.6411842780147197,2.658403207640152,2.675848124653435,2.6935235073508452,2.711433953141461,2.7295841825338436,2.7479790432839204,2.766623514711713,2.7855227121950112,2.8046818918484813,2.824106455397217,2.8438019552542246,2.8637740998118617,2.8840287589578204,2.904571969826867,2.925409942800156,2.946549067764655,2.9679959206459294,2.9897572702283264,3.011840085277389,3.034251541980282,3.05699903172089,3.080090169207291,3.103532800970383,3.127335014253587,3.1515051463147805,3.1760517941629414,3.200983824753392,3.226310385667031,3.2520409163005857,3.278185159596641,3.304753174344053,3.331755348081391,3.3592024106381717,3.387105448350961,3.4154759189939314,3.444325667466113,3.473666942280442,3.5035124129028574,3.533875187993002,3.564768834601689,3.5962073983842204,3.628205424892822,3.6607779820159974,3.693940683637545,3.727709714593289,3.762101857009313,3.7971345181117746,3.832825759605107,3.8691943287227866,3.9062596910628327,3.9440420653288606,3.9825624601069802,4.021842712819085,4.061905531004306,4.102774536092577,4.144474309847652,4.187030443671423,4.23046959097733,4.274819522858118,4.3201091872922035,4.366368772153954,4.41362977231603,4.461925061157265,4.5112889668172516,4.561757353569345,4.613367708717453,4.666159235459055,4.720172952197934,4.775451798835297,4.832040750618203,4.889986940179652,4.9493397884663315,5.010151145318438,5.0724754405420525,5.136369846399207,5.201894452535266,5.269112454468619,5.33809035688543,5.40889819311422,5.481609762302747,5.556302885985696,5.633059685918306,5.711966885261151,5.79311613543828,5.876604371258726,5.962534197194314,6.051014308050084,6.142159947653798,6.2360934096344565,6.332944584865623,6.4328515607267445,6.535961277996419,6.642430251949339,6.752425365099118,6.866124740031757,6.983718701931597,7.105410841740063,7.231419192439611,7.361977532759729,7.497336834704681,7.637766873760084,7.783558023515096,7.935023259820814,8.0925004035938,8.256354636088819,8.42698132605695,8.604809214859243,8.790304013551477,8.983972475475912,9.186367019346926,9.398090991643624,9.619804673884238,9.85223216076371,10.096169260089962,10.352492596110078,10.622170135660511,10.906273403527882,11.20599171197202,11.522648802822191,11.857722393242714,12.212867233932533,12.589942438889368,12.99104403934981,13.418543965299039,13.875136985527545,14.363897568649161,14.888349200704742,15.452549463684687,16.06119522051291,16.719753677479964,17.4346270690781,18.213361477676905,19.06491423249076,20.0]];

  const f = 767.1223336149486 * scale;
  var names = [""];
  var nMpis = names.length;

  const py = 375.54381732370626 * scale;
  const px = 505.69258332405326 * scale;
  const invz = false;

  const offset = 200;
  const maxcol = 11;
  const version = "prune";
  const extrinsics = [[0.9995057582855225,-0.004624189808964729,0.03109203651547432,0.0,0.003701180452480912,0.9995526671409607,0.02967866137623787,0.0,-0.0312153659760952,-0.029548916965723038,0.9990758299827576,0.0,0.01215137168765068,0.05473027750849724,0.1362379938364029,1.0]];

  const rads = [[0.4146807312965395,0.11279511675238613,0.22528528720140462]];
  const focal  = 4.130409445821307;

  const max_viewing_right =  0.1;
  const max_viewing_left =  -0.1;
  const max_viewing_down = -0.08;
  const max_viewing_up = -0.03;

