# NotehubJs.DescriptionRecord

## Properties

| Name            | Type       | Description                                                                                                                             | Notes      |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **contentType** | **String** | The Content-Type served on GET, as sent when the record was stored or detected from its content.                                        |
| **createdAt**   | **Number** | When the record was first created (Unix seconds).                                                                                       |
| **createdBy**   | **String** | The actor who created the record.                                                                                                       | [optional] |
| **length**      | **Number** | The content length in bytes.                                                                                                            |
| **md5**         | **String** | The hex-encoded MD5 of the content.                                                                                                     |
| **modifiedAt**  | **Number** | When the record was last updated (Unix seconds).                                                                                        |
| **modifiedBy**  | **String** | The actor who last updated the record.                                                                                                  | [optional] |
| **name**        | **String** | The record name (letters, digits, &#39;.&#39;, &#39;\_&#39; or &#39;-&#39;).                                                            |
| **ownerUid**    | **String** | ProjectUID of the owning project, e.g. &#x60;app:2606f411-dea6-44a0-9743-1130f57d77d8&#x60;. Empty for a global record.                 | [optional] |
| **scope**       | **String** | Where the record is stored. - &#x60;project&#x60;: in one project - &#x60;global&#x60;: platform-wide, readable by every signed-in user |
