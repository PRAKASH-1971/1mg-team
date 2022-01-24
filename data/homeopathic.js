var homeopathic = [
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1628230885/fn5rxxfbjck5adgfjdzv.png",
        p:"Warts"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1628230917/qlmcbdvqvbotpjhz8qy7.png",
        p:"Hair Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1628230933/f0gy5hoi0hb9sp9rdr1y.png",
        p:"Sexual Wellness"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1628230952/ei7awbp45zojzdzkgl5w.png",
        p:"Fungal Infection"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1628230968/gftr7dzw2repmarmmi0v.png",
        p:"Diabetes"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1628230979/nxsjfwpcofycznz2vugu.png",
        p:"Hypothyroidism"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1628230997/jqliejzrvmmghgrgm6z6.png",
        p:"Obesity"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624524327/px637bhbapbtevhq6e6g.png",
        p:"Piles & Fissures "
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1628231120/ycqqcvpm0okncwjnpzps.png",
        p:"Allergic Rhinitis"
    }
]

homeopathic.map(function(elem){
   var image = document.createElement("img")
   var p  = document.createElement("p")
   var a = document.createElement("div")
   a.className = "box"
   
   image.setAttribute("src",elem.im)
   p.textContent = elem.p
   a.append(image,p)
   document.querySelector(".homeopathic").append(a);
})