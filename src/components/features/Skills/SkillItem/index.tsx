import { styles } from './index.styles'

type Props = {
  title: string
  perNum: number
  color: string
}

export const SkillItem: React.FC<Props> = (props) => {
  const { title, perNum, color } = props
  return (
    <div css={styles.percent}>
      <div css={styles.dot(color, perNum)} />
      <svg css={styles.svg(color, perNum)}>
        <circle cx='70' cy='70' r='70' />
        <circle cx='70' cy='70' r='70' />
      </svg>
      <div css={styles.number}>
        <p css={styles.numberText}>
          {perNum}<span css={styles.numberTextSmall}>%</span>
        </p>
        <p css={styles.title}>{title}</p>
      </div>
    </div>
  )
}
