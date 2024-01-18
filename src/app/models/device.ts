import {Battery} from "./battery";
import {Accessoire} from "./accessoire";

export type Device = {
  deviceName: string,
  deviceSerial: string,
  deviceFlightControllerSerial: string,
  deviceDescription: string,
  deviceCarePackInfo: string,
  deviceStatus: string,
  deviceInstallation: Date,
  deviceNextMaintenance: Date,
  deviceAccessoires: Accessoire[],
  deviceBatteries: Battery[],
  deviceFirmware: string,
  maintenanceLog: string[]
}
