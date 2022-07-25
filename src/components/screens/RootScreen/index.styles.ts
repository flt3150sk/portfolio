import { css } from '@emotion/react'

export const styles = {
  container: css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  section: css`
    width: 100%;
    max-width: 60ch;
  `,
  title: css`
    font-size: 60px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
  `,
  text: css`
    color: #fff;
    margin-top: 40px;
    font-size: 20px;
    font-weight: bold;
    line-height: 2.5;
    margin-left: auto;
    margin-right: auto;
  `,
}
