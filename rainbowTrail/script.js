const paper = document.querySelector(".paper");
const pen = paper.getContext("2d");

let startTime = new Date().getTime();

const arcs =
    [
        "#e81416", 
        "#e81416", 
        "#e81416", 
        "#ffa500", 
        "#ffa500", 
        "#ffa500", 
        "#faeb36",
        "#faeb36",
        "#faeb36",
        "#79c314", 
        "#79c314", 
        "#79c314", 
        "#487de7", 
        "#487de7", 
        "#487de7", 
        "#4b369d",
        "#4b369d",
        "#4b369d",
        "#70369d",
        "#70369d",
        "#70369d",
    ];

const draw = () => {

    paper.width = paper.clientWidth;
    paper.height = paper.clientHeight;

    const start = {
        x: paper.width * 0.1,
        y: paper.height * 0.9
    }

    const end = {
        x: paper.width * 0.9,
        y: paper.height * 0.9
    }

    pen.strokeStyle = "white";
    pen.lineWidth = 8; // Corrected 'linewidth' to 'lineWidth'.

    

    const center =
    {
        x: paper.width * 0.5,
        y: paper.height * 0.9
    }

    const length = end.x - start.x;



    let currentTime = new Date().getTime(),
        elapsedTime = (currentTime - startTime) / 1000;




    const initialRadius = length * 0.05,
        initialArcRadius = length * 0.05;

    const spacing = (length / 2 - initialArcRadius) / arcs.length;

    arcs.forEach((arc, index) => {
        const arcRadius = initialRadius + (index * spacing);

        const oneFullLoop = 2 * Math.PI,
            numberofLoops = 50 - index, 
            velocity = (oneFullLoop * numberofLoops)/120,
            distance = Math.PI + (elapsedTime * velocity),
            maxAngle = 2 * Math.PI,
            modDistance = distance % maxAngle,
            adjustedDistance = modDistance >= Math.PI ? modDistance : maxAngle - modDistance;

        const x = center.x + arcRadius * Math.cos(adjustedDistance),
            y = center.y + arcRadius * Math.sin(adjustedDistance);

        // Draw Arc
        pen.beginPath();
        pen.strokeStyle = arc;
        pen.arc(center.x, center.y, arcRadius, Math.PI, 2 * Math.PI);
        pen.stroke();

        // Draw Circle
        pen.fillStyle = "white";
        pen.beginPath();
        pen.arc(x, y, length * 0.009, 0, 2 * Math.PI);
        pen.fill();
    })

    // Draw Line
    pen.beginPath();
    pen.moveTo(start.x, start.y);
    pen.lineTo(end.x, end.y);
    pen.strokeStyle = "white";
    pen.stroke();

    requestAnimationFrame(draw);

}

draw();
