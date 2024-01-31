import React, { useState, useEffect } from "react";
import { client } from "../client";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
      title,
      slug,
      body,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="px-5">
        <h1 className="font-bold tracking-widest mt-5 mb-10 text-4xl">
          Blog Page
        </h1>
        <p>You're viewing {posts.length} posts</p>

        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1">
          {posts.map((post) => {
            return (
              <article key={post.slug.current}>
                <img src={post.mainImage.asset.url} alt={post.title} />
                <h4 className="mt-5">{post.title}</h4>
                <button className="mb-10 mt-5">
                  <Link
                    className="py-2 px-6 shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black"
                    to={`/blog/${post.slug.current}`}
                  >
                    Read full article
                  </Link>
                </button>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Blog;
