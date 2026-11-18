# NotehubJs.Skill

## Properties

| Name          | Type                            | Description                                                            | Notes |
| ------------- | ------------------------------- | ---------------------------------------------------------------------- | ----- |
| **content**   | **String**                      | Exact UTF-8 document. Always present, including for an empty document. |
| **createdAt** | **Date**                        |                                                                        |
| **kinds**     | **[String]**                    | Effective stored kinds, independent of document front matter.          |
| **links**     | [**SkillLinks**](SkillLinks.md) |                                                                        |
| **name**      | **String**                      |                                                                        |
| **revision**  | **String**                      | Opaque concurrency token; ETag is this value wrapped in double quotes. |
| **sizeBytes** | **Number**                      | UTF-8 content byte count.                                              |
| **updatedAt** | **Date**                        |                                                                        |
