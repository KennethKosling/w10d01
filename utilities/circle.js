area = (radius) => {
    return radius*radius*Math.PI;
}

function circumference(radius){
    return Math.PI*radius*2;
}

module.exports = {
    area,
    circumference,
}