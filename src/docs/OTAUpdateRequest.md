# NotehubJs.OTAUpdateRequest

## Properties

| Name            | Type         | Description                          | Notes      |
| --------------- | ------------ | ------------------------------------ | ---------- |
| **filename**    | **String**   | The name of the firmware file        | [optional] |
| **deviceUids**  | **[String]** | The device UIDs to update            | [optional] |
| **fleetUids**   | **[String]** | The fleet UIDs to update             | [optional] |
| **deviceTags**  | **[String]** | The device tags to update            | [optional] |
| **version**     | **String**   | The version of the firmware          | [optional] |
| **mD5**         | **String**   | The MD5 hash of the firmware file    | [optional] |
| **type**        | **String**   | The type of firmware                 | [optional] |
| **product**     | **String**   | The product that the firmware is for | [optional] |
| **target**      | **String**   | The target device for the firmware   | [optional] |
| **unpublished** | **Boolean**  | If true, the firmware is unpublished | [optional] |
| **cancelDfu**   | **Boolean**  | If true, the DFU is canceled         | [optional] |
