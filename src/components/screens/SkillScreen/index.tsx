import { styles } from './index.styles'
import { SkillItem } from '~/components/features/Skills/SkillItem'
import { SkillItemContainer } from '~/components/features/Skills/SkillItemContainer'

type Props = {}

export const SkillScreen: React.FC<Props> = () => {
  return (
    <section css={styles.container}>
      <h1 css={styles.title}>Skils</h1>
      <h2 css={styles.heading}># HTML/CSS/Git</h2>
      <SkillItemContainer>
        <SkillItem title='HTML' perNum={85} color='#04fc43' />
        <SkillItem title='CSS' perNum={80} color='#E8110F' />
        <SkillItem title='Sass' perNum={50} color='#FF82A9' />
        <SkillItem title='Git/Github' perNum={80} color='#33363b' />
      </SkillItemContainer>
      <h2 css={styles.heading}># Frontend</h2>
      <SkillItemContainer>
        <SkillItem title='JavaScript' perNum={90} color='#F9CE00' />
        <SkillItem title='TypeScript' perNum={85} color='#0087cb' />
        <SkillItem title='React' perNum={85} color='#003399' />
        <SkillItem title='Next.js' perNum={80} color='#222222' />
        <SkillItem title='Redux/RTK' perNum={80} color='#3366CC' />
        <SkillItem title='styled-components' perNum={70} color='#04fc43' />
        <SkillItem title='emotion' perNum={75} color='#037365' />
      </SkillItemContainer>
      <h2 css={styles.heading}># Others</h2>
      <SkillItemContainer>
        <SkillItem title='Ruby' perNum={70} color='#e0115f' />
        <SkillItem title='Rails' perNum={70} color='#CC0000' />
        <SkillItem title='SQL' perNum={50} color='#FF7260' />
        <SkillItem title='AWS' perNum={60} color='#FF8F00' />
        <SkillItem title='AWS Amplify' perNum={85} color='#d14d28' />
      </SkillItemContainer>
    </section>
  )
}
