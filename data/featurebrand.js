var featuredata = [
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642654469/hiuqiebobmfhvmvsgt5w.jpg",
        p:"Jiva Ayurveda"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642654489/p1i7rlkkuzlbve8c9ryq.jpg",
        p:"Nivea"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642654515/di3kucdv0hezpd4dn5mo.jpg",
        p:"Nicotex"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642654530/pecufwpdagoiczkxpdp1.jpg",
        p:"Complan"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642654556/zxlyzplev5ulurk8uxuf.jpg",
        p:"Protinex"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642654577/f34nkt7ovz3lunulpnqm.jpg",
        p:"Baidyanath(Nagpur)"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642574897/jznd4sbvw5ecdqmkxfj2.jpg",
        p:"Dabur"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642654620/gegvp5fovzfecwmtkpc7.jpg",
        p:"Cofsils"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642654602/hlsjof7fitzag6697p1d.jpg",
        p:"Moov"
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
   document.querySelector(".feature").append(a);
})