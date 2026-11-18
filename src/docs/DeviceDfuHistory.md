# NotehubJs.DeviceDfuHistory

## Properties

| Name          | Type                                                      | Description                                                                                | Notes      |
| ------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------- |
| **current**   | [**DeviceDfuHistoryCurrent**](DeviceDfuHistoryCurrent.md) |                                                                                            | [optional] |
| **deleted**   | **Boolean**                                               | True if this device has been deleted. Only present when reading with a &#x60;cursor&#x60;. | [optional] |
| **deviceUid** | **String**                                                | DeviceUID                                                                                  | [optional] |
| **history**   | [**[DeviceDfuStateMachine]**](DeviceDfuStateMachine.md)   | Every firmware update requested for this device, newest first.                             | [optional] |
