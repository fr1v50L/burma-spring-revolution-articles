import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import PostList from "../../components/PostList";

export default function HellHound({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ငရဲခွေးကြီး အမိဖမ်းမည်</title>
      </Head>
      <Layout>
        <PageHeader
          imgUrl="/hell-hound.jpg"
          altText="Hell Hound Logo"
          pageName="ငရဲခွေးကြီး အမိဖမ်းမည်"
        />
        <PostList posts={posts} pageName="hell-hound" />
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
  })(require.context("../../posts/hell-hound", true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
