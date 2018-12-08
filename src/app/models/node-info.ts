export class NodeInfo {
  constructor(
    public id: string,
    public date: string,
    public time: string,
    public soilMoisture: number,
    public soilTemperature: number,
    public airHumidity: number,
    public airTemperature: number
  ) { }
}
