# NotehubJs.Slack

## Properties

| Name           | Type                                    | Description                                                                                                                                                 | Notes                      |
| -------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **bearer**     | **String**                              | The Bearer Token for Slack messaging, if the \&quot;slack-bearer\&quot; type is selected                                                                    | [optional]                 |
| **blocks**     | **String**                              | The Blocks message to be sent. If populated, this field overrides the text field within the Slack Messaging API. Placeholders are available for this field. | [optional]                 |
| **channel**    | **String**                              | The Channel ID for Bearer Token method, if the \&quot;slack-bearer\&quot; type is selected                                                                  | [optional]                 |
| **filter**     | [**AwsFilter**](AwsFilter.md)           |                                                                                                                                                             | [optional]                 |
| **fleets**     | **[String]**                            | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                                                                               | [optional]                 |
| **slackType**  | **String**                              | The type of Slack message. Must be one of \&quot;slack-bearer\&quot; for Bearer Token or \&quot;slack-webhook\&quot; for Webhook messages                   | [optional]                 |
| **text**       | **String**                              | The simple text message to be sent, if the blocks message field is not in use. Placeholders are available for this field.                                   | [optional]                 |
| **throttleMs** | **Number**                              | Minimum time between requests in Miliseconds                                                                                                                | [optional]                 |
| **timeout**    | **Number**                              | Timeout in seconds for each request                                                                                                                         | [optional] [default to 15] |
| **transform**  | [**SlackTransform**](SlackTransform.md) |                                                                                                                                                             | [optional]                 |
| **webhookUrl** | **String**                              | The Webhook URL for Slack Messaging if the \&quot;slack-webhook\&quot; type is selected                                                                     | [optional]                 |
