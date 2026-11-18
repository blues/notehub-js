# NotehubJs.SkillSummary

## Properties

| Name          | Type                            | Description                                                                               | Notes      |
| ------------- | ------------------------------- | ----------------------------------------------------------------------------------------- | ---------- |
| **content**   | **String**                      | Exact Markdown when includeContent&#x3D;true; present even when empty. Otherwise omitted. | [optional] |
| **createdAt** | **Date**                        |                                                                                           |
| **kinds**     | **[String]**                    | Effective stored kinds, independent of document front matter.                             |
| **links**     | [**SkillLinks**](SkillLinks.md) |                                                                                           |
| **name**      | **String**                      |                                                                                           |
| **revision**  | **String**                      | Opaque concurrency token; ETag is this value wrapped in double quotes.                    |
| **sizeBytes** | **Number**                      | UTF-8 content byte count.                                                                 |
| **updatedAt** | **Date**                        |                                                                                           |
