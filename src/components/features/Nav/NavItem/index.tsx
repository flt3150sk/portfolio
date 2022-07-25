import Link, { LinkProps } from 'next/link'
import { FaHome } from 'react-icons/fa'
import { styles } from './index.styles'

type Props = {
  icon: typeof FaHome
  title: string
  path: LinkProps['href']
  isActive: boolean
}

export const NavItem: React.FC<Props> = (props) => {
  const IconTagName = props.icon

  return (
    <Link href={props.path}>
      <a css={styles.anchor}>
        <div
          css={[styles.navItem, props.isActive ? styles.active : styles.notActive]}
        >
          <IconTagName css={styles.icon} />
          <span css={styles.title}>{props.title}</span>
        </div>
      </a>
    </Link>
  )
}
