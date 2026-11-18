# NotehubJs.RouteLog

## Properties

| Name         | Type        | Description                                                     | Notes      |
| ------------ | ----------- | --------------------------------------------------------------- | ---------- |
| **attn**     | **Boolean** | True if the attempt failed.                                     | [optional] |
| **date**     | **String**  | When the attempt was made, in RFC 3339 format.                  | [optional] |
| **duration** | **Number**  | How long the attempt took, in milliseconds.                     | [optional] |
| **eventUid** | **String**  | EventUID of the event that was sent.                            | [optional] |
| **routeUid** | **String**  | RouteUID of the route.                                          | [optional] |
| **status**   | **String**  | The destination&#39;s response status, such as &#x60;200&#x60;. | [optional] |
| **text**     | **String**  | The destination&#39;s response body, or an error message.       | [optional] |
| **url**      | **String**  | The URL the event was sent to.                                  | [optional] |
