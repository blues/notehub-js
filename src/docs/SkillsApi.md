# NotehubJs.SkillsApi

All URIs are relative to *https://api.notefile.net*

| Method                                      | HTTP request                                                     | Description                       |
| ------------------------------------------- | ---------------------------------------------------------------- | --------------------------------- |
| [**deleteSkill**](SkillsApi.md#deleteSkill) | **DELETE** /v1/projects/{projectOrProductUID}/skills/{skillName} | Delete a project skill            |
| [**getSkill**](SkillsApi.md#getSkill)       | **GET** /v1/projects/{projectOrProductUID}/skills/{skillName}    | Get a project skill               |
| [**getSkills**](SkillsApi.md#getSkills)     | **GET** /v1/projects/{projectOrProductUID}/skills                | List project skills               |
| [**putSkill**](SkillsApi.md#putSkill)       | **PUT** /v1/projects/{projectOrProductUID}/skills/{skillName}    | Create or replace a project skill |

## deleteSkill

> deleteSkill(projectOrProductUID, skillName, ifMatch)

Delete a project skill

Delete a skill and all its stored versions. Requires &#x60;If-Match&#x60; set to the revision from &#x60;GetSkill&#x60;. Requires the Owner or Developer role. Subprojects must write to their parent project.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.SkillsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let skillName = "references/devices.md"; // String | Relative .md name, case-insensitive, at most 512 UTF-8 bytes. In URLs, encode the whole name once: references/devices.md becomes references%2Fdevices.md; a literal % becomes %25. Pass the unencoded name to SDKs. Spaces, Unicode and punctuation are allowed. No absolute paths, dot segments, empty segments, backslashes, colons, control characters or surrounding segment whitespace.
let ifMatch = "ifMatch_example"; // String | Required; use one strong ETag or quoted skill revision. Wildcards and weak tags are rejected.
apiInstance.deleteSkill(projectOrProductUID, skillName, ifMatch).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                  | Notes |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                                                                                                                                                                                                                                                                                                              |
| **skillName**           | **String** | Relative .md name, case-insensitive, at most 512 UTF-8 bytes. In URLs, encode the whole name once: references/devices.md becomes references%2Fdevices.md; a literal % becomes %25. Pass the unencoded name to SDKs. Spaces, Unicode and punctuation are allowed. No absolute paths, dot segments, empty segments, backslashes, colons, control characters or surrounding segment whitespace. |
| **ifMatch**             | **String** | Required; use one strong ETag or quoted skill revision. Wildcards and weak tags are rejected.                                                                                                                                                                                                                                                                                                |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSkill

> Skill getSkill(projectOrProductUID, skillName, opts)

Get a project skill

Get one skill&#39;s metadata and exact Markdown content. Use &#x60;links.self&#x60; from &#x60;GetSkills&#x60;, or URL-encode the whole skill name as one path parameter. &#x60;If-Match&#x60; requires a revision; &#x60;If-None-Match&#x60; skips unchanged content. Any role can read it, and so can anonymous callers when the project&#39;s default access is Viewer.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.SkillsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let skillName = "references/devices.md"; // String | Relative .md name, case-insensitive, at most 512 UTF-8 bytes. In URLs, encode the whole name once: references/devices.md becomes references%2Fdevices.md; a literal % becomes %25. Pass the unencoded name to SDKs. Spaces, Unicode and punctuation are allowed. No absolute paths, dot segments, empty segments, backslashes, colons, control characters or surrounding segment whitespace.
let opts = {
  ifMatch: "ifMatch_example", // String | Optionally require one strong ETag or quoted skill revision; wildcards and weak tags are rejected.
  ifNoneMatch: "ifNoneMatch_example", // String | Return 304 if an ETag for this skill matches, or use * to match any existing skill at this name.
};
apiInstance.getSkill(projectOrProductUID, skillName, opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                  | Notes      |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String** |                                                                                                                                                                                                                                                                                                                                                                                              |
| **skillName**           | **String** | Relative .md name, case-insensitive, at most 512 UTF-8 bytes. In URLs, encode the whole name once: references/devices.md becomes references%2Fdevices.md; a literal % becomes %25. Pass the unencoded name to SDKs. Spaces, Unicode and punctuation are allowed. No absolute paths, dot segments, empty segments, backslashes, colons, control characters or surrounding segment whitespace. |
| **ifMatch**             | **String** | Optionally require one strong ETag or quoted skill revision; wildcards and weak tags are rejected.                                                                                                                                                                                                                                                                                           | [optional] |
| **ifNoneMatch**         | **String** | Return 304 if an ETag for this skill matches, or use \* to match any existing skill at this name.                                                                                                                                                                                                                                                                                            | [optional] |

### Return type

[**Skill**](Skill.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSkills

> SkillSet getSkills(projectOrProductUID, opts)

List project skills

List a project&#39;s skills, the Markdown guides agents read, with metadata only unless &#x60;includeContent&#x3D;true&#x60;. Not paginated; a project with none returns &#x60;skills: []&#x60;. On 413, list metadata and use &#x60;GetSkill&#x60; for each document. Subprojects read their parent&#39;s skills. Any role can read them, and so can anonymous callers when the project&#39;s default access is Viewer.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.SkillsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let opts = {
  includeContent: false, // Boolean | Use true to include exact Markdown content. Omit or use false for metadata only.
  ifNoneMatch: "ifNoneMatch_example", // String | Return 304 if an ETag from GetSkills matches, or use * to match any current representation.
};
apiInstance.getSkills(projectOrProductUID, opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type        | Description                                                                                  | Notes                         |
| ----------------------- | ----------- | -------------------------------------------------------------------------------------------- | ----------------------------- |
| **projectOrProductUID** | **String**  |                                                                                              |
| **includeContent**      | **Boolean** | Use true to include exact Markdown content. Omit or use false for metadata only.             | [optional] [default to false] |
| **ifNoneMatch**         | **String**  | Return 304 if an ETag from GetSkills matches, or use \* to match any current representation. | [optional]                    |

### Return type

[**SkillSet**](SkillSet.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## putSkill

> SkillWriteResult putSkill(projectOrProductUID, skillName, skillWrite, opts)

Create or replace a project skill

Create a skill with &#x60;If-None-Match: \*&#x60;, or replace it with &#x60;If-Match&#x60; set to the revision from &#x60;GetSkill&#x60;. Send &#x60;content&#x60; and optional &#x60;kinds&#x60;; omit &#x60;kinds&#x60; to keep them, or send &#x60;[]&#x60; to clear them. An identical write returns unchanged. Requires the Owner or Developer role. Subprojects must write to their parent project.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.SkillsApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let skillName = "references/devices.md"; // String | Relative .md name, case-insensitive, at most 512 UTF-8 bytes. In URLs, encode the whole name once: references/devices.md becomes references%2Fdevices.md; a literal % becomes %25. Pass the unencoded name to SDKs. Spaces, Unicode and punctuation are allowed. No absolute paths, dot segments, empty segments, backslashes, colons, control characters or surrounding segment whitespace.
let skillWrite = { content: "# Project guide\n", kinds: ["index"] }; // SkillWrite |
let opts = {
  ifMatch: "ifMatch_example", // String | Required for replacement; use one strong ETag or quoted skill revision. Wildcards and weak tags are rejected.
  ifNoneMatch: "ifNoneMatch_example", // String | Use * to create only if the name is absent; cannot be combined with If-Match.
};
apiInstance.putSkill(projectOrProductUID, skillName, skillWrite, opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type                            | Description                                                                                                                                                                                                                                                                                                                                                                                  | Notes      |
| ----------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                      |                                                                                                                                                                                                                                                                                                                                                                                              |
| **skillName**           | **String**                      | Relative .md name, case-insensitive, at most 512 UTF-8 bytes. In URLs, encode the whole name once: references/devices.md becomes references%2Fdevices.md; a literal % becomes %25. Pass the unencoded name to SDKs. Spaces, Unicode and punctuation are allowed. No absolute paths, dot segments, empty segments, backslashes, colons, control characters or surrounding segment whitespace. |
| **skillWrite**          | [**SkillWrite**](SkillWrite.md) |                                                                                                                                                                                                                                                                                                                                                                                              |
| **ifMatch**             | **String**                      | Required for replacement; use one strong ETag or quoted skill revision. Wildcards and weak tags are rejected.                                                                                                                                                                                                                                                                                | [optional] |
| **ifNoneMatch**         | **String**                      | Use \* to create only if the name is absent; cannot be combined with If-Match.                                                                                                                                                                                                                                                                                                               | [optional] |

### Return type

[**SkillWriteResult**](SkillWriteResult.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
