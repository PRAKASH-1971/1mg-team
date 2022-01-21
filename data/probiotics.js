var dabour = [
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1642507775/gmkrpf1imjj9djwvq4gq.jpg",
      h2:"Tata 1mg Multivitamin Supreme, Zincz Calciu....",
      p:"bottle of 60 capsules",
      rating:"./images/4.1.png",
      p1:"635 ratings",
      p2:"MRP",
      strike:"₹995",
      offer:"49% off",
      price:"₹507"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1637324194/gc3u9gfc331wtsipnljl.jpg",
      h2:"Tata 1mg Calcium + vitamin D3, Zinc,...",
      p:"bottle of 60 tablets",
      rating:"./images/4.2.png",
      p1:"667 ratings",
      p2:"MRP",
      strike:"₹595",
      offer:"49% off",
      price:"₹304"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1641378789/rbaugppr9gb507pafj1k.jpg",
      h2:"Tata 1mg BIS Approved FFP2 N95 Mask - Hea...",
      p:"box of 2 masks",
      rating:"./images/4.3.png",
      p1:"62 ratings",
      p2:"MRP",
      strike:"₹190",
      offer:"20% off",
      price:"₹152"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1642508036/wtr1cpntuka5ugtayvgd.jpg",
      h2:"Dabur Chyawanprash Awaleha",
      p:"bottle of 60 tablets",
      rating:"./images/4.2.png",
      p1:"240 ratings",
      p2:"MRP",
      strike:"₹995",
      offer:"49% off",
      price:"₹508"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1642507827/fwram2p7rbkoigjg6zas.jpg",
      h2:"Salmon Omega 3 Fish Oil Capsule",
      p:"bottle of 60 capsules",
      rating:"./images/4.3.png",
      p1:"501 ratings",
      p2:"MRP",
      strike:"₹995",
      offer:"49% off",
      price:"₹507"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1638444070/nwhioxrxmwjkaxitryag.jpg",
      h2:"Dabur Chyawanprash Awaleha",
      p:"box of 5 masks",
      rating:"./images/4.5.png",
      p1:"10 ratings",
      p2:"MRP",
      strike:"₹400",
      offer:"39% off",
      price:"₹244"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1631894537/w9eyedqdlnlntuc0zl7d.jpg",
      h2:"1mg High Fiber with Pre-& Probiotics with..",
      p:"jar of 200gm Powder",
      rating:"./images/4.3.png",
      p1:"30 ratings",
      p2:"MRP",
      strike:"₹995",
      offer:"69% off",
      price:"₹307"
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

dabour.map(function(elem) {
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
    document.querySelector(".probiotic").append(c)
})