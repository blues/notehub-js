# NotehubJs.Mqtt

## Properties

| Name                | Type                                | Description                                                                                                                   | Notes                      |
| ------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **broker**          | **String**                          |                                                                                                                               | [optional]                 |
| **certificate**     | **String**                          | Certificate with \\n newlines. This value is input-only and will be omitted from the response and replaced with a placeholder | [optional]                 |
| **certificateName** | **String**                          | Name of certificate.                                                                                                          | [optional]                 |
| **filter**          | [**AwsFilter**](AwsFilter.md)       |                                                                                                                               | [optional]                 |
| **fleets**          | **[String]**                        | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                                                 | [optional]                 |
| **key**             | **String**                          | Key with \\n newlines. This value is input-only and will be omitted from the response and replaced with a placeholder         | [optional]                 |
| **password**        | **String**                          | This value is input-only and will be omitted from the response and replaced with a placeholder                                | [optional]                 |
| **port**            | **Number**                          |                                                                                                                               | [optional]                 |
| **privateKeyName**  | **String**                          | Name of key                                                                                                                   | [optional]                 |
| **throttleMs**      | **Number**                          |                                                                                                                               | [optional]                 |
| **timeout**         | **Number**                          | Timeout in seconds for each request                                                                                           | [optional] [default to 15] |
| **topic**           | **String**                          |                                                                                                                               | [optional]                 |
| **transform**       | [**AwsTransform**](AwsTransform.md) |                                                                                                                               | [optional]                 |
| **username**        | **String**                          |                                                                                                                               | [optional]                 |
