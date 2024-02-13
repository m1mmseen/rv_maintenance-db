export type Entry = {
  id: number,
  client: string,
  device: string,
  deviceName: string,
  date: Date,
  type: string,
  technician: string
  visualInspectionCase: string,
  propellerMotorsArms: string,
  gimbalCamera: string,
  controller: string,
  spareParts: string,
  calibration: string[],
  cleanings: string[],
  firmware: {

    aircraftFirmware: string,
    remoteControllerFirmware: string,
    otherFirmware: string,
  },
  swConfigurations: string,
  testFlights: string[],
  flightAbnormalities: string,
  needsToBeRepaired: boolean,
  reasonForRepair: string,
  repairOrderNo: string,
  operationalStatus: string
}

export const defaultEntry = {
  id: -1,
  client: '',
  device: '',
  deviceName: '',
  date: new Date(),
  type: '',
  technician: '',
  visualInspectionCase: '',
  propellerMotorsArms: '',
  gimbalCamera: '',
  controller: '',
  spareParts: '',
  calibration: [],
  cleanings: [],
  firmware: {

    aircraftFirmware: '',
    remoteControllerFirmware: '',
    otherFirmware: '',
  },
  swConfigurations: '',
  testFlights: [],
  flightAbnormalities: '',
  needsToBeRepaired: false,
  reasonForRepair: '',
  repairOrderNo: '',
  operationalStatus: ''
};

export const ENTRY_TYPES = [
  'Wartung',
  'Inbetriebnahme',
  'Problemerfassung',
  'Flarm Update',
];

export const ENTRY_TECHNICIAN = [
  'David Och',
  'Manuel Züger',
  'Jens Adank',
  'Ueli Sager',
  'Cyrill Schweizer',
  'Christin Hanke',
]

export const ENTRY_AUDIT_OPTIONS = [
  'Normal',
  'Wartung durchgeführt',
  'Reparatur durchgeführt',
]

export const ENTRY_CALIBRATIONS = [
  'IMU Calibration',
  'Compass Calibration',
  'Vision Sensor Calibration',
  'Single Motor Test',
  'GNSS Receiver',
  'Pumpen kalibriert',
  'Durchlaufmesser',
]

export const ENTRY_FLIGHTTESTS = [
  'Flugnavigation inkl. GNSS / RTK',
  'Verbindung Fernsteuerung-Drohne in allen Frequenzbändern',
  'Bildübermittlung FPV-Kamera',
  'Bildübermittlung Nutzlast-Kamera',
  'Antriebssystem, min. 5min Schwebeflug',
  'Abstands-Sensoren',
  'Positions-LEDs',
 'Landeplatz-Beleuchtung',
  'Strobos',
]

export const ENTRY_STATUS = [
  'Gerät wurde bei Wartung ersetzt',
  'Reparaturarbeiten sind durchgeführt und abgeschlossen',
  'Das Gerät befindet sich nach der Inspektion / Reperatur in einem einwandfreien Zustand!',
  'Inbetriebnahme durchgeführt',

]
