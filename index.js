document.getElementById("singup").onclick = function() {
    document.getElementById("registerdiv").classList.toggle("none");
}
document.getElementById("outreg").onclick = function() {
    document.getElementById("registerdiv").classList.add("none");
}

function myFunction() {
    document.getElementById("Dropdowndiv").classList.toggle("show");
}
var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    autoplay: true,
});

splide.mount();