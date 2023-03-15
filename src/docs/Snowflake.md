# NotehubJs.Snowflake

## Properties

| Name                 | Type                                            | Description                                                                                                               | Notes                             |
| -------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| **fleets**           | **[String]**                                    | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                                             | [optional]                        |
| **filter**           | [**HttpFilter**](HttpFilter.md)                 |                                                                                                                           | [optional]                        |
| **transform**        | [**SnowflakeTransform**](SnowflakeTransform.md) |                                                                                                                           | [optional]                        |
| **timeout**          | **Number**                                      | Timeout in seconds for each request                                                                                       | [optional] [default to 15]        |
| **organizationName** | **String**                                      |                                                                                                                           | [optional]                        |
| **accountName**      | **String**                                      |                                                                                                                           | [optional]                        |
| **userName**         | **String**                                      |                                                                                                                           | [optional]                        |
| **privateKeyName**   | **String**                                      | Name of PEM key. If omitted, defaults to "present"                                                                        | [optional] [default to 'present'] |
| **pem**              | **String**                                      | PEM key with \\n newlines. This value is input-only and will be omitted from the response and replaced with a placeholder | [optional]                        |
