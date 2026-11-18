# NotehubJs.MonitorAlertRoutesInner

## Properties

| Name            | Type       | Description                                                                                                                                                   | Notes      |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **messageType** | **String** | How &#x60;text&#x60; is read. - &#x60;text&#x60;: plain message text - &#x60;blocks&#x60;: a Slack Block Kit JSON definition                                  | [optional] |
| **text**        | **String** | The message, or Block Kit JSON. Event placeholders such as &#x60;[.body.temp]&#x60; aren&#39;t allowed.                                                       | [optional] |
| **url**         | **String** | The URL of the Slack webhook. Returned as &#x60;(omitted)&#x60;. Sending it back keeps the stored URL if the monitor has only one Slack webhook route.        |
| **channel**     | **String** | The channel to send the message to.                                                                                                                           | [optional] |
| **token**       | **String** | The bearer token for the Slack app. Returned as &#x60;(omitted)&#x60;. Sending it back keeps the stored token if the monitor has only one Slack bearer route. |
| **email**       | **String** | Email address, or several separated by commas.                                                                                                                |
| **accountSid**  | **String** | The Twilio account SID.                                                                                                                                       |
| **authToken**   | **String** | The Twilio auth token. Returned as &#x60;(omitted)&#x60;. Sending it back keeps the stored token if the monitor has only one Twilio route.                    | [optional] |
| **from**        | **String** | The number to send the SMS from, in E.164 format, e.g. &#x60;+15551234567&#x60;.                                                                              | [optional] |
| **message**     | **String** | The text of the SMS. Event placeholders such as &#x60;[.body.temp]&#x60; aren&#39;t allowed.                                                                  | [optional] |
| **to**          | **String** | The number to send the SMS to, in E.164 format.                                                                                                               | [optional] |

## Enum: MessageTypeEnum

- `text` (value: `"text"`)

- `blocks` (value: `"blocks"`)
