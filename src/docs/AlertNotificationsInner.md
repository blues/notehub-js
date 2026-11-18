# NotehubJs.AlertNotificationsInner

## Properties

| Name                 | Type       | Description                                                                                                                                                                                                                    | Notes      |
| -------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **notificationType** | **String** | How the notification was sent. - &#x60;email&#x60;: by email - &#x60;slack-webhook&#x60;: to a Slack webhook - &#x60;slack-bearer&#x60;: through a Slack app, with a bearer token - &#x60;twilio&#x60;: by SMS, through Twilio | [optional] |
| **recipients**       | **String** | The recipients of the notification                                                                                                                                                                                             | [optional] |
| **status**           | **Number** | The status of the notification                                                                                                                                                                                                 | [optional] |

## Enum: NotificationTypeEnum

- `email` (value: `"email"`)

- `slack-webhook` (value: `"slack-webhook"`)

- `slack-bearer` (value: `"slack-bearer"`)

- `twilio` (value: `"twilio"`)
