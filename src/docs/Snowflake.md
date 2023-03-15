# NotehubJs.Snowflake

## Properties

| Name                 | Type                                            | Description                                                                               | Notes                                     |
| -------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------- |
| **fleets**           | **[String]**                                    | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets             | [optional]                                |
| **filter**           | [**HttpFilter**](HttpFilter.md)                 |                                                                                           | [optional]                                |
| **transform**        | [**SnowflakeTransform**](SnowflakeTransform.md) |                                                                                           | [optional]                                |
| **timeout**          | **Number**                                      | Timeout in seconds for each request                                                       | [optional] [default to 15]                |
| **organizationName** | **String**                                      |                                                                                           | [optional]                                |
| **accountName**      | **String**                                      |                                                                                           | [optional]                                |
| **userName**         | **String**                                      |                                                                                           | [optional]                                |
| **privateKeyName**   | **String**                                      | Name of PEM key. If omitted, defaults to \&quot;present\&quot;                            | [optional] [default to &#39;present&#39;] |
| **pem**              | **String**                                      | PEM key with \\n newlines. Field is input only, will not show contents on GET operations. | [optional]                                |
