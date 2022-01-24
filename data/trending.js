var trendingdata = [
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1622454272/kryuwtbpvmsceejdkni2.jpg",
      h2: "Physiogel Hypoallergenic Daily Moisture Therapy Body Lotion",
      p: "bottle of 100 ml Lotion",
      rating:"/images/4.5.png",
      p1: "38 ratings",
      p2: "MRP",
      strike: "₹487",
      offer: "18% off",
      price: "₹399",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1611560669/iie8iqwgykgl2yeokwmu.jpg",
      h2: "Cadbury Bournvita Health Drink",
      p: "packet of 1 kg Powder",
      rating:"/images/rating.png",
      p1: "628 ratings",
      p2: "MRP",
      strike: "₹380",
      offer: "9% off",
      price: "₹346",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601091096/cropped/gqgxwymh4pze08ls1xcu.jpg",
      h2: "Himalaya Personal Care Lip Balm",
      p: "tube of 10 gm Balm",
      rating:"/images/4.3.png",
      p1: "49 ratings",
      p2: "MRP",
      strike: "₹35",
      offer: "11% off",
      price: "₹31",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1628191044/syp02x0mmlsjxces3dlg.jpg",
      h2: "Complan Nutrition Drink with Power of Milk Protein",
      p: "box of 500 gm Powder",
      rating:"/images/4.1.png",
      p1: "164 ratings",
      p2: "MRP",
      strike: "₹325",
      offer: "12% off",
      price: "₹285",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600999835/cropped/ll0myoxgncakojbqrye9.png",
      h2: "Vicks Cough Drops Ginger",
      p: "packet of 20 lozenges",
      rating:"/images/4.3.png",
      p1: "43 ratings",
      p2: "MRP",
      strike: "₹25",
      offer: "20% off",
      price: "₹20",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1635919841/oery3jzhsvhqlrijwbnj.jpg",
      h2: "Baidyanath (Nagpur) Chyawanprash Special",
      p: "jar of 1 kg Paste",
      rating:"/images/rating.png",
      p1: "72 ratings",
      p2: "MRP",
      strike: "₹349",
      offer: "21% off",
      price: "₹276",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600175528/cropped/oazosjs1jw0xpc8gdn7r.png",
      h2: "Omron MC-246 Thermometer",
      p: "packet of 1 Unit",
      rating:"/images/4.2.png",
      p1: "155 ratings",
      p2: "MRP",
      strike: "₹275",
      offer: "16% off",
      price: "₹229",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1625140412/jjsoun6bsxdctafaejur.jpg",
      h2: "Abbott Panbio Covid 19 Antigen Self Test Kit",
      p: "box of 1 Self Test Kit",
      p1: "42 ratings",
      p2: "MRP",
      strike: "₹325",
      offer: "20% off",
      price: "₹260",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600584916/cropped/aimamr64ugiggtytqlsf.jpg",
      h2: "Durex Extra Time Condom",
      p: "packet of 10 condoms",
      rating:"/images/4.1.png",
      p1: "378 ratings",
      p2: "MRP",
      strike: "₹290",
      offer: "32% off",
      price: "₹195",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1635143407/ioskxplb0zzcwgtmutmo.jpg",
      h2: "Dabur Honitus Adulsa Cough Syrup",
      rating:"/images/rating.png",
      p: "bottle of 100 ml Syrup",
      p2: "MRP",
      price: "MRP₹90",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600679484/cropped/u88td1gifytbcstnub2v.png",
      h2: "Dabur Giloy Ki Ghanvati",
      p: "bottle of 40 tablets",
      rating:"/images/4.3.png",
      p1: "457 ratings",
      p2: "MRP",
      strike: "₹90",
      offer: "10% off",
      price: "₹81",
    },
    {
      im: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1632140552/besx6yo28mzlbeuaezmx.jpg",
      h2: "Dettol Original Super Saver Liquid Handwash Refill Buy 1 Get 1 Free (750ml Each)",
      p: "combo pack of 2 Packs",
      rating:"/images/4.5.png",
      p1: "5 ratings",
      p2: "MRP",
      strike: "₹218",
      offer: "4% off",
      price: "₹209",
    },
  ];

  trendingdata.map(function(elem) {
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
    image.id = "pop-im"
    h2.id = "pop-name"

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

    c.addEventListener("click", function(){
      addtocart(elem);
      console.log(elem);
      window.location.href = "../popup/popup.html"
    })

    a.append(rating,p1)
    b.append(p2,strike,offer)
    c.append(image,h2,p,a,b,price)
    document.querySelector(".trending").append(c)
})  
function addtocart(elem){
  console.log(elem);
          cartarr.push(elem);
          localStorage.setItem("cartItems",JSON.stringify(cartarr));
}