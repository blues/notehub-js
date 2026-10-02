# NotehubJs.DataSetField

## Properties

| Name         | Type       | Description                                                                                                                                                                                                                                                                                                            | Notes      |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **datatype** | **Number** | The datatype of the field                                                                                                                                                                                                                                                                                              | [optional] |
| **jsonata**  | **String** | The JSONata expression that populates this field from the event. Required for a dataset with no rows expression. Must be omitted when the dataset has one: the column is then taken from the row object key matching this field&#39;s name, and supplying an expression here is rejected rather than silently ignored. | [optional] |
| **name**     | **String** | The name of the field                                                                                                                                                                                                                                                                                                  | [optional] |

## Enum: DatatypeEnum

- `0` (value: `0`)

- `1` (value: `1`)

- `2` (value: `2`)

- `3` (value: `3`)

- `5` (value: `5`)

- `6` (value: `6`)

- `7` (value: `7`)

- `8` (value: `8`)
