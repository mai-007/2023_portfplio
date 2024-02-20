# Gatsby markdown
gatsbyでmarkdownファイルからページを生成します。

- component ここにコンポーネントファイルを入れます
- pages ページはここ
- pages/posts `markdown`ファイルで生成されたファイルはこのtemplateの通りに表示されます。
- posts  `React`で制作するページはこちらへ


# deploy
functionsディレクトリを利用して、basic認証を設定しているので変更ときは
publicディレクトリの中身をfunctionsに全て移動して以下を実行
firebase deploy
# スタイルについて
Emotionを入れています。

- クラス名をつけてスタイリングしたい場合
別途CSSファイルを制作し使用する`component`または`page`で`import`します。

```
import { title } from '../components/index.module.css';
<h1 className="title">Gatsby Blog Site</h1>
```

# プラグインの追加
プラグインを追加したら`gatsby-config`へ記入します。

# LINK
`LINK`は下記のよう記載します。　　
`LINK`をreactからimportしてjsxに書きます。
```
import { Link } from 'gatsby';

<Link to="/">top</Link>
```

# ICON
React Iconsを使用しています。
[React Icons](https://react-icons.github.io/react-icons)
上記サイトから選定し使用します。

使い方はこちら
https://zenn.dev/taichifukumoto/articles/how-to-use-react-icons

# 画像の取り扱い
通常のコンポーネント、ページの画像は`gatsby-plugin-image`で
表示させます。
[gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)

- 静的画像
props を`<StaticImage />`コンポーネントに渡すことで、イメージを構成します。
サイズやレイアウト、遅延読み込み時に使用するプレースホルダーの種類などの設定を変更できます。
高度な画像処理オプションも利用できます。オプションの完全なリストについては、[API ドキュメント](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image) を参照してください。

  - 制限
  `<StaticImage />`には制限があります。
  親コンポーネントの props を使用できないことです。
  詳細については、[Gatsby Image プラグイン リファレンス ガイド](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage)　を参照してください。親から渡されたプロップを画像srcに使用したい場合は、動的画像を使用する必要があります。
```
import { StaticImage } from "gatsby-plugin-image"

export function Dino() {
  return (
    <StaticImage
      src="../images/dino.png"
      alt="A dinosaur"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  )
}
```

- 動的画像
動的な画像 (CMSやmarkdownからの読み込み) が必要な場合は、GraphQL 経由で読み込み、GatsbyImageコンポーネントを使用して表示できます。
  1. ページ クエリに画像を追加します。
   画像を含む GraphQL File オブジェクトには、childImageSharp画像データのクエリに使用できるフィールドがあります。正確なデータ構造はデータ ソースによって異なりますが、構文は次のようになります。
   ```
    query {
    blogPost(id: { eq: $Id }) {
    title
    body
    avatar {
      childImageSharp {
        gatsbyImageData(width: 200)
          }
        }
      }
    }
  ```


  2.  イメージを構成します。
    すべての設定オプションについては、[Gatsby Image プラグイン リファレンス ガイド](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/)を参照してください。

  引数をgatsbyImageDataリゾルバーに渡すことで、イメージを構成します。サイズやレイアウト、遅延読み込み時に使用するプレースホルダーの種類などの設定を変更できます。高度な画像処理オプションも利用できます。オプションの完全なリストは、API ドキュメントで確認できます。
  ```
  query {
    blogPost(id: { eq: $Id }) {
      title
      body
      author
      avatar {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
  ```
  3. 画像を表示します。
    その後、コンポーネントを使用`GatsbyImage`してページに画像を表示できます。この`getImage()`関数は、コードを読みやすくするオプションのヘルパーです。コンポーネントに渡すことができる を取り、Fileを返します。`file.childImageSharp.gatsbyImageDataGatsbyImage`
```
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function BlogPost({ data }) {
  const image = getImage(data.blogPost.avatar)
  return (
    <section>
      <h2>{data.blogPost.title}</h2>
      <GatsbyImage image={image} alt={data.blogPost.author} />
      <p>{data.blogPost.body}</p>
    </section>
  )
}

export const pageQuery = graphql`
  query {
    blogPost(id: { eq: $Id }) {
      title
      body
      author
      avatar {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
```

## 画像読み込みのカスタマイズ
ほとんどのandインスタンスで同じオプション (など)`placeholder`を使用していることに気付くかもしれません。でデフォルトのオプションをカスタマイズできます。`formatsGatsbyImageStaticImagegatsby-plugin-sharp`

`gatsby-config.js`

```
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
}
```
***




# 困った時
- ファイルを更新したのに反映されない
- プラグインを導入したのに反映されない
- パスを変更したのに反映されない
そんな時は一旦 control+C で菅発を止めて
```
gatsby clean
```
してからdevelopしましょう。

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)
#gatsby_template
