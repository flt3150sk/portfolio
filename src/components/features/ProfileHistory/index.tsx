import Image, { ImageProps } from 'next/image'
import { useInView } from 'react-intersection-observer'
import { styles } from './index.styles'

type Props = {
  dateStr: string
  imgSrc: ImageProps['src']
  imgAlt: ImageProps['alt']
  text: string
}

export const ProfileHistory: React.FC<Props> = (props) => {
  const { ref, inView } = useInView({
    rootMargin: '-200px',
    triggerOnce: true,
  })
  return (
    <div css={[styles.history, inView ? styles.scrollIn : '']} ref={ref}>
      <span css={styles.date}>{props.dateStr}</span>
      <div css={styles.rightContainer}>
        <div css={styles.image}>
          <Image src={props.imgSrc} width={160} height={160} alt={props.imgAlt} />
        </div>
        <p css={styles.text}>{props.text}</p>
      </div>
    </div>
  )
}
