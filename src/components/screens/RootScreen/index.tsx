import { styles } from './index.styles'

type Props = {}

export const RootScreen: React.FC<Props> = () => {
  const titleText = "This is Muranaka Kosuke's self-introduction site."

  return (
    <div css={styles.container}>
      <section css={styles.section}>
        <h1 css={styles.title}>
          {titleText.split('').map((str, index) => (
            <span key={index}>{str}</span>
          ))}
        </h1>
        <p css={styles.text}>
          これまでに手がけた制作物、身につけたスキルをまとめています。
          <br />
          あなたに、私のことをもっと深く知ってほしいと思って作りました。
          <br />
          どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。
        </p>
      </section>
    </div>
  )
}
