# NotehubJs.Twilio

## Properties

| Name           | Type                            | Description                                                                       | Notes                      |
| -------------- | ------------------------------- | --------------------------------------------------------------------------------- | -------------------------- |
| **fleets**     | **[String]**                    | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets     | [optional]                 |
| **filter**     | [**HttpFilter**](HttpFilter.md) |                                                                                   | [optional]                 |
| **timeout**    | **Number**                      | Timeout in seconds for each request                                               | [optional] [default to 15] |
| **accountSid** | **String**                      | Twilio Account SID                                                                | [optional]                 |
| **authToken**  | **String**                      | Twilio Auth Token                                                                 | [optional]                 |
| **to**         | **String**                      | Phone number to send SMS to, leave blank to use notefile, must use E.164 format   | [optional]                 |
| **from**       | **String**                      | Phone number to send SMS from, leave blank to use notefile, must use E.164 format | [optional]                 |
| **message**    | **String**                      | Message to send, leave blank to use notefile.                                     | [optional]                 |
| **throttleMs** | **Number**                      |                                                                                   | [optional]                 |
