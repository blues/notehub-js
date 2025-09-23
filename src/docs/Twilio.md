# NotehubJs.Twilio

## Properties

| Name           | Type                          | Description                                                                                      | Notes                      |
| -------------- | ----------------------------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| **accountSid** | **String**                    | Twilio Account SID                                                                               | [optional]                 |
| **authToken**  | **String**                    | Twilio Auth Token. This value will be omitted from the response and replaced with a placeholder. | [optional]                 |
| **filter**     | [**AwsFilter**](AwsFilter.md) |                                                                                                  | [optional]                 |
| **fleets**     | **[String]**                  | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets                    | [optional]                 |
| **from**       | **String**                    | Phone number to send SMS from, leave blank to use notefile, must use E.164 format                | [optional]                 |
| **message**    | **String**                    | Message to send, leave blank to use notefile.                                                    | [optional]                 |
| **throttleMs** | **Number**                    |                                                                                                  | [optional]                 |
| **timeout**    | **Number**                    | Timeout in seconds for each request                                                              | [optional] [default to 15] |
| **to**         | **String**                    | Phone number to send SMS to, leave blank to use notefile, must use E.164 format                  | [optional]                 |
