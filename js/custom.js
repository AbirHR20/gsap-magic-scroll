$(document).ready(function () {
    $("#fullpage").fullpage({
        anchors: ["firstpage", "secondpage", "thirdpage"],
        menu: "#menu",
        autoscrolling: false
    });
    
});

//scrollMagic init controller

var controller = new ScrollMagic.Controller();

//Tween - Section 2

var scene = new ScrollMagic.Scene({
    triggerElement: "#section2"
})

//Animate color and top border in relation to scroll position 

.setTween("#bg img", 1,{ 
    maxWidth: "1200px",
    top: "30%",
    left: "80%",
    opacity: 0.25,
})

.addTo(controller);

var scene = new ScrollMagic.scene({
    triggerElement: '#section3',
    duration: 300
})

.setTween("#bg img",{
    top:"20%"
})

.addTo(controller);