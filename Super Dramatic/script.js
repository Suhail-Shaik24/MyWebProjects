
window.onmousemove = e =>{
    const mouseX = e.clientX,
          mouseY = e.clientY;
    const windowWidth = window.innerWidth,
          windowHeight = window.innerHeight;

    const mouseXASDecimal = mouseX / windowWidth;

    const andX = (windowWidth * -0.15) + mouseX * 1.3,
          andY = (windowHeight * 0.1) + mouseY * 0.4;

    wand.animate({
        left: `${andX}px`,
        top: `${andY}px`,
        rotate: `${-10 +(20 * mouseXASDecimal)}deg`
    }, {duration: 400, fill: "forwards"});
} 