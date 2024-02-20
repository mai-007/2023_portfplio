import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { val } from './variable.js'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Header = () => {
  const data = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const links= ['works','skill','history'];

  return (
    <HeaderWrap>
      <AniLink paintDrip hex="#FF6C9C" component={Link} to="/home">
        <H1>{data.site.siteMetadata.title}<SubTitle>Portfolio</SubTitle></H1>
      </AniLink>
      <NavWrap>
        <Nav>
          {links.map((links)=>{
            if(links === "works"){
              return(
                <Item>
                  <AniLink paintDrip hex="#FF6C9C" component={Link} to="/home">{links}</AniLink>
                </Item>
              )
            }else{
              return(
                <Item>
                  <Link to={`/${links}`}>{links}</Link>
                </Item>
                )
              }
          })}
        </Nav>
      </NavWrap>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px ${val.s56} 0;
  align-items: center;
  background: #ffffff;
  box-shadow: ${val.shadow};
  letter-spacing: .3em;
`

const H1 = styled.h1`
  margin: 0;
  font-size: ${val.s24};
  transition: 1s;
  &:hover{
    color: ${val.pink};
    text-shadow: ${val.shadow};
  }
`
const SubTitle = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: normal;
`

const NavWrap = styled.nav`
  width: min(50%, 800px);
`

const Nav = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`

const Item = styled.li`
  position: relative;
  font-size: ${val.s14};
  list-style: none;
  a{
    transition: 1s;
  &:hover{
    color: ${val.pink};
    }
  }
  &:after{
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${val.pink};
    transform: scale(0,1);
    transition: transform 0.3s;
  }
  &:hover::after{
    transform: scale(1,1);
  }
`


export default Header;
