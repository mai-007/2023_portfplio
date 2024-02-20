import React from 'react'
import { graphql,Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import Layout from '../../components/layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled';
import { BiTime,BiArrowToTop } from "react-icons/bi"
import {HiOutlineExternalLink} from "react-icons/hi"
import { val } from '../../components/variable.js';
import { motion } from "framer-motion"
import { IconContext } from 'react-icons'
import Seo from "../../components/seo"

const BlogPostTemplate = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const pcImage01 = getImage(data.mdx.frontmatter.pc_image01);
  const pcImage02 = getImage(data.mdx.frontmatter.pc_image02);
  const pcImage03 = getImage(data.mdx.frontmatter.pc_image03);
  const spImage01 = getImage(data.mdx.frontmatter.sp_image01);
  const spImage02 = getImage(data.mdx.frontmatter.sp_image02);
  const spImage03 = getImage(data.mdx.frontmatter.sp_image03);

  const returnTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Layout>
        <HeroImage initial={true} animate={{scale: 1}} transition={{ duration: 1 }}>
          <Link to={data.mdx.frontmatter.url} target="_blank" rel="noopener noreferrer">
          <GatsbyImage image={image} alt="Hero Image" width="1080"/>
          </Link>
        </HeroImage>
        <Section>
          <H2
            layout initial={{width:"0", opacity:0}}
            animate={{width: "100%", opacity:1}}
            transition={{
              opacity: { ease: "linear",duration: 3},
              layout: {ease: "linear"},duration: 5
              }}>
              {data.mdx.frontmatter.title}
          </H2>
          <MetaBlocks initial={{y: 200, opacity:0}} animate={{y:0, opacity:1}} transition={{ duration: 3 }}>
            <div>
              <Time><BiTime />{data.mdx.frontmatter.date}</Time>
              {data.mdx.frontmatter.url&&
                <Url><Link to={data.mdx.frontmatter.url} target="_blank" rel="noopener noreferrer">{data.mdx.frontmatter.url}<HiOutlineExternalLink /></Link></Url>
              }
            </div>
            <div>
              <MDXProvider>
                {children}
              </MDXProvider>
            </div>
          </MetaBlocks>
          {spImage01&&
          <ScImageWrap initial={{opacity: 0,translateY: 100}} whileInView={{opacity: 1, translateY: 0}} transition={{ duration: 1 }}>
          <ScImage>
            <Link to={data.mdx.frontmatter.url} target="_blank" rel="noopener noreferrer">
                <GatsbyImage image={spImage01} alt={data.mdx.frontmatter.title}/>
            </Link>
            <Link to={data.mdx.frontmatter.url} target="_blank" rel="noopener noreferrer">
              <GatsbyImage image={spImage02} alt={data.mdx.frontmatter.title}/>
            </Link>
            <Link to={data.mdx.frontmatter.url} target="_blank" rel="noopener noreferrer">
              <GatsbyImage image={spImage03} alt={data.mdx.frontmatter.title}/>
            </Link>
          </ScImage>
        </ScImageWrap>
        }
          <Text
            layout initial={{width:"0", opacity:0, whiteSpace:"nowrap", height:"2rem",}}
            animate={{width: "100%", opacity:1, whiteSpace:"normal", height: "auto"}}
            transition={{
              opacity: { ease: "linear",duration: 3},
              layout: {ease: "linear"},duration: 5
              }}>{data.mdx.frontmatter.description}
            </Text>
          {data.mdx.frontmatter.direction&&
          <NoteSection
            initial={{opacity: 0,translateY: 500}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{ duration: 2 }}
            >
            <SectionTitle>Direction</SectionTitle>
              <p>{data.mdx.frontmatter.direction}</p>
          </NoteSection>
          }
          {data.mdx.frontmatter.design&&
          <NoteSection
            initial={{opacity: 0,translateY: 500}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{ duration: 2 }}
            >
            <SectionTitle>Design</SectionTitle>
            <FlexBlocks>
            <p>
              {data.mdx.frontmatter.design}
            </p>
              <GatsbyImage
                image={pcImage01}
                alt={data.mdx.frontmatter.title}/>
            </FlexBlocks>
          </NoteSection>
          }
          {data.mdx.frontmatter.frontend&&
          <NoteSection
            initial={{opacity: 0,translateY: 500}}
            whileInView={{opacity: 1, translateY: 0}}
            transition={{ duration: 2 }}
            >
            <SectionTitle>Frontend</SectionTitle>
            <FrontendText>
              {data.mdx.frontmatter.frontend}
            </FrontendText>
            <FlexBlocks>
              <GatsbyImage
                image={pcImage02}
                alt={data.mdx.frontmatter.title}/>
              <GatsbyImage
                image={pcImage03}
                alt={data.mdx.frontmatter.title}/>
            </FlexBlocks>
          </NoteSection>
          }
        </Section>

        <ScrollTop>
          <IconContext.Provider value={{ color: "#fff", size: "32px" }}>
            <BiArrowToTop onClick={returnTop}/>
          </IconContext.Provider>
        </ScrollTop>
    </Layout>
  );
  }

const HeroImage = styled(motion.section)`
      max-width: 1080px;
      margin: ${val.s120} auto;
      box-shadow: ${val.shadow};
      transform: scale(0.5);
      transition: 2s;
    `

const H2 = styled(motion.h2)`
  font-size: ${val.s32};
  overflow: hidden;
  white-space: nowrap;
`

const MetaBlocks = styled(motion.div)`
  margin: 0 auto;
  padding: 0 16px 56px;
  display: flex;
  justify-content: space-between;
`
const FlexBlocks = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    max-width: 45%;
  }
  div{
    max-width: 45%;
    border-radius: 8px;
    filter: drop-shadow(${val.drop});
  }
`
const Time = styled.time`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
`
const Url = styled.span`
  color: #1a0dab;
  display: block;
  text-decoration: underline;
  margin-bottom: 2rem;
`
const Section = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  line-height: 2;
`
const SectionTitle = styled.h3`
  font-size: ${val.s56};
  margin-bottom: 1rem;
  overflow: hidden;
  white-space: nowrap;
`
const NoteSection = styled(motion.section)`
  padding: 72px 0;
`
const Text= styled(motion.p)`
  overflow: hidden;
  white-space: nowrap;
`
const FrontendText = styled(motion.p)`
  margin-bottom: 3rem;
`

const ScImageWrap = styled(motion.section)`
  width: 100vw;
  margin: ${val.s104} auto;
  padding: ${val.s56} 0;
  background: ${val.black};
`

const ScImage = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const ScrollTop = styled.div`
  width: ${val.s72};
  height: ${val.s72};
  border-radius: 50%;
  background: #33272a;
  filter: drop-shadow(${val.drop});
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 104px;
  right: 2rem;
  cursor: pointer;
  svg{
    width: ${val.s120};
  }
`

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id } ) {
      id
      frontmatter {
        date
        title
        url
        category
        description
        direction
        design
        frontend
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        pc_image01{
          childImageSharp {
            gatsbyImageData(width:680,layout: CONSTRAINED)
            }
          }
        pc_image02{
          childImageSharp {
            gatsbyImageData(width:680, layout: CONSTRAINED)
            }
          }
        pc_image03{
          childImageSharp {
            gatsbyImageData(width:680, layout: CONSTRAINED)
            }
          }
        sp_image01{
          childImageSharp {
            gatsbyImageData(width: 320, layout: CONSTRAINED)
            }
          }
        sp_image02{
          childImageSharp {
            gatsbyImageData(width: 320, layout: CONSTRAINED)
            }
          }
        sp_image03{
          childImageSharp {
            gatsbyImageData(width: 320, layout: CONSTRAINED)            }
          }
        }
      }
    }
`;

export const Head = () => {
  return <Seo />;
};


export default BlogPostTemplate
