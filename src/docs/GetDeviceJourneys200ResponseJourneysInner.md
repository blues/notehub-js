# NotehubJs.GetDeviceJourneys200ResponseJourneysInner

## Properties

| Name            | Type       | Description                                                                                                                                                                   | Notes |
| --------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **endDate**     | **Date**   | Latest event time within the journey.                                                                                                                                         |
| **journeyId**   | **Number** | Identifier of the journey, taken from the &#x60;journey&#x60; field on &#x60;\_track.qo&#x60; events. This value is itself a Unix timestamp marking the start of the journey. |
| **startDate**   | **Date**   | Earliest event time within the journey.                                                                                                                                       |
| **totalEvents** | **Number** | The number of \_track.qo events in the journey.                                                                                                                               |
