import * as React from "react";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { graphql } from "gatsby";
import PostList from "../../components/posts";

const BlogPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className="block w-[400px] p-[8px] font-sans text-[13px]">
        <PostList postEdges={posts} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
          description
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;
export default BlogPage;