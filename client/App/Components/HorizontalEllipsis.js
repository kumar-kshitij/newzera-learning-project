// @flow
import React from 'react'
import Svg, { Circle } from 'react-native-svg'

type Props = {
  size: number,
  backgroundColor: string,
  foregroundColor: string
}

const HorizontalEllipsis = (props: Props) => {
  const width = 3 * props.size + props.size

  return (
    <Svg height={props.size} width={width} viewBox={`0 0 ${width} ${props.size}`}>
      <Circle
        cx={props.size / 2}
        cy={props.size / 2}
        r={props.size / 2}
        fill={props.backgroundColor}
      />
      <Circle
        cx={2 * props.size}
        cy={props.size / 2}
        r={props.size / 2}
        fill={props.backgroundColor}
      />
      <Circle
        cx={3 * props.size + props.size / 2}
        cy={props.size / 2}
        r={props.size / 2}
        fill={props.backgroundColor}
      />
      <Circle
        cx={props.size / 2}
        cy={props.size / 2}
        r={props.size / 3}
        fill={props.foregroundColor}
      />
      <Circle
        cx={2 * props.size}
        cy={props.size / 2}
        r={props.size / 3}
        fill={props.foregroundColor}
      />
      <Circle
        cx={3 * props.size + props.size / 2}
        cy={props.size / 2}
        r={props.size / 3}
        fill={props.foregroundColor}
      />
    </Svg>
  )
}

HorizontalEllipsis.defaultProps = {
  size: 30,
  backgroundColor: '#000000',
  foregroundColor: '#ffffff'
}

export default HorizontalEllipsis
