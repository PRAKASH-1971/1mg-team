var mineral = [
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974052/jdrht4hevhajzejbyf6u.png",
        p:"Iron"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974568/bknmwxqz9am8bdkprywr.png",
        p:"Multivitamins"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974226/oqimcsqluesicdqn2tdl.png",
        p:"Zinc"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974548/s1hxii1s0js4h89rxh5g.png",
        p:"Calcium"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974250/kpyknruehq4ncpelamxv.png",
        p:"Magnesium"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974301/g41rbljmnuasdmtp20yc.png",
        p:"Potassium"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974370/roleuut74izomc68as5l.png",
        p:"Selenium"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974407/sfmufp9hh86ii2k453tg.png",
        p:"Iodine"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624974528/e4xwvfzuciykpp4qoudo.png",
        p:"Copper"
    }
]

mineral.map(function(elem){
   var image = document.createElement("img")
   var p  = document.createElement("p")
   var a = document.createElement("div")
   a.className = "box"
   
   image.setAttribute("src",elem.im)
   p.textContent = elem.p
   a.append(image,p)
   document.querySelector(".mineral").append(a);
})