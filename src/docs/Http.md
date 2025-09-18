# NotehubJs.Http

## Properties

| Name                   | Type                                | Description                                                                   | Notes                         |
| ---------------------- | ----------------------------------- | ----------------------------------------------------------------------------- | ----------------------------- |
| **disableHttpHeaders** | **Boolean**                         |                                                                               | [optional] [default to false] |
| **filter**             | [**AwsFilter**](AwsFilter.md)       |                                                                               | [optional]                    |
| **fleets**             | **[String]**                        | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets | [optional]                    |
| **httpHeaders**        | **{String: String}**                |                                                                               | [optional]                    |
| **throttleMs**         | **Number**                          | Minimum time between requests in Miliseconds                                  | [optional]                    |
| **timeout**            | **Number**                          | Timeout in seconds for each request                                           | [optional] [default to 15]    |
| **transform**          | [**AwsTransform**](AwsTransform.md) |                                                                               | [optional]                    |
| **url**                | **String**                          | Route URL                                                                     | [optional]                    |
