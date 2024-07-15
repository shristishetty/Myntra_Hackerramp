"use client";
import React, { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Button } from './ui/button';
import HeroScrollDemo from './HeroScrollDemo';
import { FlipWordsDemo } from './FlipWordsDemo';
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { toast, Toaster } from 'sonner';



const CalendarDemo = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
     <div className="flex justify-center items-center h-screen">
    <HeroScrollDemo />
      {/* <LampDemo/> */}
      <FlipWordsDemo/>
      {/* <TextGenerateEffectDemo/> */}
    </div>

    <div className="flex justify-center items-center h-screen">

  
<div className = "flex  space-x-6 justify-between">
      <div className="border border-gray-300 rounded-md mr-10">

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="calendar"
        />
      </div>
     
    </div>


    <Card className="w-[400px] h-[400px] ml-10">
      <CardHeader>
        <CardTitle>Update Event</CardTitle>
        <CardDescription>Add event to get the perfect outfit recommendation</CardDescription>
      </CardHeader>
      <CardContent>

      <form>
  <div className="form-group">
    <label htmlFor="occasion" className="text-lg font-bold text-gray-600">Occasion</label>
    <input type="text" id="occasion" name="occasion" className="form-control ml-2 mb-4 border rounded-md px-3 py-2" placeholder="Enter occasion" />
  </div>
  <div className="form-group">
    <label htmlFor="theme" className="text-lg font-bold text-gray-600">Theme (if any)</label>
    <input type="text" id="theme" name="theme" className="form-control ml-2 mb-4 border rounded-md px-3 py-2" placeholder="Enter theme if any" />
  </div>
  <div className="form-group">
    <label htmlFor="time" className="text-lg font-bold text-gray-600">Time</label>
    <input type="time" id="time" name="time" className="form-control ml-2 mb-4 border rounded-md px-3 py-2" placeholder="Select time" />
  </div>
 
</form>


      </CardContent>
      <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Set Event</Button>
      </CardFooter>
    </Card>
   </div>



    </>
    
  );
}

export default CalendarDemo;
