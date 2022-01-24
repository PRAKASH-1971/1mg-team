var pathology = [
    {
        h1:"Complete Blood Count",
        im:"./images/safetag.png",
        passage:"Provided By 2 Labs",
        p1:"CBP",
        rate:"₹300",
     },
     {
       h1:"Diabetes Screening",
       im:"./images/safetag.png",
       passage:"Provided By 2 Labs",
       rate:"₹600",
    },
    {
       h1:"C-Reactive Protein Quantit...",
       im:"./images/safetag.png",
       passage:"Provided By 2 Labs",
       rate:"₹350",
    },
    {
       h1:"Thyroid profile Total",
       im:"./images/safetag.png",
       passage:"Thyroid Function Test, TFT Provided By 3 Labs",
       rate:"₹300",
    },
    {
       h1:"Liver Function Test",
       im:"./images/safetag.png",
       passage:"Hepatic Function Test Provided By 2 Labs",
       rate:"₹550",
    },
    {
       h1:"Covid Antibody IgG(Quanti...",
       im:"./images/safetag.png",
       passage:"Covid-19 Ab Detection+Measurement",
       rate:"₹550",
    },
    {
       h1:"Vitamin D (25-OH)",
       im:"./images/safetag.png",
       passage:"25-Hydroxy Cholecalciferol Provided By 3 Labs",
       rate:"₹400",
    },
    {
       h1:"Lipid Profile",
       im:"./images/safetag.png",
       passage:"Provided By 3 Labs",
       rate:"₹400",
    }
];

pathology.map(function(elem){
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
    document.querySelector(".pathology").append(a4)
})