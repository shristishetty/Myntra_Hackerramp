import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { ImagesSliderDemo } from "./ImagesSliderDemo"; // Adjust the path based on your project structure


const imageUrls = [
  "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://plus.unsplash.com/premium_photo-1691030255899-7c0423ccdea3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1605389170783-bcb01d8a57dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxmYXNoaW9ufGVufDB8fDB8fHww",
  "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://plus.unsplash.com/premium_photo-1691030255899-7c0423ccdea3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Women() {
  return (
    <>
      <ImagesSliderDemo /> 
      <div className="flex overflow-x-scroll space-x-4 m-8" style={{ "-ms-overflow-style": "none", "scrollbar-width": "none", }}>
        {imageUrls.map((image, index) => (
          <CardContainer className="inter-var min-w-[20rem]" key={index}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                View your favourite design
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over 
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={image}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`thumbnail-${index}`}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href=""
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-primary dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  View
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
