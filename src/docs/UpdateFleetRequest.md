# NotehubJs.UpdateFleetRequest

## Properties

| Name              | Type         | Description                                                                                                                                                                                                                                                        | Notes      |
| ----------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **label**         | **String**   | The label for the Fleet.                                                                                                                                                                                                                                           | [optional] |
| **addDevices**    | **[String]** | List of DeviceUIDs to add to fleet                                                                                                                                                                                                                                 | [optional] |
| **removeDevices** | **[String]** | List of DeviceUIDs to remove from fleet                                                                                                                                                                                                                            | [optional] |
| **smartRule**     | **String**   | JSONata expression that will be evaluated to determine device membership into this fleet, if the expression evaluates to a 1, the device will be included, if it evaluates to -1 it will be removed, and if it evaluates to 0 or errors it will be left unchanged. | [optional] |
