/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ content, activeLabel, postDetails }) {
  return (
    <>
      <Header activeLabel={activeLabel} postDetails={postDetails} />
      {content}
      <Footer />
    </>
  );
}
