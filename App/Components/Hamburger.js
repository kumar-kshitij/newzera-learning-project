// @flow
import React from 'react'
import Svg, { Line } from 'react-native-svg'
import { getHamburgerPoints } from '../utils'

type Props = {
  size: number,
  color: string,
  strokeWidth: number
}

const Hamburger = (props: Props) => {
  const linePoints = getHamburgerPoints(props.size - 2 * props.strokeWidth, props.strokeWidth)

  return (
    <Svg height={props.size} width={props.size} viewBox={`0 0 ${props.size} ${props.size}`}>
      {linePoints.map((point, idx) => (
        <Line
          key={idx.toString()}
          x1={point[0]}
          y1={point[1]}
          x2={point[2]}
          y2={point[3]}
          stroke={props.color}
          strokeWidth={props.strokeWidth}
        />
      ))}
    </Svg>
  )
}

Hamburger.defaultProps = {
  size: 30,
  color: '#000000',
  strokeWidth: 3
}

export default Hamburger
