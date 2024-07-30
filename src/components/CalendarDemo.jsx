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

const FormSchema = z.object({
  occasion: z.string({
    required_error: "Please select an occasion.",
  }),
  theme: z.string().optional(),
  date: z.date({
    required_error: "Please select a date for the occasion.",
  }),
});

const CalendarDemo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
  };

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
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
              <div
                className={`w-1/4 flex flex-col text-left ${activeDropdown === 'occasion' ? 'hover:bg-gray-300 hover:text-white' : ''} items-start space-y-1 px-6 rounded-full`}
                onClick={() => handleDropdownClick('occasion')}
              >
                <FormField
                  control={form.control}
                  name="occasion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mr-2 text-black text-sm">Occasion</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full h-8 bg-inherit outline-none text-sm" disabled={activeDropdown !== 'occasion'}>
                          <SelectValue placeholder="Select an occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="diwali">Diwali</SelectItem>
                            <SelectItem value="rakshabandhan">Rakshabandhan</SelectItem>
                            <SelectItem value="formal meet up">Formal Meet up</SelectItem>
                            <SelectItem value="beach vacation">Beach Vacation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div
                className={`w-1/4 flex flex-col text-left ${activeDropdown === 'theme' ? 'hover:bg-gray-300 hover:text-white' : ''} items-start space-y-1 px-6 rounded-full`}
                onClick={() => handleDropdownClick('theme')}
              >
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

              <div
                className={`w-1/4 flex flex-col text-left ${activeDropdown === 'date' ? 'hover:bg-gray-300 hover:text-white' : ''} items-start space-y-1 px-6 rounded-full`}
                onClick={() => handleDropdownClick('date')}
              >
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
                              disabled={activeDropdown !== 'date'}
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
    </div>
  );
};

export default CalendarDemo;
