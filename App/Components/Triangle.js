// @flow
import React from 'react'
import Svg, { Polygon } from 'react-native-svg'
import { degreesToRadians, getTrianglePoints } from '../utils'

type Props = {
  size: number,
  color: string
}

const Triangle = (props: Props) => {
  const sideLength = props.size / Math.sin(degreesToRadians(60))
  const polygonPoints = getTrianglePoints(props.size, sideLength)

  return (
    <Svg height={props.size} width={sideLength} viewBox={`0 0 ${sideLength} ${props.size}`}>
      <Polygon
        points={polygonPoints.map((point) => point.join(',')).join(' ')}
        fill={props.color}
      />
    </Svg>
  )
}

Triangle.defaultProps = {
  size: 30,
  color: '#000000'
}

export default Triangle
