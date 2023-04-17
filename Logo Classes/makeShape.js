const Circle = require('./circle');
const Square = require('./square');
const Triangles = require('./triangle');

const makeShape = (data) => {
  const { logoShape } = data;
  switch (logoShape) {
    case 'circle':
      const makeCircle = new Circle(data);
      return makeCircle;
      break;

    case 'triangles':
      const makeTriangle = new Triangles(data);
      return makeTriangle;
      break;

    case 'square':
      console.log(data);
      const makeSquare = new Square(data);
      return makeSquare;
      break;

    default:
      return `Something is not right!`;
      break;
  }
};

module.exports = { makeShape };