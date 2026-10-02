# NotehubJs.BatchJobNoteRequest

## Properties

| Name     | Type                 | Description                                                                                                                                                                      | Notes      |
| -------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **body** | **{String: Object}** | The note&#39;s JSON body (used by note.add and note.update)                                                                                                                      | [optional] |
| **file** | **String**           | The notefile to operate on (e.g. data.qi, config.dbs)                                                                                                                            |
| **note** | **String**           | The note ID. Required for note.update and note.delete, and for note.add against a database (.dbs/.db) notefile. Must be omitted for note.add against a queue (.qi/.qo) notefile. | [optional] |
| **req**  | **String**           | The note operation to perform                                                                                                                                                    |

## Enum: ReqEnum

- `add` (value: `"note.add"`)

- `update` (value: `"note.update"`)

- `delete` (value: `"note.delete"`)
