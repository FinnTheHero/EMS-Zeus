import Chart from "react-apexcharts";

// Somewhat functioning version of apex-charts
const BarChart = () => {
    const chartConfig = {
        height: "auto",
        width: "100%",
        series: [
            {
                name: "Energy",
                data: [
                    1467, 1392, 1567, 1150, 1240, 1130, 1432, 1500, 1350, 1200,
                    1230, 1500,
                ],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#d1d5db"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "60%",
                    borderRadius: 3,
                },
            },
            xaxis: {
                labels: {
                    style: {
                        colors: "#d1d5db",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 500,
                    },
                },
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#d1d5db",
                        fontSize: "16px",
                        fontFamily: "inherit",
                        fontWeight: 500,
                    },
                },
            },
            grid: {
                show: false,
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                custom: function ({
                    series,
                    seriesIndex,
                    dataPointIndex,
                    w,
                }: {
                    series: number[][];
                    seriesIndex: number;
                    dataPointIndex: Number;
                    w: {
                        config: {
                            xaxis: {
                                categories: string[];
                            };
                        };
                    };
                }) {
                    console.log(w.config.xaxis.categories);
                    console.log(w.config.xaxis);

                    return (
                        '<div class="text-gray-700 font-bold p-1">' +
                        "<span>" +
                        series[seriesIndex as number][
                        dataPointIndex as number
                        ] +
                        " kWh</span>" +
                        "</div>"
                    );
                },
            },
        },
    };

    return (
        <div className={`flex flex-col px-1`}>
            <Chart
                type="bar"
                height={chartConfig.height}
                options={chartConfig.options}
                series={chartConfig.series}
                width={chartConfig.width}
            />
        </div>
    );
};

export default BarChart;
