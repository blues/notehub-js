# NotehubJs.ProvisionDeviceRequest

## Properties

| Name           | Type         | Description                                                                                                                                    | Notes      |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **deviceSn**   | **String**   | Serial number to give the device. Ignored if the device already has one.                                                                       | [optional] |
| **fleetUids**  | **[String]** | FleetUIDs to put a new device in. If omitted or empty, the product&#39;s auto-provision fleets are used. Ignored if the device already exists. | [optional] |
| **productUid** | **String**   | ProductUID to provision the device under, e.g. &#x60;com.blues.bridge:sensors&#x60;. Must belong to this project.                              |
