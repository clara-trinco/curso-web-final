//ROTACION DEL LOGO

$(window).on("scroll", () => {
    const scrollRealizado = $(window).scrollTop();
    const giraRuedita = `${scrollRealizado * 0.1}deg`;
    $("#logo").css("transform",`rotate(${giraRuedita})`);
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

//cuando la pagina este lista

window.onload = () => {
    trazar();
};