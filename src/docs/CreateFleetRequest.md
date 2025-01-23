# NotehubJs.CreateFleetRequest

## Properties

| Name          | Type       | Description                                                                                                                                                                                                                                                        | Notes      |
| ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **label**     | **String** | The label, or name, for the Fleet.                                                                                                                                                                                                                                 | [optional] |
| **smartRule** | **String** | JSONata expression that will be evaluated to determine device membership into this fleet, if the expression evaluates to a 1, the device will be included, if it evaluates to -1 it will be removed, and if it evaluates to 0 or errors it will be left unchanged. | [optional] |
