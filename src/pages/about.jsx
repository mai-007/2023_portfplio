import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Seo from "../components/seo"

const AboutPage = ({ data }) => {
  console.log(data)
  return (
      <Layout>
      <table>
        <thead>
          <tr>
            <th>パス</th>
            <th>サイズ</th>
            <th>作成時間</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map((edge) => (
            <tr kye={edge.node.ctime}>
              <td>{edge.node.relativePath}</td>
              <td>{edge.node.size}</td>
              <td>{edge.node.ctime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      totalCount
      edges {
        node {
          relativePath
          size
          extension
          name
          ctime
        }
      }
    }
  }
`;

export const Head = () => {
  return (
    <Seo/>
  )
}

export default AboutPage;
