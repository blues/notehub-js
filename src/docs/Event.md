# NotehubJs.Event

## Properties

| Name                 | Type        | Description                                                                                                                                            | Notes      |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **event**            | **String**  | Event UID (globally unique)                                                                                                                            | [optional] |
| **session**          | **String**  | Session UID (globally unique)                                                                                                                          | [optional] |
| **tls**              | **Boolean** | Whether TLS was used on the connection between the device and notehub. Only available on \_session.qo events.                                          | [optional] |
| **bestId**           | **String**  | The device serial number, or the DeviceUID if the serial number is not set                                                                             | [optional] |
| **device**           | **String**  | Device UID (globally unique)                                                                                                                           | [optional] |
| **sn**               | **String**  | The device serial number                                                                                                                               | [optional] |
| **product**          | **String**  | Product UID (globally unique)                                                                                                                          | [optional] |
| **app**              | **String**  | App UID (globally unique)                                                                                                                              | [optional] |
| **received**         | **Number**  | The unix timestamp when the event was received                                                                                                         | [optional] |
| **req**              | **String**  | The notecard request                                                                                                                                   | [optional] |
| **when**             | **Number**  | When the event was captured on the device                                                                                                              | [optional] |
| **file**             | **String**  | The notefile associated with this event                                                                                                                | [optional] |
| **note**             | **String**  | The note ID in the notefile                                                                                                                            | [optional] |
| **updates**          | **Number**  |                                                                                                                                                        | [optional] |
| **body**             | **Object**  | A JSON object containing event details                                                                                                                 | [optional] |
| **payload**          | **String**  | A base64-encoded binary payload                                                                                                                        | [optional] |
| **bestLocationType** | **String**  | One of \&quot;gps\&quot;, \&quot;triangulated\&quot;, or \&quot;tower\&quot;                                                                           | [optional] |
| **bestLocationWhen** | **Number**  | Unix timestamp                                                                                                                                         | [optional] |
| **bestLat**          | **Number**  | Latitude                                                                                                                                               | [optional] |
| **bestLon**          | **Number**  | Longitude                                                                                                                                              | [optional] |
| **bestLocation**     | **String**  | Location                                                                                                                                               | [optional] |
| **bestCountry**      | **String**  | Country                                                                                                                                                | [optional] |
| **bestTimezone**     | **String**  | Timezone                                                                                                                                               | [optional] |
| **whereOlc**         | **String**  | Open Location Code                                                                                                                                     | [optional] |
| **whereWhen**        | **Number**  | Unix timestamp                                                                                                                                         | [optional] |
| **whereLat**         | **Number**  | Latitude                                                                                                                                               | [optional] |
| **whereLon**         | **Number**  | Longitude                                                                                                                                              | [optional] |
| **whereLocation**    | **String**  | Location                                                                                                                                               | [optional] |
| **whereCountry**     | **String**  | Country                                                                                                                                                | [optional] |
| **whereTimezone**    | **String**  | Timezone                                                                                                                                               | [optional] |
| **towerWhen**        | **Number**  | Unix timestamp                                                                                                                                         | [optional] |
| **towerLat**         | **Number**  | Latitude                                                                                                                                               | [optional] |
| **towerLon**         | **Number**  | Longitude                                                                                                                                              | [optional] |
| **towerCountry**     | **String**  | Country                                                                                                                                                | [optional] |
| **towerLocation**    | **String**  | Location                                                                                                                                               | [optional] |
| **towerTimezone**    | **String**  | Timezone                                                                                                                                               | [optional] |
| **towerId**          | **String**  | Tower ID                                                                                                                                               | [optional] |
| **triWhen**          | **Number**  | Unix timestamp                                                                                                                                         | [optional] |
| **triLat**           | **Number**  | Latitude                                                                                                                                               | [optional] |
| **triLon**           | **Number**  | Longitude                                                                                                                                              | [optional] |
| **triLocation**      | **String**  | Location                                                                                                                                               | [optional] |
| **triCountry**       | **String**  | Country                                                                                                                                                | [optional] |
| **triTimezone**      | **String**  | Timezone                                                                                                                                               | [optional] |
| **triPoints**        | **Number**  | Triangulation points                                                                                                                                   | [optional] |
| **moved**            | **Number**  | The number of times the device was sensed to have moved between the last session and this session. Only available on \_session.qo events.              | [optional] |
| **orientation**      | **String**  | The orientation of the device. Only available on \_session.qo events.                                                                                  | [optional] |
| **rssi**             | **Number**  | Received Signal Strength Indicator (RSSI) is an estimated measurement of how well a device can receive signals. Only available on \_session.qo events. | [optional] |
| **sinr**             | **Number**  | SINR. Only available on \_session.qo events.                                                                                                           | [optional] |
| **rsrp**             | **Number**  | RSRP. Only available on \_session.qo events.                                                                                                           | [optional] |
| **rsrq**             | **Number**  | RSRQ. Only available on \_session.qo events.                                                                                                           | [optional] |
| **rat**              | **String**  | Rat. Only available on \_session.qo events.                                                                                                            | [optional] |
| **bars**             | **Number**  | Bars. Only available on \_session.qo events.                                                                                                           | [optional] |
| **voltage**          | **Number**  | Device voltage. Only available on \_session.qo events.                                                                                                 | [optional] |
| **temp**             | **Number**  | Device temperature. Only available on \_session.qo events.                                                                                             | [optional] |
| **environment**      | **Object**  | Routed environment variables beginning with \&quot;$\&quot;. Only available on \_session.qo events.                                                    | [optional] |
