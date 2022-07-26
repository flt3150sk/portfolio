import { css } from '@emotion/react'

export const styles = {
  container: css`
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 100px;

    > * + * {
      margin-top: 24px;
    }
  `,
  title: css`
    font-size: 40px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    margin-bottom: 40px;
  `,
}
