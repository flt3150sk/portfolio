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
          isActive={nav === 'Home'}
          onClick={() => setNav('Home')}
        />
        <NavItem
          title='Profile'
          icon={FaUserAlt}
          isActive={nav === 'Profile'}
          onClick={() => setNav('Profile')}
        />
        <NavItem
          title='Messages'
          icon={BsFillChatFill}
          isActive={nav === 'Messages'}
          onClick={() => setNav('Messages')}
        />
        <NavItem
          title='Setting'
          icon={IoSettingsSharp}
          isActive={nav === 'Setting'}
          onClick={() => setNav('Setting')}
        />
        <NavItem
          title='Help'
          icon={MdOutlineHelp}
          isActive={nav === 'Help'}
          onClick={() => setNav('Help')}
        />
        <NavItem
          title='Password'
          icon={MdLockOutline}
          isActive={nav === 'Password'}
          onClick={() => setNav('Password')}
        />
        <NavItem
          title='SignOut'
          icon={MdLogout}
          isActive={nav === 'SignOut'}
          onClick={() => setNav('SignOut')}
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
