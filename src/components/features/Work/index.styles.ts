import { css, keyframes } from '@emotion/react'

const loop = keyframes`
  0% {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

const loop2 = keyframes`
  0% {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const styles = {
  container: css`
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    padding: 16px 16px 24px;
    border-radius: 8px;
    overflow: hidden;
  `,
  date: css`
    font-size: 12px;
    margin-bottom: 8px;
  `,
  company: css`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
  `,
  role: css`
    font-size: 12px;
    margin-bottom: 8px;
  `,
  tag: css`
    background: #e0115f;
    color: #fff;
    border-radius: 4px;
    padding: 4px;
  `,
  text: css`
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 12px;
  `,
  imgContainer: (width: number, height: number) => css`
    display: flex;
    position: relative;
    width: ${width}px;
    height: ${height}px;

    > span:nth-of-type(1) {
      animation: ${loop} 25s linear infinite;
    }

    > span:nth-of-type(2) {
      animation: ${loop2} 25s linear infinite;
    }
  `,
}
