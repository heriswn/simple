import * as React from "react";
import Layout from "../../components/layout";
import { SEO } from "../../components/seo";
import { graphql } from "gatsby";
import { Link } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => (
        <article
          key={node.id}
          className="w-[400px] p-[8px] font-sans text-[13px]"
        >
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <SEO title="My Blog Posts" />;
export default BlogPage;