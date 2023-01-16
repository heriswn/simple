import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const post = data.mdx.frontmatter;

  return (
    <Layout pageTitle={post.title}>
      <article className="w-[400px] p-[8px] font-sans text-[13px]">
        <GatsbyImage image={post.thumbnail} />
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        {children}
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        thumbnail
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;