interface ISquare {
    tag : 'square',
    size : number
}
interface IRectangle {
    tag : 'rectangle',
    width : number,
    height : number
}
interface ICircle {
    tag : 'circle',
    radius : number
}

type IShape = ISquare | IRectangle | ICircle

const square : ISquare = {
    tag : 'square',
    size : 10
}
const rectangle : IRectangle = {
    tag : 'rectangle',
    width : 10,
    height : 20
}
const circle : ICircle = {
    tag : 'circle',
    radius : 10
}

const calcArea = (shape : IShape): number => {
    switch (shape.tag) {
        case 'square':
            return Math.pow(shape.size, 2)
        case 'rectangle':
            return shape.width * shape.height
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2)
        default:
            return 0
    }
}

console.log(
    calcArea(square),
    calcArea(rectangle),
    calcArea(circle)
)