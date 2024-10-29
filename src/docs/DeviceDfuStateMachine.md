# NotehubJs.DeviceDfuStateMachine

## Properties

| Name                 | Type                                                            | Description                                                      | Notes      |
| -------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------- | ---------- |
| **requestedVersion** | **String**                                                      | Version of the firmware that was requested to be installed       | [optional] |
| **currentVersion**   | **String**                                                      | Version of the firmware that was installed prior to this request | [optional] |
| **initiated**        | **String**                                                      | RFC3339 datetime of when this update was requested               | [optional] |
| **updates**          | [**[DeviceDfuStateMachineNode]**](DeviceDfuStateMachineNode.md) |                                                                  | [optional] |
