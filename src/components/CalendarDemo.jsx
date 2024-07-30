// default
// "use client";
// import React from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { format } from "date-fns";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { cn } from "@/lib/utils";
// import { Button } from "./ui/button";
// import { Calendar } from "./ui/calendar";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./ui/form";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import HeroScrollDemo from "./HeroScrollDemo";
// import { FlipWordsDemo } from "./FlipWordsDemo";

// const FormSchema = z.object({
//   occasion: z.string({
//     required_error: "Please select an occasion.",
//   }),
//   theme: z.string().optional(),
//   date: z.date({
//     required_error: "Please select a date for the occasion.",
//   }),
// });

// const CalendarDemo = () => {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       occasion: "",
//       theme: "",
//       date: undefined,
//     },
//   });

//   const onSubmit = (data) => {
//     console.log("Form data submitted:", data);
//     toast.success("Event details submitted: " + JSON.stringify(data, null, 2));
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="flex gap-0">
//         <HeroScrollDemo />
//         <FlipWordsDemo />
//       </div>

//       <div className="flex items-start justify-start mt-20 gap-x-32">
//         <Card className="w-full max-w-md mt-8 shadow-lg">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold">Update Event</CardTitle>
//             <CardDescription>
//               Add event details for the perfect outfit recommendation
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="space-y-4"
//               >
//                 <FormField
//                   control={form.control}
//                   name="occasion"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Occasion</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select an occasion" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectGroup>
//                             <SelectLabel>Occasions</SelectLabel>
//                             <SelectItem value="wedding">Wedding</SelectItem>
//                             <SelectItem value="birthday">
//                               Birthday Party
//                             </SelectItem>
//                             <SelectItem value="business">
//                               Business Meeting
//                             </SelectItem>
//                             <SelectItem value="casual">
//                               Casual Outing
//                             </SelectItem>
//                             <SelectItem value="formal">
//                               Formal Dinner
//                             </SelectItem>
//                           </SelectGroup>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="theme"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Theme (if any)</FormLabel>
//                       <FormControl>
//                         <input
//                           {...field}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                           placeholder="Enter theme if any"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="date"
//                   render={({ field }) => (
//                     <FormItem className="flex flex-col">
//                       <FormLabel>Date of Occasion</FormLabel>
//                       <Popover>
//                         <PopoverTrigger asChild>
//                           <FormControl>
//                             <Button
//                               variant={"outline"}
//                               className={cn(
//                                 "w-[240px] pl-3 text-left font-normal",
//                                 !field.value && "text-muted-foreground"
//                               )}
//                             >
//                               {field.value ? (
//                                 format(field.value, "PPP")
//                               ) : (
//                                 <span>Pick a date</span>
//                               )}
//                             </Button>
//                           </FormControl>
//                         </PopoverTrigger>
//                         <PopoverContent className="w-auto p-0" align="start">
//                           <Calendar
//                             mode="single"
//                             selected={field.value}
//                             onSelect={field.onChange}
//                             initialFocus
//                           />
//                         </PopoverContent>
//                       </Popover>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <Button type="submit">Set Event</Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>

//         <img
//           src="https://images.pexels.com/photos/18004391/pexels-photo-18004391/free-photo-of-smiling-teenager-in-a-white-dress-at-her-birthday-celebration.jpeg?auto=compress&cs=tinysrgb&w=450&h=450&dpr=1"
//           alt="img"
//           className="mt-8 rounded-2xl"
//         />
//       </div>
//     </div>
//   );
// };

// export default CalendarDemo;







// FLASK

// "use client";
// import React from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { format } from "date-fns";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { cn } from "@/lib/utils";
// import { Button } from "./ui/button";
// import { Calendar } from "./ui/calendar";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./ui/form";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
// import toast, { Toaster } from "react-hot-toast";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import HeroScrollDemo from "./HeroScrollDemo";
// import { FlipWordsDemo } from "./FlipWordsDemo";
// import axios from "axios";

// const FormSchema = z.object({
//   occasion: z.string({
//     required_error: "Please select an occasion.",
//   }),
//   theme: z.string().optional(),
//   date: z.date({
//     required_error: "Please select a date for the occasion.",
//   }),
// });

// const CalendarDemo = () => {
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       occasion: "",
//       theme: "",
//       date: undefined,
//     },
//   });

//   const [imageUrls, setImageUrls] = React.useState([]);

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/get-images", {
//         occasion: data.occasion,
//       });
//       setImageUrls(response.data);
//       toast.success("Event details submitted: " + JSON.stringify(data, null, 2));
//     } catch (error) {
//       toast.error("Failed to submit event details");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="flex gap-0">
//         <HeroScrollDemo />
//         <FlipWordsDemo />
//       </div>

//       <div className="flex items-start justify-start mt-20 gap-x-32">
//         <Card className="w-full max-w-md mt-8 shadow-lg">
//           <CardHeader>
//             <CardTitle className="text-2xl font-bold">Update Event</CardTitle>
//             <CardDescription>
//               Add event details for the perfect outfit recommendation
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                 <FormField
//                   control={form.control}
//                   name="occasion"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Occasion</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select an occasion" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectGroup>
//                             <SelectLabel>Occasions</SelectLabel>
//                             <SelectItem value="wedding">Wedding</SelectItem>
//                             <SelectItem value="birthday">Birthday Party</SelectItem>
//                             <SelectItem value="business">Business Meeting</SelectItem>
//                             <SelectItem value="casual">Casual Outing</SelectItem>
//                             <SelectItem value="formal">Formal Dinner</SelectItem>
//                           </SelectGroup>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="theme"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Theme (if any)</FormLabel>
//                       <FormControl>
//                         <input
//                           {...field}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                           placeholder="Enter theme if any"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="date"
//                   render={({ field }) => (
//                     <FormItem className="flex flex-col">
//                       <FormLabel>Date of Occasion</FormLabel>
//                       <Popover>
//                         <PopoverTrigger asChild>
//                           <FormControl>
//                             <Button
//                               variant={"outline"}
//                               className={cn(
//                                 "w-[240px] pl-3 text-left font-normal",
//                                 !field.value && "text-muted-foreground"
//                               )}
//                             >
//                               {field.value ? (
//                                 format(field.value, "PPP")
//                               ) : (
//                                 <span>Pick a date</span>
//                               )}
//                             </Button>
//                           </FormControl>
//                         </PopoverTrigger>
//                         <PopoverContent className="w-auto p-0" align="start">
//                           <Calendar
//                             mode="single"
//                             selected={field.value}
//                             onSelect={field.onChange}
//                             initialFocus
//                           />
//                         </PopoverContent>
//                       </Popover>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <Button type="submit">Set Event</Button>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>

//         <img
//           src="https://images.pexels.com/photos/18004391/pexels-photo-18004391/free-photo-of-smiling-teenager-in-a-white-dress-at-her-birthday-celebration.jpeg?auto=compress&cs=tinysrgb&w=450&h=450&dpr=1"
//           alt="img"
//           className="mt-8 rounded-2xl"
//         />

//         <div className="mt-8">
//           {imageUrls.length > 0 ? (
//             imageUrls.map((url, index) => (
//               <img key={index} src={url} alt="outfit" className="mt-4 rounded-2xl" />
//             ))
//           ) : (
//             <p>No images found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalendarDemo;



// hardcode

"use client";
import React, { useState }, { useState } from "react";
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
import toast from "react-hot-toast";
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

const imageUrls = [
"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22127524/2023/2/25/62a6415b-9b83-4672-9653-9e0f940e4df11677326531705SringamWomenPeach-ColouredPaisleyPrintedThreadWorkKurta1.jpg",
"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22955364/2023/4/29/fde4295c-f621-46c4-8d43-a02c2f5f4d501682750947761Sarees1.jpg",
"https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/22891214/2023/4/25/728830a8-e139-4c79-af86-d57b1654cc411682427824007Sarees1.jpg",
"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22895374/2023/4/26/786a2c40-aa45-4a49-adf1-0eb031f482631682533534063Sarees1.jpg",
"https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/22959620/2023/4/29/cbc5f2b8-9882-4ff6-849e-9e79ca49b08f1682782326746MustardSilkWovenDesignSareewithHandworkUnstitchedBlousePiece1.jpg",
"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22890042/2023/4/25/5b826a75-d646-44ac-8c82-dff69f966f761682424909539PeachVichitraSolidSareewithBlousePiece1.jpg"
];

const CalendarDemo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
