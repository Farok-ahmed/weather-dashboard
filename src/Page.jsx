import { useContext, useEffect, useState } from "react";
import CloudyDayImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import SnowyDayImage from "./assets/backgrounds/snow.jpg";
import SunnyDayImage from "./assets/backgrounds/sunny.jpg";
import ThunderstormImage from "./assets/backgrounds/thunderstorm.jpg";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");
  function getBackgroundImage() {
    switch (weatherData.climate) {
      case "Rain":
        return RainyDayImage;
      case "Clear":
        return SunnyDayImage;
      case "Clouds":
        return CloudyDayImage;
      case "Snow":
        return SnowyDayImage;
      case "Thunderstorm":
        return ThunderstormImage;
      case "Mist":
        return MistImage;
      default:
        return SunnyDayImage;
    }
  }
  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 mx-auto mt-14 p-14">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${climateImage})` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover "
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
