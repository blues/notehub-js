# NotehubJs.Google

## Properties

| Name           | Type                                | Description                                                                   | Notes                      |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------- | -------------------------- |
| **filter**     | [**AwsFilter**](AwsFilter.md)       |                                                                               | [optional]                 |
| **fleets**     | **[String]**                        | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets | [optional]                 |
| **throttleMs** | **Number**                          |                                                                               | [optional]                 |
| **timeout**    | **Number**                          | Timeout in seconds for each request                                           | [optional] [default to 15] |
| **token**      | **String**                          | Optional authentication token                                                 | [optional]                 |
| **transform**  | [**AwsTransform**](AwsTransform.md) |                                                                               | [optional]                 |
| **url**        | **String**                          |                                                                               | [optional]                 |
