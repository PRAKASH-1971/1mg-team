var predata = [
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…auto/v1600252869/cropped/ylmxiaxgnkibe10awqtk.jpg",
      h2:"Pure Nutrition Progut Plus Veg Capsule",
      p:"bottle of 60 capsules",
      rating:"./images/4.5.png",
      p1:"26 ratings",
      p2:"MRP",
      strike:"₹1499",
      offer:"20% off",
      price:"₹1199"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1634667771/ehet3xctnbjfaese50qy.jpg",
      h2:"Dr. Morepen Greatgut Probiotics Immunity ...",
      p:"strip of 14 capsules",
      rating:"./images/4.2.png",
      p1:"799 ratings",
      p2:"MRP",
      strike:"₹799",
      offer:"25% off",
      price:"₹599"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1641125489/lzkl9wlspraikn2tduia.jpg",
      h2:"Carbamide Forten Probiotics 2.75 Billion...",
      p:"bottle of 100 vegicaps",
      rating:"./images/4.2.png",
      p1:"13 ratings",
      p2:"MRP",
      strike:"₹595",
      offer:"37% off",
      price:"₹375"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…auto/v1600177746/cropped/y0kgnftl541nm5ntun4v.jpg",
      h2:"Inlife Pre and Probiotics Capsule",
      p:"bottle of 60 capsules",
      rating:"./images/4.1.png",
      p1:"46 ratings",
      p2:"MRP",
      strike:"₹600",
      offer:"30% off",
      price:"₹419"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1610990836/xbp8lfkqswumzs4lf45h.jpg",
      h2:"Ibsox Capsule",
      p:"strip of 30 capsules",
      rating:"./images/4.3.png",
      p1:"501 ratings",
      p2:"MRP",
      strike:"₹1650",
      offer:"15% off",
      price:"₹1403"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…auto/v1600758903/cropped/ztftzof4epqbccv9nvu7.jpg",
      h2:"Inlife Probiotic Forte Vegetarian Capsules",
      p:"bottle of 60 vegicaps",
      rating:"./images/4.5.png",
      p1:"10 ratings",
      p2:"MRP",
      strike:"₹1099",
      offer:"50% off",
      price:"₹549"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…auto/v1600223316/cropped/bjppqvosneaar3ipwwuz.jpg",
      h2:"ActivStart Uno Biotics Sachet (1 gm Each)...",
      p:"packet of 1 Sachet",
      rating:"./images/4.2.png",
      p1:"27 ratings",
      p2:"MRP",
      strike:"₹49",
      offer:"7% off",
      price:"₹45.5"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1642507956/q9xnukhrycqpcypv7aeg.jpg",
      h2:"Tata 1mg Apple Cider Vinegar Probiotic Plus...",
      p:"bottle of 500 ml Liquid",
      rating:"./images/4.3.png",
      p1:"297 ratings",
      p2:"MRP",
      strike:"₹595",
      offer:"65% off",
      price:"₹204"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1631894048/uqehwqt3b6cwuuvqrymf.jpg",
      h2:"1mg Active Nutrition Mix with Whey Protein...",
      p:"box of 400 gm Powder",
      rating:"./images/4.2.png",
      p1:"40 ratings",
      p2:"MRP",
      strike:"₹895",
      offer:"49% off",
      price:"₹457"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1637324287/kdsqxgex4bszim7z092g.jpg",
      h2:"Tata 1mg Senior 50+ Multivitamin &...",
      p:"bottle of 60 tablets",
      rating:"./images/4.2.png",
      p1:"174 ratings",
      p2:"MRP",
      strike:"₹895",
      offer:"49% off",
      price:"₹457"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1631892302/bpstjff7hzg9uecj54n7.jpg",
      h2:"1mg Diabetes Nutrition Mix Vanilla",
      p:"box of 400 gm Powder",
      rating:"./images/4.1.png",
      p1:"16 ratings",
      p2:"MRP",
      strike:"₹745",
      offer:"32% off",
      price:"₹505"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1637324126/ue6wi2sqdbabrosmezmm.jpg",
      h2:"Tata 1mg Glucosamine HCL 1500 mg Tablets...",
      p:"bottle of 60 tablets",
      rating:"./images/4.1.png",
      p1:"215 ratings",
      p2:"MRP",
      strike:"₹995",
      offer:"49% off",
      price:"₹507"
    },
]

predata.map(function(elem) {
    console.log("dabour");
    var image = document.createElement("img")
    var h2 = document.createElement("h3")
    var p = document.createElement("p")
    var rating = document.createElement("img")
    var p1 = document.createElement("p")
    var p2 = document.createElement("p")
    var strike = document.createElement("del")
    var offer = document.createElement("p")
    var price = document.createElement("h2")
    var a= document.createElement("div")
    var b= document.createElement("div")
    var c= document.createElement("div")
    var d= document.createElement("i")
    a.className = "rating-section"
    b.className = "price-section"
    c.className = "card-detail"

    image.setAttribute("src",elem.im)
    h2.textContent = elem.h2
    p.className = "para"
    p.textContent = elem.p
    image.className = "im1"

    rating.setAttribute("src", elem.rating) 
    rating.className =  "rating"
    p1.textContent = elem.p1



    p2.textContent = elem.p2
    strike.textContent = elem.strike
    offer.textContent = elem.offer
    p2.className = "mrp"
    offer.className = "offer"

    price.textContent = elem.price
    price.className = "price"

    a.append(rating,p1)
    b.append(p2,strike,offer)
    c.append(image,h2,p,a,b,price)
    document.querySelector(".pre").append(c)
})