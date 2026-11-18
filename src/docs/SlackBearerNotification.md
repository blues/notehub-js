# NotehubJs.SlackBearerNotification

## Properties

| Name            | Type       | Description                                                                                                                                                   | Notes      |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **channel**     | **String** | The channel to send the message to.                                                                                                                           | [optional] |
| **messageType** | **String** | How &#x60;text&#x60; is read. - &#x60;text&#x60;: plain message text - &#x60;blocks&#x60;: a Slack Block Kit JSON definition                                  | [optional] |
| **text**        | **String** | The message, or Block Kit JSON. Event placeholders such as &#x60;[.body.temp]&#x60; aren&#39;t allowed.                                                       | [optional] |
| **token**       | **String** | The bearer token for the Slack app. Returned as &#x60;(omitted)&#x60;. Sending it back keeps the stored token if the monitor has only one Slack bearer route. |

## Enum: MessageTypeEnum

- `text` (value: `"text"`)

- `blocks` (value: `"blocks"`)
