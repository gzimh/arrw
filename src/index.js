const arrw = ({ x1, y1 }, { x2, y2 }) => {
    let xMultiplier = 0.50
    let xBase = x1
    if (x1 > x2) {
        xMultiplier = 0.70
    }
    else if (x1 < x2) {
        xMultiplier = 0.30
        xBase = x2
    }

    let x3 = xBase - (Math.abs(x1 - x2) * xMultiplier)

    let yMultiplier = 0.50
    let yBase = y1
    if (y1 > y2) {
        yMultiplier = 0.70
    }
    else if (y1 < y2) {
        yMultiplier = 0.30
        yBase = y2
    }

    let y3 = yBase - (Math.abs(y1 - y2) * yMultiplier)

    let distance = 10;
    let length = 5;

    let dx = x3 - x1
    let dy = y3 - y1;

    let vNorm = Math.sqrt(dx ** 2 + dy ** 2)
    let pointOnLine = [x3 - distance * dx / vNorm, y3 - distance * dy / vNorm]

    let pointBelow = [
        pointOnLine[0] - length * -dy / vNorm,
        pointOnLine[1] - length * dx / vNorm
    ]
    let pointAbove = [
        pointOnLine[0] + length * -dy / vNorm,
        pointOnLine[1] + length * dx / vNorm
    ]

    return {
        point: [x3, y3],
        pointBelow,
        pointAbove
    }
}

export { arrw }
