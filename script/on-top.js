window.addEventListener("load", () => {
    var on_top_btn = document.getElementById("on_top_btn");
    on_top_btn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    })
})