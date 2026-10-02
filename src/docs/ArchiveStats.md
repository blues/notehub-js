# NotehubJs.ArchiveStats

## Properties

| Name               | Type       | Description                                                                                                                                                            | Notes      |
| ------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **begin**          | **Date**   | Timestamp of the earliest archived record.                                                                                                                             | [optional] |
| **end**            | **Date**   | Timestamp of the latest archived record.                                                                                                                               | [optional] |
| **fileCount**      | **Number** | Number of archive files.                                                                                                                                               | [optional] |
| **recordCount**    | **Number** | Total number of records across all archive files. Null when the count cannot be determined because one or more archive files predate the record-count filename format. | [optional] |
| **totalSizeBytes** | **Number** | Total size of all archive files, in bytes.                                                                                                                             | [optional] |
