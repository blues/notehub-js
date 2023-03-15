# NotehubJs.Thingworx

## Properties

| Name           | Type                                  | Description                                                                                    | Notes                      |
| -------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| **fleets**     | **[String]**                          | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                  | [optional]                 |
| **filter**     | [**HttpFilter**](HttpFilter.md)       |                                                                                                | [optional]                 |
| **transform**  | [**HttpTransform**](HttpTransform.md) |                                                                                                | [optional]                 |
| **throttleMs** | **Number**                            |                                                                                                | [optional]                 |
| **url**        | **String**                            |                                                                                                | [optional]                 |
| **timeout**    | **Number**                            | Timeout in seconds for each request                                                            | [optional] [default to 15] |
| **appKey**     | **String**                            | This value is input-only and will be omitted from the response and replaced with a placeholder | [optional]                 |
