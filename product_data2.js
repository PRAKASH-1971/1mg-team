//Heating Aid

var aidsdata = [
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1641557301/kdst5ealgksk0p6zjjge.jpg",
    h2: "Flamingo Orthopaedic Heating Belt XL",
    p: "packet of 1 Belt",
    p1: "304 ratings",
    p2: "MRP",
    strike: "?1099",
    offer: "24% off",
    price: "?831",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600640445/cropped/pwxxezej79q1bzb3e0ko.png",
    h2: "Kalor Rechargeable Electric Hot Water Bag with Gel Multicolor",
    p: "packet of 1 Unit",
    p1: "125 ratings",
    p2: "MRP",
    strike: "?449",
    offer: "54% off",
    price: "?206",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600625777/cropped/rnel0jwng6x8y3lmn5kf.png",
    h2: "Healthtokri Electric Rechargeable Heating Gel Warm Bag",
    p: "packet of 1 Bag",
    p1: "175 ratings",
    p2: "MRP",
    strike: "?575",
    offer: "58% off",
    price: "?241",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1641557374/bawoipah2zbuwwngpagr.jpg",
    h2: "Hicks Comfort Hot Water Bottle Super Deluxe Plus",
    p: "box of 1 Unit",
    p1: "123 ratings",
    p2: "MRP",
    strike: "?378",
    offer: "18% off",
    price: "?310",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600225668/cropped/wdul06jaccsufnpa0yzf.png",
    h2: "Beurer IL 11 Infra Red Lamp",
    p: "box of 1 Unit",
    p1: "11 ratings",
    p2: "MRP",
    strike: "?2490",
    offer: "37% off",
    price: "?1559",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601002842/cropped/waqd3btfwajciq5t5fud.jpg",
    h2: "Tynor I 73 Heating Pad Standard",
    p: "box of 1 Unit",
    p1: "27 ratings",
    p2: "MRP",
    strike: "?990",
    offer: "20% off",
    price: "?792",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1636978380/py8v2ssxuuc5xv9slruj.jpg",
    h2: "SandPuppy Heatwrap Multi Purpose Heating Belt for Back, Shoulder and Knee Pain Relief with Adjustable Heat",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?1999",
    offer: "27% off",
    price: "?1459",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600199347/cropped/pmghbq7xinn3bv3xuy7e.jpg",
    h2: "Equinox Hot Water Bottle with Cover EQ-HT-01 C",
    p: "packet of 1 Unit",
    p1: "25 ratings",
    p2: "MRP",
    strike: "?450",
    offer: "24% off",
    price: "?341",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601335504/cropped/nfgre0nnke37nscnn9aq.jpg",
    h2: "AaraamSek Microwavable Therapeutic Herbal Heating Pad for Shoulder & Neck Pain Cream",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?1648",
    offer: "46% off",
    price: "?888",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600774505/cropped/jqrnysqpas4i74i1vhrn.png",
    h2: "EASYCARE EC1008 Deluxe Hot Water Bag Red",
    p: "packet of 1 Bag",
    p1: "28 ratings",
    p2: "MRP",
    strike: "?399",
    offer: "50% off",
    price: "?200",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600176956/cropped/epmx7yvkt0yxbixymvev.jpg",
    h2: "Tynor I-44 Hot & Cold Pack Universal",
    p: "packet of 1 Unit",
    p1: "17 ratings",
    p2: "MRP",
    strike: "?710",
    offer: "20% off",
    price: "?568",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1641557223/wf7vpxbni6uu8xjns2nn.jpg",
    h2: "Flamingo Orthopaedic Heating Belt Regular",
    p: "packet of 1 Belt",
    p1: "304 ratings",
    p2: "MRP",
    strike: "?949",
    offer: "16% off",
    price: "?799",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1608016999/btnd2z3a6olnpqm6s6ei.jpg",
    h2: "Sahyog Wellness Velvet Electrical Hot Water Bag/Pad Colour May Vary",
    p: "box of 1 Unit",
    p1: "41 ratings",
    p2: "MRP",
    strike: "?749",
    offer: "59% off",
    price: "?305",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600269912/cropped/sezqrzidbop2bxevkrvp.png",
    h2: "Hicks C-19 Comfort Hot Water Bottle Super Deluxe",
    p: "packet of 1 Water Bottle",
    p1: "29 ratings",
    p2: "MRP",
    strike: "?365",
    offer: "9% off",
    price: "?332",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1608016886/jyeoq3ngqtaqbx3cvmvt.jpg",
    h2: "Sahyog Wellness Plain Electrical Hot Water Bag/Pad Colour May Vary",
    p: "box of 1 Unit",
    p1: "41 ratings",
    p2: "MRP",
    strike: "?749",
    offer: "72% off",
    price: "?209",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601318443/cropped/bgrvfpilesqtkjzngdjv.jpg",
    h2: "SandPuppy Kneestrap Flexible Heat Therapy Heating Pad",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?1499",
    offer: "22% off",
    price: "?1169",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600774804/cropped/zk45wq3qd3faif01vol2.png",
    h2: "EASYCARE EC1008 Deluxe Hot Water Bag Blue",
    p: "packet of 1 Bag",
    p1: "28 ratings",
    p2: "MRP",
    strike: "?399",
    offer: "52% off",
    price: "?189",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1635857483/mhw3pu6vbhnksoxn7g9b.jpg",
    h2: "Beurer UB 33 Fleece Heated Under Blanket",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?5100",
    offer: "29% off",
    price: "?3602",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601322015/cropped/xguo8yhxljxcxmbdc81i.jpg",
    h2: "Prozo Plus Electric Heating Gel Pad with an Auto-Cut Feature Multicolor",
    p: "box of 1 Unit",
    p1: "16 ratings",
    p2: "MRP",
    strike: "?499",
    offer: "52% off",
    price: "?239",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1605596389/pcyulmdbzgg9yoklcyep.jpg",
    h2: "Expressions POLAR04DB Electric Bed Warmer Double 150x160cm Brown",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?4599",
    offer: "46% off",
    price: "?2490",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1615188797/aewsljc7rtcqfaysdg6n.jpg",
    h2: "MCP Electric Heating Pad Blue",
    p: "box of 1 Unit",
    p1: "8 ratings",
    p2: "MRP",
    strike: "?1599",
    offer: "59% off",
    price: "?649",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600626909/cropped/zudkedcq0umhcoqw6kms.png",
    h2: "EASYCARE EC1008 Deluxe Hot Water Bag Green",
    p: "packet of 1 Bag",
    p1: "28 ratings",
    p2: "MRP",
    strike: "?399",
    offer: "54% off",
    price: "?182",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600199025/cropped/gmxap1ok5ymnw2zzvjwd.png",
    h2: "Flamingo Orthopaedic Heating Belt Mini",
    p: "packet of 1 Belt",
    p1: "304 ratings",
    p2: "MRP",
    strike: "?620",
    offer: "3% off",
    price: "?599",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600909503/cropped/zrhhkotwxi9qae5xdeep.jpg",
    h2: "MCP Fur Velvet Electric Heating Gel Pad",
    p: "box of 1 Unit",
    p1: "47 ratings",
    p2: "MRP",
    strike: "?600",
    offer: "46% off",
    price: "?325",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1605596126/wgebtvma8e6dboegzgjy.jpg",
    h2: "Expressions POLAR04SB Electric Bed Warmer Single 150x80cm Brown",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?2699",
    offer: "40% off",
    price: "?1619",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600162810/cropped/p0leicvq8trbnjiirq6c.jpg",
    h2: "Dr. Gene Accusure Electric Heating Pad",
    p: "box of 1 Unit",
    p1: "19 ratings",
    p2: "MRP",
    strike: "?949",
    offer: "28% off",
    price: "?684",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1615188713/q4h8brxy90pay4i7dvt1.jpg",
    h2: "MCP Electric Heating Pad Grey",
    p: "box of 1 Unit",
    p1: "8 ratings",
    p2: "MRP",
    strike: "?1599",
    offer: "58% off",
    price: "?662",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600580445/cropped/vxt0oxote3qs5qm0xgiq.png",
    h2: "Dyna Orthopaedic Heating Belt Universal",
    p: "box of 1 Belt",
    p1: "7 ratings",
    p2: "MRP",
    strike: "?950",
    offer: "24% off",
    price: "?720",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626264855/eu5eyalz6yrrtofkj1so.jpg",
    h2: "Rosscare Automatic E-Hot Bag Large",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?696",
    offer: "8% off",
    price: "?636",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1605596366/wuyegeu6msnlxvgr1k3s.jpg",
    h2: "Expressions POLAR01DB Electric Bed Warmer Double 150x160cm Purple",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?4599",
    offer: "46% off",
    price: "?2479",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1635857416/wautmngztmofrbywyqth.jpg",
    h2: "Beurer UB 56 Teddy Double Heated Under Blanket for Double Bed",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?9300",
    offer: "33% off",
    price: "?6169",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1605165870/rdzveqgye6q5wcywijg0.jpg",
    h2: "Expressions POLAR08SB Electric Bed Warmer Single",
    p: "box of 1 Unit",
    p2: "MRP",
    strike: "?2699",
    offer: "42% off",
    price: "?1559",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601098521/cropped/osbmsbnfb17vopszlwpm.jpg",
    h2: "Medvision Hot Water Bottle",
    p: "packet of 1 Bottle",
    p1: "8 ratings",
    p2: "MRP",
    strike: "?280",
    offer: "19% off",
    price: "?225",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1610608628/kvihcjxz4xuj8wfjdm16.jpg",
    h2: "Sahyog Wellness Blue Hot Water Bottle/Bag with Cover-Cover Color May Vary",
    p: "packet of 1 Unit",
    p1: "74 ratings",
    p2: "MRP",
    strike: "?300",
    offer: "3% off",
    price: "?291",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601336762/cropped/bu4cql2hyeljbn555epv.jpg",
    h2: "1Mile Silicone Hot Water Bag Regular",
    p: "box of 1 Bag",
    p2: "MRP",
    strike: "?299",
    offer: "4% off",
    price: "?285",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601097303/cropped/f8pyf1pvtyfocohwap3a.jpg",
    h2: "Presens Hot and Cold Pack Large",
    p: "box of 1 Unit",
    p1: "7 ratings",
    p2: "MRP",
    strike: "?550",
    offer: "40% off",
    price: "?330",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600774504/cropped/efdtsbw8vgszm6uv8lj1.png",
    h2: "EASYCARE EC1881 Super Deluxe Hot Water Bag Red",
    p: "packet of 1 Bag",
    p1: "34 ratings",
    p2: "MRP",
    strike: "?399",
    offer: "49% off",
    price: "?203",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601336761/cropped/dvs1xvjlaw838ahn9jhf.jpg",
    h2: "1Mile Rubber Hot Water Bag Regular",
    p: "box of 1 Bag",
    p2: "MRP",
    strike: "?249",
    offer: "4% off",
    price: "?239",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1608016426/wx4ouvblvbymr8upkvnv.jpg",
    h2: "Sahyog Wellness Blue Hot Water Bottle/Bag",
    p: "packet of 1 Unit",
    p1: "74 ratings",
    p2: "MRP",
    strike: "?300",
    offer: "20% off",
    price: "?240",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601336761/cropped/yxwrqeburiz05vvx8qng.jpg",
    h2: "1Mile Electric Heating Bag Regular",
    p: "box of 1 Bag",
    p2: "MRP",
    strike: "?299",
    offer: "5% off",
    price: "?283",
  },
];

// Trending Ayurvedic Products

var ayurvedicdata = [
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600174292/cropped/srbjwonnklmuwlu7cg7z.jpg",
    h2: "Dabur Chyawanprakash Sugarfree",
    p: "jar of 500 gm Paste",
    p1: "1281 ratings",
    p2: "MRP",
    strike: "?235",
    offer: "15% off",
    price: "?200",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600173988/cropped/ufr3udfnnlkadvwcn0js.jpg",
    h2: "Charak Kofol Chewable Tablet Sugar Free",
    p: "packet of 60 Chewable Tablets",
    p1: "182 ratings",
    p2: "MRP",
    strike: "?46",
    offer: "28% off",
    price: "?33",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601340626/cropped/muamlvk1hwcqmmikxho8.png",
    h2: "Patanjali Divya Coronil Kit",
    p: "box of 1 Kit",
    p1: "454 ratings",
    p2: "MRP",
    strike: "?545",
    offer: "25% off",
    price: "?409",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601292134/cropped/rhy9cts9cccw58ejt29w.png",
    h2: "Dabur Giloy Ki Ghanvati",
    p: "bottle of 100 tablets",
    p1: "457 ratings",
    p2: "MRP",
    strike: "?185",
    offer: "9% off",
    price: "?167",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1602064504/vx5g19vavqir1ozyuflo.jpg",
    h2: "Himalaya Koflet Syrup",
    p: "bottle of 100 ml Syrup",
    p1: "125 ratings",
    p2: "MRP",
    strike: "?80",
    offer: "15% off",
    price: "?68",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1610393810/fvn65jqjhdgfnitixhtb.jpg",
    h2: "Zandu Balm",
    p: "bottle of 50 ml Balm",
    p1: "203 ratings",
    p2: "MRP",
    strike: "?140",
    offer: "10% off",
    price: "?126",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600198178/cropped/ekzob8sdyk6xhqb9m8zq.jpg",
    h2: "Dabur Swarna Guggulu Tablet",
    p: "bottle of 30 tablets",
    p1: "27 ratings",
    p2: "MRP",
    strike: "?1250",
    offer: "34% off",
    price: "?819",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631038173/roq4nzjspyh7uxgeamp0.jpg",
    h2: "Zandu Kesari Jivan Chyawanprash",
    p: "jar of 900 gm Paste",
    p1: "321 ratings",
    p2: "MRP",
    strike: "?740",
    offer: "20% off",
    price: "?592",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1617170507/w6xhhv35uvhp4xdbuo6t.jpg",
    h2: "Hamdard Sualin",
    p: "jar of 400 tablets",
    p1: "29 ratings",
    p2: "MRP",
    strike: "?400",
    offer: "10% off",
    price: "?360",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600667405/cropped/jsml8hxbuhqhv600ozvo.jpg",
    h2: "Dabur Honitus Madhuvaani",
    p: "jar of 150 gm Paste",
    p1: "101 ratings",
    p2: "MRP",
    strike: "?99",
    offer: "7% off",
    price: "?92",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600170350/cropped/gasfgfxii9vsbehodvaw.png",
    h2: "Sri Sri Tattva Shakti Drop",
    p: "bottle of 10 ml Drop",
    p1: "750 ratings",
    p2: "MRP",
    strike: "?110",
    offer: "19% off",
    price: "?89",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1604926361/leplucyafhitt4gxucrp.jpg",
    h2: "Dabur Pure Herbs Immunity Booster Giloy Tablets - Get 20 Tablets Free",
    p: "bottle of 80 tablets",
    p1: "57 ratings",
    p2: "MRP",
    strike: "?165",
    offer: "28% off",
    price: "?118",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1622031139/ahwvbk81geumudxhabol.jpg",
    h2: "Yogi Kanthika Ayurvedic Pills",
    p: "bottle of 70 tablets",
    p1: "765 ratings",
    p2: "MRP",
    strike: "?45",
    offer: "11% off",
    price: "?40",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631893404/zzomsiruvmjjqwvrlciq.jpg",
    h2: "1mg Cold Pressed Giloy Tulsi Juice Natural Immunity Booster Enriched with Tulsi",
    p: "bottle of 500 ml Juice",
    p1: "80 ratings",
    p2: "MRP",
    strike: "?245",
    offer: "59% off",
    price: "?99",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600199187/cropped/n0gw5a56nsuuadw5hluo.jpg",
    h2: "Baidyanath Aloe Vera Juice",
    p: "bottle of 1 Ltr Juice",
    p1: "55 ratings",
    p2: "MRP",
    strike: "?250",
    offer: "20% off",
    price: "?200",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1615982424/e4cufy8ntxwr0veiac3z.jpg",
    h2: "Baidyanath Chyawanprash Special Immunity Booster for OmniProtection",
    p: "jar of 1 kg Paste",
    p1: "529 ratings",
    p2: "MRP",
    strike: "?360",
    offer: "24% off",
    price: "?272",
  },
];

// Popular Combo Deals

var combodata = [
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626695522/zhzwbmhblnt1aqvykm2w.jpg",
    h2: "Cadbury Bournvita Combo Pack of Lil Champs Pro-Health Drink Chocolate & Health Drink Refill (500gm Each)",
    p: "combo pack of 2 Packs",
    p1: "885 ratings",
    p2: "MRP",
    strike: "?504",
    offer: "11% off",
    price: "?447",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1633612128/dhszouhzqop5jli4dwzc.jpg",
    h2: "Combo Pack of Celevida Kesar Elaichi Nutrition Health Drink 400gm & Accu-Chek Active 100 Test Strip",
    p: "combo pack of 2 Packs",
    p1: "3256 ratings",
    p2: "MRP",
    strike: "?2415",
    offer: "14% off",
    price: "?2078.6",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601161815/cropped/zolg3xv8s5klfpfqzoil.jpg",
    h2: "Saffola Oats 1kg with 400gm Free",
    p: "combo pack of 2 Packs",
    p1: "87 ratings",
    p2: "MRP",
    strike: "?212",
    offer: "5% off",
    price: "?201",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1638190047/f5pbqdlbnn4jdrfymzsr.jpg",
    h2: "Zingavita Combo Pack of Multi Vitamins with Probiotics & Prebiotics 120 Tablet & Vitamin C Amla Extract 1000mg 60 Tablet",
    p: "combo pack of 2 bottles",
    p2: "MRP",
    strike: "?998",
    offer: "40% off",
    price: "?599",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600953545/kowedaoyfrc6yrrrupyk.jpg",
    h2: "1mg Immunity Booster Combo of Multivitamin Supreme & Immune Support Herbal Complex",
    p: "combo pack of 2 Packs",
    p1: "679 ratings",
    p2: "MRP",
    strike: "?1370",
    offer: "56% off",
    price: "?596",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1603773969/z1bfskzxf8n6pmkoolog.jpg",
    h2: "BP and Glucose Meter Combo of Accu-Chek Active Blood Glucometer Kit (Box of 10 Test Strips Free) and Dr Morepen BP02 Blood Pressure Monitor",
    p: "combo pack of 2 Packs",
    p1: "1720 ratings",
    p2: "MRP",
    strike: "?3054",
    offer: "22% off",
    price: "?2378",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1605158098/kqflncuedjouietuabmm.jpg",
    h2: "Warm Milk Mix Recipe of 1mg Turmeric Drops with Piperine 30ml, 1mg Panch Tulsi Drops 30ml and Dabur Honey Squeezy Buy 1 Get 1 Free 225gm",
    p: "combo pack of 3 Packs",
    p1: "1202 ratings",
    p2: "MRP",
    strike: "?765",
    offer: "46% off",
    price: "?412",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1633612241/rokjqykb9augfednjwnr.jpg",
    h2: "Combo Pack of Dr. Reddy's Nutrition Curhealth Tasty Nutritious Mix for Whole Family Delicious Kesar Badam 90gm & Dabur Honitus Hot Sip Ayurvedic Kaadha 120gm",
    p: "combo pack of 2 boxes",
    p1: "643 ratings",
    p2: "MRP",
    strike: "?750",
    offer: "21% off",
    price: "?593",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601442466/d7eb2zfrgqijjnnyyl2i.jpg",
    h2: "Oral Care Combo of Listerine Original Mouth Wash 500ml, Sensodyne Sensitive Soft Gentle on Teeth Toothbrush Buy 2 Get 1 Free and Sensodyne Fresh Mint Toothpaste 150gm",
    p: "combo pack of 5 Packs",
    p1: "1215 ratings",
    p2: "MRP",
    strike: "?605",
    offer: "9% off",
    price: "?548",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1625140403/jmv7ffde0fjjnpbady2t.png",
    h2: "Abbott Panbio Covid 19 Antigen Self Test Kit (Pack of 4)",
    p: "combo pack of 4 Test Kits",
    p1: "46 ratings",
    p2: "MRP",
    strike: "?1300",
    offer: "20% off",
    price: "?1040",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1603772915/hkivk33molknvlppjtkg.jpg",
    h2: "Revital Combo Pack of Revital H 30 Capsule and Revital H Woman 30 Tablet",
    p: "combo pack of 2 Packs",
    p1: "2203 ratings",
    p2: "MRP",
    strike: "?655",
    offer: "15% off",
    price: "?557",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1634559631/nloq2ndgjsc0zpo9691i.jpg",
    h2: "FreeStyle Libre System - Sensor and Reader",
    p: "combo pack of 2 Packs",
    p2: "MRP",
    price: "?10498",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1633411167/ylfuylfxrh0cvzrxopf3.jpg",
    h2: "Bayer Combo Pack of Supradyn Daily Multivitamin 15 Tablet & Saridon 10 Tablet",
    p: "combo pack of 2 strips",
    p1: "788 ratings",
    p2: "MRP",
    strike: "?88.53",
    offer: "1% off",
    price: "?87",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1625312478/yjf3zipjv3bzx1xdv4xo.jpg",
    h2: "Dr. Reckeweg Hair Care Combo Pack of Lycopodium Dilution 30CH 11ml & R89 Hair Care Drop 30ml",
    p: "combo pack of 2 bottles",
    p1: "42 ratings",
    p2: "MRP",
    strike: "?410",
    offer: "9% off",
    price: "?373",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1613386948/frivljebqevwdptjkodu.jpg",
    h2: "Nivea Soft Light Moisturiser and 1mg Germ Protection Face Wash Combo",
    p: "combo pack of 2 Packs",
    p1: "182 ratings",
    p2: "MRP",
    strike: "?460",
    offer: "40% off",
    price: "?275",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1621836623/ahnncgar7zureu1do5h0.jpg",
    h2: "Accu-Chek Softclix 50 Lancet (Pack of 2)",
    p: "combo pack of 2 units",
    p1: "746 ratings",
    p2: "MRP",
    strike: "?250",
    offer: "8% off",
    price: "?230",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1621833298/c2sw0gi2dw4cwdf1ecjp.jpg",
    h2: "Accu-Chek Combo Pack of Active 50 Test Strip & 2 Pack of Softclix Lancet (25 Each)",
    p: "combo pack of 3 units",
    p1: "3934 ratings",
    p2: "MRP",
    strike: "?1225",
    offer: "11% off",
    price: "?1088",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1620656940/hazrvv9v9bbp9khbvbgi.jpg",
    h2: "Fever Management Combo of Omron MC 246 Thermometer & Crocin 650 Tablet 15s",
    p: "combo pack of 2 Packs",
    p1: "278 ratings",
    p2: "MRP",
    strike: "?305.91",
    offer: "17% off",
    price: "?254.5",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1629975380/cp6ivak8ii869hnhsmpa.jpg",
    h2: "Dettol First Aid Kit",
    p: "combo pack of 3 Packs",
    p1: "9247 ratings",
    p2: "MRP",
    strike: "?509.5",
    offer: "10% off",
    price: "?458",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1617683878/ims0q97eihdbrodbnfig.jpg",
    h2: "Cackle's Combo Pack of Shilajit Gold 10 Capsule & Japan Ka Power Oil 15ml",
    p: "combo pack of 2 Packs",
    p1: "15 ratings",
    p2: "MRP",
    strike: "?518",
    offer: "13% off",
    price: "?451",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1606819453/cr9a2p0evnuzwvw5ksp1.jpg",
    h2: "Acne Care Combo of Cetaphil Oily Skin Cleanser 125ml and Klm Klin Face Wash 100ml",
    p: "combo pack of 2 Packs",
    p1: "445 ratings",
    p2: "MRP",
    strike: "?755",
    offer: "10% off",
    price: "?680",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1609305697/azjnhf0cgtnew6u0mv2h.jpg",
    h2: "Glucose Test Strips and Lancet Combo Pack of Contour Plus Blood Glucose 50 Test Strip and Microlet Colored 100 Lancets",
    p: "combo pack of 2 Packs",
    p1: "662 ratings",
    p2: "MRP",
    strike: "?1349",
    offer: "6% off",
    price: "?1266",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1607061624/if0qou7t1ptcaaowcigp.jpg",
    h2: "Accu-Chek Active Combo of Glucometer with 10 Test Strip Free and 50 Test Strips",
    p: "combo pack of 2 Packs",
    p1: "3860 ratings",
    p2: "MRP",
    strike: "?2574",
    offer: "12% off",
    price: "?2257",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601446265/qdkxnbhl24dgn02m7fc4.jpg",
    h2: "Anti-oxidants Combo of Organic India Lemon Ginger Tulsi Green Tea 25 Tea Bag and Dabur Honey 1kg",
    p: "combo pack of 2 Packs",
    p1: "1474 ratings",
    p2: "MRP",
    strike: "?644",
    offer: "8% off",
    price: "?589",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1602583485/qir6i2zlhzeddxa4mqt0.jpg",
    h2: "Immunity Care Combo of 1mg Panch Tulsi 30ml Drops and Patanjali Ayurveda Giloy Ghanvati 60 Tablet",
    p: "combo pack of 2 Packs",
    p1: "386 ratings",
    p2: "MRP",
    strike: "?335",
    offer: "27% off",
    price: "?244",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1633411261/z0exuny29zagoeynuqxe.jpg",
    h2: "Bayer Combo Pack of Supradyn Daily Multivitamin 15 Tablet & Saridon Advance 10 Tablet",
    p: "combo pack of 2 strips",
    p1: "239 ratings",
    p2: "MRP",
    strike: "?95",
    offer: "2% off",
    price: "?93",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1621833544/ht5yuycz8lgwah2p2io3.jpg",
    h2: "Accu-Chek Combo Pack of Instant 50 Test Strip & 2 Pack Softclix Lancet (25 Each)",
    p: "combo pack of 3 units",
    p1: "1808 ratings",
    p2: "MRP",
    strike: "?1225",
    offer: "12% off",
    price: "?1079",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1603178650/cx0fq068c2eco9qovfds.jpg",
    h2: "Neuherbs Triple Tulsi-Giloy+ Tablet",
    p: "bottle of 60 tablets",
    p2: "MRP",
    strike: "?599",
    offer: "50% off",
    price: "?299",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1618478725/nserdswbkk78ojvsyzhr.jpg",
    h2: "Contour Plus Blood Glucose Test Strip",
    p: "combo pack of 2 Packs",
    p1: "588 ratings",
    p2: "MRP",
    strike: "?189",
    offer: "7% off",
    price: "?1760",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1617688902/gumfiaiaxmcysctoplbw.jpg",
    h2: "Dr Chopra Combo Pack of Japani Oil 15ml and Musli Blast Power 30 Capsule",
    p: "combo pack of 2 Packs",
    p1: "350 ratings",
    p2: "MRP",
    strike: "?1009",
    offer: "45% off",
    price: "?548",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1595317350/hxvg2in5yaqvruzqkltn.png",
    h2: "Accu-Chek Guide 100 Test Strip (Pack of 2)",
    p: "combo pack of 2 units",
    p1: "79 ratings",
    p2: "MRP",
    strike: "?2750",
    offer: "10% off",
    price: "?2476",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1606817942/ednknuhewdrdygrwx95y.jpg",
    h2: "Baby Food Combo of Nestle Cerelac Fortified Baby Cereal with Milk 6 Months+ Wheat Apple 300gm and Nestle Lactogen Stage 1 Powder 400gm",
    p: "combo pack of 2 Packs",
    p1: "685 ratings",
    p2: "MRP",
    price: "MRP?575",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1629974949/kig1l1egf5xcijweblix.jpg",
    h2: "Durex Pleasure Pack (Extra Time Condoms + Sensual Lube)",
    p: "combo pack of 2 Packs",
    p1: "463 ratings",
    p2: "MRP",
    strike: "?989",
    offer: "20% off",
    price: "?789",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1629974164/se3cxo2mvzgqmtogtmof.jpg",
    h2: "Dettol Disinfection Combo (Lime Fresh)",
    p: "combo pack of 2 bottles",
    p1: "229 ratings",
    p2: "MRP",
    strike: "?352",
    offer: "13% off",
    price: "?304",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1606820049/qb28shpydallvrjqumup.jpg",
    h2: "Pain Relief Combo of Healthtokri Electric Rechargeable Heating Gel Warm Bag and Volini Pain Relief Gel 75gm",
    p: "combo pack of 2 Packs",
    p1: "1574 ratings",
    p2: "MRP",
    strike: "?820",
    offer: "45% off",
    price: "?445",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1607061480/ip86dnqnhfelxgbr2ijf.jpg",
    h2: "Accu-Chek Instant Combo of Glucometer with Free 10 Test Strips, mySugr App and 50 Test Strips",
    p: "combo pack of 2 Packs",
    p1: "1257 ratings",
    p2: "MRP",
    strike: "?2524",
    offer: "16% off",
    price: "?2119",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1607061250/oag9dm8uvz2eutl25h7r.jpg",
    h2: "OneTouch Select Plus Combo of Simple Glucometer with 10 Free Strips & 50 Test Strips",
    p: "combo pack of 2 Packs",
    p1: "360 ratings",
    p2: "MRP",
    strike: "?2242",
    offer: "21% off",
    price: "?1762",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1636436207/rccag9nnlxwr86zjxkfi.jpg",
    h2: "Combo Pack of Ensure Vanilla Powder Refill 1kg & Ensure Chocolate Powder 200gm",
    p: "combo pack of 2 Packs",
    p1: "1288 ratings",
    p2: "MRP",
    strike: "?147",
    offer: "8% off",
    price: "?1357",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1626695363/f95sl7nc6ilfggfxn6hj.jpg",
    h2: "Cadbury Bournvita Combo Pack of Health Drink Refill 2kg & Pro-Health Drink Chocolate 200gm",
    p: "combo pack of 2 Packs",
    p1: "801 ratings",
    p2: "MRP",
    strike: "?870",
    offer: "15% off",
    price: "?740",
  },
  {
    im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1607061135/y2jnkyikmftvmea9vaiv.jpg",
    h2: "Contour Plus Combo of Blood Glucose Monitoring System & 50 Test Strips",
    p: "combo pack of 2 Packs",
    p1: "632 ratings",
    p2: "MRP",
    strike: "?1819",
    offer: "12% off",
    price: "?1602",
  },
];
