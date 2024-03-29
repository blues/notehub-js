# NotehubJs.DeviceSession

## Properties

| Name              | Type                                  | Description                                                                         | Notes      |
| ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------- | ---------- |
| **session**       | **String**                            | Session UID                                                                         | [optional] |
| **device**        | **String**                            | Device UID                                                                          | [optional] |
| **sn**            | **String**                            | Device Serial Number                                                                | [optional] |
| **product**       | **String**                            | Product UID                                                                         | [optional] |
| **fleets**        | **[String]**                          | Array of Fleet UIDs                                                                 | [optional] |
| **cell**          | **String**                            | Cell ID where the session originated and quality (\&quot;mcc,mnc,lac,cellid\&quot;) | [optional] |
| **scan**          | **Blob**                              |                                                                                     | [optional] |
| **triangulate**   | **Object**                            |                                                                                     | [optional] |
| **rssi**          | **Number**                            |                                                                                     | [optional] |
| **sinr**          | **Number**                            |                                                                                     | [optional] |
| **rsrp**          | **Number**                            |                                                                                     | [optional] |
| **rsrq**          | **Number**                            |                                                                                     | [optional] |
| **bars**          | **Number**                            |                                                                                     | [optional] |
| **rat**           | **String**                            |                                                                                     | [optional] |
| **bearer**        | **String**                            |                                                                                     | [optional] |
| **ip**            | **String**                            |                                                                                     | [optional] |
| **bssid**         | **String**                            |                                                                                     | [optional] |
| **ssid**          | **String**                            |                                                                                     | [optional] |
| **iccid**         | **String**                            |                                                                                     | [optional] |
| **apn**           | **String**                            |                                                                                     | [optional] |
| **tower**         | [**TowerLocation**](TowerLocation.md) |                                                                                     | [optional] |
| **tri**           | [**TowerLocation**](TowerLocation.md) |                                                                                     | [optional] |
| **when**          | **Number**                            | Last known capture time of a note routed through this session                       | [optional] |
| **whereWhen**     | **Number**                            |                                                                                     | [optional] |
| **where**         | **String**                            | Where OLC                                                                           | [optional] |
| **whereLat**      | **Number**                            |                                                                                     | [optional] |
| **whereLon**      | **Number**                            |                                                                                     | [optional] |
| **whereLocation** | **String**                            |                                                                                     | [optional] |
| **whereCountry**  | **String**                            |                                                                                     | [optional] |
| **whereTimezone** | **String**                            |                                                                                     | [optional] |
| **usageActual**   | **Boolean**                           |                                                                                     | [optional] |
| **voltage**       | **Number**                            |                                                                                     | [optional] |
| **temp**          | **Number**                            |                                                                                     | [optional] |
| **continuous**    | **Boolean**                           |                                                                                     | [optional] |
| **tls**           | **Boolean**                           |                                                                                     | [optional] |
| **work**          | **Number**                            | Last time work was done for this session                                            | [optional] |
| **events**        | **Number**                            | Number of events routed                                                             | [optional] |
| **moved**         | **Number**                            |                                                                                     | [optional] |
| **orientation**   | **String**                            |                                                                                     | [optional] |
| **hpSecsTotal**   | **Number**                            |                                                                                     | [optional] |
| **hpSecsData**    | **Number**                            |                                                                                     | [optional] |
| **hpSecsGps**     | **Number**                            |                                                                                     | [optional] |
| **hpCyclesTotal** | **Number**                            |                                                                                     | [optional] |
| **hpCyclesData**  | **Number**                            |                                                                                     | [optional] |
| **hpCyclesGps**   | **Number**                            |                                                                                     | [optional] |
| **period**        | [**DeviceUsage**](DeviceUsage.md)     |                                                                                     | [optional] |
