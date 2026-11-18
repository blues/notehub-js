# NotehubJs.FirmwareInfo

## Properties

| Name             | Type        | Description                                                                                                                   | Notes      |
| ---------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **built**        | **String**  | The date the firmware was built.                                                                                              | [optional] |
| **created**      | **String**  | Upload time, as Unix epoch seconds in a string.                                                                               | [optional] |
| **description**  | **String**  | Not currently filled in.                                                                                                      | [optional] |
| **filename**     | **String**  | Stored filename, with the &#x60;$&#x60; timestamp suffix Notehub adds on upload. Use it in other firmware and DFU operations. | [optional] |
| **info**         | **Object**  | User-defined metadata                                                                                                         | [optional] |
| **md5**          | **String**  | The MD5 hash of the firmware file.                                                                                            | [optional] |
| **notes**        | **String**  | User-defined notes                                                                                                            | [optional] |
| **organization** | **String**  | The organization that owns the firmware.                                                                                      | [optional] |
| **product**      | **String**  | The product that the firmware is for.                                                                                         | [optional] |
| **published**    | **Boolean** | &#x60;true&#x60; for all host firmware, and for Notecard firmware that Blues has published.                                   | [optional] |
| **tags**         | **String**  | A list of tags associated with the firmware.                                                                                  | [optional] |
| **target**       | **String**  | The target device for the firmware.                                                                                           | [optional] |
| **type**         | **String**  | &#x60;host&#x60; or &#x60;notecard&#x60;.                                                                                     | [optional] |
| **version**      | **String**  | The version of the firmware.                                                                                                  | [optional] |
