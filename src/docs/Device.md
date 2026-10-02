# NotehubJs.Device

## Properties

| Name                     | Type                                      | Description                                                                  | Notes      |
| ------------------------ | ----------------------------------------- | ---------------------------------------------------------------------------- | ---------- |
| **bestId**               | **String**                                | The best ID for the device, preference for the serial number over device UID | [optional] |
| **bestLocation**         | [**Location**](Location.md)               |                                                                              | [optional] |
| **cellularUsage**        | [**[SimUsage]**](SimUsage.md)             |                                                                              | [optional] |
| **contact**              | [**Contact**](Contact.md)                 |                                                                              | [optional] |
| **dfu**                  | [**DFUEnv**](DFUEnv.md)                   |                                                                              | [optional] |
| **disabled**             | **Boolean**                               |                                                                              | [optional] |
| **firmwareHost**         | **String**                                |                                                                              | [optional] |
| **firmwareNotecard**     | **String**                                |                                                                              | [optional] |
| **fleetUids**            | **[String]**                              |                                                                              |
| **gpsLocation**          | [**Location**](Location.md)               |                                                                              | [optional] |
| **healthLog**            | [**[HealthLog]**](HealthLog.md)           |                                                                              | [optional] |
| **lastActivity**         | **Date**                                  |                                                                              | [optional] |
| **productUid**           | **String**                                |                                                                              |
| **provisioned**          | **Date**                                  |                                                                              |
| **recentEventCount**     | **[Number]**                              |                                                                              | [optional] |
| **recentSessionCount**   | **[Number]**                              |                                                                              | [optional] |
| **recentSessionSeconds** | **[Number]**                              |                                                                              | [optional] |
| **recentWhen**           | **Date**                                  |                                                                              | [optional] |
| **sensors**              | [**[DeviceSensor]**](DeviceSensor.md)     |                                                                              | [optional] |
| **serialNumber**         | **String**                                |                                                                              | [optional] |
| **sku**                  | **String**                                |                                                                              | [optional] |
| **tags**                 | **String**                                |                                                                              | [optional] |
| **temperature**          | **Number**                                |                                                                              |
| **towerInfo**            | [**DeviceTowerInfo**](DeviceTowerInfo.md) |                                                                              | [optional] |
| **towerLocation**        | [**Location**](Location.md)               |                                                                              | [optional] |
| **triangulatedLocation** | [**Location**](Location.md)               |                                                                              | [optional] |
| **uid**                  | **String**                                |                                                                              |
| **voltage**              | **Number**                                |                                                                              |
