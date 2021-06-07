import Head from "next/head";
import { useEffect, useState } from "react";
import { server } from "../config";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState("");

  useEffect(() => {
    (async function () {
      const number = Math.trunc(Math.random() * 99) + 1;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${number}`
      );
      const todos = await res.json();
      setTodos(todos.title);
    })();

    console.log("Running useEffect");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment count{" "}
      </button>
      <p>Todos are: {todos}</p>

      <p>Count is: {count}</p>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=6"
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
