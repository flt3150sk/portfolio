import { useCallback, useState } from 'react'
import { BsFillChatFill } from 'react-icons/bs'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdLogout, MdLockOutline, MdOutlineHelp, MdMenu, MdClose } from 'react-icons/md'
import { NavItem } from './NavItem'
import { NavItemContainer } from './NavItemContainer'
import { styles } from './index.styles'

type NavTypes = 'Home' | 'Profile' | 'Messages' | 'Setting' | 'Help' | 'Password' | 'SignOut'
type Props = {}

export const Nav: React.FC<Props> = () => {
  const [nav, setNav] = useState<NavTypes>('Home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const onClickMenu = useCallback(() => setIsMenuOpen((prev) => !prev), [])

  return (
    <nav css={[styles.navigation, isMenuOpen ? styles.wide : styles.narrow]}>
      <NavItemContainer>
        <NavItem
          title='Home'
          icon={FaHome}
          path={'/'}
          isActive={nav === 'Home'}
        />
        <NavItem
          title='Profile'
          icon={FaUserAlt}
          path={'/profile'}
          isActive={nav === 'Profile'}
        />
        <NavItem
          title='Messages'
          icon={BsFillChatFill}
          path={'/'}
          isActive={nav === 'Messages'}
        />
        <NavItem
          title='Setting'
          icon={IoSettingsSharp}
          path={'/'}
          isActive={nav === 'Setting'}
        />
        <NavItem
          title='Help'
          icon={MdOutlineHelp}
          path={'/'}
          isActive={nav === 'Help'}
        />
        <NavItem
          title='Password'
          icon={MdLockOutline}
          path={'/'}
          isActive={nav === 'Password'}
        />
        <NavItem
          title='SignOut'
          icon={MdLogout}
          path={'/'}
          isActive={nav === 'SignOut'}
        />
      </NavItemContainer>
      <div css={styles.menuContainer}>
        <button css={styles.menu} onClick={onClickMenu}>
          {isMenuOpen ? <MdClose css={styles.menuIcon} /> : <MdMenu css={styles.menuIcon} />}
        </button>
      </div>
    </nav>
  )
}
