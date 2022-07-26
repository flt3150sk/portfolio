import { styles } from './index.styles'
import { ProfileHistory } from '~/components/features/ProfileHistory'

type Props = {}

export const ProfileScreen: React.FC<Props> = () => {
  return (
    <section css={styles.container}>
      <h1 css={styles.title}>Profile</h1>
      <ProfileHistory
        dateStr='1996.02'
        text='広島市の外れにて産声をあげる。幼稚園の先生に毎日泣かされていたらしい(?)'
        imgSrc={'/img/profille/baby.png'}
        imgAlt={'赤ちゃんの写真'}
      />
      <ProfileHistory
        dateStr='2002.04'
        text='地元の小学校に通い、本当は野球がしたかったが、流れで地元の剣道教室に通う。4年生の時に広島県ベスト8になったりした。'
        imgSrc={'/img/profille/kendo.png'}
        imgAlt={'剣道の写真'}
      />
      <ProfileHistory
        dateStr='2006.04'
        text='剣道の練習を週7でする生活に嫌気がさして、中学受験をすると言って剣道を辞める。成績上がらなかったら塾やめて剣道に戻るのが嫌でめっちゃ勉強したような気がする。'
        imgSrc={'/img/profille/study.png'}
        imgAlt={'勉強の写真'}
      />
      <ProfileHistory
        dateStr='2008.04'
        text='なんやかんや進学校みたいなところに受かる。念願の野球ができるようになって嬉しい。中学でキャプテン・高校で副キャプテンになったりした。'
        imgSrc={'/img/profille/baseball.png'}
        imgAlt={'野球の写真'}
      />
      <ProfileHistory
        dateStr='2014.04'
        text='数学の教師になりたかったので神戸大学数学科に入学する。アカペラサークルとバイトで4年間過ごす。(遊びすぎて免許取れなかった)'
        imgSrc={'/img/profille/karaoke.png'}
        imgAlt={'遊んでいる写真'}
      />
      <ProfileHistory
        dateStr='2018.04'
        text='恩師に誘ってもらい、昔通っていた塾に社員として入る。1年半後くらいに社内政治で恩師が解雇されてショックを受ける。プログラミングの講座もしていたため、興味が出て独学する。'
        imgSrc={'/img/profille/school.png'}
        imgAlt={'プログラミングの写真'}
      />
      <ProfileHistory
        dateStr='2020.04'
        text='エンジニアとして働き始める。フロント(React, TypeScript)が中心で、バックエンド(Rails)がちょろっとかける感じです。インフラは全然わかっていないので勉強しなきゃ...'
        imgSrc={'/img/profille/programming.png'}
        imgAlt={'プログラミングの写真'}
      />
    </section>
  )
}
