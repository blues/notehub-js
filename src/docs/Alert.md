# NotehubJs.Alert

## Properties

| Name              | Type                                                        | Description                                  | Notes      |
| ----------------- | ----------------------------------------------------------- | -------------------------------------------- | ---------- |
| **uid**           | **String**                                                  | Alert UID                                    | [optional] |
| **monitorUid**    | **String**                                                  | Monitor UID                                  | [optional] |
| **monitorName**   | **String**                                                  | Monitor Name                                 | [optional] |
| **deviceUid**     | **String**                                                  | Device UID                                   | [optional] |
| **createdAt**     | **Number**                                                  | The time the alert was created               | [optional] |
| **value**         | **Number**                                                  | The value that triggered the alert           | [optional] |
| **resolved**      | **Boolean**                                                 | If true, the alert has been resolved         | [optional] |
| **version**       | **Number**                                                  | The version of the alert                     | [optional] |
| **alertSource**   | **String**                                                  | The source of the alert                      | [optional] |
| **source**        | **String**                                                  | The UID of the source of the alert           | [optional] |
| **monitorType**   | **String**                                                  | The type of monitor that triggered the alert | [optional] |
| **fieldName**     | **String**                                                  | The field name that triggered the alert      | [optional] |
| **data**          | [**[AlertDataInner]**](AlertDataInner.md)                   |                                              | [optional] |
| **notifications** | [**[AlertNotificationsInner]**](AlertNotificationsInner.md) |                                              | [optional] |

## Enum: AlertSourceEnum

- `app` (value: `"app"`)

- `device` (value: `"device"`)

## Enum: MonitorTypeEnum

- `event` (value: `"event"`)

- `device` (value: `"device"`)
