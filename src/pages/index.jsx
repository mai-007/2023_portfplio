import React from 'react'
import Layout from '../components/layout'
import Mv from '../components/mv'
import Website from "../components/website"
import AppArchive from "../components/appArchive"
import Seo from "../components/seo"
import ThisSite from '../components/thisSite'

const indexPage = () => {

  return (
        <Layout>
          <Mv/>
          <ThisSite/>
          <Website/>
          <AppArchive/>
        </Layout>
    );
};

export const Head = () => {
  return (
    <Seo/>
  )
}

export default indexPage;
