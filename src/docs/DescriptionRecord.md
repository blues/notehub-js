# NotehubJs.DescriptionRecord

## Properties

| Name            | Type       | Description                                                                                                     | Notes      |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------- | ---------- |
| **contentType** | **String** | The stored content type, either \&quot;application/json\&quot; or \&quot;text/plain; charset&#x3D;utf-8\&quot;. |
| **createdAt**   | **Number** | When the record was first created (Unix seconds).                                                               |
| **createdBy**   | **String** | The actor who created the record.                                                                               | [optional] |
| **length**      | **Number** | The content length in bytes.                                                                                    |
| **md5**         | **String** | The hex-encoded MD5 of the content.                                                                             |
| **modifiedAt**  | **Number** | When the record was last updated (Unix seconds).                                                                |
| **modifiedBy**  | **String** | The actor who last updated the record.                                                                          | [optional] |
| **name**        | **String** | The record name (letters, digits, &#39;.&#39;, &#39;\_&#39; or &#39;-&#39;).                                    |
| **ownerUid**    | **String** | The owning project (app) UID for project-scoped records; empty for global.                                      | [optional] |
| **scope**       | **String** | The ownership scope of the record (\&quot;global\&quot; or \&quot;project\&quot;).                              |
