import React from 'react';
import Layout from '../components/layout'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Seo from "../components/seo"

const NotFound = () => {
  return (
    <Layout>
      <p>ごめんなさい！ページが存在しませんでした。</p>
      <AniLink paintDrip hex="#FF6C9C" component={Link} to="/home">
        <button>Portfolioへ戻る</button>
      </AniLink>
    </Layout>
  )
};

export const Head = () => {
  return (
    <Seo/>
  )
}

export default NotFound;
