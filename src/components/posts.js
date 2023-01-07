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
      <div>
        {postList.map((post) => {
          return (
            <article
              key={post.idUnique}
              className="w-[400px] p-[8px] font-sans text-[13px]"
              itemType="http://schema.org/Article"
            >
              <h2>
                <Link to={`/blog/${post.path}`}>
                  {post.title}
                </Link>
              </h2>
              <p>Posted: {post.date}</p>
              <p>{post.description}</p>
            </article>
          );
        })}
      </div>
    );
  }
}