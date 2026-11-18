# NotehubJs.DeviceDfuHistoryPage

## Properties

| Name           | Type                                          | Description                                                                                                                                                                                                                       | Notes                         |
| -------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **devices**    | [**[DeviceDfuHistory]**](DeviceDfuHistory.md) |                                                                                                                                                                                                                                   | [optional]                    |
| **hasMore**    | **Boolean**                                   |                                                                                                                                                                                                                                   | [optional] [default to false] |
| **nextCursor** | **String**                                    | Pass this value (epoch microseconds, optionally &#x60;.N&#x60;) as a cursor parameter to start a search from where the last search left off. Returned even when there are no more results, so it can be used to poll for changes. | [optional]                    |
