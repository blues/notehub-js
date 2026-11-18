# NotehubJs.SlackWebHookNotification

## Properties

| Name            | Type       | Description                                                                                                                                            | Notes      |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **messageType** | **String** | How &#x60;text&#x60; is read. - &#x60;text&#x60;: plain message text - &#x60;blocks&#x60;: a Slack Block Kit JSON definition                           | [optional] |
| **text**        | **String** | The message, or Block Kit JSON. Event placeholders such as &#x60;[.body.temp]&#x60; aren&#39;t allowed.                                                | [optional] |
| **url**         | **String** | The URL of the Slack webhook. Returned as &#x60;(omitted)&#x60;. Sending it back keeps the stored URL if the monitor has only one Slack webhook route. |

## Enum: MessageTypeEnum

- `text` (value: `"text"`)

- `blocks` (value: `"blocks"`)
