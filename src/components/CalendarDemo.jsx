"use client";
import React, { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Button } from './ui/button';
import HeroScrollDemo from './HeroScrollDemo';
import { FlipWordsDemo } from './FlipWordsDemo';
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';



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


    <Card className="w-[400px] h-[450px] ml-10">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>

      <form>
            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <input type="text" id="occasion" name="occasion" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="theme">Theme (if any)</label>
              <input type="text" id="theme" name="theme" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="time" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select id="type" name="type" className="form-control">
                <option value="">Select...</option>
                <option value="trip">Trip</option>
                <option value="vacation">Vacation</option>
              </select>
            </div>
          </form>

      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
   </div>



    </>
    
  );
}

export default CalendarDemo;
