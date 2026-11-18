# NotehubJs.TwilioNotification

## Properties

| Name           | Type       | Description                                                                                                                                | Notes      |
| -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **accountSid** | **String** | The Twilio account SID.                                                                                                                    |
| **authToken**  | **String** | The Twilio auth token. Returned as &#x60;(omitted)&#x60;. Sending it back keeps the stored token if the monitor has only one Twilio route. | [optional] |
| **from**       | **String** | The number to send the SMS from, in E.164 format, e.g. &#x60;+15551234567&#x60;.                                                           | [optional] |
| **message**    | **String** | The text of the SMS. Event placeholders such as &#x60;[.body.temp]&#x60; aren&#39;t allowed.                                               | [optional] |
| **to**         | **String** | The number to send the SMS to, in E.164 format.                                                                                            | [optional] |
