# NotehubJs.HttpTransform

## Properties

| Name        | Type       | Description                                                                                                                                                 | Notes      |
| ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **format**  | **String** | Data transformation to apply. Options of "" for none, "bridge" for Azure IoT, "jsonata" for JSONata expression, or "flatten", "simple", "body" or "payload" | [optional] |
| **jsonata** | **String** | JSONata transformation, if JSONata                                                                                                                          | [optional] |

## Enum: FormatEnum

- `empty` (value: `""`)

- `bridge` (value: `"bridge"`)

- `jsonata` (value: `"jsonata"`)

- `flatten` (value: `"flatten"`)

- `simple` (value: `"simple"`)

- `body` (value: `"body"`)

- `payload` (value: `"payload"`)
