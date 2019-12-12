//ESCUCHADOR DE SCROLL

$(window).on("scroll", () => {
    //ROTACION DEL LOGO
    const scrollRealizado = $(window).scrollTop();
    const giraRuedita = `${scrollRealizado * 0.1}deg`;
    $("#logo").css("transform",`rotate(${giraRuedita})`);

    //APARICION DE IMAGENES
    const altura = $(".reveal").offset().top;//offset me da las coordenadas de donde esta y agregando el top solo me devuelve donde empieza
    const diferencia = window.innerHeight * 0.5;
    console.log(diferencia);
    if(scrollRealizado >= altura - diferencia ){
        $(".reveal").addClass("visible");
    }
});

//Trazado de SVG

function trazar(){
    new Vivus("heroSvg", {
        duration:250,
        type: "oneByOne",
        pathTimingFunction: Vivus.EASE_OUT,
    },()=>{
        $("#heroSvg").addClass("terminado");
    }
    );
}

//Tipear en intro-nosotros

function tipear(){
    new TypeIt("#escritura", {
        strings: ["ELEGANTES","MODERNAS","RESPONSIVE"],
        speed: 100,
        deleteSpeed: 50,
        loop: true,
        breakLines: false,
    });
}

//Carrusel2 clientes en intro-nosotros

function carrusel2(){
    $("#carruselClientes2").owlCarousel({
        items: 3,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        autoplayHoverPause: true,
    });
}

//cuando la pagina este lista

window.onload = () => {
    trazar();
    tipear();
    carrusel2();    
};


//Controles de video de la section intro-nosotros
//PLAY
$("#playVid, #iconoPlayVid").on("click",() => {
    $("#videoPresentacion").get(0).play();
    $("#iconoPlayVid").css("opacity",0);

})


//PAUSE
$("#pauseVid").on("click",() => {
    $("#videoPresentacion").get(0).pause();
    $("#iconoPlayVid").css("opacity",1);
})
//STOP
$("#stopVid").on("click",() => {
    $("#videoPresentacion").get(0).load();
    $("#iconoPlayVid").css("opacity",1);
})

//SMOOTH SCROLL MENU NAVEGACION
$(".nav-link").on("click" , function(){
    const destino =$(this).attr("href");
    $("html").animate(
        {scrollTop: $(destino).offset().top},
        1000,
    );
});


