# NotehubJs.DeviceSession

## Properties

| Name                 | Type                                  | Description                                                                         | Notes      |
| -------------------- | ------------------------------------- | ----------------------------------------------------------------------------------- | ---------- |
| **apn**              | **String**                            |                                                                                     | [optional] |
| **bars**             | **Number**                            |                                                                                     | [optional] |
| **bearer**           | **String**                            |                                                                                     | [optional] |
| **bssid**            | **String**                            |                                                                                     | [optional] |
| **cell**             | **String**                            | Cell ID where the session originated and quality (\&quot;mcc,mnc,lac,cellid\&quot;) | [optional] |
| **continuous**       | **Boolean**                           | Was this a continuous connection?                                                   | [optional] |
| **device**           | **String**                            | Device UID                                                                          | [optional] |
| **events**           | **Number**                            | Number of events routed                                                             | [optional] |
| **failedConnects**   | **Number**                            | Number of failed connection attempts in the prior session                           | [optional] |
| **fleets**           | **[String]**                          | Array of Fleet UIDs                                                                 | [optional] |
| **hpCyclesData**     | **Number**                            |                                                                                     | [optional] |
| **hpCyclesGps**      | **Number**                            |                                                                                     | [optional] |
| **hpCyclesTotal**    | **Number**                            |                                                                                     | [optional] |
| **hpSecsData**       | **Number**                            |                                                                                     | [optional] |
| **hpSecsGps**        | **Number**                            |                                                                                     | [optional] |
| **hpSecsTotal**      | **Number**                            | Total number of seconds in high power mode                                          | [optional] |
| **iccid**            | **String**                            |                                                                                     | [optional] |
| **ip**               | **String**                            |                                                                                     | [optional] |
| **moved**            | **Number**                            |                                                                                     | [optional] |
| **orientation**      | **String**                            |                                                                                     | [optional] |
| **penaltySecs**      | **Number**                            | Number of seconds in penalty in the prior session                                   | [optional] |
| **period**           | [**DeviceUsage**](DeviceUsage.md)     |                                                                                     | [optional] |
| **powerCharging**    | **Boolean**                           |                                                                                     | [optional] |
| **powerMah**         | **Number**                            |                                                                                     | [optional] |
| **powerPrimary**     | **Boolean**                           |                                                                                     | [optional] |
| **powerUsb**         | **Boolean**                           |                                                                                     | [optional] |
| **product**          | **String**                            | Product UID                                                                         | [optional] |
| **rat**              | **String**                            |                                                                                     | [optional] |
| **rsrp**             | **Number**                            |                                                                                     | [optional] |
| **rsrq**             | **Number**                            |                                                                                     | [optional] |
| **rssi**             | **Number**                            |                                                                                     | [optional] |
| **scan**             | **Blob**                              |                                                                                     | [optional] |
| **session**          | **String**                            | Session UID                                                                         | [optional] |
| **sessionBegan**     | **Number**                            | UNIX timestamp of session start                                                     | [optional] |
| **sessionEnded**     | **Number**                            | UNIX timestamp of session end                                                       | [optional] |
| **sinr**             | **Number**                            |                                                                                     | [optional] |
| **sn**               | **String**                            | Device Serial Number                                                                | [optional] |
| **ssid**             | **String**                            |                                                                                     | [optional] |
| **temp**             | **Number**                            |                                                                                     | [optional] |
| **tls**              | **Boolean**                           | Was TLS used?                                                                       | [optional] |
| **tower**            | [**TowerLocation**](TowerLocation.md) |                                                                                     | [optional] |
| **transport**        | **String**                            | Type of network transport                                                           | [optional] |
| **tri**              | [**TowerLocation**](TowerLocation.md) |                                                                                     | [optional] |
| **triangulate**      | **Object**                            |                                                                                     | [optional] |
| **usageActual**      | **Boolean**                           |                                                                                     | [optional] |
| **voltage**          | **Number**                            |                                                                                     | [optional] |
| **when**             | **Number**                            | Last known capture time of a note routed through this session in Unix timestamp     | [optional] |
| **where**            | **String**                            | Open Location Code from last GPS location                                           | [optional] |
| **whereCountry**     | **String**                            |                                                                                     | [optional] |
| **whereLat**         | **Number**                            |                                                                                     | [optional] |
| **whereLocation**    | **String**                            |                                                                                     | [optional] |
| **whereLon**         | **Number**                            |                                                                                     | [optional] |
| **whereTimezone**    | **String**                            |                                                                                     | [optional] |
| **whereWhen**        | **Number**                            | Unix timestamp of last GPS location                                                 | [optional] |
| **whySessionClosed** | **String**                            | Reason for session closing                                                          | [optional] |
| **whySessionOpened** | **String**                            | Reason for session opening                                                          | [optional] |
| **work**             | **Number**                            | Unix timestamp of the last time work was done for this session                      | [optional] |
