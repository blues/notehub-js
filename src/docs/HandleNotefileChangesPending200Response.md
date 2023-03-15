# NotehubJs.HandleNotefileChangesPending200Response

## Properties

| Name        | Type        | Description                                                                                                                            | Notes      |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **total**   | **Number**  | The total number of files.                                                                                                             | [optional] |
| **changes** | **Number**  | The number of pending changes in the Notefile.                                                                                         | [optional] |
| **pending** | **Boolean** | Whether there are pending changes.                                                                                                     | [optional] |
| **info**    | **Object**  | An object with a key for each Notefile that matched the request parameters, and value object with the changes and total for each file. | [optional] |
