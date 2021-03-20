import React from "react";
import Link from "next/link";

export default function PostList({ posts, pageName }) {
  if (posts === "undefined") return null;

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

  return (
    <React.Fragment>
      <div className="max-w-screen-lg mx-8 md:mx-auto">
        {!posts && (
          <p className="text-center">ဤစာမျက်နှာအတွက် ဆောင်းပါး မရှိသေးပါ။</p>
        )}

        <ul>
          {posts &&
            posts
              .slice(0)
              .reverse()
              .map((post) => {
                return (
                  <li className="mb-4" key={post.slug}>
                    <h2 className="text-xl font-bold mb-2">
                      {post.frontmatter.title}
                    </h2>
                    <div className="flex items-center mb-2">
                      <div className="mr-1">{clockSvg}</div>
                      <p className="text-xs">{post.frontmatter.date}</p>
                    </div>
                    <p className="mb-2 truncate">{post.markdownBody}</p>
                    <Link href={{ pathname: `/${pageName}/${post.slug}` }}>
                      <a>
                        <button className="px-4 py-2 rounded-lg text-sm border-red-600 border-2">
                          Read More
                        </button>
                      </a>
                    </Link>
                    <hr className="mt-2 border-b border-gray-500" />
                  </li>
                );
              })}
        </ul>
      </div>
    </React.Fragment>
  );
}
