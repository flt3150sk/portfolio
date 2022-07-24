import { css } from '@emotion/react'

export const styles = {
  navItem: css`
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;

    position: relative;
    width: 100%;
    display: flex;
    text-decoration: none;
    height: 60px;
    align-items: center;
    padding-left: 16px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    border-top-right-radius: -16px;
  `,
  active: css`
    color: #4d5bf9;
    background-color: #fff;
  `,
  notActive: css`
    color: #fff;
    background-color: #4d5bf9;
  `,
  icon: css`
    position: relative;
    display: block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
  `,
  title: css`
    font-size: 16px;
    height: 24px;
    line-height: 24px;
    margin-left: 26px;
    font-weight: bold;
  `,
}
