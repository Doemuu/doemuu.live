import { Link } from "gatsby"
import React, { useState } from "react"
import { Canton as CantonType } from "../../types/canton"

interface CantonProps extends CantonType {
  children?: React.ReactNode
  onClick?: (id: string) => void
  isActive: boolean
}

const Canton = ({
  name,
  capital,
  path,
  id,
  onClick,
  colour,
  circleTransform,
  textX,
  textY,
  isActive,
}: CantonProps) => {
  const [isFocus, setFocus] = useState(false)

  return (
    <Link
      to={`/tour-de-suisse/${id.toLowerCase()}`}
      css={`
        &:hover {
          text-decoration: none;
        }
      `}
    >
      <g transform="translate(154.89465,-548.33966)">
        <g transform="matrix(0.4753467,0,0,0.4753467,-71.265996,459.47553)">
          <g transform="translate(-190.45925,197.87884)">
            <path
              d={path}
              onMouseOver={() => setFocus(true)}
              onMouseLeave={() => setFocus(false)}
              onClick={() => onClick?.(id)}
              css={`
                fill: ${isActive
                  ? "var(--primary)"
                  : colour ?? "var(--secondary)"};
                stroke: white;
                strok-width: 0.005;
                &:hover {
                  fill: var(--primary);
                }
              `}
            />
          </g>
        </g>
      </g>
      <g transform="translate(154.89465,-548.33966)">
        <g transform="matrix(0.4753467,0,0,0.4753467,-71.265996,459.47553)">
          <circle
            cx="340"
            cy="160"
            r="3"
            transform={circleTransform}
            css={`
              fill: ${isFocus ? "white" : "#000000"};
              stroke: ${isFocus ? "white" : "#000000"};
              display: ${isFocus ? "block" : "none"};
              stroke-width: 0pt;
              z-index: 50;
            `}
          />
          <text
            x={textX}
            y={textY}
            css={`
              font-size: 10px;
              text-align: start;
              line-height: 125%;
              text-anchor: start;
              fill: ${isFocus ? "#d3ebfa" : "#000000"};
              display: ${isFocus ? "block" : "none"};
              font-family: Verdana;
              z-index: 50;
            `}
          >
            <tspan
              x={textX}
              y={textY}
              css={`
                z-index: 50;
              `}
            >
              {capital}
            </tspan>
          </text>
        </g>
      </g>
    </Link>
  )
}

export default Canton
