/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ content, activeLabel }) {
  return (
    <>
      <Header activeLabel={activeLabel} />
      {content}
      <Footer />
    </>
  );
}
