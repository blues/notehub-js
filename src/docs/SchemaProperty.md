# NotehubJs.SchemaProperty

## Properties

| Name           | Type                                      | Description                                            | Notes      |
| -------------- | ----------------------------------------- | ------------------------------------------------------ | ---------- |
| **items**      | [**[SchemaProperty]**](SchemaProperty.md) | Used if type is array                                  | [optional] |
| **name**       | **String**                                | Name of the field (optional for array/object children) | [optional] |
| **properties** | [**[SchemaProperty]**](SchemaProperty.md) | Used if type is object                                 | [optional] |
| **type**       | **String**                                |                                                        |
| **updatedAt**  | **Date**                                  |                                                        | [optional] |

## Enum: TypeEnum

- `string` (value: `"string"`)

- `number` (value: `"number"`)

- `boolean` (value: `"boolean"`)

- `array` (value: `"array"`)

- `object` (value: `"object"`)
