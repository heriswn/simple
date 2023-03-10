import React, { Component } from "react";
import { Link } from "gatsby";

export default class PostList extends Component {
  getPostList() {
    const { postEdges } = this.props;
    const postList = postEdges.map((postEdge) => {
      return {
        idUnique: postEdge.id,
        path: postEdge.frontmatter.slug,
        title: postEdge.frontmatter.title,
        date: postEdge.frontmatter.date,
        description: postEdge.frontmatter.description || postEdge.excerpt,
      };
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <>
        {postList.map((post) => {
          return (
            <div className="bg-darkSecondary rounded-lg mb-2 hover:bg-darkBorderClr p-2">
              <article key={post.idUnique} itemType="http://schema.org/Article">
                <div className="hover:text-darkSecondary">
                  <h2>
                  <Link to={`/blog/${post.path}`}>{post.title}</Link>
                  </h2>
                  <p>Posted: {post.date}</p>
                  <p>{post.description}</p>
                </div>
              </article>
            </div>
          );
        })}
      </>
    );
  }
}