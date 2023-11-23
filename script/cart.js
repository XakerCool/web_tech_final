window.addEventListener("load", () => {
    var cart_count = document.getElementById("cart_count");

    var cart = document.getElementById("cart");
    var cart_content = cart.children[0];
    var cart_btn = document.getElementById("cart_btn");

    cart_count.innerHTML = cart_content.children.length;

    cart_btn.addEventListener("click", () => {
        if (cart_content.children.length != 0) {
            cart.classList.toggle("shown");
            cart.classList.toggle("hidden");
        }
    });

    var add_btns = Array.from(document.getElementsByClassName("add_btn"));
    add_btns.forEach(item => {
        item.addEventListener("click", (e) => {
            if (!Array.from(e.target.classList).includes("remove") && !Array.from(e.target.classList).includes("add")) {
                item.classList.toggle("add_btn_active");
                item.classList.toggle("add_btn_inactive");
            }
            if (Array.from(e.target.classList).includes("remove")) {
                Array.from(e.target.parentNode.parentNode.children).forEach(countItem => {
                    if (Array.from(countItem.classList).includes("good_count")) {
                        if (parseInt(countItem.innerHTML) == 1) {
                            item.parentElement.remove();
                            isEmpty();
                        }
                        if (parseInt(countItem.innerHTML) != 1) {
                            countItem.innerHTML = parseInt(countItem.innerHTML) - 1;
                        }
                    }
                })
            }
            if (Array.from(e.target.classList).includes("add")) {
                Array.from(e.target.parentNode.parentNode.children).forEach(countItem => {
                    if (Array.from(countItem.classList).includes("good_count")) {
                        if (parseInt(countItem.innerHTML) != 10) {
                            countItem.innerHTML = parseInt(countItem.innerHTML) + 1;
                        }
                    }
                })
            }
        })
    })

    var del_btns = Array.from(document.getElementsByClassName("del_btn"));
    del_btns.forEach(item => {
        item.addEventListener("click", () => {
            item.parentNode.remove();
            isEmpty();
        })
    })

    function isEmpty() {
        if (Array.from(cart.children)[0].children.length == 0) {
            cart.classList.add("hidden");
            cart.classList.remove("add");
        }
    }
})