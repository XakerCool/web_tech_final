window.addEventListener("load", () => {
    var burgerPreview = document.getElementById("burger_preview");
    var components = Array.from(document.getElementsByClassName("component"));
    var sauces = Array.from(document.getElementsByClassName("sauce"));

    var price = document.getElementById("price");

    var calcPrice = parseFloat(price.innerText);

    var pictures = {
        "cotlette": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/cotlette.png?raw=true",
        "cheese": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/cheese.png?raw=true",
        "pickles": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/pickles.png?raw=true",
        "salad": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/salad.png?raw=true",
        "tomatoes": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/tomatoes.png?raw=true",
        "bottom_bun": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/bottom_bun.png?raw=true",
        "ketchup_sauce": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/ketchup_sauce.png?raw=true",
        "mayonnaise_sauce": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/mayonnaise_sauce.png?raw=true",
        "mustard_sauce": "https://github.com/XakerCool/web_tech_final/blob/main/burger_parts/mustard_sauce.png?raw=true"
    }

    components.forEach(item => {
        item.addEventListener("click", () => {
            if (item.attributes["id"].value == "remove_one") {
                if (burgerPreview.children.length > 1)
                {
                    calcPrice -= parseFloat(burgerPreview.lastChild.dataset.cost);
                    burgerPreview.removeChild(burgerPreview.lastChild);
                }
            } else if (item.attributes["id"].value == "clear") {
                Array.from(burgerPreview.children).forEach((child, index) => {
                    if (index != 0) {
                        burgerPreview.removeChild(child);
                        calcPrice = 1;
                    }
                })
            } else {
                addComponent(item.attributes["id"].value, item.dataset.cost);
                calcPrice += parseFloat(item.dataset.cost);
            }
            price.innerText = calcPrice;
        })
    })
    sauces.forEach(item => {
        item.addEventListener("click", () => {
            addComponent(item.attributes["id"].value, item.dataset.cost);
            calcPrice += parseFloat(item.dataset.cost);
            price.innerText = calcPrice;
        })
    })

    function addComponent(component, cost) {
        var div = document.createElement("div");
        div.classList.add("hamburger_part");
        div.dataset.cost = cost;
        var img = document.createElement("img");
        img.src = pictures[component];
        img.alt = "";

        div.appendChild(img);

        burgerPreview.append(div);
    }
    
});