# NotehubJs.ProjectApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                       | HTTP request                                                     | Description |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| [**cloneProject**](ProjectApi.md#cloneProject)                               | **POST** /v1/projects/{projectUID}/clone                         |
| [**createProduct**](ProjectApi.md#createProduct)                             | **POST** /v1/projects/{projectUID}/products                      |
| [**createProject**](ProjectApi.md#createProject)                             | **POST** /v1/projects                                            |
| [**deleteProject**](ProjectApi.md#deleteProject)                             | **DELETE** /v1/projects/{projectUID}                             |
| [**disableGlobalTransformation**](ProjectApi.md#disableGlobalTransformation) | **POST** /v1/projects/{projectUID}/global-transformation/disable |
| [**enableGlobalTransformation**](ProjectApi.md#enableGlobalTransformation)   | **POST** /v1/projects/{projectUID}/global-transformation/enable  |
| [**getProject**](ProjectApi.md#getProject)                                   | **GET** /v1/projects/{projectUID}                                |
| [**getProjectByProduct**](ProjectApi.md#getProjectByProduct)                 | **GET** /v1/products/{productUID}/project                        |
| [**getProjectMembers**](ProjectApi.md#getProjectMembers)                     | **GET** /v1/projects/{projectUID}/members                        |
| [**getProjectProducts**](ProjectApi.md#getProjectProducts)                   | **GET** /v1/projects/{projectUID}/products                       |
| [**getProjects**](ProjectApi.md#getProjects)                                 | **GET** /v1/projects                                             |
| [**setGlobalTransformation**](ProjectApi.md#setGlobalTransformation)         | **POST** /v1/projects/{projectUID}/global-transformation         |

## cloneProject

> Project cloneProject(projectUID, cloneProjectRequest)

Clone a Project

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications["api_key"];
api_key.apiKey = "YOUR API KEY";

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = "projectUID_example"; // String | The project UID to be cloned.
let cloneProjectRequest = new NotehubJs.CloneProjectRequest(); // CloneProjectRequest | Project to be cloned
apiInstance.cloneProject(projectUID, cloneProjectRequest).then(
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

| Name                    | Type                                              | Description                   | Notes |
| ----------------------- | ------------------------------------------------- | ----------------------------- | ----- |
| **projectUID**          | **String**                                        | The project UID to be cloned. |
| **cloneProjectRequest** | [**CloneProjectRequest**](CloneProjectRequest.md) | Project to be cloned          |

### Return type

[**Project**](Project.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProduct

> Product createProduct(projectUID, createProductRequest)

Create Product within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let createProductRequest = new NotehubJs.CreateProductRequest(); // CreateProductRequest | Product to be created
apiInstance.createProduct(projectUID, createProductRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description           | Notes |
| ------------------------ | --------------------------------------------------- | --------------------- | ----- |
| **projectUID**           | **String**                                          |                       |
| **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md) | Product to be created |

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProject

> Project createProject(createProjectRequest)

Create a Project

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications["api_key"];
api_key.apiKey = "YOUR API KEY";

let apiInstance = new NotehubJs.ProjectApi();
let createProjectRequest = new NotehubJs.CreateProjectRequest(); // CreateProjectRequest | Project to be created
apiInstance.createProject(createProjectRequest).then(
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

| Name                     | Type                                                | Description           | Notes |
| ------------------------ | --------------------------------------------------- | --------------------- | ----- |
| **createProjectRequest** | [**CreateProjectRequest**](CreateProjectRequest.md) | Project to be created |

### Return type

[**Project**](Project.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteProject

> deleteProject(projectUID)

Delete a Project by ProjectUID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.deleteProject(projectUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## disableGlobalTransformation

> disableGlobalTransformation(projectUID)

Disable the project-level event JSONata transformation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.disableGlobalTransformation(projectUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## enableGlobalTransformation

> enableGlobalTransformation(projectUID)

Enable the project-level event JSONata transformation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.enableGlobalTransformation(projectUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProject

> Project getProject(projectUID)

Get a Project by ProjectUID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProject(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |

### Return type

[**Project**](Project.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectByProduct

> Project getProjectByProduct(productUID)

Get a Project by ProductUID

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications["api_key"];
api_key.apiKey = "YOUR API KEY";

let apiInstance = new NotehubJs.ProjectApi();
let productUID = com.blues.airnote; // String |
apiInstance.getProjectByProduct(productUID).then(
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

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **productUID** | **String** |             |

### Return type

[**Project**](Project.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectMembers

> GetProjectMembers200Response getProjectMembers(projectUID)

Get Project Members

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectMembers(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |

### Return type

[**GetProjectMembers200Response**](GetProjectMembers200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectProducts

> GetProjectProducts200Response getProjectProducts(projectUID)

Get Products within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectProducts(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |

### Return type

[**GetProjectProducts200Response**](GetProjectProducts200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjects

> GetProjects200Response getProjects()

Get Projects accessible by the api_key

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications["api_key"];
api_key.apiKey = "YOUR API KEY";

let apiInstance = new NotehubJs.ProjectApi();
apiInstance.getProjects().then(
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

[**GetProjects200Response**](GetProjects200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## setGlobalTransformation

> setGlobalTransformation(projectUID, body)

Set the project-level event JSONata transformation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let body = {key: null}; // Object | JSONata expression which will be applied to each event before it is persisted and routed
apiInstance.setGlobalTransformation(projectUID, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description                                                                              | Notes |
| -------------- | ---------- | ---------------------------------------------------------------------------------------- | ----- |
| **projectUID** | **String** |                                                                                          |
| **body**       | **Object** | JSONata expression which will be applied to each event before it is persisted and routed |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
