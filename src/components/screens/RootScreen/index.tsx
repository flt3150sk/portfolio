import { styles } from './index.styles'

type Props = {}

export const RootScreen: React.FC<Props> = () => {
  const titleText = "This is Muranaka Kosuke's self-introduction site."
  const textLen = titleText.length

  return (
    <div css={styles.container}>
      <section css={styles.section}>
        <h1 css={styles.title}>
          {titleText.split('').map((str, index) => (
            <span css={styles.titleWord(textLen, index)} key={index}>{str}</span>
          ))}
        </h1>
        <p css={styles.text}>
          職歴やこれまでに身につけたスキルなどをまとめています。
          <br />
          あなたに、私のことをもっと深く知ってほしいと思って作りました。
          <br />
          どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。
        </p>
      </section>
    </div>
  )
}
