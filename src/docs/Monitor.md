# NotehubJs.Monitor

## Properties

| Name                      | Type                                                        | Description                                                                     | Notes                                                                          |
| ------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------- |
| **uid**                   | **String**                                                  |                                                                                 | [optional]                                                                     |
| **name**                  | **String**                                                  |                                                                                 | [optional]                                                                     |
| **description**           | **String**                                                  |                                                                                 | [optional]                                                                     |
| **status**                | **String**                                                  | The status of the monitor.                                                      | [optional]                                                                     |
| **silenced**              | **Boolean**                                                 | If true, alerts will be created, but no notifications will be sent.             | [optional]                                                                     |
| **sourceType**            | **String**                                                  | The type of source to monitor. Currently only \&quot;event\&quot; is supported. | [optional]                                                                     |
| **sourceSelector**        | **String**                                                  | A valid JSONata expression that selects the value to monitor from the source.   | It should return a single, numeric value.                                      | [optional] |
| **conditionType**         | **String**                                                  | The type of condition to apply to the value selected by the source_selector     | [optional]                                                                     |
| **notefileFilter**        | **[String]**                                                |                                                                                 | [optional]                                                                     |
| **fleetFilter**           | **[String]**                                                |                                                                                 | [optional]                                                                     |
| **severity**              | **String**                                                  |                                                                                 | [optional]                                                                     |
| **thresholds**            | [**MonitorThresholds**](MonitorThresholds.md)               |                                                                                 | [optional]                                                                     |
| **routingCooldownPeriod** | **String**                                                  | The time period to wait before routing another event after the monitor          | has been triggered. It follows the format of a number followed by a time unit. | [optional] |
| **alertRoutes**           | [**[MonitorAlertRoutesInner]**](MonitorAlertRoutesInner.md) |                                                                                 | [optional]                                                                     |

## Enum: StatusEnum

- `disabled` (value: `"disabled"`)

- `enabled` (value: `"enabled"`)

## Enum: SourceTypeEnum

- `event` (value: `"event"`)

## Enum: ConditionTypeEnum

- `greater_than` (value: `"greater_than"`)

- `greater_than_or_equal_to` (value: `"greater_than_or_equal_to"`)

- `less_than` (value: `"less_than"`)

- `less_than_or_equal_to` (value: `"less_than_or_equal_to"`)

- `equal_to` (value: `"equal_to"`)

- `not_equal_to` (value: `"not_equal_to"`)

## Enum: SeverityEnum

- `warn` (value: `"warn"`)

- `alarm` (value: `"alarm"`)
