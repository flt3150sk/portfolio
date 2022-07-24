import { FaHome } from 'react-icons/fa'
import { styles } from './index.styles'

type Props = {
  icon: typeof FaHome
  title: string
  isActive: boolean
  onClick: () => void
}

export const NavItem: React.FC<Props> = (props) => {
  const IconTagName = props.icon

  return (
    <button
      css={[styles.navItem, props.isActive ? styles.active : styles.notActive]}
      onClick={props.onClick}
    >
      <IconTagName css={styles.icon} />
      <span css={styles.title}>{props.title}</span>
    </button>
  )
}
