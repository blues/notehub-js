# NotehubJs.GetDataUsage200ResponseDataInner

## Properties

| Name       | Type                            | Description                                                                       | Notes      |
| ---------- | ------------------------------- | --------------------------------------------------------------------------------- | ---------- |
| **data**   | [**[UsageData]**](UsageData.md) |                                                                                   |
| **device** | **String**                      | The device UID this usage data belongs to                                         |
| **iccid**  | **String**                      | The ICCID of the cellular SIM card (only present when type is &#39;cellular&#39;) | [optional] |
| **imsi**   | **String**                      | The IMSI of the satellite device (only present when type is &#39;satellite&#39;)  | [optional] |
| **type**   | **String**                      | The type of connectivity                                                          |

## Enum: TypeEnum

- `cellular` (value: `"cellular"`)

- `satellite` (value: `"satellite"`)
