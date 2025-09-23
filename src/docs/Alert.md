# NotehubJs.Alert

## Properties

| Name              | Type                                                        | Description                                  | Notes      |
| ----------------- | ----------------------------------------------------------- | -------------------------------------------- | ---------- |
| **alertSource**   | **String**                                                  | The source of the alert                      | [optional] |
| **createdAt**     | **Number**                                                  | The time the alert was created               | [optional] |
| **data**          | [**[AlertDataInner]**](AlertDataInner.md)                   |                                              | [optional] |
| **deviceUid**     | **String**                                                  | Device UID                                   | [optional] |
| **fieldName**     | **String**                                                  | The field name that triggered the alert      | [optional] |
| **monitorName**   | **String**                                                  | Monitor Name                                 | [optional] |
| **monitorType**   | **String**                                                  | The type of monitor that triggered the alert | [optional] |
| **monitorUid**    | **String**                                                  | Monitor UID                                  | [optional] |
| **notifications** | [**[AlertNotificationsInner]**](AlertNotificationsInner.md) |                                              | [optional] |
| **resolved**      | **Boolean**                                                 | If true, the alert has been resolved         | [optional] |
| **source**        | **String**                                                  | The UID of the source of the alert           | [optional] |
| **uid**           | **String**                                                  | Alert UID                                    | [optional] |
| **value**         | **Number**                                                  | The value that triggered the alert           | [optional] |
| **version**       | **Number**                                                  | The version of the alert                     | [optional] |

## Enum: AlertSourceEnum

- `app` (value: `"app"`)

- `device` (value: `"device"`)

## Enum: MonitorTypeEnum

- `event` (value: `"event"`)

- `device` (value: `"device"`)
