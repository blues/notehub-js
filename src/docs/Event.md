# NotehubJs.Event

## Properties

| Name                 | Type        | Description                                                                                                                                            | Notes      |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **app**              | **String**  | App UID (globally unique)                                                                                                                              | [optional] |
| **bars**             | **Number**  | Bars. Only available on \_session.qo events.                                                                                                           | [optional] |
| **bestCountry**      | **String**  | Country                                                                                                                                                | [optional] |
| **bestId**           | **String**  | The device serial number, or the DeviceUID if the serial number is not set                                                                             | [optional] |
| **bestLat**          | **Number**  | Latitude                                                                                                                                               | [optional] |
| **bestLocation**     | **String**  | Location                                                                                                                                               | [optional] |
| **bestLocationType** | **String**  | One of \&quot;gps\&quot;, \&quot;triangulated\&quot;, or \&quot;tower\&quot;                                                                           | [optional] |
| **bestLocationWhen** | **Number**  | Unix timestamp                                                                                                                                         | [optional] |
| **bestLon**          | **Number**  | Longitude                                                                                                                                              | [optional] |
| **bestTimezone**     | **String**  | Timezone                                                                                                                                               | [optional] |
| **body**             | **Object**  | A JSON object containing event details                                                                                                                 | [optional] |
| **bssid**            | **String**  | BSSID. Only available on \_session.qo events.                                                                                                          | [optional] |
| **device**           | **String**  | Device UID (globally unique)                                                                                                                           | [optional] |
| **environment**      | **Object**  | Routed environment variables beginning with \&quot;$\&quot;. Only available on \_session.qo events.                                                    | [optional] |
| **event**            | **String**  | Event UID (globally unique)                                                                                                                            | [optional] |
| **file**             | **String**  | The notefile associated with this event                                                                                                                | [optional] |
| **moved**            | **Number**  | The number of times the device was sensed to have moved between the last session and this session. Only available on \_session.qo events.              | [optional] |
| **note**             | **String**  | The note ID in the notefile                                                                                                                            | [optional] |
| **orderingCode**     | **String**  | Ordering code. Only available on \_session.qo events.                                                                                                  | [optional] |
| **orientation**      | **String**  | The orientation of the device. Only available on \_session.qo events.                                                                                  | [optional] |
| **payload**          | **String**  | A base64-encoded binary payload                                                                                                                        | [optional] |
| **product**          | **String**  | Product UID (globally unique)                                                                                                                          | [optional] |
| **rat**              | **String**  | Rat. Only available on \_session.qo events.                                                                                                            | [optional] |
| **received**         | **Number**  | The unix timestamp when the event was received                                                                                                         | [optional] |
| **req**              | **String**  | The notecard request                                                                                                                                   | [optional] |
| **rsrp**             | **Number**  | RSRP. Only available on \_session.qo events.                                                                                                           | [optional] |
| **rsrq**             | **Number**  | RSRQ. Only available on \_session.qo events.                                                                                                           | [optional] |
| **rssi**             | **Number**  | Received Signal Strength Indicator (RSSI) is an estimated measurement of how well a device can receive signals. Only available on \_session.qo events. | [optional] |
| **session**          | **String**  | Session UID (globally unique)                                                                                                                          | [optional] |
| **sinr**             | **Number**  | SINR. Only available on \_session.qo events.                                                                                                           | [optional] |
| **sku**              | **String**  | SKU. Only available on \_session.qo events.                                                                                                            | [optional] |
| **sn**               | **String**  | The device serial number                                                                                                                               | [optional] |
| **ssid**             | **String**  | SSID. Only available on \_session.qo events.                                                                                                           | [optional] |
| **temp**             | **Number**  | Device temperature. Only available on \_session.qo events.                                                                                             | [optional] |
| **tls**              | **Boolean** | Whether TLS was used on the connection between the device and notehub. Only available on \_session.qo events.                                          | [optional] |
| **towerCountry**     | **String**  | Country                                                                                                                                                | [optional] |
| **towerId**          | **String**  | Tower ID                                                                                                                                               | [optional] |
| **towerLat**         | **Number**  | Latitude                                                                                                                                               | [optional] |
| **towerLocation**    | **String**  | Location                                                                                                                                               | [optional] |
| **towerLon**         | **Number**  | Longitude                                                                                                                                              | [optional] |
| **towerTimezone**    | **String**  | Timezone                                                                                                                                               | [optional] |
| **towerWhen**        | **Number**  | Unix timestamp                                                                                                                                         | [optional] |
| **transport**        | **String**  | The transport used for this event, e.g., \&quot;cellular\&quot;, \&quot;wifi\&quot;, \&quot;, etc.                                                     | [optional] |
| **triCountry**       | **String**  | Country                                                                                                                                                | [optional] |
| **triLat**           | **Number**  | Latitude                                                                                                                                               | [optional] |
| **triLocation**      | **String**  | Location                                                                                                                                               | [optional] |
| **triLon**           | **Number**  | Longitude                                                                                                                                              | [optional] |
| **triPoints**        | **Number**  | Triangulation points                                                                                                                                   | [optional] |
| **triTimezone**      | **String**  | Timezone                                                                                                                                               | [optional] |
| **triWhen**          | **Number**  | Unix timestamp                                                                                                                                         | [optional] |
| **updates**          | **Number**  |                                                                                                                                                        | [optional] |
| **voltage**          | **Number**  | Device voltage. Only available on \_session.qo events.                                                                                                 | [optional] |
| **when**             | **Number**  | When the event was captured on the device                                                                                                              | [optional] |
| **whereCountry**     | **String**  | Country                                                                                                                                                | [optional] |
| **whereLat**         | **Number**  | Latitude                                                                                                                                               | [optional] |
| **whereLocation**    | **String**  | Location                                                                                                                                               | [optional] |
| **whereLon**         | **Number**  | Longitude                                                                                                                                              | [optional] |
| **whereOlc**         | **String**  | Open Location Code                                                                                                                                     | [optional] |
| **whereTimezone**    | **String**  | Timezone                                                                                                                                               | [optional] |
| **whereWhen**        | **Number**  | Unix timestamp                                                                                                                                         | [optional] |
