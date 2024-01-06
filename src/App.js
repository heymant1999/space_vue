// Import necessary modules and components
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css"
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import Login from './components/Login';
import Table from './components/Table';

// Create a context to share mission data among components
export const MissionContext = createContext();
function App() {
  const [missionData, setMissionData] = useState();

  // State to track user authentication status
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // Function to fetch mission data from an external API
  const fetchData = async () => {
    try {
      const response = await axios.get("https://www.ag-grid.com/example-assets/space-mission-data.json");
      setMissionData(response.data);
    } catch (error) {
      console.error('Error fetching mission data:', error);
    }
  };

  // Function to handle user login
  const handleLogin = (username, password) => {
    // For simplicity, hardcoded check for a valid user
    if (username === 'user@test.com' && password === 'testuser') {
      setIsUserAuthenticated(true);
    } else {
      setIsUserAuthenticated(false);
      alert("You're not authorized");
    }
  };

  // Fetch mission data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Render different components based on user authentication status
  return (
    <div className="bg-gray-500">
      {isUserAuthenticated ? (
        // If authenticated, provide mission data to components within the context
        <MissionContext.Provider value={missionData}>
          <div className="flex-col">
            <div className='flex'>
              <div className='w-1/2'>
                <PieChart />
              </div>
              <div className='w-1/2'>
                <BarChart />
              </div>
            </div>
            <div>
              <Table />
            </div>
          </div>
        </MissionContext.Provider>
      ) : (
        // If not authenticated, show the Login component with the handleLogin function as a prop
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
