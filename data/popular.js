var categoriers = [
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1641187637/lcfd1eufwbtituwyswpi.jpg",
        p:"Covid Essentials"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1642586423/uq1gwxslqqrxxwv6zi6j.jpg",
        p:"Nutritional Drinks"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525304/kfyx5kvvn2ai5fwswhsa.png",
        p:"Ayurveda"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525284/cabpuknnlyyzgqfnb4x5.png",
        p:"Vitamins & Supplements"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525168/p1blaka183nc1zlil8tq.png",
        p:"Sexual Wellness"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525147/qjfdkz5njmk9n7vvrbb3.png",
        p:"Healthcare Devices"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525320/j7ruar88gacbzksuadjn.png",
        p:"Homeopathy"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525219/tfrtydrq6uzeyb42gh08.png",
        p:"Diabetes Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525251/bkhusfgfiu9qedowph2i.png",
        p:"Skin Care"
    },
    {
        im:"https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525231/htqiurbbhwmrxkvdzwkg.png",
        p:"Elderly Care"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525346/o6zpinichrj3t4npacwc.png",
        p:"Protein Supplements"
    },
    {
        im:"	https://onemg.gumlet.io/image/upload/w_150,h_150,c…_auto,f_auto/v1624525241/megirsoxbbpn6oiv4g4w.png",
        p:"Health Food & Drinks"
    },
]

categoriers.map(function(elem){
   var image = document.createElement("img")
   var p  = document.createElement("p")
   var a = document.createElement("div")
   a.className = "box"
   
   image.setAttribute("src",elem.im)
   p.textContent = elem.p
   a.append(image,p)
   document.querySelector(".popular").append(a);
})