import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Calendar from './Calendar/Calendar';
import EventForm from './EventForm/EventForm';



const NewCalendarDemo = () => {
  const [appointment, setAppointment] = useState(null);

  return (
    <Flex gap={10} m={4} height="100%">
      <Flex grow={1} flexBasis="50%" overflow="auto">
        <Calendar onShowAppointmentView={setAppointment} />
      </Flex>
      <Flex grow={1} flexBasis="50%">
        {appointment && <EventForm appointment={appointment} />}
      </Flex>
    </Flex>
  );
}

export default NewCalendarDemo;
