var lastdata = [
    {
   im:"	https://onemg.gumlet.io/image/upload/gsr3krglkd5fpyqc34dq.jpg",
   h3:"Hing",
   p:"Hing is a commonly found spice that is used in various Indian cuisines. It is obtained..."
    },
    {
   im:"https://onemg.gumlet.io/image/upload/nlkofkodczcxwbtg51u0.jpg",
   h3:"Karkatshringi",
   p:"Karkatshringi or Shikari is a multibranched tree. It is a tree with Srngi (gall) like..."
    },
    {
   im:"https://onemg.gumlet.io/image/upload/zwhbqi8xjtvywunnictt.jpg",
   h3:"Neem",
   p:"Neem tree has a strong place in the world of medicine and wellness. Every part of the..."
    },
    {
   im:"https://onemg.gumlet.io/image/upload/zrbgr4w8efbgs3wqvfnj.png",
   h3:"Soyabean",
   p:"Soyabean, commonly known as Soy, is a leguminous crop that contains high amounts of"
    },
    {
   im:"	https://onemg.gumlet.io/image/upload/s86txjtecyd8kbcjf7dv.jpg",
   h3:"Turmeric",
   p:"Turmeric is an ancient spice which has been used mainly. It is also used a..."
    },
    {
   im:"https://onemg.gumlet.io/image/upload/emrrbwmb6jjvtmgowxzu.jpg",
   h3:"Himalayan Salt",
   p:"Himalayan saly, also known as Pink salt, is considered as the most superior salt in A..."
    },
    {
   im:"https://onemg.gumlet.io/image/upload/lwhlv9mnha3e9efk18lg.jpg",
   h3:"Wheat",
   p:"Wheat is the most cultivated cereal crop in the world. It is rich in carbohydr..."
    },
    {
   im:"https://onemg.gumlet.io/image/upload/f40eldhszkcqlkr2dy78.jpg",
   h3:"Ghee",
   p:"Ghee, also known as Ghrta in Ayurveda, is an excellent Anupana(therapeutic vehicle)..."
    },
    {
   im:"	https://onemg.gumlet.io/image/upload/gsr3krglkd5fpyqc34dq.jpg",
   h3:"Hing",
   p:"Hing is a commonly found spice that is used in various Indian cuisines. It is obtained..."
    }
]

lastdata.map(function(elem){
    var image = document.createElement("img")
    var h3 = document.createElement("h3")
    var p = document.createElement("p")
    var a1 = document.createElement("div")
    var b1 = document.createElement("div")
    var c1 = document.createElement("div")
    a1.className = "div1"
    b1.className = "div2"
    c1.className = "div3"

    image.setAttribute("src",elem.im)
    h3.textContent = elem.h3
    p.textContent =  elem.p

    a1.append(image)
    b1.append(h3, p)
    c1.append(a1,b1)
    document.querySelector(".last-box").append(c1)
})