import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import { motion } from "framer-motion"
import styled from '@emotion/styled'
import { val } from '../components/variable.js'
import LowerHeader from '../components/lowerHeader'
import { StaticImage } from 'gatsby-plugin-image'

const Skill = () => {
  const frontendTexts = ([
    {title: 'セマンティックに', text: '意味と役割を正しくコーディングします。'},
    {title: '変化の激しさを楽しむ', text: '慣れた技術に固執せず、常にもっと最適な方法を探します。'},
    {title: '堅牢性と変更容易性', text: '破壌しづらく、可読性を保つ事を心掛けています。'},
    {title: 'アクセシビリティ', text: '「特定の障害がある人には内容が伝わらない」そんな事がないように納期・金額との兼ね合いはあれど正しい記述を心がけています。'},
  ])
  const designTexts = ([
    {title: '伝わることを第一に', text: '美しさも大事ですが、伝えたいことが伝わるデザイン制作をします。'},
    {title: '目的を達成するためのデザインを', text: 'コンバージョンやブランディングなど何が目的か、ユーザーはどう行動するかを考えた上でデザインします。'},
    {title: '自己満足でなく、論理的なデザイン', text: '何となくではなく意味のあるデザインを制作します。'},
    {title: '実装を考えながらのデザイン', text: 'フロントエンドの知識があるからこそ、手間がかかる割に意味の無いデザインは作りません。'}
  ])

  return (
      <Layout>
        <LowerHeader text="Skill"/>
        <Section
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            opacity: { ease: "linear",duration: 1}
            }}
          >
          <SubSection>
            <H3
              initial={{width:"0", opacity:0}}
              whileInView={{width: "100%", opacity:1}}
              transition={{
                opacity: { ease: "linear",duration: 3},
                layout: {ease: "linear"},duration: 3
              }}>Frontend</H3>
            {frontendTexts.map((frontendText)=>{
              return(
                <Dl
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{
                    duration: 3
              }}>
                  <Dt>{frontendText.title}</Dt>
                  <dd>{frontendText.text}</dd>
                </Dl>
              )
            })}
            <ImageWrap>
              <StaticImage src="../images/html.png" width={100}/>
              <StaticImage src="../images/css.png" width={100} />
              <StaticImage src="../images/js.png" width={120} />
              <StaticImage src="../images/ts.png" width={120} />
              <StaticImage src="../images/github-mark.png" width={120} />
              <StaticImage src="../images/php.png" width={150}/>
              <StaticImage src="../images/react.png" width={120} />
              <StaticImage src="../images/next.png" width={150} />
              <StaticImage src="../images/python.png" width={150}/>
              <StaticImage src="../images/wp.png" width={160}/>
              <StaticImage src="../images/gatsby.png" width={160}/>
              <StaticImage src="../images/node.png" width={160} />
              <StaticImage src="../images/npm.png" width={160} />
              <StaticImage src="../images/webpack.png" />
              <StaticImage src="../images/sass.jpg" />
            </ImageWrap>
            <p>※ BEM,FLOCSS,EJS,Emotionも出来ます。TS,pythonは勉強中です。</p>
          </SubSection>
          <SubSection>
            <H3
              initial={{width:"0", opacity:0}}
              whileInView={{width: "100%", opacity:1}}
              transition={{
                opacity: { ease: "linear",duration: 3},
                layout: {ease: "linear"},duration: 5
              }}>Design</H3>
            {designTexts.map((designText)=>{
              return(
                <Dl
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{
                    duration: 3
                }}>
                  <Dt>{designText.title}</Dt>
                  <dd>{designText.text}</dd>
                </Dl>
              )
            })}
            <ImageWrap>
              <StaticImage src="../images/figma.png" width={250}/>
              <StaticImage src="../images/ps.png" width={150}/>
              <StaticImage src="../images/ai.png" width={150}/>
              <StaticImage src="../images/xd.png" width={150}/>
            </ImageWrap>
          </SubSection>
        </Section>
      </Layout>
  );
};

const Section = styled(motion.section)`
  max-width: 960px;
  margin:  ${val.s88} auto;
`

const SubSection = styled(motion.section)`
  margin-bottom: ${val.s160};
`

const H3 = styled(motion.div)`
  font-size: ${val.s24};
  letter-spacing: .1em;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 1px solid #000;
  overflow: hidden;
  white-space: nowrap;
`
const Dl = styled(motion.dl)`
  margin: 2rem 0 2rem 1rem;
  &:last-of-type{
    margin-bottom: ${val.s56};
  }
`
const Dt = styled(motion.dt)`
  font-weight: bold;
`

const ImageWrap = styled.div`
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  div{
    max-width: 240px;
    height: auto;
    margin-bottom: ${val.s24};
  }
  img{
    width: 100%;
    height: auto;
    padding-right: 2rem;
  }
`

export const Head = () => {
  return (
    <Seo
      title= "portfolio| Skill"
    />
  )
}

export default Skill;
