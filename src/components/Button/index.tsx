import { styles } from './index.styles'

type ButtonProps = {}

export const Button: React.FC<ButtonProps> = () => {
    return(<button css={styles.base}>Hello</button>)
}