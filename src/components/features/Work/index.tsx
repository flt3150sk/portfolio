import Image from 'next/image'
import { styles } from './index.styles'

type Props = {
  date: string
  company: string
  role: string
  text: string
  imgSrc: string
  imgWidth: number
  imgHeight: number
}

export const Work: React.FC<Props> = (props) => {
  return (
    <section css={styles.container}>
      <p css={styles.date}>{props.date}</p>
      <h2 css={styles.company}>{props.company}</h2>
      <p css={styles.role}>
        <span css={styles.tag}>{props.role}</span>
      </p>
      <p css={styles.text}>{props.text}</p>
      <div css={styles.imgContainer(props.imgWidth, props.imgHeight)}>
        <Image src={props.imgSrc} layout='fill' alt='技術スタック' />
        <Image src={props.imgSrc} layout='fill' alt='技術スタック' />
      </div>
    </section>
  )
}
