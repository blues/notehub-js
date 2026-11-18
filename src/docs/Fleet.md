# NotehubJs.Fleet

## Properties

| Name                      | Type                                                            | Description                                                                                                                                                 | Notes      |
| ------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **connectivityAssurance** | [**FleetConnectivityAssurance**](FleetConnectivityAssurance.md) |                                                                                                                                                             | [optional] |
| **created**               | **Date**                                                        | When the fleet was created.                                                                                                                                 |
| **environmentVariables**  | **{String: String}**                                            | Environment variables set on this fleet. Not returned by &#x60;GetDeviceFleets&#x60;.                                                                       | [optional] |
| **label**                 | **String**                                                      | Fleet name shown in Notehub.                                                                                                                                |
| **smartRule**             | **String**                                                      | JSONata expression for smart fleet membership: &#x60;1&#x60; adds the device, &#x60;-1&#x60; removes it, and &#x60;0&#x60; or an error leaves it unchanged. | [optional] |
| **smartRuleEnabled**      | **Boolean**                                                     | Whether &#x60;smart_rule&#x60; adds and removes devices. Returned only by &#x60;CreateFleet&#x60; and &#x60;UpdateFleet&#x60;.                              | [optional] |
| **uid**                   | **String**                                                      | FleetUID, e.g. &#x60;fleet:1042ddc5-3b2c-4cec-b1fb-d3040538094d&#x60;.                                                                                      |
| **watchdogMins**          | **Number**                                                      | Minutes of inactivity before Notehub generates a watchdog event. &#x60;0&#x60; means no watchdog.                                                           | [optional] |
