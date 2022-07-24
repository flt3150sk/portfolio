import React from 'react'
import { styles } from './index.styles'

type Props = {
  children: React.ReactNode[]
}

export const NavItemContainer: React.FC<Props> = (props) => {
  return (
    <ul css={styles.listContainer}>
      {React.Children.map(props.children, (child) => {
        return <li css={styles.list}>{child}</li>
      })}
    </ul>
  )
}
