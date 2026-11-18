# NotehubJs.UpdateFleetRequest

## Properties

| Name                      | Type                                                            | Description                                                                                                                                                 | Notes      |
| ------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **addDevices**            | **[String]**                                                    | DeviceUIDs to add to the fleet. Each must be in the project and not also in &#x60;removeDevices&#x60;.                                                      | [optional] |
| **connectivityAssurance** | [**FleetConnectivityAssurance**](FleetConnectivityAssurance.md) |                                                                                                                                                             | [optional] |
| **label**                 | **String**                                                      | New fleet name. Empty keeps the current name; a fleet must have one, so &#x60;-&#x60; returns 400.                                                          | [optional] |
| **removeDevices**         | **[String]**                                                    | DeviceUIDs to remove from the fleet. Each must be in the project and not also in &#x60;addDevices&#x60;.                                                    | [optional] |
| **smartRule**             | **String**                                                      | JSONata expression for smart fleet membership: &#x60;1&#x60; adds the device, &#x60;-1&#x60; removes it, and &#x60;0&#x60; or an error leaves it unchanged. | [optional] |
| **smartRuleEnabled**      | **Boolean**                                                     | Whether &#x60;smart_rule&#x60; adds and removes devices. Always send it; omitting it sets &#x60;false&#x60;.                                                | [optional] |
| **watchdogMins**          | **Number**                                                      | Minutes of inactivity before Notehub generates a watchdog event. Omit or &#x60;0&#x60; to keep the current value; a negative value turns it off.            | [optional] |
