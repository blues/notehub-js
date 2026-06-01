# NotehubJs.JobDefinition

## Properties

| Name                | Type                                                            | Description                                            | Notes      |
| ------------------- | --------------------------------------------------------------- | ------------------------------------------------------ | ---------- |
| **comment**         | **String**                                                      | Human-readable description of the job                  | [optional] |
| **defaultRequests** | [**BatchJobRequests**](BatchJobRequests.md)                     |                                                        | [optional] |
| **deviceRequests**  | [**{String: BatchJobRequests}**](BatchJobRequests.md)           | Device-specific request overrides, keyed by device UID | [optional] |
| **reportOptions**   | [**JobDefinitionReportOptions**](JobDefinitionReportOptions.md) |                                                        | [optional] |
| **select**          | [**JobDefinitionSelect**](JobDefinitionSelect.md)               |                                                        | [optional] |
