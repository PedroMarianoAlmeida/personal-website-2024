"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

interface History {
  company: string;
  location: { lat: number; lng: number };
  initialDate: string;
  finalDate: string;
  tasks: string[];
}

const history: History[] = [
  {
    company: "Pedro Programmer",
    location: { lat: -22.914846496683932, lng: -43.553901259922824 },
    initialDate: "March/18",
    finalDate: "Today",
    tasks: ["Personal, open source, freelancer, and side projects"],
  },
  {
    company: "Mundiale",
    location: { lat: -19.918306901979484, lng: -43.937313104737264 },
    initialDate: "Jan/21",
    finalDate: "Dec/21",
    tasks: [
      "Maintenance and new features in over 15 landing pages",
      "Close communication with marketing team",
      "Tech stack: React, Next, JavaScript, Theme UI, SCSS, Git, Git Lab",
    ],
  },
  {
    company: "Fechly Labs",
    location: { lat: 39.77417679987611, lng: -104.98050083591806 },
    initialDate: "Dec/21",
    finalDate: "Apr/23",
    tasks: [
      "Development of Pixel Perfect views and graphics for web and mobile MVP projects",
      "Development backend tables, migration, endpoints, MVC, etc with Ruby on Rails",
      "Close communication with QA and Design team",
      "Tech stack: React, React Native, React, Ruby on Rails, JavaScript, Git, Git Lab",
    ],
  },
  {
    company: "360 Agency",
    location: { lat: 45.49533796412496, lng: -73.56042488110187 },
    initialDate: "May/23",
    finalDate: "Aug/23",
    tasks: [
      "Maintenance in highly complex software architecture React project (with internal packages and cross-client components) in production",
      "Fully agile methodology environment (with daily, sprint review, etc) and Kanban",
      "Tech stack: React, Storybook, Software Architecture, Cypress, Sass, NPM, JavaScript, Git, Git Lab, Jira",
    ],
  },
  {
    company: "Moz (Ziff Davis) - Contractor",
    location: { lat: 40.73803977090691, lng: -73.99216023985586 },
    initialDate: "Aug/23",
    finalDate: "Today",
    tasks: [
      "Maintenance in highly complex software architecture React project (with internal packages and cross-client components) in production",
      "Fully agile methodology environment (with daily, sprint review, etc) and Kanban",
      "Tech stack: TypeScript, MUI, React, Next, Craft CMS, Twig, JavaScript, Jest",
    ],
  },
];

const HistoryCard = ({
  item: { company, initialDate, finalDate, tasks },
}: {
  item: History;
}) => (
  <div>
    <h3>{company}</h3>
    <h4>
      From {initialDate} to {finalDate}
    </h4>
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  </div>
);

const HistoryMap = () => {
  const [historyDetails, setOpen] = useState<History | null>(null);

  if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === undefined) return;

  const position = { lat: 15.774339480629054, lng: -57.12522427544256 };
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className="h-full w-full">
        <Map zoom={3} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          {history.map((historyItem) => (
            <AdvancedMarker
              position={historyItem.location}
              onClick={() => setOpen(historyItem)}
              key={historyItem.company}
            >
              <Pin />
            </AdvancedMarker>
          ))}

          {historyDetails && (
            <InfoWindow
              position={historyDetails.location}
              onCloseClick={() => setOpen(null)}
            >
              <HistoryCard item={historyDetails} />
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default HistoryMap;
