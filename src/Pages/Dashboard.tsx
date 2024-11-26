import BarChart from "../Components/BarChart";

const Dashboard = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-1/2">
                <h2 className="text-2xl text-center">This year's usage</h2>
                <BarChart />
            </div>
        </div>
    );
};

export default Dashboard;
