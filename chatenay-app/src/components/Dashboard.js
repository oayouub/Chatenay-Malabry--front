import InputBase from '@mui/material/InputBase'
import TableDashboard from './TableDashboard'
import { useState } from 'react'

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="h-screen">
      <div className="flex w-1280 p-7 gap-10 shadow-md">
        <h1 className="text-gray-900 font-inter font-bold text-3xl leading-9 ">
          Dashboard
        </h1>
      </div>
      <div className="flex justify-center items-center h-44">
        <div>
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              border: "1px solid #42ADB6",
              width: "500px",
              borderRadius: "10px",
              padding: "10px",
            }}
            placeholder="Rechercher un professionnel"
            inputProps={{ "aria-label": "search" }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div>
        <div className='flex justify-center'>
          <TableDashboard
            searchTerm={searchTerm}
            sx={{border:'solid 5px blue'}}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
