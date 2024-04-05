import Image from "next/image";
import { useEffect } from "react";

const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    // setError(error);
    console.log("in catch");
  }
  //   } finally {
  //     console.log("In finally");
  //     // setLoading(false);
  //   }
}
const InstagramGallery = async () => {
  const instagramData = await fetchData();
  console.log("instagramData: ", instagramData.data[0].media_url);
  return (
    <>
      <img src={instagramData.data[0].media_url} className="w-[200px]"></img>
    </>
  );
};

export default InstagramGallery;
