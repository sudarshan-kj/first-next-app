import Layout from "../components/Layout";
import "../styles/globals.css";
import Global from "../components/Global";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Global>
        <Component {...pageProps} />
      </Global>
    </Layout>
  );
}

export default MyApp;
