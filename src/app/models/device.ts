import {Battery} from "./battery";
import {Accessories} from "./accessories";

export interface Device {
  deviceName: string,
  deviceSerial: string,
  deviceFlightControllerSerial: string,
  deviceDescription: string,
  deviceCarePackInfo: string,
  deviceStatus: string,
  deviceInstallation: Date,
  deviceNextMaintenance: Date,
  deviceAccessories: Accessories[],
  deviceBatteries: Battery[],
  deviceFirmware: string,
  maintenanceLog: string[],
  deviceClient: string
}

export const DEVICE_TYPES = [
  'Avata',
  'Mini 3 pro',
  'Mini 4 pro',
  'Matrice 30',
  'Matrice 30T',
  'Matrice 200/210',
  'Matrice 300',
  'Mavic 3',
  'Mavic 3 Enterprise',
  'Mavic 3 Enterprise Thermal',
  'Mavic 2',
  'Mavic 2 Enterprise Advanced',
  'Inspire 2',
  'Agras T30',
  'Agras T20',
  'Agras T16',
  'Agras T10',
  'MG 1 P',
  'MG 1 S',
  'Mavic Air 2S',
  'PhaseOne',
  'Flarm UAV Devkit',
  'Flarm Atom',
  'Flarm Aurora',
  'Phantom 4',
  'Phantom 4 Multispektral',
  'Spark',
  'Hautle Ladekoffer 4M3',
  'Hautle Ladekoffer 4M2',
  'ACECORE ZOE',
  'ACECORE NOA',
]

export  const DEVICE_STATUS = [
  'Im Lager',
  'In Betrieb',
  'Stillgelegt',
  'Unbekannt'

]
