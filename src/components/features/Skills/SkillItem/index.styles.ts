import { css, keyframes } from '@emotion/react'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100%;
  }
`

const animationDot = (num: number) => keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(calc(3.6deg * ${num}));
  }
`

export const styles = {
  percent: css`
    position: relative;
    width: 150px;
    height: 150px;
  `,
  svg: (color: string, num: number) => css`
    width: 150px;
    height: 150px;
    transform: rotate(270deg);

    circle {
      width: 100%;
      height: 100%;
      fill: transparent;
      stroke-width: 2;
      stroke: gray;
      transform: translate(5px, 5px);
    }
    circle:nth-of-type(2) {
      stroke: ${color};
      stroke-dasharray: 440;
      stroke-dashoffset: calc((440 - (440 * ${num}) / 100));
      animation-delay: 0.8s;
    }
  `,
  dot: (color: string, num: number) => css`
    position: absolute;
    inset: 5px;
    z-index: 10;
    animation: ${animationDot(num)} 1s linear forwards;

    &:before {
      content: '';
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px ${color}, 0 0 30px ${color};
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background: ${color};
    }
  `,
  number: css`
    position: absolute;
    top: 0;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    opacity: 0;
    animation: ${fadeIn} 0.2s linear forwards;
  `,
  numberText: css`
    font-size: 24px;
    font-weight: bold;
  `,
  numberTextSmall: css`
    font-size: 16px;
  `,
  title: css`
    font-size: 12px;
  `,
}
