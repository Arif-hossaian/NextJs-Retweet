import Layout from "../components/Layout/Layout";
import "semantic-ui-css/semantic.min.css";
import "nprogress/nprogress.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
