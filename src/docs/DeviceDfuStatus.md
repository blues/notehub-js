# NotehubJs.DeviceDfuStatus

## Properties

| Name              | Type                                                      | Description                                                                                | Notes      |
| ----------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------- |
| **current**       | [**DeviceDfuHistoryCurrent**](DeviceDfuHistoryCurrent.md) |                                                                                            | [optional] |
| **deleted**       | **Boolean**                                               | True if this device has been deleted. Only present when reading with a &#x60;cursor&#x60;. | [optional] |
| **deviceUid**     | **String**                                                | DeviceUID                                                                                  | [optional] |
| **dfuInProgress** | **Boolean**                                               | &#x60;true&#x60; while the device&#39;s latest firmware update hasn&#39;t finished.        | [optional] |
| **status**        | [**DeviceDfuStateMachine**](DeviceDfuStateMachine.md)     |                                                                                            | [optional] |
