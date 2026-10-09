# NotehubJs.UsageApiData

## Properties

| Name         | Type       | Description                                                                                                                                                                 | Notes      |
| ------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **endpoint** | **String** | The templated path of the endpoint the requests were made against, with path parameters left unsubstituted. Empty if the endpoint could not be resolved for these requests. | [optional] |
| **method**   | **String** | The HTTP method of the requests counted in this data point. Empty if the endpoint could not be resolved for these requests.                                                 | [optional] |
| **period**   | **Date**   |                                                                                                                                                                             |
| **requests** | **Number** | Number of billable API requests in this period.                                                                                                                             |
