var carddata = [
     {
         h1:"Comprehensive Silver Full B...",
         im:"./images/safetag.png",
         passage:"Includes 68 tests",
         logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
         rating:"./images/rating.png",
         p1:"ISO",
         rate:"₹1399",
         strike:"₹2798",
         offer:"50% off"   /* 1 */
      },
      {
        h1:"Comprehensive Platinum Ful...",
        im:"./images/safetag.png",
        passage:"Includes 88 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹2999",
        strike:"₹5998",
        offer:"50% off" /* 2 */
     },
     {
        h1:"Good Health Gold Package",
        im:"./images/safetag.png",
        passage:"Includes 60 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹899",
        strike:"₹1798",
        offer:"50% off" /* 3 */
     },
     {
        h1:"Covid Home Care Essential ...",
        im:"./images/safetag.png",
        passage:"Includes 33 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹1599",
        strike:"₹2400",
        offer:"33% off"/* 4 */
     },
     {
        h1:"Comprehensive Gold Full Bo...",
        im:"./images/safetag.png",
        passage:"Includes 75 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹1699",
        strike:"₹3398",
        offer:"50% off"/* 5 */
     },
     {
        h1:"Tax Saver Health Check",
        im:"./images/safetag.png",
        passage:"Includes 66 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹2499",
        strike:"₹4998",
        offer:"50% off"/* 6 */
     },
     {
        h1:"Winter Special Package",
        im:"./images/safetag.png",
        passage:"Includes 74 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹1399",
        strike:"₹2798",
        offer:"50% off"/* 7 */
     },
     {
        h1:"Women Wellness Advanced...",
        im:"./images/safetag.png",
        passage:"Includes 45 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹1199",
        strike:"₹2398",
        offer:"50% off"/* 8 */
     },
     {
        h1:"Senior Citizen Advanced Pac...",
        im:"./images/safetag.png",
        passage:"Includes 57 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹1349",
        strike:"₹2698",
        offer:"50% off"/* 9 */
     },
     {
        h1:"Good Health Silver Package",
        im:"./images/safetag.png",
        passage:"Includes 58 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹599",
        strike:"₹1198",
        offer:"50% off"/* 10 */
     },
     {
        h1:"Good Health Platinum Package",
        im:"./images/safetag.png",
        passage:"Includes 58 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹1099",
        strike:"₹2198",
        offer:"50% off"/* 11 */
     },
     {
        h1:"Women Wellness Premium P...",
        im:"./images/safetag.png",
        passage:"Includes 58 tests",
        logo:"https://onemg.gumlet.io/diagnostics/13745198-de27-11eb-b6a9-028c4b29e266.png?format=auto",
        rating:"./images/rating.png",
        p1:"ISO",
        rate:"₹1499",
        strike:"₹2998",
        offer:"50% off"/* 12 */
     },
];

carddata.map(function(elem){
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
     a2.append(image1,rate,p1)
     a3.append(price,strike,offer)
    a4.append(a1,p,a2,a3)
     document.querySelector(".checkup-card").append(a4)
})