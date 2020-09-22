//  Javascript for Gallery that slides through multiple images
//  In this example, list of 5 images are used
//  while using this script template 3 arrays need to be changed
//  They are images, arrCaptionTitle, arrCaptionText 

var { num, images, arrCaptionTitle, arrCaptionText} = listSlider();
  
//  Gallery slider values
function listSlider() {
    var images = [
        "slider-image1.png",
        "slider-image2.png",
        "slider-image3.png",
        "slider-image4.png",
        "slider-image5.png"
    ];
    var arrCaptionTitle = [
        "Lift scrap in the open air",
        "Take a historical walk",
        "Experience the coast on two wheels",
        "Get sweaty for free",
        "Go on an art tour at home"
    ];
    var arrCaptionText = [
        "Around Helsingborg there are 20 outdoor gyms that you can use for free around the clock. You train based on your own conditions and with your own body weight. Here you will find a map of all outdoor gyms.",
        "Follow in the footsteps of Consul Trapp in the historic area around Kärnan. Or experience the Port of Helsingborg with Consul Ingelsson's glasses. There are four different city walks and you print out a map and brochure yourself.",
        "The Kattegattleden is Sweden's first national cycle route and runs between Gothenburg and Helsingborg. North of Helsingborg you pass Sofiero and then cycle along the beach past Domsten and Viken.",
        "Whether you walk, jog or run, there is an exercise loop for you. Some loops are illuminated with electric lights. Here you will find all the loops.",
        "Do you know the works of art around the city? In everyone's eyes is a guide that addresses 86 public works of art in Helsingborg. Print and take with you on the walk, you will find it here."
    ];
    var num = 0;
    return { num, images, arrCaptionTitle, arrCaptionText};
}

/* Next button actions. change picture, title and text.
    Move to the next item in the list*/
function next() {
    num++;
    if(num >= images.length) {
        num = 0;
    }
    displayContents();
}

/* Prev button actions. change picture, title and text.
    Move to the previous item in the list*/
function prev() {
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    displayContents();
}

function callDisplayContents(i) {
    num = i;
    displayContents();
}

/* change html contents for picture, title and text. */
function displayContents() {
    var slider = document.getElementById("slider");
    var ctiText = document.getElementsByClassName("captionTitle");
    var cteText = document.getElementsByClassName("captionText");
    slider.src = images[num];
    ctiText[0].textContent = arrCaptionTitle[num];
    cteText[0].textContent = arrCaptionText[num];
}