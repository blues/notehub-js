# NotehubJs.Alert

## Properties

| Name              | Type                                                        | Description                                                       | Notes      |
| ----------------- | ----------------------------------------------------------- | ----------------------------------------------------------------- | ---------- |
| **alertSource**   | **String**                                                  | The source of the alert                                           | [optional] |
| **createdAt**     | **Number**                                                  | When the alert was raised, as a Unix timestamp in seconds.        | [optional] |
| **data**          | [**[AlertDataInner]**](AlertDataInner.md)                   |                                                                   | [optional] |
| **deviceUid**     | **String**                                                  | DeviceUID                                                         | [optional] |
| **fieldName**     | **String**                                                  | The monitor&#39;s &#x60;source_selector&#x60;.                    | [optional] |
| **monitorName**   | **String**                                                  | Monitor Name                                                      | [optional] |
| **monitorType**   | **String**                                                  | The &#x60;source_type&#x60; of the monitor that raised the alert. | [optional] |
| **monitorUid**    | **String**                                                  | MonitorUID                                                        | [optional] |
| **notifications** | [**[AlertNotificationsInner]**](AlertNotificationsInner.md) |                                                                   | [optional] |
| **resolved**      | **Boolean**                                                 | If true, the alert has been resolved                              | [optional] |
| **source**        | **String**                                                  | The UID of the source of the alert                                | [optional] |
| **uid**           | **String**                                                  | AlertUID                                                          | [optional] |
| **value**         | **Number**                                                  | The value that triggered the alert                                | [optional] |
| **version**       | **Number**                                                  | The version of the alert                                          | [optional] |

## Enum: AlertSourceEnum

- `app` (value: `"app"`)

- `device` (value: `"device"`)

## Enum: MonitorTypeEnum

- `event` (value: `"event"`)

- `heartbeat` (value: `"heartbeat"`)

- `usage` (value: `"usage"`)
