import { css } from '@emotion/react'

export const styles = {
  history: css`
    display: flex;
    gap: 40px;
    min-height: 256px;
    opacity: 0;
    transform: translate(0, 20px);
    transition: all 500ms;
  `,
  scrollIn: css`
    opacity: 1;
    transform: translate(0, 0);
  `,
  date: css`
    color: #fff;
    font-size: 24px;
    margin-top: 60px;
    font-weight: bold;
  `,
  rightContainer: css`
    border-left: 4px solid #fff;
    padding-left: 40px;
    padding-bottom: 24px;
    position: relative;

    &:before {
      position: absolute;
      content: '';
      display: inline-block;
      height: 4px;
      width: 40px;
      background-color: #fff;
      top: 80px;
      left: 0;
    }
  `,
  image: css`
    width: 160px;
    height: 160px;
    border-radius: 80px;
    border: 4px solid #4d5bf9;
    overflow: hidden;
    margin-bottom: 16px;
    background-color: #fff;
  `,
  text: css`
    background-color: #fff;
    color: #222222;
    padding: 16px;
    border-radius: 4px;
  `,
}
