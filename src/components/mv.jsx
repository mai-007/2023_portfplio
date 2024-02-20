import React from 'react'
import styled from '@emotion/styled'
import { val } from './variable.js'
import { motion } from "framer-motion"

const Mv = () => {
return (
    <MainView>
        <TextArea>
          <H2 initial={{opacity: 0}} animate ={{ opacity: 1, y: [50, 0] }} transition={{ duration: 1 }}>Creation Website</H2>
          <span initial={{opacity: 0}} animate ={{ opacity: 1, y: [50, 0] }} transition={{ duration: 2 }}>ディレクションもデザインもフロントエンドも</span>
          <Text initial={{opacity: 0}} animate ={{ opacity: 1, y: [50, 0] }} transition={{ duration: 3 }}>全てお任せ下さい。</Text>
        </TextArea>
    </MainView>
  )
}

export default Mv

const MainView = styled.section`
  width: 100%;
  min-height: 560px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`

const TextArea = styled(motion.div)`
  transform: translateY(-50%);
  max-height: 20rem;
  text-align: Center;
  transition: 1s;
  overflow: hidden;
`

const H2 = styled(motion.h2)`
  font-size: 4rem;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  margin-bottom: .5rem;
`
const Text = styled.span`
  font-size: 1rem;
`