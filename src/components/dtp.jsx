import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { IconContext } from "react-icons"
import { BiTime, BiLinkExternal } from "react-icons/bi"
import { val } from '../components/variable.js'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"

const Dtp = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx (filter: {frontmatter: {category: {in: "dtp"}}}){
          edges {
            node {
              frontmatter {
                title
                date
                slug
                hero_image{
                  childImageSharp {
                    gatsbyImageData(
                      width:320
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                    }
                  }
                }
              }
            }
          }
        }
      `)
  return (
      <>
        <ArchiveTitle>Dtp</ArchiveTitle>
        <Container>
        {data.allMdx.edges.map((edge) => (
        <AniLink paintDrip hex="#FF6C9C" component={Link} to={`/posts/${edge.node.frontmatter.slug}`}>
          <Item id={edge.node.frontmatter.slug} initial={{opacity: 0,translateY: 100}} whileInView={{opacity: 1, translateY: 0}} transition={{ duration: 1 }}>
            <div className={edge.node.frontmatter.slug}>
            <GatsbyImage
              image={getImage(edge.node.frontmatter.hero_image)}
              alt={edge.node.frontmatter.slug} />
            </div>
            <IconContext.Provider value={{ className: 'rightArrow' }}>
            <Hover>view<BiLinkExternal /></Hover>
            </IconContext.Provider>
            <Time><BiTime />{edge.node.frontmatter.date}</Time>
            <WorksTitle>
                {edge.node.frontmatter.title}
            </WorksTitle>
          </Item>
        </AniLink>
        ))}
        </Container>
      </>
  );
};


const ArchiveTitle = styled.h2`
  text-align: center;
  margin-bottom: ${val.s56};
`

const Container = styled.section`
  max-width: 1028px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Item = styled(motion.div)`
  position: relative;
  margin-bottom: ${val.s56};
  overflow: hidden;
  &:hover{
    div{
      top: 0;
      opacity: 0.9;
    }
  }
`

const Hover = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 198px;
  top: 198px;
  color: #fff;
  letter-spacing: .3em;
  transition: .5s;
  background: rgba(0,0,0,0.9);
  opacity: 0;
`
const WorksTitle = styled.h3`
  font-size: ${val.s14};
  font-weight: 400;
  text-align: center;
    a{
      text-decoration: none;
    }
`

const Time = styled.time`
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-size: ${val.s12};
  color: #666;
  text-decoration: none;
`


export default Dtp;
