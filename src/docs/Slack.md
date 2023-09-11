# NotehubJs.Slack

## Properties

| Name           | Type                                            | Description                                                                                                                                                 | Notes                      |
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **fleets**     | **[String]**                                    | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                                                                               | [optional]                 |
| **filter**     | [**HttpFilter**](HttpFilter.md)                 |                                                                                                                                                             | [optional]                 |
| **transform**  | [**SnowflakeTransform**](SnowflakeTransform.md) |                                                                                                                                                             | [optional]                 |
| **throttleMs** | **Number**                                      | Minimum time between requests in Miliseconds                                                                                                                | [optional]                 |
| **timeout**    | **Number**                                      | Timeout in seconds for each request                                                                                                                         | [optional] [default to 15] |
| **slackType**  | **String**                                      | The type of Slack message. Must be one of \&quot;slack-bearer\&quot; for Bearer Token or \&quot;slack-webhook\&quot; for Webhook messages                   | [optional]                 |
| **bearer**     | **String**                                      | The Bearer Token for Slack messaging, if the \&quot;slack-bearer\&quot; type is selected                                                                    | [optional]                 |
| **channel**    | **String**                                      | The Channel ID for Bearer Token method, if the \&quot;slack-bearer\&quot; type is selected                                                                  | [optional]                 |
| **webhookUrl** | **String**                                      | The Webhook URL for Slack Messaging if the \&quot;slack-webhook\&quot; type is selected                                                                     | [optional]                 |
| **text**       | **String**                                      | The simple text message to be sent, if the blocks message field is not in use. Placeholders are available for this field.                                   | [optional]                 |
| **blocks**     | **String**                                      | The Blocks message to be sent. If populated, this field overrides the text field within the Slack Messaging API. Placeholders are available for this field. | [optional]                 |
