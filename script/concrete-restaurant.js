window.addEventListener("load", ()=> {
    var options = Array.from(document.getElementsByClassName("option"));
    var menu = document.getElementById("restaurant_menu");
    var about = document.getElementById("restaurant_about");
    var address = document.getElementById("restaurant_address");
    var complaints = document.getElementById("restaurant_complaints");
    options.forEach(item => {
        item.addEventListener("click", () => {
            switch (item.attributes["id"].value) {
                case "menu": {
                    hideElements();
                    menu.classList.add("shown");
                    menu.classList.remove("hidden");
                    break;
                }
                case "about": {
                    hideElements();
                    about.classList.add("shown");
                    about.classList.remove("hidden");
                    break;
                }
                case "address": {
                    hideElements();
                    address.classList.add("shown");
                    address.classList.remove("hidden");
                    break;
                }
                case "complaints": {
                    hideElements();
                    complaints.classList.add("shown");
                    complaints.classList.remove("hidden");
                    break;
                }
            }
        })
    })

    function hideElements() {
        menu.classList.add("hidden");
        about.classList.add("hidden");
        address.classList.add("hidden");
        complaints.classList.add("hidden");
    }
});