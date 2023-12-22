import InputBase from '@mui/material/InputBase';
import TableDashboard from './TableDashboard';

const Dashboard = () => {
    

    return (
      <div className="h-screen">
        <div class="flex w-1280 p-10 31 gap-10 shadow-md">
          <h1 class="text-gray-900 font-inter font-bold text-3xl leading-9 ">
            Dashboard
          </h1>
        </div>
        <div class="flex justify-center items-center h-44">
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
              inputProps={{ "aria-label": "search google maps" }}
            />
          </div>
        </div>
        <div>
          <div class='flex justify-center'>
            <TableDashboard
            sx={{border:'solid 5px blue'}} />
          </div>
        </div>
      </div>
    );
}
export default Dashboard;