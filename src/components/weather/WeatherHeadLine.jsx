import { useContext } from "react";
import cloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import pinIcon from "../../assets/pin.svg";
import RainIcon from "../../assets/rainy.svg";
import SunIcon from "../../assets/sun.svg";
import ThunderstormIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

const WeatherHeadLine = () => {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;
  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Clouds":
        return cloudIcon;
      case "Clear":
        return SunIcon;
      case "Haze":
        return HazeIcon;
      case "Rain":
        return RainIcon;
      case "Snow":
        return SnowIcon;
      case "Thunderstorm":
        return ThunderstormIcon;
      case "Fog":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      default:
        return HazeIcon;
    }
  };
  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          <img src={getWeatherIcon(climate)} alt={climate} />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {Math.round(temperature)}°
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={pinIcon} />
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {getFormattedDate(time, "time", false)}-
          {getFormattedDate(time, "date", false)}
        </p>
      </div>
    </>
  );
};

export default WeatherHeadLine;
