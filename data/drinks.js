var drinkdata = [
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642674051/l5udvnoe9dhkh61a4uk3.jpg",
        p:"Ensure"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642674072/ug87ietyozrcg2kgoofx.jpg",
        p:"Horlicks"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642674094/knmzucsujjfkhfk1bxnu.jpg",
        p:"Pediasure"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642674210/oh8wt5ympz1myjwsxmfr.jpg",
        p:"Protines"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642674140/zl3imtwjxe5rvnyocd2f.jpg",
        p:"Bournvita"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642674115/ccnvrvywlfghtewfcphr.jpg",
        p:"Pentasure"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642674151/tgeuviryquvfpon8krk9.jpg",
        p:"Complan"
    }
]

drinkdata.map(function(elem){
   var image = document.createElement("img")
   var p  = document.createElement("p")
   var a = document.createElement("div")
   a.className = "box"
   
   image.setAttribute("src",elem.im)
   p.textContent = elem.p
   a.append(image,p)
   document.querySelector(".drinks").append(a);
})