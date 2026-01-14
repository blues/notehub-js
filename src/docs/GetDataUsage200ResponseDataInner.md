# NotehubJs.GetDataUsage200ResponseDataInner

## Properties

| Name            | Type                            | Description                                                                                 | Notes      |
| --------------- | ------------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| **data**        | [**[UsageData]**](UsageData.md) |                                                                                             |
| **device**      | **String**                      | The device UID this usage data belongs to (only present when aggregate is &#39;device&#39;) | [optional] |
| **deviceCount** | **Number**                      | the number of devices represented by this data point                                        | [optional] |
| **fleet**       | **String**                      | The fleet UID this usage data belongs to (only present when aggregate is &#39;fleet&#39;)   | [optional] |
| **iccid**       | **String**                      | The ICCID of the cellular SIM card (only present when type is &#39;cellular&#39;)           | [optional] |
| **psid**        | **String**                      | The PSID (Packet Service ID) of the satellite (or other packet-based device)                | [optional] |
| **type**        | **String**                      | The type of connectivity                                                                    |

## Enum: TypeEnum

- `cellular` (value: `"cellular"`)

- `satellite` (value: `"satellite"`)
