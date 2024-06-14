# NotehubJs.SlackBearerNotification

## Properties

| Name            | Type       | Description                                       | Notes      |
| --------------- | ---------- | ------------------------------------------------- | ---------- |
| **token**       | **String** | The bearer token for the Slack app.               | [optional] |
| **channel**     | **String** | The channel to send the message to.               | [optional] |
| **messageType** | **String** | text or blocks                                    | [optional] |
| **text**        | **String** | The text of the message, or the blocks definition | [optional] |

## Enum: MessageTypeEnum

- `text` (value: `"text"`)

- `blocks` (value: `"blocks"`)
