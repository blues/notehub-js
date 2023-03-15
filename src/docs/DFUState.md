# NotehubJs.DFUState

## Properties

| Name        | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                           | Notes      |
| ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **type**    | **String** |                                                                                                                                                                                                                                                                                                                                                                                                                       | [optional] |
| **file**    | **String** | Firmware filename                                                                                                                                                                                                                                                                                                                                                                                                     | [optional] |
| **length**  | **Number** | Length of firmware file                                                                                                                                                                                                                                                                                                                                                                                               | [optional] |
| **crc32**   | **Number** | Used for image verification                                                                                                                                                                                                                                                                                                                                                                                           | [optional] |
| **md5**     | **String** | Used for image verification                                                                                                                                                                                                                                                                                                                                                                                           | [optional] |
| **mode**    | **String** | _ "idle" - nothing downloading or downloaded _ "error" - halted and in the error state _ "downloading" - transferring data from cloud to module _ "sideloading" - transferring data via request to module _ "ready" - DFU data is ready/verified and waiting on external storage _ "ready-retry" - DFU data is ready/verified and retrying _ "updating" - currently updating _ "completed" - DFU is done successfully | [optional] |
| **status**  | **String** | Status message                                                                                                                                                                                                                                                                                                                                                                                                        | [optional] |
| **began**   | **Number** | The time when the DFU began                                                                                                                                                                                                                                                                                                                                                                                           | [optional] |
| **retry**   | **Number** | Value of \_fw_retry environment var at time of DFU initialization                                                                                                                                                                                                                                                                                                                                                     | [optional] |
| **errors**  | **Number** | The number of consecutive errors the DFU process has encountered                                                                                                                                                                                                                                                                                                                                                      | [optional] |
| **read**    | **Number** | The amount the notecard has read of the image from notehub                                                                                                                                                                                                                                                                                                                                                            | [optional] |
| **updated** | **Number** | Last updated timestamp                                                                                                                                                                                                                                                                                                                                                                                                | [optional] |
| **version** | **String** | Last known version, which is generally a JSON object contained within the firmware image                                                                                                                                                                                                                                                                                                                              | [optional] |

## Enum: TypeEnum

- `card` (value: `"card"`)

- `user` (value: `"user"`)

## Enum: ModeEnum

- `idle` (value: `"idle"`)

- `error` (value: `"error"`)

- `downloading` (value: `"downloading"`)

- `sideloading` (value: `"sideloading"`)

- `ready` (value: `"ready"`)

- `ready-retry` (value: `"ready-retry"`)

- `updating` (value: `"updating"`)

- `completed` (value: `"completed"`)
