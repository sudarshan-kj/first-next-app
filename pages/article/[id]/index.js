import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Meta from "../../../components/Meta";
import { server } from "../../../config";
import WithPreview from "../../../components/WithPreview";

function article({ article, isPreview }) {
  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

export default WithPreview(article);

export const getStaticProps = async (context) => {
  console.log("Preview Context is", context);

  let res;
  if (context.preview) {
    console.log("Request IS from preview");
    res = await fetch(`${server}/api/articles/${context.previewData.id}`);
  } else {
    console.log("Request IS *NOT* from preview");
    res = await fetch(`${server}/api/articles/${context.params.id}`);
  }

  const article = await res.json();

  return {
    props: {
      article,
      isPreview: context.preview ? true : false,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
