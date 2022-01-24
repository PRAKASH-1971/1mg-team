var dabour = [
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…auto/v1600089130/cropped/rsmv1dhmapimia00r0pw.png",
      h2:"Cadbury Bournvita Health Drink",
      p:"jar of 1 kg Powder",
      rating:"./images/4.5.png",
      p1:"450 ratings",
      p2:"MRP",
      strike:"₹410",
      offer:"12% off",
      price:"361"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1608188601/c4umsblj9pxya8gaanyk.jpg",
      h2:"Horlics Health and Nutrition Drink Classi...",
      p:"jar of 500 mg Powder",
      rating:"./images/4.5.png",
      p1:"641 ratings",
      p2:"MRP",
      strike:"₹245",
      offer:"7% off",
      price:"228"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…auto/v1608285794/cropped/cyvlxvtqxms07bi6gh0b.jpg",
      h2:"PentaSure 2.0 High Protein Powder Vanilla",
      p:"Tin of 1 kg Powder",
      rating:"./images/4.3.png",
      p1:"129 ratings",
      p2:"MRP",
      strike:"₹3289",
      offer:"15% off",
      price:"2796"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1628101607/orfyvvjd1nkaoyimmgzf.jpg",
      h2:"PediaSure Kids Nutrition Drink with...",
      p:"box of 1 Kg Powder",
      rating:"./images/4.5.png",
      p1:"615 ratings",
      p2:"MRP",
      strike:"₹1290",
      offer:"10% off",
      price:"1161"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1608188601/c4umsblj9pxya8gaanyk.jpg",
      h2:"Horlics Health and Nutrition Drink Classi...",
      p:"jar of 1 kg Powder",
      rating:"./images/4.5.png",
      p1:"641 ratings",
      p2:"MRP",
      strike:"₹459",
      offer:"7% off",
      price:"427"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1605617529/hqw8q77ms4kdingfsb2j.jpg",
      h2:"Ensure Plus Vanilla Powder",
      p:"jar of 1 kg Powder",
      rating:"./images/4.5.png",
      p1:"524 ratings",
      p2:"MRP",
      strike:"₹1335",
      offer:"8% off",
      price:"1288"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1606138813/hddwywjg0poyasnelf0x.jpg",
      h2:"Horlics Junior Horlics Health and Nutrition...",
      p:"jar of 500 gm Powder",
      rating:"./images/4.1.png",
      p1:"16 ratings",
      p2:"MRP",
      strike:"₹290",
      offer:"7% off",
      price:"270"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1625508985/y5urphvefoq1kosykxuu.jpg",
      h2:"Peptamen Peptide Based Diet Powder...",
      p:"box of 400 gm Powder",
      rating:"./images/4.5.png",
      p1:"28 ratings",
      p2:"MRP",
      strike:"₹1399",
      offer:"7% off",
      price:"1301"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1612768557/qmmug1yktuszhmanxsyt.jpg",
      h2:"Proteinex Original Health and Nutritional Drink",
      p:"box of 750 gm Powder",
      rating:"./images/4.4.png",
      p1:"165 ratings",
      p2:"MRP",
      strike:"₹1080",
      offer:"12% off",
      price:"952"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1613566796/iheqzrewt0n4auxbd2l6.jpg",
      h2:"Horlics Health and Nutrition Drink Classi...",
      p:"packet of 1 kg Powder",
      rating:"./images/4.5.png",
      p1:"180 ratings",
      p2:"MRP",
      strike:"₹375",
      offer:"4% off",
      price:"360"
    },
    {
      im:"https://onemg.gumlet.io/image/upload/a_ignore,w_38…auto/v1600089136/cropped/xrrnuoyv97tdejpkngdm.png",
      h2:"Cadbury Bournvita Health Drink",
      p:"jar of 500 gm Powder",
      rating:"./images/4.5.png",
      p1:"450 ratings",
      p2:"MRP",
      strike:"₹223",
      offer:"5% off",
      price:"212"
    },
    {
      im:"	https://onemg.gumlet.io/image/upload/a_ignore,w_38…_auto,f_auto/v1613566715/w84792bbroguuvsqyyh8.jpg",
      h2:"Horlics Health and Nutrition Drink Classi...",
      p:"packet of 500 gm Powder",
      rating:"./images/4.5.png",
      p1:"180 ratings",
      p2:"MRP",
      strike:"₹190",
      offer:"4% off",
      price:"182"
    },
]

var cartarr = JSON.parse(localStorage.getItem("cartItems")) || []


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
    image.id = "pop-im"

    h2.textContent = elem.h2
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

    price.textContent = `₹${elem.price}`
    price.className = "price"

    c.addEventListener("click", function(){
      addtocart(elem);
      console.log(elem);
      window.location.href = "../popup/popup.html"
    })

    a.append(rating,p1)
    b.append(p2,strike,offer)
    c.append(image,h2,p,a,b,price)
    document.querySelector(".dabor").append(c)
})

     
function addtocart(elem){
  console.log(elem);
          cartarr.push(elem);
          localStorage.setItem("cartItems",JSON.stringify(cartarr));
}

      
