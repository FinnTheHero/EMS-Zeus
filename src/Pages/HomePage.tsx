import { faFire, faSnowflake, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
    return (
        <div className="flex flex-col flex-nowrap items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col flex-nowrap items-center justify-center">
                <div className="w-full flex flex-row flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-1/2 p-4 lg:border-r border-gray-800">
                        {/* Usage box */}
                        <div className="p-4 mb-2 border-b border-gray-800 flex flex-row flex-nowrap">
                            <div className="w-2/3">
                                <div className="text-2xl flex flex-row flex-wrap mb-2">
                                    <h2 className="mr-2">Current usage:</h2>
                                    <h2 className="font-bold">1375 w</h2>
                                </div>
                                <div className="text-xl flex flex-row flex-wrap">
                                    <h2 className="mr-2">Today:</h2>
                                    <h2 className="font-bold">33 kWh</h2>
                                </div>
                                <div className="text-xl flex flex-row flex-wrap">
                                    <h2 className="mr-2">This week:</h2>
                                    <h2 className="font-bold">231 kWh</h2>
                                </div>
                                <div className="text-xl flex flex-row flex-wrap">
                                    <h2 className="mr-2">This month:</h2>
                                    <h2 className="font-bold">990 kWh</h2>
                                </div>
                            </div>
                            <div className="w-1/3 text-xl flex flex-wrap items-center justify-center">
                                <h2 className="mr-2">Estimated:</h2>
                                <h2 className="font-bold">350$</h2>
                            </div>
                        </div>
                        {/* Optimisation box */}
                        <div className="py-4 px-2 flex flex-col justify-center">
                            <div className="text-xl flex flex-row flex-wrap">
                                <h2 className="font-bold mb-1 mr-1">
                                    AI Recommendations
                                </h2>
                                <h2>specifically for your needs</h2>
                            </div>

                            <div className="p-4 mx-2 hover:text-white hover:bg-gray-800 rounded-md">
                                <h2 className="text-xl font-bold">
                                    Control HVAC devices
                                </h2>
                                <p className="text-lg">
                                    You need to adjust some shit bla bla bla...
                                </p>
                            </div>

                            <div className="p-4 mx-2 border-t border-gray-800 hover:text-white hover:bg-gray-800 hover:rounded-md">
                                <h2 className="text-xl font-bold">
                                    Control HVAC devices
                                </h2>
                                <p className="text-lg">
                                    You need to adjust some shit bla bla bla...
                                </p>
                            </div>

                            <div className="p-4 mx-2 border-t border-gray-800 hover:text-white hover:bg-gray-800 hover:rounded-md">
                                <h2 className="text-xl font-bold">
                                    Control HVAC devices
                                </h2>
                                <p className="text-lg">
                                    You need to adjust some shit bla bla bla...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        {/* Row */}
                        <div className="mb-6">
                            <h2 className="text-xl text-center">
                                Currently active modules
                            </h2>
                        </div>

                        <div className="w-full flex flex-row justify-evenly">
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faFire} />
                                <h2 className="ml-2 text-lg">Heating</h2>
                            </div>
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faSnowflake} />
                                <h2 className="ml-2 text-lg">Cooling</h2>
                            </div>
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faWind} />
                                <h2 className="ml-2 text-lg">Ventilation</h2>
                            </div>
                        </div>

                        <div className="w-full mt-6 flex flex-row justify-evenly">
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faFire} />
                                <h2 className="ml-2 text-lg">Heating</h2>
                            </div>
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faSnowflake} />
                                <h2 className="ml-2 text-lg">Cooling</h2>
                            </div>
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faWind} />
                                <h2 className="ml-2 text-lg">Ventilation</h2>
                            </div>
                        </div>

                        <div className="w-full mt-6 flex flex-row justify-evenly">
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faFire} />
                                <h2 className="ml-2 text-lg">Heating</h2>
                            </div>
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faSnowflake} />
                                <h2 className="ml-2 text-lg">Cooling</h2>
                            </div>
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faWind} />
                                <h2 className="ml-2 text-lg">Ventilation</h2>
                            </div>
                        </div>

                        <div className="w-full mt-6 flex flex-row justify-evenly">
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faFire} />
                                <h2 className="ml-2 text-lg">Heating</h2>
                            </div>
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faSnowflake} />
                                <h2 className="ml-2 text-lg">Cooling</h2>
                            </div>
                            <div className="min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                                <FontAwesomeIcon size="2x" icon={faWind} />
                                <h2 className="ml-2 text-lg">Ventilation</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;