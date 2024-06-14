# NotehubJs.OTAStatus

## Properties

| Name                             | Type                                    | Description                                              | Notes      |
| -------------------------------- | --------------------------------------- | -------------------------------------------------------- | ---------- |
| **deviceUid**                    | **String**                              | The device UID                                           | [optional] |
| **tags**                         | **String**                              | The tags associated with the device                      | [optional] |
| **notecardCurrentFirmware**      | [**FirmwareStatus**](FirmwareStatus.md) |                                                          | [optional] |
| **notecardDfuBeganAt**           | **String**                              | The time the Notecard DFU began                          | [optional] |
| **notecardDfuStatus**            | **String**                              | The status of the Notecard DFU                           | [optional] |
| **notecardRequestedFirmware**    | [**FirmwareStatus**](FirmwareStatus.md) |                                                          | [optional] |
| **notecardRequestedAt**          | **String**                              | The time the Notecard firmware was requested             | [optional] |
| **notecardRequestedScope**       | **String**                              | The scope of the Notecard firmware request               | [optional] |
| **notecardRequestedShowDetails** | **Boolean**                             | Whether to show details of the Notecard firmware request | [optional] |
| **notecardRequestedStatus**      | **String**                              | The status of the Notecard firmware request              | [optional] |
| **hostCurrentFirmware**          | [**FirmwareStatus**](FirmwareStatus.md) |                                                          | [optional] |
| **hostDfuBeganAt**               | **String**                              | The time the host DFU began                              | [optional] |
| **hostDfuStatus**                | **String**                              | The status of the host DFU                               | [optional] |
| **hostRequestedFirmware**        | [**FirmwareStatus**](FirmwareStatus.md) |                                                          | [optional] |
| **hostRequestedAt**              | **String**                              | The time the host firmware was requested                 | [optional] |
| **hostRequestedScope**           | **String**                              | The scope of the host firmware request                   | [optional] |
| **hostRequestedShowDetails**     | **Boolean**                             | Whether to show details of the host firmware request     | [optional] |
| **hostRequestedStatus**          | **String**                              | The status of the host firmware request                  | [optional] |
