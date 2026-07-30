# NotehubJs.DescriptionApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                     | HTTP request                                                                | Description |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| [**deleteGlobalDescription**](DescriptionApi.md#deleteGlobalDescription)   | **DELETE** /v1/description/{descriptionName}                                |
| [**deleteProjectDescription**](DescriptionApi.md#deleteProjectDescription) | **DELETE** /v1/projects/{projectOrProductUID}/description/{descriptionName} |
| [**getGlobalDescription**](DescriptionApi.md#getGlobalDescription)         | **GET** /v1/description/{descriptionName}                                   |
| [**getProjectDescription**](DescriptionApi.md#getProjectDescription)       | **GET** /v1/projects/{projectOrProductUID}/description/{descriptionName}    |
| [**listGlobalDescriptions**](DescriptionApi.md#listGlobalDescriptions)     | **GET** /v1/description                                                     |
| [**listProjectDescriptions**](DescriptionApi.md#listProjectDescriptions)   | **GET** /v1/projects/{projectOrProductUID}/description                      |
| [**setGlobalDescription**](DescriptionApi.md#setGlobalDescription)         | **POST** /v1/description/{descriptionName}                                  |
| [**setProjectDescription**](DescriptionApi.md#setProjectDescription)       | **POST** /v1/projects/{projectOrProductUID}/description/{descriptionName}   |

## deleteGlobalDescription

> deleteGlobalDescription(descriptionName)

Delete a global description record by name (Blues staff only).

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let descriptionName = "_health.qo"; // String |
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

| Name                | Type       | Description | Notes |
| ------------------- | ---------- | ----------- | ----- |
| **descriptionName** | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProjectDescription

> deleteProjectDescription(projectOrProductUID, descriptionName)

Delete a project description record by name.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let descriptionName = "_health.qo"; // String |
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

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **descriptionName**     | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getGlobalDescription

> File getGlobalDescription(descriptionName)

Get a global description record. Returns the raw content with its stored Content-Type.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let descriptionName = "_health.qo"; // String |
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

| Name                | Type       | Description | Notes |
| ------------------- | ---------- | ----------- | ----- |
| **descriptionName** | **String** |             |

### Return type

**File**

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json

## getProjectDescription

> File getProjectDescription(projectOrProductUID, descriptionName)

Get a project description record. Returns the raw content with its stored Content-Type.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let descriptionName = "_health.qo"; // String |
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

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **descriptionName**     | **String** |             |

### Return type

**File**

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json

## listGlobalDescriptions

> DescriptionRecordList listGlobalDescriptions()

List metadata for all global description records.

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

List metadata for all description records in a project.

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

Create or replace a global description record, Blues staff only (up to 10MB). The request Content-Type is stored and returned on GET; when omitted it is detected (JSON or text).

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let descriptionName = "_health.qo"; // String |
let body = "/path/to/file"; // File | The description content (up to 10MB). The request Content-Type is stored and returned on GET; when omitted it is detected (JSON or text).
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

| Name                | Type       | Description                                                                                                                               | Notes |
| ------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **descriptionName** | **String** |                                                                                                                                           |
| **body**            | **File**   | The description content (up to 10MB). The request Content-Type is stored and returned on GET; when omitted it is detected (JSON or text). |

### Return type

[**DescriptionRecord**](DescriptionRecord.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json

## setProjectDescription

> DescriptionRecord setProjectDescription(projectOrProductUID, descriptionName, body)

Create or replace a project description record (up to 10MB). The request Content-Type is stored and returned on GET; when omitted it is detected (JSON or text).

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DescriptionApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let descriptionName = "_health.qo"; // String |
let body = "/path/to/file"; // File | The description content (up to 10MB). The request Content-Type is stored and returned on GET; when omitted it is detected (JSON or text).
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

| Name                    | Type       | Description                                                                                                                               | Notes |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                                                           |
| **descriptionName**     | **String** |                                                                                                                                           |
| **body**                | **File**   | The description content (up to 10MB). The request Content-Type is stored and returned on GET; when omitted it is detected (JSON or text). |

### Return type

[**DescriptionRecord**](DescriptionRecord.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json
