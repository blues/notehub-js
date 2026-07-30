# NotehubJs.DataSet

## Properties

| Name            | Type                                  | Description                                                                                                                                 | Notes                 |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **fields**      | [**[DataSetField]**](DataSetField.md) |                                                                                                                                             | [optional]            |
| **isOptimized** | **Boolean**                           | True once the dataset&#39;s underlying table has been deduplicated/optimized. Server-populated; ignored on input.                           | [optional] [readonly] |
| **isReady**     | **Boolean**                           | True once the dataset has been fully loaded from the repository&#39;s archive after backfill completed. Server-populated; ignored on input. | [optional] [readonly] |
| **lat**         | **String**                            | JSONata expression resulting in the latitude field                                                                                          | [optional]            |
| **lon**         | **String**                            | JSONata expression resulting in the Longitude field                                                                                         | [optional]            |
| **name**        | **String**                            | The name of the data set                                                                                                                    | [optional]            |
| **notefiles**   | **[String]**                          | If non-empty, only events from these notefiles populate the dataset. Empty or omitted means all notefiles.                                  | [optional]            |
| **time**        | **String**                            | JSONata expression resulting in the relevant time field                                                                                     | [optional]            |
