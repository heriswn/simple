import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className="w-[400px] p-[8px] font-sans text-[13px]">
        <p>{data.mdx.frontmatter.date}</p>
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
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;