import React from 'react';
import { motion } from "framer-motion"
import styled from '@emotion/styled';
import { val } from './variable.js';

const Title = (props) => {

  return (
      <H2
        layout initial={{width:0}}
        whileInView={{width: "100%"}}
        transition={{
          opacity: { ease: "linear",duration: 3},
          layout: {ease: "linear"},duration: 5
          }}>{props.text}</H2>
  )
}

const H2 = styled(motion.h2)`
  margin: 0 auto ${val.s56};
  text-align: center;
  font-size: ${val.s32};
  letter-spacing: .2em;
  overflow: hidden;
  white-space: nowrap;
`

export default Title;
