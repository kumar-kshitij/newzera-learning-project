// @flow
import React from 'react'
import Svg, { Circle, Line } from 'react-native-svg'

type Props = {
  size: number,
  backgroundColor: string,
  plusColor: number,
  plusWidth: number
}

const PlusCircle = (props: Props) => {
  return (
    <Svg height={props.size} width={props.size} viewBox={`0 0 ${props.size} ${props.size}`}>
      <Circle
        cx={props.size / 2}
        cy={props.size / 2}
        r={props.size / 2}
        fill={props.backgroundColor}
      />
      <Line
        x1={props.size / 2}
        y1={props.plusWidth}
        x2={props.size / 2}
        y2={props.size - props.plusWidth}
        stroke={props.plusColor}
        strokeWidth={props.plusWidth}
      />
      <Line
        x1={props.plusWidth}
        y1={props.size / 2}
        x2={props.size - props.plusWidth}
        y2={props.size / 2}
        stroke={props.plusColor}
        strokeWidth={props.plusWidth}
      />
    </Svg>
  )
}

PlusCircle.defaultProps = {
  size: 30,
  backgroundColor: '#000000',
  plusColor: '#ffffff',
  plusWidth: 3
}

export default PlusCircle
