export interface IWeatherData {
  name: string;
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
  };
}
