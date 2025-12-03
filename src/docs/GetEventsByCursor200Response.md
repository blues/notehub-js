# NotehubJs.GetEventsByCursor200Response

## Properties

| Name           | Type                    | Description                                                                                                                                                                                                                     | Notes |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **events**     | [**[Event]**](Event.md) |                                                                                                                                                                                                                                 |
| **hasMore**    | **Boolean**             | True if there are more events                                                                                                                                                                                                   |
| **nextCursor** | **String**              | The cursor value of the next result, which is intended to be used as the \&quot;cursor\&quot; parameter value of the next call to this method. An empty string is returned if there are no more results after this results set. |
