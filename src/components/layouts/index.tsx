import { styles } from './index.styles'
import { Nav } from '~/components/features/Nav'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <div css={styles.container}>
      <aside css={styles.aside}>
        <Nav />
      </aside>
      <main css={styles.main}>{props.children}</main>
    </div>
  )
}
