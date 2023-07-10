import React from "react";
import GaugeChart from "react-gauge-chart";

const Gauge = ({ value }) => {
  const totalValue = 6;

  const getPercentage = () => {
    (value + 3) / totalValue;
  };

  return (
    <GaugeChart
      nrOfLevels={30}
      colors={["#FF5F6D", "#008000"]}
      arcWidth={0.45}
      percent={getPercentage()}
      textColor="#FFF"
      needleColor="#FF5F6D"
      hideText
    />
  );
};

export default Gauge;
