import React from "react";
import { useRoutes } from "react-router-dom";
import { paths } from "./paths";
import Layout from "../components/common/layout/Layout";
import Home from "../screen/home/Home";
import About from "../screen/about/About";
import Feature from "../screen/feature/Feature";
import Pricing from "../screen/pricing/Pricing";
import Blog from "../screen/blog/Blog";
import Contact from "../screen/contact/Contact";
import NotFound from "../screen/notFound/NotFound";
import Template from "../screen/home/Template/Template";
import TemplateDetail from "../screen/home/Template/detail/TemplateDetail";
import Details from  "../screen/blog/Detail";
import PrivacyPolicy from "../screen/PrivacyPolicy/PrivacyPolicy";

const Routers = () => {
  return useRoutes([
    {
      path: paths.home,
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path:paths.template,
      element:(
        <Layout>
          <Template />
        </Layout>
      )

    },
    {
      path:paths.templateDetail,
      element:(
        <Layout>
          <TemplateDetail />
        </Layout>
      )

    },
    {
      path: paths.about,
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: paths.features,
      element: (
        <Layout>
          <Feature />
        </Layout>
      ),
    },
    {
      path: paths.pricing,
      element: (
        <Layout>
          <Pricing />
        </Layout>
      ),
    },
    {
      path: paths.blog,
      element: (
        <Layout>
          <Blog />
        </Layout>
      ),
    },
    {
      path: paths.blogDetail,
      element: (
        <Layout>
          <Details />
        </Layout>
      ),
    },
    {
      path: paths.contact,
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
    },
    {
      path: paths.privacyPolicy,
      element: (
        <Layout>
          <PrivacyPolicy />
        </Layout>
      ),
    },
    {
      path: paths.not_found,
      element: <NotFound />,
    },
  ]);
};

export default Routers;
