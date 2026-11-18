# NotehubJs.CellularPlan

## Properties

| Name             | Type                          | Description                                                                                    | Notes      |
| ---------------- | ----------------------------- | ---------------------------------------------------------------------------------------------- | ---------- |
| **activated**    | **Number**                    | Unix timestamp of when the SIM was activated                                                   | [optional] |
| **dataUsage**    | [**DataUsage**](DataUsage.md) |                                                                                                | [optional] |
| **expiresAt**    | **Number**                    | When the current plan expires, as a Unix timestamp in seconds. Omitted on the Essentials plan. | [optional] |
| **iccid**        | **String**                    | The Integrated Circuit Card Identifier of the SIM card                                         | [optional] |
| **imsi**         | **String**                    | IMSI of the SIM card                                                                           | [optional] |
| **lastUpdated**  | **Number**                    | When this plan information was last updated, as a Unix timestamp in seconds.                   | [optional] |
| **lifetimeUsed** | **Number**                    | Total bytes used by this SIM                                                                   | [optional] |
| **planType**     | **String**                    | Description of the SIM plan type including data allowance, region, and validity period         | [optional] |
