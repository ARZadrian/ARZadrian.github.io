var btn = document.getElementById("contactMeBtn");

btn.addEventListener("mouseover",function(){
    this.textContent = "adrian.arz.bilbao@gmail.com";
});

btn.addEventListener("mouseout",function(){
    this.textContent = "Contáctame";
});