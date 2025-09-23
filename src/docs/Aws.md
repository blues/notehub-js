# NotehubJs.Aws

## Properties

| Name                       | Type                                | Description                                                                                    | Notes                         |
| -------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------- |
| **accessKeyId**            | **String**                          |                                                                                                | [optional]                    |
| **accessKeySecret**        | **String**                          | This value is input-only and will be omitted from the response and replaced with a placeholder | [optional]                    |
| **channel**                | **String**                          |                                                                                                | [optional]                    |
| **disableHttpHeaders**     | **Boolean**                         |                                                                                                | [optional] [default to false] |
| **filter**                 | [**AwsFilter**](AwsFilter.md)       |                                                                                                | [optional]                    |
| **fleets**                 | **[String]**                        | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                  | [optional]                    |
| **httpHeaders**            | **{String: String}**                |                                                                                                | [optional]                    |
| **messageDeduplicationId** | **String**                          |                                                                                                | [optional]                    |
| **messageGroupId**         | **String**                          |                                                                                                | [optional]                    |
| **region**                 | **String**                          |                                                                                                | [optional]                    |
| **throttleMs**             | **Number**                          |                                                                                                | [optional]                    |
| **timeout**                | **Number**                          | Timeout in seconds for each request                                                            | [optional] [default to 15]    |
| **transform**              | [**AwsTransform**](AwsTransform.md) |                                                                                                | [optional]                    |
| **url**                    | **String**                          |                                                                                                | [optional]                    |
