# NotehubJs.Device

## Properties

| Name                     | Type                                      | Description                                                                                                                       | Notes      |
| ------------------------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **bestId**               | **String**                                | The serial number if set, otherwise the DeviceUID. Use it as a display name.                                                      | [optional] |
| **bestLocation**         | [**Location**](Location.md)               |                                                                                                                                   | [optional] |
| **cellularUsage**        | [**[SimUsage]**](SimUsage.md)             |                                                                                                                                   | [optional] |
| **contact**              | [**Contact**](Contact.md)                 |                                                                                                                                   | [optional] |
| **deleted**              | **Boolean**                               | True if this device has been deleted. Only present when reading with a &#x60;cursor&#x60;.                                        | [optional] |
| **dfu**                  | [**DFUEnv**](DFUEnv.md)                   |                                                                                                                                   | [optional] |
| **disabled**             | **Boolean**                               | True if the device was disabled with &#x60;DisableDevice&#x60; and can&#39;t connect.                                             | [optional] |
| **firmwareHost**         | **String**                                | Host firmware version, as reported by the device. Usually a JSON string.                                                          | [optional] |
| **firmwareNotecard**     | **String**                                | Notecard firmware version, as reported by the device.                                                                             | [optional] |
| **fleetUids**            | **[String]**                              | FleetUIDs of the fleets the device is in.                                                                                         |
| **gpsLocation**          | [**Location**](Location.md)               |                                                                                                                                   | [optional] |
| **healthLog**            | [**[HealthLog]**](HealthLog.md)           | Not returned by &#x60;GetDevice&#x60;, &#x60;GetDevices&#x60; or &#x60;GetFleetDevices&#x60;; use &#x60;GetDeviceHealthLog&#x60;. | [optional] |
| **lastActivity**         | **Date**                                  | When the device was last active in a session. Null if it has never connected.                                                     | [optional] |
| **productUid**           | **String**                                | ProductUID the device uses, e.g. &#x60;com.blues.bridge:sensors&#x60;.                                                            |
| **provisioned**          | **Date**                                  | When the device was added to the project.                                                                                         |
| **recentEventCount**     | **[Number]**                              | Not returned by &#x60;GetDevice&#x60;, &#x60;GetDevices&#x60; or &#x60;GetFleetDevices&#x60;.                                     | [optional] |
| **recentSessionCount**   | **[Number]**                              | Not returned by &#x60;GetDevice&#x60;, &#x60;GetDevices&#x60; or &#x60;GetFleetDevices&#x60;.                                     | [optional] |
| **recentSessionSeconds** | **[Number]**                              | Not returned by &#x60;GetDevice&#x60;, &#x60;GetDevices&#x60; or &#x60;GetFleetDevices&#x60;.                                     | [optional] |
| **recentWhen**           | **Date**                                  | Not returned by &#x60;GetDevice&#x60;, &#x60;GetDevices&#x60; or &#x60;GetFleetDevices&#x60;.                                     | [optional] |
| **sensors**              | [**[DeviceSensor]**](DeviceSensor.md)     |                                                                                                                                   | [optional] |
| **serialNumber**         | **String**                                | Serial number, from the &#x60;\_sn&#x60; environment variable if set. Empty if none.                                              | [optional] |
| **sku**                  | **String**                                | Notecard SKU, e.g. &#x60;NOTE-WBNAW&#x60;.                                                                                        | [optional] |
| **tags**                 | **String**                                | Comma-separated tags, from the &#x60;\_tags&#x60; environment variable. Empty if none.                                            | [optional] |
| **temperature**          | **Number**                                | Last reported Notecard temperature, in degrees Celsius.                                                                           |
| **towerInfo**            | [**DeviceTowerInfo**](DeviceTowerInfo.md) |                                                                                                                                   | [optional] |
| **towerLocation**        | [**Location**](Location.md)               |                                                                                                                                   | [optional] |
| **triangulatedLocation** | [**Location**](Location.md)               |                                                                                                                                   | [optional] |
| **uid**                  | **String**                                | DeviceUID, e.g. &#x60;dev:864475040509284&#x60;.                                                                                  |
| **voltage**              | **Number**                                | Last reported supply voltage, in volts.                                                                                           |
