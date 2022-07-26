import { styles } from './index.styles'
import { Work } from '~/components/features/Work'

type Props = {}

export const WorkScreen: React.FC<Props> = (props) => {
  return (
    <section css={styles.container}>
      <h1 css={styles.title}>Works</h1>
      <Work
        date={'2020年4月〜'}
        company={'株式会社ファンデリー'}
        role={'開発メンバー'}
        text={
          'エンジニアとして初めて働いた。 ヘルスケア事業会社新規ECサイトの0→1開発。バックエンド５名・フロント１名の体制。バックエンド(Rails)として入社後に、フロント(React)の唯一のメンバーがいなくなったため、1週間くらいでReact書けるようになった。(基幹システムの方でちょろっとjQuery触った。)仕様に対して、RailsでAPI作成→フロントの開発まで行った。'
        }
        imgSrc={'/img/stack/fun.jpg'}
        imgWidth={2000}
        imgHeight={123}
      />
      <Work
        date={'2021年2月〜'}
        company={'株式会社ビットエー'}
        role={'開発メンバー'}
        text={
          '大手求人メディアのjsp → Next.jsリプレース案件。TypeScript, CSS module, RTK などは実務で初めて扱った。Core Web Vitalsの改善を目的としていたため、その辺りは案件に入る前にキャッチアップしたため対応できた気がする。開発業務の他にエンジニアの教育活動なども行った。'
        }
        imgSrc={'/img/stack/bita.jpg'}
        imgWidth={1488}
        imgHeight={123}
      />
      <Work
        date={'2022年3月〜'}
        company={'シミックHD株式会社'}
        role={'FEリーダー'}
        text={
          'harmo株式会社に出向。薬局向けSaasのリプレースの開発と、コーポレートリニューアルのディレクションを行った。emotion, swagger, aspida, OpenAPIなどを初めて触る。chromaticを使用したVRTなど導入したりした。またFE6人のチームのタスク管理などを行った。採用面接なども初めて参加すしたが、緩すぎてこのポジションはあまり活躍できなかった。'
        }
        imgSrc={'/img/stack/harmo.jpg'}
        imgWidth={3100}
        imgHeight={123}
      />
    </section>
  )
}
