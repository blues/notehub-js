# NotehubJs.UsageSessionsData

## Properties

| Name                    | Type                 | Description                                                                        | Notes      |
| ----------------------- | -------------------- | ---------------------------------------------------------------------------------- | ---------- |
| **device**              | **String**           |                                                                                    | [optional] |
| **firstSyncSessions**   | **Number**           | Number of first sync sessions in this period                                       |
| **fleet**               | **String**           |                                                                                    | [optional] |
| **period**              | **Date**             |                                                                                    |
| **sessions**            | **Number**           |                                                                                    |
| **sessionsByTransport** | **{String: Number}** | Count of sessions grouped by transport type prefix (e.g. cell, wifi, ntn, lorawan) | [optional] |
| **tlsSessions**         | **Number**           | Number of TLS sessions in this period                                              | [optional] |
| **totalBytes**          | **Number**           |                                                                                    |
| **totalDevices**        | **Number**           |                                                                                    |
