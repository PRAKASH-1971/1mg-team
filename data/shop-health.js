var featuredata = [
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524227/hgzkyio2rphkn6wjif94.png",
        p:"Diabetes Care"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524269/zo7sc14nqpt6ebeojkvr.png",
        p:"Cardiac Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524293/ttagxlnxulsvkyv9fetr.png",
        p:"Stomach Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524308/ijgn7fhyq8ig0welmrcp.png",
        p:"Liver Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524282/zytsldnf5mvb0u19ydep.png",
        p:"Kidney Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524210/ywohqm4txnehsmibypaz.png",
        p:"Bone, Joint & Muscle Care"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524252/hn5bpr1ci2do5kdub51v.png",
        p:"Pain Relief"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524188/hr9vysj9cy0sfjs3mpg0.png",
        p:"Respiratory Care"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974626/ralbiqcgldtuzcjbrxdc.png",
        p:"Quit Smoking"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524327/px637bhbapbtevhq6e6g.png",
        p:"Piles, Fissures and Fistula"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524350/snmyxmlxhpdcqum2d1wm.png",
        p:"Mental Welness"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524365/t0ehbhfrkughfxoygvs2.png",
        p:"Eye Care"
    }
]

featuredata.map(function(elem){
   var image = document.createElement("img")
   var p  = document.createElement("p")
   var a = document.createElement("div")
   a.className = "box"
   
   image.setAttribute("src",elem.im)
   p.textContent = elem.p
   a.append(image,p)
   document.querySelector(".shop-health").append(a);
})