# NotehubJs.JobRun

## Properties

| Name            | Type                 | Description                                                       | Notes      |
| --------------- | -------------------- | ----------------------------------------------------------------- | ---------- |
| **cancel**      | **Boolean**          | Whether cancellation was requested                                | [optional] |
| **completed**   | **Number**           | Unix timestamp when completed                                     | [optional] |
| **dryRun**      | **Boolean**          | Whether this was a dry run                                        |
| **jobName**     | **String**           | Name of the job                                                   |
| **jobUid**      | **String**           | Unique identifier for the job                                     |
| **reportUid**   | **String**           | Unique identifier for this run                                    |
| **results**     | **{String: Object}** | Full results (only in detail view)                                | [optional] |
| **started**     | **Number**           | Unix timestamp when started                                       | [optional] |
| **status**      | **String**           | Current status (submitted, running, completed, cancelled, failed) |
| **submitted**   | **Number**           | Unix timestamp when submitted                                     |
| **submittedBy** | **String**           | User who submitted the run                                        |
| **updated**     | **Number**           | Unix timestamp of last update                                     |
