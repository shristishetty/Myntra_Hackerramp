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
import toast from "react-hot-toast";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex gap-0">
        <HeroScrollDemo />
        <FlipWordsDemo />
      </div>

      <div className="flex items-start justify-start mt-20 gap-x-32">
        <Card className="w-full max-w-md mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Update Event</CardTitle>
            <CardDescription>
              Add event details for the perfect outfit recommendation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="occasion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Occasion</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an occasion" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Occasions</SelectLabel>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="birthday">
                              Birthday Party
                            </SelectItem>
                            <SelectItem value="business">
                              Business Meeting
                            </SelectItem>
                            <SelectItem value="casual">
                              Casual Outing
                            </SelectItem>
                            <SelectItem value="formal">
                              Formal Dinner
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="theme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Theme (if any)</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter theme if any"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of Occasion</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Set Event</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        

        <img
          src="https://images.pexels.com/photos/18004391/pexels-photo-18004391/free-photo-of-smiling-teenager-in-a-white-dress-at-her-birthday-celebration.jpeg?auto=compress&cs=tinysrgb&w=450&h=450&dpr=1"
          alt="img"
          className="mt-8 rounded-2xl"
        />
      </div>

      {showCards && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-8">
    {imageUrls.map((image, index) => (
      <Card key={index} className="min-w-[20rem]">
        <CardContent className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
          <div className="w-full mt-4">
            <img
              src={image}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={`thumbnail-${index}`}
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <a
              href=""
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

export default CalendarDemo;
