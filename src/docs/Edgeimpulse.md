# NotehubJs.Edgeimpulse

## Properties

| Name           | Type                                                        | Description                                                                   | Notes                      |
| -------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------- |
| **fleets**     | **[String]**                                                | list of Fleet UIDs to apply route to, if any. If empty, applies to all Fleets | [optional]                 |
| **filter**     | [**HttpFilter**](HttpFilter.md)                             |                                                                               | [optional]                 |
| **timeout**    | **Number**                                                  | Timeout in seconds for each request                                           | [optional] [default to 15] |
| **apiKey**     | **String**                                                  | EdgeImpulse API Key                                                           | [optional]                 |
| **filename**   | **String**                                                  | An identifier the collection of data points                                   | [optional]                 |
| **deviceType** | **String**                                                  | An identifier for the type of device generating the data                      | [optional]                 |
| **intervalMs** | **Number**                                                  | Frequency of data in miliseconds                                              | [optional]                 |
| **deviceName** | **String**                                                  | An identifier for the device generating the data                              | [optional]                 |
| **label**      | **String**                                                  | A label for the data point                                                    | [optional]                 |
| **sensors**    | [**[EdgeimpulseSensorsInner]**](EdgeimpulseSensorsInner.md) |                                                                               | [optional]                 |
