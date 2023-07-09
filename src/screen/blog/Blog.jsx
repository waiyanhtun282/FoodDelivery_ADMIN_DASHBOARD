import React from "react";
import BlogHero from "./BlogHero";
import OurBlog from "./OurBlog";

import { useModalContext } from "../../hooks/useModalContext";



const Blog = () => {
const {blogArr}  = useModalContext();
// console.log(blogArr)
  return (
    <>
      {/* blog one */}
      <BlogHero />

      {/* ourBlogw two */}
      <OurBlog blogArr={blogArr}/>
      
    </>
  );
};

export default Blog;
