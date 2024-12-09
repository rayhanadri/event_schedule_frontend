import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([]); // State to store events
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/list"); // Replace with your API URL
        const data = await response.json();
        // console.log(data);
        // Map events to ensure dates are in JavaScript Date format
        const formattedEvents = data.map((event) => ({
          ...event,
          title: event.name, // Convert ISO string to Date object
          start: new Date(event.eventTimeStart) - 7 * 60 * 60 * 1000, // Convert ISO string to Date object
          end: new Date(event.eventTimeEnd) - 7 * 60 * 60 * 1000, // Convert ISO string to Date object
          imageUrl: "/vite.svg"
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); // Run once on component mount

  if (loading) {
    return <div>Loading events...</div>; // Optional loading state
  }

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const CustomAgendaEvent = ({ event }) => (
    <>
      <p>
        <strong>{event.title}</strong>
      </p>
      <p>{event.description}</p>
    </>
  );

  // Custom CSS to hide the time column in the Agenda
  const hideTimeColumnCSS = `
    .rbc-agenda-time-cell {
      display: none !important;
    }
    .rbc-header:nth-child(2) {
     display: none !important;
    }
  `;

//   const CustomAgendaHeader = () => (
//     <div className="rbc-header">
//       <span>Event</span> {/* Only show Event column */}
//     </div>
//   );

  const style = document.createElement("style");
  style.innerHTML = hideTimeColumnCSS;
  document.head.appendChild(style);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1000, width: 1000 }}
        onSelectEvent={handleEventClick}
        views={["month", "agenda"]} // Make sure to use the views you need
        step={30}
        timeslots={5} // Adjust how the time slots are displayed
        defaultView="month"
        // components={{
        //   //   event: CustomAgendaEvent, // Use custom event component in agenda
        //   header: CustomAgendaHeader, // Use custom header component to hide time column
        // }}
        // onShowMore={handleShowMore} // Handle overflow events in the same time slot
        firstDayOfWeek={1}
      />

      {selectedEvent && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Event Details"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1050, // High z-index to ensure visibility
              backgroundColor: "#fff", // Optional: Ensure it's opaque
              width: "40%",
            },
            overlay: {
              zIndex: 1040, // Ensure overlay appears above calendar
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed overlay
            },
          }}
        >
          <h2>{selectedEvent.title}</h2>
          <p>
            <strong>Start:</strong> {new Date(selectedEvent.start).toString()}
          </p>
          <p>
            <strong>End:</strong> {new Date(selectedEvent.end).toString()}
          </p>
          <p>
            <strong>Description:</strong> {selectedEvent.description}
          </p>
          <p>
            <strong>Categories:</strong>
            <div className="mt-2">
              {selectedEvent.eventCategories.map((category, index) => (
                <a
                  href={`/${category}`}
                  key={index}
                  type="button"
                  className="btn btn-sm btn-primary m-1"
                >
                  {category}
                </a>
              ))}
            </div>
          </p>
          <p>
            <strong>Link Info:</strong>{" "}
            <a href={`${selectedEvent.urlInfo}`} target="_blank">
              {selectedEvent.urlInfo}
            </a>
          </p>
          <p>
            <strong>City:</strong> {selectedEvent.city}
          </p>
          <p>
            <strong>Venue:</strong> {selectedEvent.venue}
          </p>
          <p>
            <img
              src={selectedEvent.imageUrl}
              className="rounded mx-auto d-block"
              alt="Event poster"
              height="300"
            />
          </p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default EventCalendar;
