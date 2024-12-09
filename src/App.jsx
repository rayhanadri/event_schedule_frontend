/* eslint-disable react/prop-types */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EventCalendar from "./components/EventCalendar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Modal from "react-modal";
// import { utcToZonedTime } from "date-fns-tz";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

moment.updateLocale("en", {
  week: {
    dow: 1, // Set Monday as the first day of the week
  },
});

// const localizer = momentLocalizer(moment);
// const timeZone = "Asia/Jakarta";

// const myEvent = [
//   {
//     title: "Sanctum Festival",
//     start: new Date("2024-12-29T09:00:00+07:00"),
//     end: new Date("2024-12-29T19:00:00+07:00"),
//     description:
//       'Event ini bertujuan sebagai konvensi "doujinshi" khusus Blue Archive dimana artist/illustrator memamerkan dan menjual karya bertema Blue Archive di sini. Tidak hanya sebagai market doujinshi Blue Archive, Sanctum Festival juga nantinya akan mengadakan Community event pra-acara ataupun saat acara baik itu kompetisi, DJ performance, Cosplay dan lainnya.',
//     eventCategories: [
//       "game",
//       "anime",
//       "community",
//       "competition",
//       "music performance",
//       "cosplay",
//       "art market",
//     ],
//     urlInfo: "https://www.facebook.com/share/p/1AuTSK1NBy/",
//     city: "Jakarta",
//     venue: "Jakarta Design Center",
//     imageUrl: "/vite.svg",
//   },
//   {
//     title: "COMIPARA (Comic Paradise)",
//     start: new Date("2024-12-21T09:00:00+07:00"),
//     end: new Date("2024-12-22T19:00:00+07:00"),
//     description:
//       "Comic Paradise (COMIPARA) merupakan acara kreatif yang rutin diadakan dua kali setahun di Yogyakarta, yang berfokus, namun tidak terbatas, pada komik, webtoon, dan berbagai produk turunan komik lainnya. Digagas oleh komikus untuk komikus, COMIPARA menjadi ruang kreatif dengan segudang aktivitas seru yang membawa angin segar bagi penikmat komik dan pop culture di penjuru Indonesia.",
//     eventCategories: [
//       "game",
//       "anime",
//       "comic",
//       "community",
//       "music performance",
//       "cosplay",
//       "art market",
//     ],
//     urlInfo: "https://www.facebook.com/share/p/1AuTSK1NBy/",
//     city: "Yogyakarta",
//     venue: "Jogja Expo Center",
//     imageUrl: "/vite.svg",
//   },
//   {
//     title: "Chibicon Surabaya",
//     start: new Date("2024-12-21T09:00:00+07:00"),
//     end: new Date("2024-12-22T19:00:00+07:00"),
//     description:
//       "The Biggest Creator Market in East Java is BACK! It's your chance to be part of this epic creative wave!✨ Meet our amazing guest star and performers in stage, and enjoy many excitement coming this December for you!✨",
//     eventCategories: [
//       "game",
//       "anime",
//       "manga",
//       "community",
//       "music performance",
//       "cosplay",
//       "art market",
//     ],
//     urlInfo: "https://www.instagram.com/p/DCgw8Q5yl-w/",
//     city: "Surabaya",
//     venue: "Convention Hall Tunjungan Plaza 3 6th Floor",
//     imageUrl: "/vite.svg",
//   },
// ];

// const EventComponent = ({ event }) => (
//   <div style={{ display: "flex", alignItems: "center" }}>
//     {event.imageUrl && (
//       <img
//         src={event.imageUrl}
//         alt="Event"
//         style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
//       />
//     )}
//     <div>
//       <strong>{event.title}</strong>
//       <p style={{ margin: 0, fontSize: "0.8em" }}>{event.description}</p>
//     </div>
//   </div>
// );

// const CustomAgendaEvent = ({ event }) => {
//   return (
//     <div>
//       <strong>{event.title}</strong>
//       <p>{event.description}</p>
//       <img
//         src={event.imageUrl}
//         className="rounded mx-auto d-block"
//         alt="Event poster"
//         height="100"
//       />
//       <p>
//         <strong>City:</strong> {event.city}
//       </p>
//     </div>
//   );
// };

// const EventCell = ({ event }) => {
//   return (
//     <div style={{ backgroundColor: "#f0f8ff", padding: "5px", margin: "2px", borderRadius: "4px" }}>
//       <a href={`/event/${event.id}`} style={{ textDecoration: "none", color: "#333" }}>
//         {event.title}
//       </a>
//     </div>
//   );
// };

function App() {
  // const [selectedEvent, setSelectedEvent] = useState(null);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [calendarHeight, setCalendarHeight] = useState(1000);

  // const handleEventClick = (event) => {
  //   setSelectedEvent(event);
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setSelectedEvent(null);
  // };

  // const handleShowMore = (events) => {
  //   alert(`There are ${events.length} events at this time!`);
  //   setCalendarHeight(2000);
  //   // Optionally, you can show a modal or something else to display all events at this time
  // };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <EventCalendar />
      </div>
    </>
  );
}

export default App;
