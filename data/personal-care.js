var personalcare = [
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287054/n8ocwaqoerqke0nbrtrr.png",
        p:"Skin Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287149/myhagyzdangsd1ibwotm.png",
        p:"Sexual Wellness"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287078/kgdli04gm2hcjgel553r.png",
        p:"Hair Care"
    },
    {
        im:"\	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287242/u5awkf56gidlnhuybvqh.png",
        p:"Baby Care"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287172/yuam4evyvw7adyhqixzv.png",
        p:"Women Care"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287114/d7ocpsrtehsla83kbxqs.png",
        p:"Elderly Care"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287198/pa32gmnhdlk0ownn9b7p.png",
        p:"Men Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287212/et2g6nylqsdndeutxloi.png",
        p:"Oral Care"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1629287226/jmdy8kha8pnlrjz9veue.png",
        p:"Pet Care"
    }
]

personalcare.map(function(elem){
   var image = document.createElement("img")
   var p  = document.createElement("p")
   var a = document.createElement("div")
   a.className = "box"
   
   image.setAttribute("src",elem.im)
   p.textContent = elem.p
   a.append(image,p)
   document.querySelector(".personal-care").append(a);
})