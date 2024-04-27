import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CustomSidebar from './Components/CustomSidebar';
import PackageList from './Components/PackageList';
import Destinations from './Components/Destinations';
import ConfirmedBookings from './Components/ConfirmedBookings';
import PendingBookings from './Components/PendingBookings';
import CreatePackage from './Components/CreatePackage';


function App() {
  return (
    <div style={{ display: 'flex' }}>
      <BrowserRouter>
        <CustomSidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<PendingBookings />} /> {/* Set PendingBookings for root path */}
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/createpackage" element={<CreatePackage/>} />
            <Route path="/packagelist" element={<PackageList />} />
            <Route path="/confirmedbookings" element={<ConfirmedBookings />} />
            <Route path="/pendingbookings" element={<PendingBookings />}/>
             {/* Not Found for unmatched routes */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
