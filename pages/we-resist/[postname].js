import React from "react";
import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";

export default function WeResistPost({ frontmatter, markdownBody }) {
  const clockSvg = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  if (!frontmatter) return <React.Fragment></React.Fragment>;

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <title>{frontmatter.title}</title>
      </Head>
      <Layout>
        <div className="max-w-screen-lg md:mx-auto mx-8 my-8">
          <Link href="/we-resist">
            <a className="px-4 py-2 bg-red-600 rounded-lg">
              Back to We Resist - Burma
            </a>
          </Link>
        </div>

        <article className="max-w-screen-lg mx-8 mb-8 md:mx-auto">
          <h2 className="text-2xl font-bold mb-2">{frontmatter.title}</h2>
          <div className="mb-8 md:flex md:justify-between md:items-center">
            <p className="mb-2">By: {frontmatter.author}</p>
            <div className="flex items-center">
              <div className="mr-1">{clockSvg}</div>
              <p className="text-xs">{frontmatter.date}</p>
            </div>
          </div>
          <ReactMarkdown className="prose max-w-none" children={markdownBody} />
          {/* <div className="prose">{markdownBody}</div> */}
        </article>
      </Layout>
    </React.Fragment>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/we-resist/${postname}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../posts/we-resist", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/we-resist/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
