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
          It is a collection of my past works and skills I have acquired.
          <br /> I created this site to let you know more about me.
          <br />
          Please enjoy a cup of tea and take a leisurely stroll around the site.
        </p>
      </section>
    </div>
  )
}
