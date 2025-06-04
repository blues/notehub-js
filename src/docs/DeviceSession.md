# NotehubJs.DeviceSession

## Properties

| Name                 | Type                                  | Description                                                                         | Notes      |
| -------------------- | ------------------------------------- | ----------------------------------------------------------------------------------- | ---------- |
| **session**          | **String**                            | Session UID                                                                         | [optional] |
| **sessionBegan**     | **Number**                            | UNIX timestamp of session start                                                     | [optional] |
| **whySessionOpened** | **String**                            | Reason for session opening                                                          | [optional] |
| **sessionEnded**     | **Number**                            | UNIX timestamp of session end                                                       | [optional] |
| **whySessionClosed** | **String**                            | Reason for session closing                                                          | [optional] |
| **device**           | **String**                            | Device UID                                                                          | [optional] |
| **sn**               | **String**                            | Device Serial Number                                                                | [optional] |
| **product**          | **String**                            | Product UID                                                                         | [optional] |
| **fleets**           | **[String]**                          | Array of Fleet UIDs                                                                 | [optional] |
| **cell**             | **String**                            | Cell ID where the session originated and quality (\&quot;mcc,mnc,lac,cellid\&quot;) | [optional] |
| **scan**             | **Blob**                              |                                                                                     | [optional] |
| **triangulate**      | **Object**                            |                                                                                     | [optional] |
| **rssi**             | **Number**                            |                                                                                     | [optional] |
| **sinr**             | **Number**                            |                                                                                     | [optional] |
| **rsrp**             | **Number**                            |                                                                                     | [optional] |
| **rsrq**             | **Number**                            |                                                                                     | [optional] |
| **bars**             | **Number**                            |                                                                                     | [optional] |
| **rat**              | **String**                            |                                                                                     | [optional] |
| **bearer**           | **String**                            |                                                                                     | [optional] |
| **ip**               | **String**                            |                                                                                     | [optional] |
| **bssid**            | **String**                            |                                                                                     | [optional] |
| **ssid**             | **String**                            |                                                                                     | [optional] |
| **iccid**            | **String**                            |                                                                                     | [optional] |
| **apn**              | **String**                            |                                                                                     | [optional] |
| **transport**        | **String**                            | Type of network transport                                                           | [optional] |
| **tower**            | [**TowerLocation**](TowerLocation.md) |                                                                                     | [optional] |
| **tri**              | [**TowerLocation**](TowerLocation.md) |                                                                                     | [optional] |
| **when**             | **Number**                            | Last known capture time of a note routed through this session in Unix timestamp     | [optional] |
| **whereWhen**        | **Number**                            | Unix timestamp of last GPS location                                                 | [optional] |
| **where**            | **String**                            | Open Location Code from last GPS location                                           | [optional] |
| **whereLat**         | **Number**                            |                                                                                     | [optional] |
| **whereLon**         | **Number**                            |                                                                                     | [optional] |
| **whereLocation**    | **String**                            |                                                                                     | [optional] |
| **whereCountry**     | **String**                            |                                                                                     | [optional] |
| **whereTimezone**    | **String**                            |                                                                                     | [optional] |
| **usageActual**      | **Boolean**                           |                                                                                     | [optional] |
| **voltage**          | **Number**                            |                                                                                     | [optional] |
| **temp**             | **Number**                            |                                                                                     | [optional] |
| **continuous**       | **Boolean**                           | Was this a continuous connection?                                                   | [optional] |
| **tls**              | **Boolean**                           | Was TLS used?                                                                       | [optional] |
| **work**             | **Number**                            | Unix timestamp of the last time work was done for this session                      | [optional] |
| **events**           | **Number**                            | Number of events routed                                                             | [optional] |
| **moved**            | **Number**                            |                                                                                     | [optional] |
| **orientation**      | **String**                            |                                                                                     | [optional] |
| **hpSecsTotal**      | **Number**                            | Total number of seconds in high power mode                                          | [optional] |
| **hpSecsData**       | **Number**                            |                                                                                     | [optional] |
| **hpSecsGps**        | **Number**                            |                                                                                     | [optional] |
| **hpCyclesTotal**    | **Number**                            |                                                                                     | [optional] |
| **hpCyclesData**     | **Number**                            |                                                                                     | [optional] |
| **hpCyclesGps**      | **Number**                            |                                                                                     | [optional] |
| **period**           | [**DeviceUsage**](DeviceUsage.md)     |                                                                                     | [optional] |
| **powerCharging**    | **Boolean**                           |                                                                                     | [optional] |
| **powerUsb**         | **Boolean**                           |                                                                                     | [optional] |
| **powerPrimary**     | **Boolean**                           |                                                                                     | [optional] |
| **powerMah**         | **Number**                            |                                                                                     | [optional] |
| **penaltySecs**      | **Number**                            | Number of seconds in penalty in the prior session                                   | [optional] |
| **failedConnects**   | **Number**                            | Number of failed connection attempts in the prior session                           | [optional] |
