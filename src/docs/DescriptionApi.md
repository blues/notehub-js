# NotehubJs.DescriptionApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                     | HTTP request                                                                | Description                                    |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------- |
| [**deleteGlobalDescription**](DescriptionApi.md#deleteGlobalDescription)   | **DELETE** /v1/description/{descriptionName}                                | Delete a global description record             |
| [**deleteProjectDescription**](DescriptionApi.md#deleteProjectDescription) | **DELETE** /v1/projects/{projectOrProductUID}/description/{descriptionName} | Delete a project description record            |
| [**getGlobalDescription**](DescriptionApi.md#getGlobalDescription)         | **GET** /v1/description/{descriptionName}                                   | Get a global description record                |
| [**getProjectDescription**](DescriptionApi.md#getProjectDescription)       | **GET** /v1/projects/{projectOrProductUID}/description/{descriptionName}    | Get a project description record               |
| [**listGlobalDescriptions**](DescriptionApi.md#listGlobalDescriptions)     | **GET** /v1/description                                                     | List global description records                |
| [**listProjectDescriptions**](DescriptionApi.md#listProjectDescriptions)   | **GET** /v1/projects/{projectOrProductUID}/description                      | List a project&#39;s description records       |
| [**setGlobalDescription**](DescriptionApi.md#setGlobalDescription)         | **POST** /v1/description/{descriptionName}                                  | Create or replace a global description record  |
| [**setProjectDescription**](DescriptionApi.md#setProjectDescription)       | **POST** /v1/projects/{projectOrProductUID}/description/{descriptionName}   | Create or replace a project description record |

## deleteGlobalDescription

> deleteGlobalDescription(descriptionName)

Delete a global description record

Delete one platform-wide description record. Blues staff only; returns 403 for anyone else. Returns 404 if the record doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let descriptionName = "_health.qo"; // String | Record name, 1-128 letters, digits, `.`, `_` or `-`, e.g. `_health.qo`.
apiInstance.deleteGlobalDescription(descriptionName).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                | Type       | Description                                                                                                       | Notes |
| ------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- | ----- |
| **descriptionName** | **String** | Record name, 1-128 letters, digits, &#x60;.&#x60;, &#x60;\_&#x60; or &#x60;-&#x60;, e.g. &#x60;\_health.qo&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProjectDescription

> deleteProjectDescription(projectOrProductUID, descriptionName)

Delete a project description record

Delete one of a project&#39;s description records. Requires the Owner or Developer role. Returns 404 if the record doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let descriptionName = "_health.qo"; // String | Record name, 1-128 letters, digits, `.`, `_` or `-`, e.g. `_health.qo`.
apiInstance.deleteProjectDescription(projectOrProductUID, descriptionName).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                                                       | Notes |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                                   |
| **descriptionName**     | **String** | Record name, 1-128 letters, digits, &#x60;.&#x60;, &#x60;\_&#x60; or &#x60;-&#x60;, e.g. &#x60;\_health.qo&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getGlobalDescription

> File getGlobalDescription(descriptionName)

Get a global description record

Get the content of one platform-wide description record, served with the Content-Type it was stored with. Any signed-in user can read it. Returns 404 if the record doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let descriptionName = "_health.qo"; // String | Record name, 1-128 letters, digits, `.`, `_` or `-`, e.g. `_health.qo`.
apiInstance.getGlobalDescription(descriptionName).then(
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

| Name                | Type       | Description                                                                                                       | Notes |
| ------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- | ----- |
| **descriptionName** | **String** | Record name, 1-128 letters, digits, &#x60;.&#x60;, &#x60;\_&#x60; or &#x60;-&#x60;, e.g. &#x60;\_health.qo&#x60;. |

### Return type

**File**

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json

## getProjectDescription

> File getProjectDescription(projectOrProductUID, descriptionName)

Get a project description record

Get the content of one of a project&#39;s description records, served with the Content-Type it was stored with. For the metadata of every record, use &#x60;ListProjectDescriptions&#x60;. Returns 404 if the record doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let descriptionName = "_health.qo"; // String | Record name, 1-128 letters, digits, `.`, `_` or `-`, e.g. `_health.qo`.
apiInstance.getProjectDescription(projectOrProductUID, descriptionName).then(
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

| Name                    | Type       | Description                                                                                                       | Notes |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                                   |
| **descriptionName**     | **String** | Record name, 1-128 letters, digits, &#x60;.&#x60;, &#x60;\_&#x60; or &#x60;-&#x60;, e.g. &#x60;\_health.qo&#x60;. |

### Return type

**File**

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json

## listGlobalDescriptions

> DescriptionRecordList listGlobalDescriptions()

List global description records

List the platform-wide description records that Blues publishes, without their content. Any signed-in user can read them. For a project&#39;s own records, use &#x60;ListProjectDescriptions&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
apiInstance.listGlobalDescriptions().then(
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

This endpoint does not need any parameter.

### Return type

[**DescriptionRecordList**](DescriptionRecordList.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProjectDescriptions

> DescriptionRecordList listProjectDescriptions(projectOrProductUID)

List a project&#39;s description records

List a project&#39;s description records by name, with each one&#39;s content type, size and change history but not its content. A description record is a named document, such as Markdown, JSON or plain text, that explains the project&#39;s data. For Blues&#39; platform-wide records, use &#x60;ListGlobalDescriptions&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.listProjectDescriptions(projectOrProductUID).then(
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

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**DescriptionRecordList**](DescriptionRecordList.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setGlobalDescription

> DescriptionRecord setGlobalDescription(descriptionName, body)

Create or replace a global description record

Store a platform-wide named document that every signed-in user can read, replacing any record with that name. The Content-Type is handled as in &#x60;SetProjectDescription&#x60;. Blues staff only; returns 403 for anyone else. Returns 400 if the content is over 10 MB or the name isn&#39;t valid.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let descriptionName = "_health.qo"; // String | Record name, 1-128 letters, digits, `.`, `_` or `-`, e.g. `_health.qo`.
let body = "/path/to/file"; // File | The document to store, up to 10 MB. Send its Content-Type, such as `text/markdown`; Markdown isn't detected.
apiInstance.setGlobalDescription(descriptionName, body).then(
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

| Name                | Type       | Description                                                                                                                | Notes |
| ------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- | ----- |
| **descriptionName** | **String** | Record name, 1-128 letters, digits, &#x60;.&#x60;, &#x60;\_&#x60; or &#x60;-&#x60;, e.g. &#x60;\_health.qo&#x60;.          |
| **body**            | **File**   | The document to store, up to 10 MB. Send its Content-Type, such as &#x60;text/markdown&#x60;; Markdown isn&#39;t detected. |

### Return type

[**DescriptionRecord**](DescriptionRecord.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

## setProjectDescription

> DescriptionRecord setProjectDescription(projectOrProductUID, descriptionName, body)

Create or replace a project description record

Store a named document in a project, replacing any record with that name. The request&#39;s Content-Type is stored and served back by &#x60;GetProjectDescription&#x60;; if it&#39;s missing or &#x60;application/octet-stream&#x60;, the type is detected from the content. Requires the Owner or Developer role. Returns 400 if the content is over 10 MB or the name isn&#39;t valid.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let descriptionName = "_health.qo"; // String | Record name, 1-128 letters, digits, `.`, `_` or `-`, e.g. `_health.qo`.
let body = "/path/to/file"; // File | The document to store, up to 10 MB. Send its Content-Type, such as `text/markdown`; Markdown isn't detected.
apiInstance
  .setProjectDescription(projectOrProductUID, descriptionName, body)
  .then(
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

| Name                    | Type       | Description                                                                                                                | Notes |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                                            |
| **descriptionName**     | **String** | Record name, 1-128 letters, digits, &#x60;.&#x60;, &#x60;\_&#x60; or &#x60;-&#x60;, e.g. &#x60;\_health.qo&#x60;.          |
| **body**                | **File**   | The document to store, up to 10 MB. Send its Content-Type, such as &#x60;text/markdown&#x60;; Markdown isn&#39;t detected. |

### Return type

[**DescriptionRecord**](DescriptionRecord.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json
