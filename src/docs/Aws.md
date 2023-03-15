# NotehubJs.AWS

## Properties

| Name                       | Type                                  | Description                                                                                    | Notes                         |
| -------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------- |
| **fleets**                 | **[String]**                          | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                  | [optional]                    |
| **filter**                 | [**HttpFilter**](HttpFilter.md)       |                                                                                                | [optional]                    |
| **transform**              | [**HttpTransform**](HttpTransform.md) |                                                                                                | [optional]                    |
| **throttleMs**             | **Number**                            |                                                                                                | [optional]                    |
| **url**                    | **String**                            |                                                                                                | [optional]                    |
| **httpHeaders**            | **{String: String}**                  |                                                                                                | [optional]                    |
| **disableHttpHeaders**     | **Boolean**                           |                                                                                                | [optional] [default to false] |
| **timeout**                | **Number**                            | Timeout in seconds for each request                                                            | [optional] [default to 15]    |
| **region**                 | **String**                            |                                                                                                | [optional]                    |
| **accessKeyId**            | **String**                            |                                                                                                | [optional]                    |
| **accessKeySecret**        | **String**                            | This value is input-only and will be omitted from the response and replaced with a placeholder | [optional]                    |
| **messageGroupId**         | **String**                            |                                                                                                | [optional]                    |
| **messageDeduplicationId** | **String**                            |                                                                                                | [optional]                    |
| **channel**                | **String**                            |                                                                                                | [optional]                    |
