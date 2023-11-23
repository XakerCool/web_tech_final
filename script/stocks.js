window.addEventListener("load", () => {
    var stock_title = document.getElementById("stock_title");
    var stock_content = document.getElementById("stock_content");
    var stock_warning = document.getElementById("stock_warning");
    var stock_img = document.getElementById("stock_img");

    var stock_btns = Array.from(document.getElementsByClassName("stock_button"));
    stock_btns.forEach(item => {
        item.addEventListener("click", () => {
            switchAllOff();
            item.classList.add("active");
            switch(item.dataset["stock"]) {
                case "happy_birthday":
                    setStock(happy_birthday_stock.title, happy_birthday_stock.content, happy_birthday_stock.warning, happy_birthday_stock.imgURL);
                    break;
                case "good_morning":
                    setStock(good_morning_stock.title, good_morning_stock.content, good_morning_stock.warning, good_morning_stock.imgURL);
                    break;
                case "night_shift":
                    setStock(night_shift_stock.title, night_shift_stock.content, night_shift_stock.warning, night_shift_stock.imgURL);
                    break;
                case "two_plus_one":
                    setStock(two_plus_one_stock.title, two_plus_one_stock.content, two_plus_one_stock.warning, two_plus_one_stock.imgURL);
                    break;
            }
        })
    })

    function setStock(title, content, warning, imgPath) {
        stock_title.innerHTML = title;
        stock_content.innerHTML = content;
        stock_warning.innerHTML = warning;
        console.log([stock_img.attributes["src"]]);
        stock_img.attributes["src"].value = imgPath;
    }

    function switchAllOff() {
        stock_btns.forEach(item => {
            item.classList.remove("active");
        })
    }
})

var happy_birthday_stock = {
    "title": "Happy birthday!",
    "content": "20% discount on all kinds of desserts and drinks for birthday parties!",
    "warning": "The discount is valid the day before and after the birthday",
    "imgURL": "./images/desserts.jpg"
}
var good_morning_stock = {
    "title": "Good morning!",
    "content": "10% discount on all kinds of desserts!",
    "warning": "The discount is valid everyday from 8:00 to 10:00",
    "imgURL": "./images/desserts.jpg"
}
var night_shift_stock = {
    "title": "Night shift",
    "content": "25% discount on all food",
    "warning": "The discount is valid  from 00:00 to 3:00",
    "imgURL": "./images/companyfood.jpg"
}
var two_plus_one_stock = {
    "title": "2 + 1",
    "content": "One more free drink if you buy 2 drinks!",
    "warning": "The discount is valid only for lemonades",
    "imgURL": "./images/drinks.jpg"
}