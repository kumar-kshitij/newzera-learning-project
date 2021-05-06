// @flow
import React from 'react'
import Svg, { Defs, ClipPath, Polygon, Image, Polyline } from 'react-native-svg'
import { getDecagonPoints } from '../utils'
import { View } from 'react-native'
import type { Node } from 'react'

type Props = {
  size: number,
  borderColor: string,
  borderWidth: number,
  imageSource?: string,
  children?: (right: number, bottom: number) => Node
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
  const innerPolygonPoints = getDecagonPoints(innerPolygonSize, innerPolygonOffset)
  const outerPolygonPoints = getDecagonPoints(outerPolygonSize, outerPolygonOffset)
  const polylinePoints = [...outerPolygonPoints, outerPolygonPoints[0]]

  return (
    <View style={{ position: 'relative' }}>
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
          href={
            props.imageSource
              ? props.imageSource
              : 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'
          }
          clipPath="url(#clip)"
        />
        <Polyline
          points={polylinePoints.map((point) => point.join(',')).join(' ')}
          fill="none"
          stroke={props.borderColor}
          strokeWidth={props.borderWidth}
          strokeLinecap="round"
        />
      </Svg>
      {props.children
        ? props.children(
            props.size - innerPolygonPoints[6][0],
            props.size - innerPolygonPoints[6][1]
          )
        : null}
    </View>
  )
}

DecagonalImageContainer.defaultProps = {
  size: 250,
  borderColor: '#000000',
  borderWidth: 5
}

export default DecagonalImageContainer
