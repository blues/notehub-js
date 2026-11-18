# NotehubJs.SchemaProperty

## Properties

| Name           | Type                                      | Description                                                              | Notes      |
| -------------- | ----------------------------------------- | ------------------------------------------------------------------------ | ---------- |
| **items**      | [**[SchemaProperty]**](SchemaProperty.md) | For an array, the type of its elements, inferred from the first element. | [optional] |
| **name**       | **String**                                | Name of the field (optional for array/object children)                   | [optional] |
| **properties** | [**[SchemaProperty]**](SchemaProperty.md) | For an object, its fields.                                               | [optional] |
| **type**       | **String**                                | The field&#39;s JSON type.                                               |
| **updatedAt**  | **Date**                                  | When Notehub recorded this field, usually when it first appeared.        | [optional] |

## Enum: TypeEnum

- `string` (value: `"string"`)

- `number` (value: `"number"`)

- `boolean` (value: `"boolean"`)

- `array` (value: `"array"`)

- `object` (value: `"object"`)
