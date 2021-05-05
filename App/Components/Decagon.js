// @flow
import React from 'react'
import Svg, { Polyline } from 'react-native-svg'
import { getDecagonPoints } from '../utils'

type Props = {
  size: number,
  color: string,
  strokeWidth: number
}

const Decagon = (props: Props) => {
  const [decagonSize, decagonOffset] = [props.size - 2 * props.strokeWidth, props.strokeWidth]
  const polygonPoints = getDecagonPoints(decagonSize, decagonOffset)
  const polylinePoints = [...polygonPoints, polygonPoints[0]]

  return (
    <Svg height={props.size} width={props.size} viewBox={`0 0 ${props.size} ${props.size}`}>
      <Polyline
        points={polylinePoints.map((point) => point.join(',')).join(' ')}
        fill="#ffffff"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  )
}

Decagon.defaultProps = {
  size: 30,
  color: '#000000',
  strokeWidth: 3
}

export default Decagon
