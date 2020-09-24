/*var questionsListItem = document.getElementsByClassName("nav-aside-item");
var submenuitem = document.getElementsByClassName("submenu-item");*/

var i;
var j;

for (j = 0; j < 2; j++) {
    
    if (j == 0)  {

        var item = document.getElementsByClassName("nav-aside-item");
    }

    else {

        var item= document.getElementsByClassName("submenu-item");

    }

        for (i = 0; i < item.length; i++) {
            item[i].addEventListener("click", function () {
                var icon = this.getElementsByClassName("arrow-icon");
                console.log(icon[0]);
                var accordion_panel = this.nextElementSibling; //Returns only the Element Node Sibling ignoring comments and text node

                if (accordion_panel.style.display === "block") {
                    accordion_panel.style.display = "none";
                    icon[0].classList.remove('fa-caret-up');
                    icon[0].classList.add('fa-caret-down');

                } else {
                    accordion_panel.style.display = "block";
                    icon[0].classList.add('fa-caret-up');
                    icon[0].classList.remove('fa-caret-down');
                }
            });
        }
    }


