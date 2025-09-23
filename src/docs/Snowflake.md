# NotehubJs.Snowflake

## Properties

| Name                 | Type                                    | Description                                                                                                               | Notes                                     |
| -------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **accountName**      | **String**                              |                                                                                                                           | [optional]                                |
| **filter**           | [**AwsFilter**](AwsFilter.md)           |                                                                                                                           | [optional]                                |
| **fleets**           | **[String]**                            | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                                             | [optional]                                |
| **organizationName** | **String**                              |                                                                                                                           | [optional]                                |
| **pem**              | **String**                              | PEM key with \\n newlines. This value is input-only and will be omitted from the response and replaced with a placeholder | [optional]                                |
| **privateKeyName**   | **String**                              | Name of PEM key. If omitted, defaults to \&quot;present\&quot;                                                            | [optional] [default to &#39;present&#39;] |
| **timeout**          | **Number**                              | Timeout in seconds for each request                                                                                       | [optional] [default to 15]                |
| **transform**        | [**SlackTransform**](SlackTransform.md) |                                                                                                                           | [optional]                                |
| **userName**         | **String**                              |                                                                                                                           | [optional]                                |
