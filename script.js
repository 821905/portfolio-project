let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.onscrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + Height){
            navLinks.forEach(Links => {
            Links.classList.remove("active");
            documents.querySelectorAll("header nav a[href*= `"+ id +"`]").classList.add("active");
            });
        }

    });
}
