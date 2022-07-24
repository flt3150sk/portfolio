import { css } from '@emotion/react'

export const styles = {
  container: css`
    width: 100vw;
    min-height: 100vh;
    padding: 20px;
    background: linear-gradient(45deg, #4e65ff, #92effd);
    display: flex;
  `,
  aside: css`
    min-height: calc(100vh - 40px);
  `,
  main: css`
    margin-left: 20px;
    width: 100%;
  `,
}
