import React from "react";
import FlipWords from "./ui/flip-words";


export function FlipWordsDemo() {
  const words = ["birthdays", "anniversaries", "trips", "wedding?"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Outfits for
        <FlipWords words={words} /> <br />
        Find your perfect fit <br/>for evey event just a click away
      </div>
    </div>
  );
}
