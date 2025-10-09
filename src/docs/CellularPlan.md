# NotehubJs.CellularPlan

## Properties

| Name             | Type                          | Description                                                                            | Notes      |
| ---------------- | ----------------------------- | -------------------------------------------------------------------------------------- | ---------- |
| **activated**    | **Number**                    | Unix timestamp of when the SIM was activated                                           | [optional] |
| **dataUsage**    | [**DataUsage**](DataUsage.md) |                                                                                        | [optional] |
| **expiresAt**    | **Number**                    |                                                                                        | [optional] |
| **iccid**        | **String**                    | The Integrated Circuit Card Identifier of the SIM card                                 | [optional] |
| **imsi**         | **String**                    | IMSI of the SIM card                                                                   | [optional] |
| **lastUpdated**  | **Number**                    | Time this plan information was last updated                                            | [optional] |
| **lifetimeUsed** | **Number**                    | Total bytes used by this SIM                                                           | [optional] |
| **planType**     | **String**                    | Description of the SIM plan type including data allowance, region, and validity period | [optional] |
