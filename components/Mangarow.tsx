import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import Manga from "./Manga";

const Mangarow = ({
  rowID,
  fetchURL,
  title,
}: {
  rowID: number;
  fetchURL: string;
  title: string;
}) => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMangas(response.data.data);
    });
  }, []);

  const leftSlider = () => {
    const slider: any = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const rightSlider = () => {
    const slider: any = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <Heading padding={4} fontSize="md">
        {title}
      </Heading>
      <Divider bg="#fa740f" h="2px" />
      <Flex pos="relative" alignItems="center">
        <MdChevronLeft onClick={leftSlider} size={40} />
        <Box
          id={"slider" + rowID}
          w="full"
          h="full"
          overflowX="scroll"
          whiteSpace="nowrap"
          scrollBehavior="smooth"
          overflow="hidden"
        >
          {mangas.map((item, id) => (
            <Manga manga={item} key={id} />
          ))}
        </Box>
        <MdOutlineChevronRight onClick={rightSlider} size={40} />
      </Flex>
    </>
  );
};

export default Mangarow;
