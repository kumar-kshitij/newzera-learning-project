// @flow
import React from 'react'
import Svg, { Defs, ClipPath, Polygon, Image, Polyline } from 'react-native-svg'

type Props = {
  size: number,
  borderColor: string,
  borderWidth: number,
  imgSrc: string
}

const degreesToRadians = (degrees: number) => {
  return (degrees * Math.PI) / 180
}

const getDecagonalPoints = (size: number, offset = 0) => {
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

const DecagonalImageContainer = (props: Props) => {
  const [innerPolygonSize, innerPolygonOffset] = [
    props.size - 6 * props.borderWidth,
    3 * props.borderWidth
  ]
  const [outerPolygonSize, outerPolygonOffset] = [
    props.size - 2 * props.borderWidth,
    props.borderWidth
  ]
  const innerPolygonPoints = getDecagonalPoints(innerPolygonSize, innerPolygonOffset)
  const outerPolygonPoints = getDecagonalPoints(outerPolygonSize, outerPolygonOffset)
  const polylinePoints = [...outerPolygonPoints, outerPolygonPoints[0]]

  return (
    <Svg height={props.size} width={props.size} viewBox={`0 0 ${props.size} ${props.size}`}>
      <Defs>
        <ClipPath id="clip">
          <Polygon points={innerPolygonPoints.map((point) => point.join(',')).join(' ')} />
        </ClipPath>
      </Defs>
      <Image
        x={innerPolygonOffset}
        y={innerPolygonOffset}
        width={innerPolygonSize}
        height={innerPolygonSize}
        preserveAspectRatio="xMidYMid slice"
        href={props.imgSrc}
        clipPath="url(#clip)"
      />
      <Polyline
        points={polylinePoints.map((point) => point.join(',')).join(' ')}
        fill="none"
        stroke={props.borderColor}
        strokeWidth={props.borderWidth}
      />
    </Svg>
  )
}

DecagonalImageContainer.defaultProps = {
  size: 200,
  borderColor: 'black',
  borderWidth: 5,
  imgSrc:
    'https://www.pinclipart.com/picdir/middle/558-5588129_silhouette-person-clip-art-silhouette-unknown-people-png.png'
}

export default DecagonalImageContainer
