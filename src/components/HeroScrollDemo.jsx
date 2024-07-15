import React from "react";
import ContainerScroll from "./ui/container-scroll-animation";

const HeroScrollDemo = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Fashion for your schedule <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
              Dress for every event
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.pexels.com/photos/18004391/pexels-photo-18004391/free-photo-of-smiling-teenager-in-a-white-dress-at-her-birthday-celebration.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero"
          height={360}
          width={700}
          className="mx-auto rounded-2xl object-cover h-auto w-auto object-left-top"
          draggable={false}
          style={{ margin: "10px" }}
        />
      </ContainerScroll>
    </div>
  );
};

export default HeroScrollDemo;
