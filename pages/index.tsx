import type { NextPage } from "next";
import Animerow from "../components/Animerow";
import Banner from "../components/Banner";
import Mangarow from "../components/Mangarow";

const Home: NextPage = () => {
  return (
    <>
      <Banner />

      <Animerow
        rowID={1}
        title="Top Anime"
        fetchURL="https://api.jikan.moe/v4/top/anime"
      />
      <Mangarow
        rowID={2}
        title="Top Manga"
        fetchURL="https://api.jikan.moe/v4/top/manga"
      />
    </>
  );
};

export default Home;
