export const getBackgroundColor = (sys, main) => {
    const currentTime = new Date().getTime() / 1000;
    const isDay = currentTime > sys.sunrise && currentTime < sys.sunset;
    const condition = main;
  
    if (isDay) {
      switch (condition) {
        case "Clear":
          return {
            background: "bg-gradient-to-br from-yellow-200 to-yellow-400",
            text: "text-black",
          };
        case "Clouds":
          return {
            background: "bg-gradient-to-br from-gray-200 to-gray-400",
            text: "text-black",
          };
        default:
          return {
            background: "bg-gradient-to-br from-gray-200 to-gray-400",
            text: "text-black",
          };
      }
    } else {
      return {
        background: "bg-gradient-to-br from-gray-800 to-gray-900",
        text: "text-white",
      };
    }
  };
  