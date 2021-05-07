// @flow
import React from 'react'
import Svg, { Rect } from 'react-native-svg'

type Props = {
  size: number,
  color: string
}

const Square = (props: Props) => {
  return (
    <Svg height={props.size} width={props.size} viewBox={`0 0 ${props.size} ${props.size}`}>
      <Rect x={0} y={0} width={props.size} height={props.size} fill={props.color} />
    </Svg>
  )
}

Square.defaultProps = {
  size: 30,
  color: '#000000'
}

export default Square
