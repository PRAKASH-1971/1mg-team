var radiology = [
    {
        h1:"X-Ray Chest PA View",
        im:"./images/safetag.png",
        passage:"Provided By 2 Labs",
        rate:"₹500",
     },
     {
       h1:"USG Whole Abdomen",
       im:"./images/safetag.png",
       passage:"Ultrasound Whole Abdomen Provided By 2 Labs",
       rate:"₹1500",
    },
    {
       h1:"MRI Lumbosacral Spine",
       im:"./images/safetag.png",
       passage:"Provided By 1 Labs",
       rate:"₹4500",
    },
    {
       h1:"HRCT CHEST - Plain",
       im:"./images/safetag.png",
       passage:"Provided By 1 Lab",
       rate:"₹4500",
    },
    {
       h1:"MRI Screening of Whole Spine",
       im:"./images/safetag.png",
       passage:"Hepatic Function Test Provided By 1 Labs",
       rate:"₹2500",
    },
    {
       h1:"MRI Brain",
       im:"./images/safetag.png",
       passage:"Provided By 1 Lab",
       rate:"₹4500",
    },
    {
       h1:"Echocardiography",
       im:"./images/safetag.png",
       passage:"Color Doppler Echo Provided By 2 Labs",
       rate:"₹2000",
    },
    {
       h1:"CECT Whole Abdomen",
       im:"./images/safetag.png",
       passage:"Provided By 1 Lab",
       rate:"₹6000",
    }
];

radiology.map(function(elem){
   // console.log(elem.h1)
   var h1 = document.createElement("h1")
   var image = document.createElement("img")
   var p = document.createElement("p")
   var image1 = document.createElement("img")
   var rate = document.createElement("img")
   var p1 = document.createElement("h3")
   var price = document.createElement("p")
   var strike = document.createElement("del")
   var offer = document.createElement("h3")
   var a1 = document.createElement("div")
   var a2 = document.createElement("div")
   var a3 = document.createElement("div")
   var a4 = document.createElement("div")
   a1.className = "first-div"
   a2.className = "second-div"
   a3.className = "last-div"
   a4.className = "main-div"

   /* first div */
   h1.textContent = elem.h1
   image.setAttribute("src",elem.im)
   image.className = "im-1"

   p.textContent = elem.passage

   /* second-div */
   image1.setAttribute("src",elem.logo)
   rate.setAttribute("src",elem.rating)
   p1.textContent = elem.p1
   image1.className = "im-2"
   rate.className = "im-3"


   /* last-div */
    price.textContent = elem.rate
    strike.textContent = elem.strike
    offer.textContent =  elem.offer   

    a1.append(h1,image)
    a2.append(p1)
    a3.append(price)
   a4.append(a1,p,a2,a3)
    document.querySelector(".radiology").append(a4)
})