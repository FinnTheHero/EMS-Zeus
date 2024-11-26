import BarChart from "../Components/BarChart";
import SysfailStatus from "../Components/SSEListener";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-1/2">
                <h2 className="text-2xl text-center">This year's usage</h2>
                <BarChart />
                <SysfailStatus />
            </div>
        </div>
    );
};

export default Dashboard;
