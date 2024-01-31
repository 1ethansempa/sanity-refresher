import React, { useState, useEffect } from "react";
import { client } from "../client";
import { useParams, Link } from "react-router-dom";

function SinglePost() {
  const [singlePost, setSinglePost] = useState({});
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);

    client
      .fetch(
        `*[slug.current == "${slug}" ] {
      title,
      body,
      mainImage {
        asset-> {
          _id,
          url,
        },
        alt
      },
    }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <section>
          <h1>{singlePost.title}</h1>
          <img src={singlePost.mainImage.asset.url} alt={singlePost.title} />
          <button className="mb-10 mt-5">
            <Link
              className="py-2 px-6 shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black"
              to={`/blog`}
            >
              Read more
            </Link>
          </button>
        </section>
      )}
    </>
  );
}

export default SinglePost;
