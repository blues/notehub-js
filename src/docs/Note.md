# NotehubJs.Note

## Properties

| Name        | Type                 | Description                                                              | Notes      |
| ----------- | -------------------- | ------------------------------------------------------------------------ | ---------- |
| **body**    | **{String: Object}** | Arbitrary user-defined JSON for the note.                                |
| **edge**    | **Boolean**          | True if originated from an edge source.                                  | [optional] |
| **id**      | **String**           | Note name/identifier (e.g., \&quot;1:435\&quot;, \&quot;my_note\&quot;). |
| **payload** | **Blob**             | Optional base64-encoded payload.                                         | [optional] |
| **pending** | **Boolean**          | True if the note is pending delivery or processing.                      | [optional] |
| **time**    | **Number**           | Unix epoch seconds.                                                      |
| **where**   | **String**           | Optional location/metadata string.                                       | [optional] |
