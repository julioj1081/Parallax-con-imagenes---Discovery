const translada = document.querySelectorAll(".translada");
//
const titleDiscover = document.querySelector(".title_Discover");
const header = document.querySelector("header");
let header_height = header.offsetHeight;
//
const shadow = document.querySelector(".shadow");
//
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
let section_height = section.offsetHeight;
//
const opacity = document.querySelectorAll(".opacity");
//linea
const linea = document.querySelector(".linea");

window.addEventListener('scroll', () =>{
    
    let scroll = window.pageYOffset;

    translada.forEach(elemen => {
        let speed = elemen.dataset.speed;
        elemen.style.transform = `translateY(${scroll * speed}px)`;
    })
    //opacidad en el titulo discover
    titleDiscover.style.opacity = -scroll / (header_height / 2) + 1;
    //degradado abajo de header y arriba de about recorremos los 300px de shadow
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    let sectionY = section.getBoundingClientRect();
    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 + 50}px)`;

    //contenido defuminado
    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    //linea about
    linea.style.width = `${scroll / (sectionY.top + section_height) * 80}%`;
})