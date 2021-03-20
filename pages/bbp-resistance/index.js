import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import PostList from "../../components/PostList";

export default function BbpResistance({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <title>BBP - Resistance</title>
      </Head>
      <Layout>
        <PageHeader
          imgUrl="/bbp-resistance.jpg"
          altText="BBP - Resistance Logo"
          pageName="BBP - Resistance"
        />
        <PostList posts={posts} pageName="bbp-resistance" />
      </Layout>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../../posts/bbp-resistance", true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
