import React from "react";
import Header from "../components/header";
import Helmet from "react-helmet";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Jonathan Working - About</title>
      </Helmet>
      <Header />
      <h1>About me</h1>
    </React.Fragment>
  );
};

export default AboutMe;
