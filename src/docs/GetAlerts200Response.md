# NotehubJs.GetAlerts200Response

## Properties

| Name           | Type                    | Description                                                                                                                                                                                                                       | Notes      |
| -------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **alerts**     | [**[Alert]**](Alert.md) | The list of alerts                                                                                                                                                                                                                |
| **hasMore**    | **Boolean**             | True if there are more alerts                                                                                                                                                                                                     |
| **nextCursor** | **String**              | Pass this value (epoch microseconds, optionally &#x60;.N&#x60;) as a cursor parameter to start a search from where the last search left off. Returned even when there are no more results, so it can be used to poll for changes. | [optional] |
