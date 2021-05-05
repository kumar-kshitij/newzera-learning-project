// @flow
import React from 'react'
import Svg, { Polyline } from 'react-native-svg'
import { getLeftCaretPoints } from '../utils'

type Props = {
  size: number,
  color: string,
  strokeWidth: number
}

const LeftCaret = (props: Props) => {
  const polylinePoints = getLeftCaretPoints(props.size - 2 * props.strokeWidth, props.strokeWidth)

  return (
    <Svg height={props.size} width={props.size} viewBox={`0 0 ${props.size} ${props.size}`}>
      <Polyline
        points={polylinePoints.map((point) => point.join(',')).join(' ')}
        fill="none"
        stroke={props.color}
        strokeWidth={props.strokeWidth}
      />
    </Svg>
  )
}

LeftCaret.defaultProps = {
  size: 30,
  color: '#000000',
  strokeWidth: 3
}

export default LeftCaret
