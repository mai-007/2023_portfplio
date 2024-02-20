import * as React from 'react';
import Layout from '../components/layout';
import Seo from "../components/seo"
import { motion } from "framer-motion"
import styled from '@emotion/styled';
import { val } from '../components/variable.js';
import LowerHeader from '../components/lowerHeader';

const History = () => {

  return (
      <Layout>
        <LowerHeader text="History"/>
        <Section
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            opacity: { ease: "linear",duration: 1}
            }}
          >
        <Block>
          <H5>2024</H5>
          <ListBlock>
            <List>フリーランス</List>
            <Text>
              前職からの仕事や新たに個人で請け負ったweb制作を行う。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2023</H5>
          <ListBlock>
            <List>株式会社MSP入社</List>
            <Text>
              web制作部の管理職として入社。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2023</H5>
          <ListBlock>
            <List>アクティネットワーク社退社</List>
            <Text>
              制作部署と動画部署を合併し広告代理店として子会社発足が決定。
              様々な経験をさせて頂いた会社に愛着はあったものの早期退職制度を利用できた為
              退社。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2020~</H5>
          <ListBlock>
            <List>制作部署へ移動</List>
            <Text>
              インハウスのみならず、様々な業種の制作に携わりたく制作部署へ移動。
              今までのインハウス案件も継続して手掛けながら主に外注クライアントのweb制作を手掛ける。
              後任への指導、ディレクション・デザイン・コーディング、クライアントとの日々のやりとりまで一貫して従事。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2018~</H5>
          <ListBlock>
            <List>アクティネットワーク社 | webディレクターとして入社</List>
            <Text>
              マッチングアプリのUI改善提案や運営・関連LPの作成・キャンペーンサイトのデザイン・コーディング等
              幅広く携わる。
              登録フローのデザイン・フロントエンドのリニューアルを行う。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2017</H5>
          <ListBlock>
            <List>デジタルハリウッド | ママグロースハッカー養成講座受講</List>
            <Text>
              コーディングはできるがデザインが全くできない状況だった為学びたりず
              福岡デジタルハリウッド校の選考有りの同講座にて特待生に選ばれる。
              リクルート・ランサーズ・KAIZEN PLATFORM協賛の講座で、
              基本的なweb制作、デザインの基礎からディレクション・UI設計・マーケティング・webサイトの改善法まで学ぶ。
              在学中の広告デザインが「とらばーゆ」に一面掲載される。
              フリーランスとしてコーディング・デザイン活動開始。
            </Text>
          </ListBlock>
        </Block>
        <Block>
          <H5>2016</H5>
          <ListBlock>
            <List>デジタルコンテンツクリエーター育成講座 | 受講・終了</List>
            <Text>
              出産・育児を得て環境が大きく変化し手に職をつけたいと思った時に一番に思い浮かんだのがwebでした。
              コールセンターで就業しながら、週に一度の福岡県・福岡市主体の講座にてHTML5,CSS,デザインに学び直す。
            </Text>
          </ListBlock>
        </Block>
        </Section>
      </Layout>
  );
};

const Section = styled(motion.section)`
  max-width: 960px;
  margin:  ${val.s88} auto;
`

const Block = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${val.blackRGBA};
`
const H5 = styled.h5`
  font-size: ${val.s56};
  color: ${val.black};
  opacity: 0.2;
  width: 27.589%;
  margin: 0;
  padding: 0;
`

const ListBlock = styled.ul`
  display: flex;
  width: 72.411%;
  margin: 0;
  align-items: center;
  flex-wrap: wrap;
  padding:  ${val.s56} 0;
  border-left: 1px solid ${val.blackRGBA};
`
const List = styled.li`
  font-weight: bold;
  list-style-position: inside;
  margin-left: -2px;
  margin-bottom: 1rem;
`
const Text = styled.p`
  display: block;
  padding: 0;
  margin: 0 0 ${val.s32} 10%;
`

export const Head = () => {
  return (
    <Seo
      title= "portfolio| history"
    />
  )
}

export default History;
