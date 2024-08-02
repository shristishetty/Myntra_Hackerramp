
"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
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
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
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
import axios from "axios";

const FormSchema = z.object({
  occasion: z.string({
    required_error: "Please select an occasion.",
  }),
  theme: z.string().optional(),
  date: z.date({
    required_error: "Please select a date for the occasion.",
  }),
  gender: z.string().optional(),
});



const CalendarDemo = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      occasion: "",
      theme: "",
      date: undefined,
    },
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCards, setShowCards] = useState(false);

  const [imagesInfo, setImagesInfo] = useState({});

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/get-images", {
        occasion: data.occasion,
        theme: data.theme,
        date: data.date,
        gender: data.gender,
      });
      setImagesInfo(response.data);
      toast.success("Event details submitted: " + JSON.stringify(data, null, 2));
    } catch (error) {
      toast.error("Failed to submit event details");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex gap-0">
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
                            <SelectItem value="formal">Formal</SelectItem>
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
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mr-2 text-black text-sm">Gender</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full h-8 bg-inherit outline-none text-sm">
                          <SelectValue placeholder="Choose Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="women">Women</SelectItem>
                            <SelectItem value="men">Men</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
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

      <div>
        <div className="mt-8">
          {Object.keys(imagesInfo).length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-8">
              {Object.entries(imagesInfo).map(([url, name], index) => (
                <Card key={index} className="min-w-[20rem]">
                  <CardContent className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                    <div className="w-full mt-4">
                      <img
                        src={url}
                        alt={name}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      />
                    </div>
                    <div className="flex flex-col items-center mt-4">
                      <p className="text-sm font-semibold">{name}</p>
                      <div className="flex justify-between items-center mt-4 w-full">
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p>No images found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarDemo;

