"use client";

import { useEffect } from "react";

const InstagramGallery = () => {
  useEffect(() => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;
    console.log("url: ", url);
    async function fetchData() {
      try {
        const response = await fetch("url");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // setData(fetchedData);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    }

    fetchData();
  }, []);

  return <div>InstagramGallery</div>;
};

export default InstagramGallery;
