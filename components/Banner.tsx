import { Flex, Icon, Image, Stack } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Banner = () => {
  const banners = ["banner2.webp", "banner.png"];
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: banners.length,
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <Flex pos={"relative"} alignItems={"center"} mt={"10px"}>
        <Stack
          position={"absolute"}
          w={"full"}
          h={"350px"}
          bg={"black"}
          __css={{ opacity: 0.3 }}
        ></Stack>
        <Flex
          w={"full"}
          h={"350px"}
          overflowX={"scroll"}
          whiteSpace={"nowrap"}
          scrollBehavior={"smooth"}
          overflow={"hidden"}
          ref={sliderRef}
          className="keen-slider"
        >
          {banners.map((item, idx) => (
            <Image
              key={idx}
              className="keen-slider__slide"
              objectFit={"contain"}
              src={item}
            />
          ))}
        </Flex>
        <Icon
          cursor={"pointer"}
          as={MdChevronLeft}
          pos={"absolute"}
          left={"0"}
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
        />
        <Icon
          cursor={"pointer"}
          as={MdChevronRight}
          pos={"absolute"}
          right={"0"}
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
        />
      </Flex>
    </>
  );
};

export default Banner;
