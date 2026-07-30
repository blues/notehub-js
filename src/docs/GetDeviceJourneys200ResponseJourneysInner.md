# NotehubJs.GetDeviceJourneys200ResponseJourneysInner

## Properties

| Name            | Type       | Description                                                                                                                                                            | Notes |
| --------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **endDate**     | **Date**   | Latest event time within the journey.                                                                                                                                  |
| **journeyId**   | **Number** | Identifier of the journey, taken from the numeric &#x60;journey&#x60; field in the event body. This value is itself a Unix timestamp marking the start of the journey. |
| **startDate**   | **Date**   | Earliest event time within the journey.                                                                                                                                |
| **totalEvents** | **Number** | The number of events in the journey.                                                                                                                                   |
