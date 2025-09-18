# NotehubJs.Azure

## Properties

| Name                   | Type                                | Description                                                                                    | Notes                      |
| ---------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| **filter**             | [**AwsFilter**](AwsFilter.md)       |                                                                                                | [optional]                 |
| **fleets**             | **[String]**                        | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                  | [optional]                 |
| **functionsKeySecret** | **String**                          | This value is input-only and will be omitted from the response and replaced with a placeholder | [optional]                 |
| **sasPolicyKey**       | **String**                          | This value is input-only and will be omitted from the response and replaced with a placeholder | [optional]                 |
| **sasPolicyName**      | **String**                          |                                                                                                | [optional]                 |
| **throttleMs**         | **Number**                          |                                                                                                | [optional]                 |
| **timeout**            | **Number**                          | Timeout in seconds for each request                                                            | [optional] [default to 15] |
| **transform**          | [**AwsTransform**](AwsTransform.md) |                                                                                                | [optional]                 |
| **url**                | **String**                          |                                                                                                | [optional]                 |
