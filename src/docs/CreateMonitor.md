# NotehubJs.CreateMonitor

## Properties

| Name                      | Type                                                        | Description                                                                                                                                                                     | Notes                                                                                                           |
| ------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **uid**                   | **String**                                                  |                                                                                                                                                                                 | [optional]                                                                                                      |
| **name**                  | **String**                                                  |                                                                                                                                                                                 |
| **description**           | **String**                                                  |                                                                                                                                                                                 |
| **sourceType**            | **String**                                                  | The type of source to monitor. Currently only \&quot;event\&quot; is supported.                                                                                                 | [optional]                                                                                                      |
| **disabled**              | **Boolean**                                                 | If true, the monitor will not be evaluated.                                                                                                                                     | [optional]                                                                                                      |
| **alert**                 | **Boolean**                                                 | If true, the monitor is in alert state.                                                                                                                                         | [optional]                                                                                                      |
| **notefileFilter**        | **[String]**                                                |                                                                                                                                                                                 |
| **fleetFilter**           | **[String]**                                                |                                                                                                                                                                                 | [optional]                                                                                                      |
| **sourceSelector**        | **String**                                                  | A valid JSONata expression that selects the value to monitor from the source.                                                                                                   | It should return a single, numeric value.                                                                       | [optional]                                                                                      |
| **conditionType**         | **String**                                                  | A comparison operation to apply to the value selected by the source_selector [greater_than, greater_than_or_equal_to, less_than, less_than_or_equal_to, equal_to, not_equal_to] | [optional]                                                                                                      |
| **threshold**             | **Number**                                                  | The type of condition to apply to the value selected by the source_selector                                                                                                     | [optional]                                                                                                      |
| **alertRoutes**           | [**[MonitorAlertRoutesInner]**](MonitorAlertRoutesInner.md) |                                                                                                                                                                                 |
| **lastRoutedAt**          | **String**                                                  | The last time the monitor was evaluated and routed.                                                                                                                             | [optional]                                                                                                      |
| **silenced**              | **Boolean**                                                 | If true, alerts will be created, but no notifications will be sent.                                                                                                             | [optional]                                                                                                      |
| **routingCooldownPeriod** | **String**                                                  | The time period to wait before routing another event after the monitor                                                                                                          | has been triggered. It follows the format of a number followed by a time unit.                                  | [optional]                                                                                      |
| **aggregateFunction**     | **String**                                                  | Aggregate function to apply to the selected values before applying the condition. [none, sum, average, max, min]                                                                | [optional]                                                                                                      |
| **aggregateWindow**       | **String**                                                  | The time window to aggregate the selected values. It follows the format of a number followed by a time unit                                                                     | [optional]                                                                                                      |
| **perDevice**             | **Boolean**                                                 | Only relevant when using an aggregate_function. If true, the monitor will be evaluated per device,                                                                              | rather than across the set of selected devices. If true then if a single device matches the specified criteria, | and alert will be created, otherwise the aggregate function will be applied across all devices. | [optional] |

## Enum: SourceTypeEnum

- `event` (value: `"event"`)

## Enum: ConditionTypeEnum

- `greater_than` (value: `"greater_than"`)

- `greater_than_or_equal_to` (value: `"greater_than_or_equal_to"`)

- `less_than` (value: `"less_than"`)

- `less_than_or_equal_to` (value: `"less_than_or_equal_to"`)

- `equal_to` (value: `"equal_to"`)

- `not_equal_to` (value: `"not_equal_to"`)

## Enum: AggregateFunctionEnum

- `none` (value: `"none"`)

- `sum` (value: `"sum"`)

- `average` (value: `"average"`)

- `max` (value: `"max"`)

- `min` (value: `"min"`)
