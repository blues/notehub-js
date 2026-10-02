# NotehubJs.DatasetReloadProgress

## Properties

| Name                    | Type       | Description                                                                                                                                        | Notes      |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **archiveRecordsRead**  | **Number** | Archived records read so far.                                                                                                                      | [optional] |
| **archiveRecordsTotal** | **Number** | Approximate total archived records to read. Null when it cannot be determined because some archive files predate the record-count filename format. | [optional] |
| **started**             | **Date**   | When this reload started.                                                                                                                          | [optional] |
| **tailRecordsRead**     | **Number** | Unarchived (Kafka tail) records read so far.                                                                                                       | [optional] |
