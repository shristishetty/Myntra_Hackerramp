"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import toast, { Toaster } from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import HeroScrollDemo from "./HeroScrollDemo";
import { FlipWordsDemo } from "./FlipWordsDemo";
import { Card, CardContent } from "./ui/card"; // Adjusted import

const FormSchema = z.object({
  occasion: z.string({
    required_error: "Please select an occasion.",
  }),
  theme: z.string().optional(),
  date: z.date({
    required_error: "Please select a date for the occasion.",
  }),
});

const imageUrls = [
  "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22127524/2023/2/25/62a6415b-9b83-4672-9653-9e0f940e4df11677326531705SringamWomenPeach-ColouredPaisleyPrintedThreadWorkKurta1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22955364/2023/4/29/fde4295c-f621-46c4-8d43-a02c2f5f4d501682750947761Sarees1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/22891214/2023/4/25/728830a8-e139-4c79-af86-d57b1654cc411682427824007Sarees1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22895374/2023/4/26/786a2c40-aa45-4a49-adf1-0eb031f482631682533534063Sarees1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/22959620/2023/4/29/cbc5f2b8-9882-4ff6-849e-9e79ca49b08f1682782326746MustardSilkWovenDesignSareewithHandworkUnstitchedBlousePiece1.jpg",
  "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22890042/2023/4/25/5b826a75-d646-44ac-8c82-dff69f966f761682424909539PeachVichitraSolidSareewithBlousePiece1.jpg",
];

const CalendarDemo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      occasion: "",
      theme: "",
      date: undefined,
    },
  });

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    toast.success("Event details submitted: " + JSON.stringify(data, null, 2));
    setShowCards(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="flex gap-0 mb-10">
        <HeroScrollDemo />
        <FlipWordsDemo />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-6xl">
          <div className="flex justify-center items-center">
            <div className="w-4/5 bg-white shadow-md h-14 rounded-full flex justify-center text-xs">
              <div className="w-1/4 flex flex-col text-left hover:bg-gray-300 hover:text-white items-start space-y-1 px-6 rounded-full">
                <FormField
                  control={form.control}
                  name="occasion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mr-2 text-black text-sm">Occasion</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full h-8 bg-inherit outline-none text-sm">
                          <SelectValue placeholder="Select an occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="diwali">Diwali</SelectItem>
                            <SelectItem value="beach vacation">Beach Vacation</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/4 flex flex-col text-left hover:bg-gray-300 hover:text-white items-start space-y-1 px-6 rounded-full">
                <FormField
                  control={form.control}
                  name="theme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mr-2 text-black text-sm">Theme</FormLabel>
                      <FormControl>
                        <input
                          type="text"
                          placeholder="Enter Theme if any"
                          className="bg-inherit outline-none text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/4 flex flex-col text-left hover:bg-gray-300 hover:text-white items-start space-y-1 px-6 rounded-full">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mr-2 text-black text-sm">Date of occasion</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <button
                              type="button"
                              className="bg-inherit outline-none text-sm"
                            >
                              {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                            </button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <div>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={(date) => {
                                setSelectedDate(date);
                                field.onChange(date);
                              }}
                              className="calendar"
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/4 flex justify-center items-center bg-orange-500 flex-col text-left px-6 rounded-full">
                <Button type="submit" className="text-white p-2 rounded-full">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
      <Toaster />

      {showCards && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-8">
          {imageUrls.map((image, index) => (
            <Card key={index} className="min-w-[20rem]">
              <CardContent className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <div className="w-full mt-4">
                  <img
                    src={image}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    // alt={thumbnail-${index}}
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
      )}
    </div>
  );
};

export default CalendarDemo;
