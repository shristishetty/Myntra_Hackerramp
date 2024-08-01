import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Card, CardContent } from "./ui/card";

const initialImageUrls = [
  "https://petermanningnyc.com/cdn/shop/articles/image8_975x.png?v=1655834607",
  "https://images.bewakoof.com/uploads/grid/app/casual-outfits-for-men-bewakoof-blog-9-1615892381.jpg",
  "https://tiimg.tistatic.com/fp/1/007/747/casual-wear-mens-shoes-with-lace-closure-all-size-available--320.jpg",
  "https://manyavar.scene7.com/is/image/manyavar/8905100862140.4921_29-03-2023-21-44:283x395",
];

const additionalImageUrls = [
    "https://i.pinimg.com/736x/fc/d1/7b/fcd17b77d772ba4d80b08be976997072.jpg",
    "https://assets0.mirraw.com/images/11091481/132-A-1_long_webp.webp?1711546018",
    "https://img0.junaroad.com/uiproducts/20002351/zoom_0-1687537793.jpg",
    "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24402616/2023/9/11/7640073b-c61f-4a6e-bebe-95e421c746f51694418867199-Louis-Philippe-Men-Suits-3301694418866610-1.jpg",
    "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26039198/2023/11/30/83608851-019c-4bb6-b64c-159f5eb0e6571701325780618-Roadster-Men-Jackets-4501701325780074-1.jpg",
    "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/13238956/2021/8/18/e1876366-98e3-4c12-9bce-195344898cc81629280704569-Anouk-Men-Kurtas-3981629280703658-1.jpg",
    "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24799822/2023/10/19/fb259262-e5ee-427f-a635-2ab2ea3fad4b1697708005027-Park-Avenue-Men-Trousers-9581697708004634-1.jpg",
    "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26721328/2024/5/23/c3b9514b-ab6b-4f42-a9ab-3bafe711eb361716440231547-US-Polo-Assn-Men-Textured-Round-Toe-Slip-On-Sneakers-3941716-6.jpg",
];

export function Men() {
  return (
    <>
      <div className="flex overflow-x-scroll space-x-4 m-8" style={{ "-ms-overflow-style": "none", "scrollbar-width": "none", }}>
        {initialImageUrls.map((image, index) => (
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
      <div className="text-center font-bold text-4xl mb-8">
        Recent Picks
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-8">
        {additionalImageUrls.map((image, index) => (
          <Card key={index} className="min-w-[20rem]">
            <CardContent className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <div className="w-full mt-4">
                <img
                  src={image}
                  className="w-full h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={`thumbnail-${index}`}
                  style={{height: '300px', objectFit: 'cover'}}
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="#"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Buy now →
                </a>
                <button
                  className="px-4 py-2 rounded-xl bg-primary dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Wishlist
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
    </>
  );
}
