import BarChart from "../Components/BarChart";

const HomePage = () => {
    return (
        <div className="flex flex-col flex-nowrap items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col flex-nowrap items-center justify-center">
                <div className="w-full flex flex-row flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-2/3 p-4 lg:border-r border-gray-800 flex flex-col justify-center">
                        {/* Usage box */}
                        <div className="p-4 mb-2 flex flex-row flex-wrap justify-evenly lg:justify-between">
                            <div className="w-fit">
                                <div className="text-3xl flex flex-row flex-wrap mb-4">
                                    <h2 className="mr-2">Current usage:</h2>
                                    <h2 className="font-bold">1375 w</h2>
                                </div>
                                <div className="text-2xl flex flex-row flex-wrap">
                                    <h2 className="mr-2">Today:</h2>
                                    <h2 className="font-bold">33 kWh</h2>
                                </div>
                                <div className="text-2xl flex flex-row flex-wrap">
                                    <h2 className="mr-2">This week:</h2>
                                    <h2 className="font-bold">231 kWh</h2>
                                </div>
                                <div className="text-2xl flex flex-row flex-wrap">
                                    <h2 className="mr-2">This month:</h2>
                                    <h2 className="font-bold">990 kWh</h2>
                                </div>
                            </div>
                            <div className="w-fit mt-4 text-xl flex flex-nowrap items-center lg:justify-center justify-start">
                                <h2 className="mr-2">Estimated:</h2>
                                <h2 className="font-bold">350$</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5 p-4 flex flex-col flex-wrap justify-center">
                        <h2 className="text-2xl text-center">This year's usage</h2>
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
