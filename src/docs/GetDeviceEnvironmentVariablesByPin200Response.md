# NotehubJs.GetDeviceEnvironmentVariablesByPin200Response

## Properties

| Name                               | Type                 | Description                                                                                                                  | Notes      |
| ---------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **environmentVariables**           | **{String: String}** | The environment variables for this device that have been set using host firmware or the Notehub API or UI.                   |
| **environmentVariablesEffective**  | **{String: String}** | The environment variables as they will be seen by the device, fully resolved with project/fleet/device prioritization rules. | [optional] |
| **environmentVariablesEnvDefault** | **{String: String}** | The environment variables that have been set using the env.default request through the Notecard API.                         |
