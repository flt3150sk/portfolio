import React from 'react'
import { styles } from './index.styles'

type Props = {
  children: React.ReactNode[]
}

export const SkillItemContainer: React.FC<Props> = (props) => {
  return (
    <ul css={styles.skilContainer}>
      {React.Children.map(props.children, (child) => {
        return <li css={styles.card}>{child}</li>
      })}
    </ul>
  )
}
