import React from 'react';
import { motion } from "framer-motion"
import styled from '@emotion/styled';
import { val } from '../components/variable.js';

const LowerHeader = (props) => {

  return (
        <Section
            layout initial={{width:"0", opacity:0}}
            animate={{width: "100%", opacity:1}}
            transition={{
              opacity: { ease: "linear",duration: 3},
              layout: {ease: "linear"},duration: 5
              }}>
          <h2>{props.text}</h2>
        </Section>
  )
}


const Section = styled(motion.section)`
  max-width: 960px;
  font-size: ${val.s32};
  margin: ${val.s88} auto;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
`

export default LowerHeader;
