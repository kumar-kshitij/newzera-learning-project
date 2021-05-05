// @flow
export const degreesToRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180
}

export const getDecagonPoints = (size: number, offset: number) => {
  const sin36 = Math.sin(degreesToRadians(36))
  const cos36 = Math.cos(degreesToRadians(36))
  const sin72 = Math.sin(degreesToRadians(72))
  const cos72 = Math.cos(degreesToRadians(72))

  const sideLength = size / (1 + 2 * cos36 + 2 * cos72)

  let points = []
  for (let i = 0; i < 10; i++) {
    points.push([0, 0])
  }

  points[0] = [offset, offset + size / 2]
  points[1] = [points[0][0] + sideLength * cos72, points[0][1] - sideLength * sin72]
  points[9] = [points[0][0] + sideLength * cos72, points[0][1] + sideLength * sin72]
  points[2] = [points[1][0] + sideLength * cos36, points[1][1] - sideLength * sin36]
  points[8] = [points[9][0] + sideLength * cos36, points[9][1] + sideLength * sin36]

  points[5] = [points[0][0] + size, points[0][1]]
  points[4] = [points[5][0] - sideLength * cos72, points[1][1]]
  points[6] = [points[5][0] - sideLength * cos72, points[9][1]]
  points[3] = [points[4][0] - sideLength * cos36, points[2][1]]
  points[7] = [points[6][0] - sideLength * cos36, points[8][1]]

  return points
}

export const getHamburgerPoints = (size: number, offset: number) => {
  return [
    [offset, offset, offset + size, offset],
    [offset, offset + size / 2, offset + size, offset + size / 2],
    [offset, offset + size, offset + size, offset + size]
  ]
}

export const getLeftCaretPoints = (size: number, offset: number) => {
  return [
    [offset + size, offset],
    [offset, offset + size / 2],
    [offset + size, offset + size]
  ]
}

export const getTrianglePoints = (height: number, sideLength: number) => {
  return [
    [sideLength / 2, 0],
    [0, height],
    [sideLength, height]
  ]
}
