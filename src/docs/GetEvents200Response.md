# NotehubJs.GetEvents200Response

## Properties

| Name           | Type                    | Description                                                                                                                                                                         | Notes      |
| -------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **events**     | [**[Event]**](Event.md) |                                                                                                                                                                                     |
| **hasMore**    | **Boolean**             | True if there are more events                                                                                                                                                       |
| **nextCursor** | **String**              | Pass this value as the cursor parameter to start a search from where the last search left off. Returned even when there are no more results, so it can be used to poll for changes. | [optional] |
| **through**    | **String**              | The UID of the last event returned                                                                                                                                                  | [optional] |
