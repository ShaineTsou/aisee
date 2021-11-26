import React from "react";
import { useLocation } from "react-router";

import { Helmet } from "react-helmet";

const SEO = ({ title, description, image }) => {
  const defaultTitle = "aiSee";
  const defaultDescription =
    "A full-stack color detection app that shows the hex code, density and the closest W3C color name for each identified color in an image";
  const siteUrl = "https://shainetsou.github.io";
  const defaultImage = "/aisee.png";
  const twitterUsername = "@ShaineTsou";
  const twitterImage = `${siteUrl}/aisee-twitter-image.png`;
  const { pathname } = useLocation();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      defaultTitle={defaultTitle}
    >
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:creator" content={twitterUsername} />
      <meta property="twitter:image" content={twitterImage} />
    </Helmet>
  );
};

export default SEO;
