function changeImage(width) {
    var image = document.getElementById("projectImages2");
    var imageSrc = image.getAttribute("src");
    console.log(imageSrc)
    if (imageSrc == "image/underconstruction01.png") {
        image.setAttribute("src", "image/underconstruction02.png")
    }
    else
    {
        image.setAttribute("src", "image/underconstruction01.png")
    }
}