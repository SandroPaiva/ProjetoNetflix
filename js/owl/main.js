$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        //abaixo de 600px será apresentada 1 imagen na tela
        0:{
            items:1
        },
        //a partir de 600px serão apresentados 6 imagens na tela
        600:{
            items:3
        },
        //a partir 1000px serão apresentados 5 imagens na tela
        1000:{
            items:5
        }
    }
})