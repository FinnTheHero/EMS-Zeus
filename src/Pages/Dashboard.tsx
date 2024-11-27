import { faFire, faLightbulb, faPersonWalking, faPlus, faSnowflake, faSolarPanel, faTemperatureHigh, faVideo, faVolumeHigh, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SysfailStatus from "../Components/SSEListener";

const Dashboard = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col p-8">
                <div className="mb-6 flex flex-col justify-center items-center">
                    <SysfailStatus />
                </div>
                <div className="py-4 px-2 flex flex-col justify-center">
                    <div className="text-xl text-center mb-2">
                        <h2>AI Recommendations</h2>
                    </div>

                    <div className="p-4 m-2 bg-gray-700 rounded-md hover:cursor-pointer">
                        <h2 className="text-xl font-bold text-white">
                            Control HVAC devices
                        </h2>
                        <p className="text-lg">
                            To optimise and save energy you ne...
                        </p>
                    </div>

                    <div className="p-4 m-2 bg-gray-700 rounded-md hover:cursor-pointer">
                        <h2 className="text-xl font-bold text-white">
                            Turn off ligh at night
                        </h2>
                        <p className="text-lg">
                            You can save extra resources if you...
                        </p>
                    </div>

                    <div className="p-4 m-2 bg-gray-800 rounded-md hover:cursor-pointer">
                        <h2 className="text-xl font-bold text-white">
                            Never disable important modules
                        </h2>
                        <p className="text-lg">
                            Some modules are essnetial for safety...
                        </p>
                    </div>

                    <div className="p-4 m-2 bg-gray-900 hover:bg-gray-800 rounded-md hover:cursor-pointer">
                        <h2 className="text-xl font-bold text-white">Learn more...</h2>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="mb-6">
                    <h2 className="text-xl text-center">Currently active modules</h2>
                </div>

                <div className="w-full flex flex-row flex-wrap justify-evenly">
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faFire} />
                        <h2 className="ml-2 text-lg">Heating</h2>
                    </div>
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faSnowflake} />
                        <h2 className="ml-2 text-lg">Cooling</h2>
                    </div>
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faWind} />
                        <h2 className="ml-2 text-lg">Ventilation</h2>
                    </div>
                </div>

                <div className="w-full mt-2 flex flex-row flex-wrap justify-evenly">
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faSolarPanel} />
                        <h2 className="ml-2 text-lg">Solar</h2>
                    </div>
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faLightbulb} />
                        <h2 className="ml-2 text-lg">Light</h2>
                    </div>
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faTemperatureHigh} />
                        <h2 className="ml-2 text-lg">Thermal Monitor</h2>
                    </div>
                </div>

                <div className="w-full mt-2 flex flex-row flex-wrap justify-evenly">
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faPersonWalking} />
                        <h2 className="ml-2 text-lg">Motion Sensor</h2>
                    </div>
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faVideo} />
                        <h2 className="ml-2 text-lg">CCTV</h2>
                    </div>
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-700 rounded p-4 flex flex-row justify-center items-center">
                        <FontAwesomeIcon size="2x" icon={faVolumeHigh} />
                        <h2 className="ml-2 text-lg">Audio</h2>
                    </div>
                </div>

                <div className="w-full mt-6 flex flex-row flex-wrap justify-evenly">
                    <div className="mt-4 min-w-1/5 max-w-2/5 w-fit bg-gray-800 rounded p-4 flex flex-row justify-center items-center cursor-pointer">
                        <FontAwesomeIcon size="2x" icon={faPlus} />
                        <h2 className="ml-2 text-lg">Add more</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
