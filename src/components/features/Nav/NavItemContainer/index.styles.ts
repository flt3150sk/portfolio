import { css } from '@emotion/react'

export const styles = {
  navigation: css`
    position: fixed;
    top: 20px;
    left: 20px;
    bottom: 20px;
    border-radius: 10px;
    box-sizing: initial;
    border-left: 5px solid #4d5bf9;
    background: #4d5bf9;
    transition: width 0.5s;
    overflow: hidden;
  `,
  listContainer: css`
    padding-left: 5px;
    padding-top: 40px;
  `,
  list: css`
    position: relative;
    list-style: none;
    width: 100%;
  `,
}
