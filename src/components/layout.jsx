import React from 'react'
import Header from './header'
import Footer from './footer'
import sanitize from 'sanitize.css'
import { Global, css } from '@emotion/react'
import { motion, useScroll } from "framer-motion"
import { val } from './variable.js';


const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Global styles={styles} />
        <motion.div
          style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          zIndex: 9999,
          transformOrigin: "0%",
          backgroundColor: "#FF6C9C",
          scaleX: scrollYProgress
          }}
        />
      <Header />
        <main>
        {children}
        </main>
      <Footer />
    </>
  );
};

/* GlobalStyle */

const styles = css`
  ${ sanitize }

  body {
  color: ${val.black};
  letter-spacing: .05em;
  }
  main{
    background: ${val.white};
    padding: ${ val.s48} 0 ${val.s120};
    animation: fadeIn 0.5s ease 0s 1 normal;
    -webkit-animation: fadeIn 0.5s ease 0s 1 normal;
    transition: 5s;
  }

  a {
    color: ${val.black};
    text-decoration: none;
    cursor: pointer;
  }

  h1{
    font-size: 2rem;
  }
  h2{
    font-size: ${val.s32};
  }
  h3{
    font-size: 1.125rem;
  }
  h4{
    margin: 0;
  }
  img{
    margin-bottom: 72px;
  }
  .rightArrow{
    margin-left: 1rem;
    animation: advance 0.5 ease 0s 1 normal;
  }

  //blog style
  .block-list{
    display: flex;
    margin: 0 auto;
    justify-content: start;
    align-items: center;
    ul{
      display: flex;
      margin-bottom: .5rem;
      li{
        margin-left: .8rem;
        list-style: none;
        font-size: 12px;
        color: #000;
        border: 1px solid #000;
        padding: 2px 6px;
        border-radius: 8px;
      }
    }
  }
  .center{
    text-align: center;
    margin: 0 auto;
  }
`

export default Layout;
