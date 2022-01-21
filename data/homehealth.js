var homedata = [
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653541/ag0wj2mkq8q3tozalkpz.jpg",
        p:"Mamaearth"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653560/nvuere7wnlfacseqpejo.jpg",
        p:"Dettol"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653573/w8ogeskbd8fuwd9jcuff.jpg",
        p:"Cetaphil"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653615/fzrz0bdq1ywjl9xde9lw.jpg",
        p:"Palmolive"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653633/kmbnv3ptpyf9neyf4wb0.jpg",
        p:"Wilmar Schwae India"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653654/diyflravqeu3bhufq75f.jpg",
        p:"Ensure"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653678/brymm5py2zfedavgssbq.jpg",
        p:"Charak"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653712/fvre1ebr1kebsvis41rb.jpg",
        p:"Everyuth Naturals"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642653733/jwsjh0hl6fdpyta1bzae.jpg",
        p:"Kapiva Ayurveda"
    }
]

homedata.map(function(elem){
   var image = document.createElement("img")
   var p  = document.createElement("p")
   var a = document.createElement("div")
   a.className = "box"
   
   image.setAttribute("src",elem.im)
   p.textContent = elem.p
   a.append(image,p)
   document.querySelector(".home-health").append(a);
})