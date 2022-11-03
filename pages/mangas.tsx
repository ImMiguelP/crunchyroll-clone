import React from "react";
import Mangarow from "../components/Mangarow";

const mangas = () => {
  return (
    <>
      <Mangarow
        rowID={1}
        title="Top Manga"
        fetchURL="https://api.jikan.moe/v4/top/manga"
      />
      <Mangarow
        rowID={2}
        title="Top Manga"
        fetchURL="https://api.jikan.moe/v4/top/manga"
      />
      <Mangarow
        rowID={3}
        title="Top Manga"
        fetchURL="https://api.jikan.moe/v4/top/manga"
      />
    </>
  );
};

export default mangas;
