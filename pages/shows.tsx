import React from "react";
import Animerow from "../components/Animerow";

const shows = () => {
  return (
    <>
      <Animerow
        rowID={1}
        title="Coming Soon"
        fetchURL="https://api.jikan.moe/v4/seasons/2022/fall"
      />
      <Animerow
        rowID={2}
        title="Top Anime"
        fetchURL="https://api.jikan.moe/v4/top/anime"
      />

      <Animerow
        rowID={3}
        title="2022 Spring Season"
        fetchURL="https://api.jikan.moe/v4/seasons/2022/spring"
      />
      <Animerow
        rowID={4}
        title="2022 Summer Season"
        fetchURL="https://api.jikan.moe/v4/seasons/2022/summer"
      />
    </>
  );
};

export default shows;
