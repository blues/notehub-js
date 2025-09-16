# NotehubJs.MonitorAlertRoutesInner

## Properties

| Name            | Type       | Description                                       | Notes      |
| --------------- | ---------- | ------------------------------------------------- | ---------- |
| **messageType** | **String** | text or blocks                                    | [optional] |
| **text**        | **String** | The text of the message, or the blocks definition | [optional] |
| **url**         | **String** | The URL of the Slack webhook.                     | [optional] |
| **channel**     | **String** | The channel to send the message to.               | [optional] |
| **token**       | **String** | The bearer token for the Slack app.               | [optional] |
| **email**       | **String** | Email Address                                     | [optional] |

## Enum: MessageTypeEnum

- `text` (value: `"text"`)

- `blocks` (value: `"blocks"`)
