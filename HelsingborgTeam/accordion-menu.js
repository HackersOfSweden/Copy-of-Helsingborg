
var questionsListItem = document.getElementsByClassName("questions-list-item");
var i;

for (i = 0; i < questionsListItem.length; i++) {
    questionsListItem[i].addEventListener("click", function () {
        var icon = this.getElementsByClassName("plus-icon");
        console.log(icon[0]);
        var accordion_panel = this.nextElementSibling; //Returns only the Element Node Sibling ignoring comments and text node

        if (accordion_panel.style.display === "block") {
            accordion_panel.style.display = "none";
            icon[0].classList.remove('fa-minus-circle');
            icon[0].classList.add('fa-plus-circle');

        } else {
            accordion_panel.style.display = "block";
            icon[0].classList.add('fa-minus-circle');
            icon[0].classList.remove('fa-plus-circle');
        }
    });
}