# NotehubJs.Monitor

## Properties

| Name                      | Type                                                        | Description                                                                                                                                                                                                                                                                                                                                             | Notes                                   |
| ------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **aggregateFunction**     | **String**                                                  | How values in &#x60;aggregate_window&#x60; are combined before the comparison. - &#x60;none&#x60;: compare each value on its own - &#x60;avg&#x60;, &#x60;max&#x60;, &#x60;min&#x60;, &#x60;sum&#x60;: compare the average, largest, smallest or total - &#x60;count&#x60;: compare the number of matching events; needs no &#x60;source_selector&#x60; | [optional]                              |
| **aggregateWindow**       | **String**                                                  | The time window for &#x60;aggregate_function&#x60;, such as &#x60;10m&#x60; or &#x60;5h30m40s&#x60;.                                                                                                                                                                                                                                                    | [optional]                              |
| **alert**                 | **Boolean**                                                 | If true, the monitor is in alert state.                                                                                                                                                                                                                                                                                                                 | [optional]                              |
| **alertRoutes**           | [**[MonitorAlertRoutesInner]**](MonitorAlertRoutesInner.md) | Where to send notifications, by email, Slack or Twilio. Required to create a monitor.                                                                                                                                                                                                                                                                   | [optional]                              |
| **conditionType**         | **String**                                                  | How the value is compared with &#x60;threshold&#x60;. Required for event and usage monitors; heartbeat monitors always use &#x60;greater_than_or_equal_to&#x60;.                                                                                                                                                                                        | [optional]                              |
| **description**           | **String**                                                  | Free-form description.                                                                                                                                                                                                                                                                                                                                  | [optional] [default to &#39;&#39;]      |
| **disabled**              | **Boolean**                                                 | If true, the monitor will not be evaluated.                                                                                                                                                                                                                                                                                                             | [optional]                              |
| **fleetFilter**           | **[String]**                                                | Watch only devices in these fleets (FleetUIDs).                                                                                                                                                                                                                                                                                                         | [optional]                              |
| **lastRoutedAt**          | **String**                                                  | When the monitor last sent notifications.                                                                                                                                                                                                                                                                                                               | [optional]                              |
| **name**                  | **String**                                                  | Monitor name. Required to create a monitor.                                                                                                                                                                                                                                                                                                             | [optional]                              |
| **notefileFilter**        | **[String]**                                                | Watch only events from these notefiles, e.g. &#x60;data.qo&#x60;. Not allowed for heartbeat monitors.                                                                                                                                                                                                                                                   | [optional]                              |
| **perDevice**             | **Boolean**                                                 | With an &#x60;aggregate_function&#x60;, aggregate each device on its own, so one device can raise an alert. If false, aggregate across all devices.                                                                                                                                                                                                     | [optional]                              |
| **routingCooldownPeriod** | **String**                                                  | How long to wait after notifying before notifying again, such as &#x60;10m&#x60; or &#x60;5h30m&#x60;. Defaults to &#x60;5m&#x60;.                                                                                                                                                                                                                      | [optional]                              |
| **silenced**              | **Boolean**                                                 | If true, alerts will be created, but no notifications will be sent.                                                                                                                                                                                                                                                                                     | [optional]                              |
| **sourceSelector**        | **String**                                                  | Dot path to a numeric value inside the event body, such as &#x60;temperature&#x60;, not &#x60;body.temperature&#x60;. Required for event monitors unless &#x60;aggregate_function&#x60; is &#x60;count&#x60;.                                                                                                                                           | [optional]                              |
| **sourceType**            | **String**                                                  | What the monitor watches. Defaults to &#x60;event&#x60; on create. - &#x60;event&#x60;: a numeric value in event bodies, read with &#x60;source_selector&#x60; - &#x60;heartbeat&#x60;: devices that go &#x60;threshold&#x60; seconds without activity - &#x60;usage&#x60;: cellular or satellite data usage                                            | [optional] [default to &#39;event&#39;] |
| **threshold**             | **Number**                                                  | The value that condition_type compares against. For heartbeat monitors this is seconds of inactivity; for usage monitors it is bytes.                                                                                                                                                                                                                   | [optional]                              |
| **uid**                   | **String**                                                  | MonitorUID, &#x60;monitor:&#x60; followed by a UUID.                                                                                                                                                                                                                                                                                                    | [optional]                              |
| **usageScope**            | **String**                                                  | For usage monitors, what usage is summed over. - &#x60;device&#x60;: each device on its own - &#x60;fleet&#x60;: each fleet in &#x60;fleet_filter&#x60; on its own. Requires &#x60;fleet_filter&#x60;, or the monitor never fires.                                                                                                                      | [optional]                              |
| **usageType**             | **String**                                                  | For usage monitors, which data to watch. - &#x60;cellular&#x60;: cellular data - &#x60;satellite&#x60;: satellite data                                                                                                                                                                                                                                  | [optional]                              |
| **usageWindow**           | **Number**                                                  | For usage monitors, the rolling window to sum usage over, in days, e.g. &#x60;30&#x60;.                                                                                                                                                                                                                                                                 | [optional]                              |

## Enum: AggregateFunctionEnum

- `none` (value: `"none"`)

- `avg` (value: `"avg"`)

- `max` (value: `"max"`)

- `min` (value: `"min"`)

- `sum` (value: `"sum"`)

- `count` (value: `"count"`)

## Enum: ConditionTypeEnum

- `greater_than` (value: `"greater_than"`)

- `greater_than_or_equal_to` (value: `"greater_than_or_equal_to"`)

- `less_than` (value: `"less_than"`)

- `less_than_or_equal_to` (value: `"less_than_or_equal_to"`)

- `equal_to` (value: `"equal_to"`)

- `not_equal_to` (value: `"not_equal_to"`)

## Enum: SourceTypeEnum

- `event` (value: `"event"`)

- `heartbeat` (value: `"heartbeat"`)

- `usage` (value: `"usage"`)
