# NotehubJs.SatellitePlan

## Properties

| Name                     | Type                                            | Description                                                 | Notes      |
| ------------------------ | ----------------------------------------------- | ----------------------------------------------------------- | ---------- |
| **activated**            | **Number**                                      | Activation date of the satellite plan as Unix timestamp     |
| **lastSessionAt**        | **Number**                                      | When this Starnote last had a session                       | [optional] |
| **minimumBillableBytes** | **Number**                                      | Minimum billable bytes                                      | [optional] |
| **ntnProvider**          | **String**                                      | Non-Terrestrial Network provider name                       |
| **psid**                 | **String**                                      | Provider-specific identifier for the satellite subscription |
| **satelliteDataUsage**   | [**SatelliteDataUsage**](SatelliteDataUsage.md) |                                                             | [optional] |
