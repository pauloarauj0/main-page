window.onload = function () {
    var page1 = document.getElementById("page1")
    var page2 = document.getElementById("page2")


    page1.addEventListener('click', () => {
        redirect_page1()
    });

    page2.addEventListener('click', () => {
        redirect_page2()
    });

}


function redirect_page1() {
    window.location.href = "https://git-page1.pages.dev/";
}

function redirect_page2() {
    window.location.href = "https://git-page2.pages.dev/";
}