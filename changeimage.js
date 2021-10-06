function changeImage(width) {
    var image = document.getElementById("projectImages");
    var imageSrc = image.getAttribute("src");
    console.log(imageSrc)
    if (imageSrc == "image/Mittschema01.png") {
        image.setAttribute("src", "image/Mittschema02.png")
    }
    else
    {
        image.setAttribute("src", "image/Mittschema01.png")
    }
}