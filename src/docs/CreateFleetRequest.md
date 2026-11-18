# NotehubJs.CreateFleetRequest

## Properties

| Name                      | Type                                                            | Description                                                                                                                                                 | Notes      |
| ------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **connectivityAssurance** | [**FleetConnectivityAssurance**](FleetConnectivityAssurance.md) |                                                                                                                                                             | [optional] |
| **label**                 | **String**                                                      | Fleet name shown in Notehub. Required.                                                                                                                      | [optional] |
| **smartRule**             | **String**                                                      | JSONata expression for smart fleet membership: &#x60;1&#x60; adds the device, &#x60;-1&#x60; removes it, and &#x60;0&#x60; or an error leaves it unchanged. | [optional] |
| **smartRuleEnabled**      | **Boolean**                                                     | If &#x60;true&#x60;, &#x60;smart_rule&#x60; adds and removes devices. Default &#x60;false&#x60;.                                                            | [optional] |
