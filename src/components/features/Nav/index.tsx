import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import {
  MdLogout,
  MdLockOutline,
  MdOutlineHelp,
  MdMenu,
  MdClose,
  MdInsertChart,
  MdInsertDriveFile
} from 'react-icons/md'
import { NavItem } from './NavItem'
import { NavItemContainer } from './NavItemContainer'
import { styles } from './index.styles'

type Props = {}

export const Nav: React.FC<Props> = () => {
  const { pathname } = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onClickMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

  return (
    <nav css={[styles.navigation, isMenuOpen ? styles.wide : styles.narrow]}>
      <NavItemContainer>
        <NavItem title='Home' icon={FaHome} path={'/'} isActive={pathname === '/'} />
        <NavItem
          title='Profile'
          icon={FaUserAlt}
          path={'/profile'}
          isActive={pathname === '/profile'}
        />
        <NavItem
          title='Skills'
          icon={MdInsertChart}
          path={'/skills'}
          isActive={pathname === '/skills'}
        />
        <NavItem
          title='Works'
          icon={MdInsertDriveFile}
          path={'/works'}
          isActive={pathname === '/works'}
        />
        <NavItem title='Help' icon={MdOutlineHelp} path={'/'} isActive={pathname === 'Help'} />
        <NavItem
          title='Password'
          icon={MdLockOutline}
          path={'/'}
          isActive={pathname === 'Password'}
        />
        <NavItem title='SignOut' icon={MdLogout} path={'/'} isActive={pathname === 'SignOut'} />
      </NavItemContainer>
      <div css={styles.menuContainer}>
        <button css={styles.menu} onClick={onClickMenu}>
          {isMenuOpen ? <MdClose css={styles.menuIcon} /> : <MdMenu css={styles.menuIcon} />}
        </button>
      </div>
    </nav>
  )
}
