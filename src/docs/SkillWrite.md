# NotehubJs.SkillWrite

## Properties

| Name        | Type         | Description                                                                                                                                | Notes      |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **content** | **String**   | Exact UTF-8, at most 1 MiB decoded. Empty is valid; null is not. JSON request limit is 2 MiB plus 64 KiB, including escaping and metadata. |
| **kinds**   | **[String]** | Lowercase kinds; publish is reserved. Omit to preserve on replacement, or use [] to clear.                                                 | [optional] |
