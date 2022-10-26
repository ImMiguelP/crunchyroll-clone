import React from "react";
import Animerow from "../components/Animerow";

const mangas = () => {
  return (
    <>
      <Animerow
        rowID={1}
        title="Top Manga"
        fetchURL="https://api.jikan.moe/v4/top/manga"
      />
      <Animerow
        rowID={2}
        title="Top Manga"
        fetchURL="https://api.jikan.moe/v4/top/manga"
      />
      <Animerow
        rowID={3}
        title="Top Manga"
        fetchURL="https://api.jikan.moe/v4/top/manga"
      />
    </>
  );
};

export default mangas;
