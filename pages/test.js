import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";
import { getStaticPaths, getStaticProps } from "./article/[id]";

const test = () => {
  return <div>test page</div>;
};

export default test;
