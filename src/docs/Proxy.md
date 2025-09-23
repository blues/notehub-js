# NotehubJs.Proxy

## Properties

| Name            | Type                 | Description                                                                   | Notes                      |
| --------------- | -------------------- | ----------------------------------------------------------------------------- | -------------------------- |
| **alias**       | **String**           |                                                                               | [optional]                 |
| **fleets**      | **[String]**         | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets | [optional]                 |
| **httpHeaders** | **{String: String}** |                                                                               | [optional]                 |
| **timeout**     | **Number**           | Timeout in seconds for each request                                           | [optional] [default to 15] |
| **url**         | **String**           |                                                                               | [optional]                 |
