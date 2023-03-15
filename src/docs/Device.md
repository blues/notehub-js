# NotehubJs.Device

## Properties

| Name                     | Type                                      | Description | Notes      |
| ------------------------ | ----------------------------------------- | ----------- | ---------- |
| **uid**                  | **String**                                |             |
| **serialNumber**         | **String**                                |             |
| **provisioned**          | **Date**                                  |             |
| **lastActivity**         | **Date**                                  |             | [optional] |
| **contact**              | [**Contact**](Contact.md)                 |             | [optional] |
| **productUid**           | **String**                                |             |
| **fleetUids**            | **[String]**                              |             |
| **towerInfo**            | [**DeviceTowerInfo**](DeviceTowerInfo.md) |             | [optional] |
| **towerLocation**        | [**Location**](Location.md)               |             | [optional] |
| **gpsLocation**          | [**Location**](Location.md)               |             | [optional] |
| **triangulatedLocation** | [**Location**](Location.md)               |             | [optional] |
| **voltage**              | **Number**                                |             |
| **temperature**          | **Number**                                |             |
| **dfu**                  | [**DFUEnv**](DFUEnv.md)                   |             | [optional] |
| **sku**                  | **String**                                |             | [optional] |
