const allChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const positions = {
  leftTopTop: { x: -1, y: 2 },
  leftTopMid: { x: -2, y: 1 },
  leftDownMid: { x: -2, y: -1 },
  leftDownDown: { x: -1, y: -2 },
  rightTopTop: { x: 1, y: 2 },
  rightTopMid: { x: 2, y: 1 },
  rightDownMid: { x: 2, y: -1 },
  rightDownDown: { x: 1, y: -2 },
};
const getX = (coord) => {
  const letter = coord.split('')[0].toLowerCase();
  const numX = allChars.findIndex(e => (e === letter)) + 1;
  return numX;
};
const getY = coord => (coord.split('')[1]);
const decodeCoord = (coord) => {
  const x = parseInt(getX(coord), 10);
  const y = parseInt(getY(coord), 10);
  return { x, y };
};
const encodeCoord = (x, y) => {
  const letter = allChars[x - 1].toUpperCase();
  const num = y;
  return `${letter}${num}`;
};
const coordIsCorrect = (x, y) => {
  const xIsCorrect = x > 0 && x < 9;
  const yIsCorrect = y > 0 && y < 9;
  return xIsCorrect && yIsCorrect;
};
const getAllowableCoords = (x, y) => (
  Object
    .keys(positions)
    .map((k) => {
      const newX = positions[k].x + x;
      const newY = positions[k].y + y;
      return coordIsCorrect(newX, newY) ? { x: newX, y: newY } : null;
    })
    .filter(e => (e !== null))
);
const build = (currentCoord) => {
  const { x, y } = decodeCoord(currentCoord);
  return getAllowableCoords(x, y).map(coord => (encodeCoord(coord.x, coord.y)));
};

export default build;
