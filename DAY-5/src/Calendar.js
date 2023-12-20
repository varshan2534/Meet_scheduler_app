import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [];
    setEvents(storedEvents);
  }, []);


  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      const updatedEvents = events.filter(event => event.title !== clickInfo.event.title || event.start === clickInfo.event.start);
      localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
      setEvents(updatedEvents);
    }
  };


  const handleSelect = (selectInfo) => {
    const start = selectInfo.startStr;
    const end = selectInfo.endStr;
    const title = prompt("Enter a title for your event:");
    if (title) {
      const newEvent = {
        title,
        start,
        end,
      };
      const updatedEvents = [...events, newEvent];
      localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
      setEvents(updatedEvents);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        events={events}
        eventClick={handleEventClick}
        selectable={true}
        select={(selectInfo) => handleSelect(selectInfo)}
      />
    </div>
  );
}

export default Calendar;
