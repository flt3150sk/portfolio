import { css } from '@emotion/react'

export const styles = {
  navigation: css`
    position: sticky;
    top: 20px;
    height: calc(100vh - 40px);
    border-radius: 10px;
    box-sizing: initial;
    border-left: 5px solid #4d5bf9;
    background: #4d5bf9;
    transition: width 0.5s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `,
  wide: css`
    width: 300px;
  `,
  narrow: css`
    width: 70px;
  `,
  menuContainer: css`
    margin-top: auto;
    margin-left: 20px;
    margin-bottom: 20px;
  `,
  menu: css`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  `,
  menuIcon: css`
    width: 24px;
    height: 24px;
    color: #fff;
  `,
}
