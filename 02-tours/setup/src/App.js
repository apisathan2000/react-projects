import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://corsproxy.io/?https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeTour = function (id) {
    setTours(() => {
      return tours.filter((tour) => {
        return tour.id !== id;
      });
    });
  };

  const fetchTours = async function () {
    setIsLoading(true);
    const toursResponse = await fetch(url);
    const toursData = await toursResponse.json();
    setTours(toursData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Tours
          toursData={tours}
          onNotInterested={removeTour}
          onRefresh={fetchTours}
        />
      )}
    </main>
  );
}

export default App;
