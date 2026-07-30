# NotehubJs.EnvironmentVariables

## Properties

| Name                         | Type                 | Description                                                                                                                                                                                                                                                          | Notes      |
| ---------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **environmentVariableNotes** | **{String: String}** | Optional per-variable annotations, keyed by variable name. Setting a key to an empty string removes its note. A 400 error is returned for any key that does not already exist as a stored variable and is not included in environment_variables in the same request. | [optional] |
| **environmentVariables**     | **{String: String}** |                                                                                                                                                                                                                                                                      |
