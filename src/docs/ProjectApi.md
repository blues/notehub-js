# NotehubJs.ProjectApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                 | HTTP request                                                                       | Description |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| [**cloneProject**](ProjectApi.md#cloneProject)                                         | **POST** /v1/projects/{projectUID}/clone                                           |
| [**createFleet**](ProjectApi.md#createFleet)                                           | **POST** /v1/projects/{projectUID}/fleets                                          |
| [**createProduct**](ProjectApi.md#createProduct)                                       | **POST** /v1/projects/{projectUID}/products                                        |
| [**createProject**](ProjectApi.md#createProject)                                       | **POST** /v1/projects                                                              |
| [**deleteDeviceFleets**](ProjectApi.md#deleteDeviceFleets)                             | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/fleets                    |
| [**deleteFleet**](ProjectApi.md#deleteFleet)                                           | **DELETE** /v1/projects/{projectUID}/fleets/{fleetUID}                             |
| [**deleteFleetEnvironmentVariable**](ProjectApi.md#deleteFleetEnvironmentVariable)     | **DELETE** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables/{key} |
| [**deleteProject**](ProjectApi.md#deleteProject)                                       | **DELETE** /v1/projects/{projectUID}                                               |
| [**deleteProjectEnvironmentVariable**](ProjectApi.md#deleteProjectEnvironmentVariable) | **DELETE** /v1/projects/{projectUID}/environment_variables/{key}                   |
| [**disableGlobalTransformation**](ProjectApi.md#disableGlobalTransformation)           | **POST** /v1/projects/{projectUID}/global-transformation/disable                   |
| [**enableGlobalTransformation**](ProjectApi.md#enableGlobalTransformation)             | **POST** /v1/projects/{projectUID}/global-transformation/enable                    |
| [**getDeviceFleets**](ProjectApi.md#getDeviceFleets)                                   | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/fleets                       |
| [**getFleetEnvironmentVariables**](ProjectApi.md#getFleetEnvironmentVariables)         | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables          |
| [**getProject**](ProjectApi.md#getProject)                                             | **GET** /v1/projects/{projectUID}                                                  |
| [**getProjectByProduct**](ProjectApi.md#getProjectByProduct)                           | **GET** /v1/products/{productUID}/project                                          |
| [**getProjectEnvironmentVariables**](ProjectApi.md#getProjectEnvironmentVariables)     | **GET** /v1/projects/{projectUID}/environment_variables                            |
| [**getProjectFleets**](ProjectApi.md#getProjectFleets)                                 | **GET** /v1/projects/{projectUID}/fleets                                           |
| [**getProjectMembers**](ProjectApi.md#getProjectMembers)                               | **GET** /v1/projects/{projectUID}/members                                          |
| [**getProjectProducts**](ProjectApi.md#getProjectProducts)                             | **GET** /v1/projects/{projectUID}/products                                         |
| [**getProjects**](ProjectApi.md#getProjects)                                           | **GET** /v1/projects                                                               |
| [**putDeviceFleets**](ProjectApi.md#putDeviceFleets)                                   | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/fleets                       |
| [**putFleetEnvironmentVariables**](ProjectApi.md#putFleetEnvironmentVariables)         | **PUT** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables          |
| [**putProjectEnvironmentVariables**](ProjectApi.md#putProjectEnvironmentVariables)     | **PUT** /v1/projects/{projectUID}/environment_variables                            |
| [**setGlobalTransformation**](ProjectApi.md#setGlobalTransformation)                   | **POST** /v1/projects/{projectUID}/global-transformation                           |
| [**updateFleet**](ProjectApi.md#updateFleet)                                           | **PUT** /v1/projects/{projectUID}/fleets/{fleetUID}                                |

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

## createFleet

> Fleet createFleet(projectUID, createFleetRequest)

Create Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let createFleetRequest = new NotehubJs.CreateFleetRequest(); // CreateFleetRequest | Fleet to be added
apiInstance.createFleet(projectUID, createFleetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                   | Type                                            | Description       | Notes |
| ---------------------- | ----------------------------------------------- | ----------------- | ----- |
| **projectUID**         | **String**                                      |                   |
| **createFleetRequest** | [**CreateFleetRequest**](CreateFleetRequest.md) | Fleet to be added |

### Return type

[**Fleet**](Fleet.md)

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

## deleteDeviceFleets

> GetProjectFleets200Response deleteDeviceFleets(projectUID, deviceUID, deleteDeviceFleetsRequest)

Remove Device from Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let deleteDeviceFleetsRequest = new NotehubJs.DeleteDeviceFleetsRequest(); // DeleteDeviceFleetsRequest | The fleets to remove from the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
apiInstance.deleteDeviceFleets(projectUID, deviceUID, deleteDeviceFleetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                          | Type                                                          | Description                                                                                                                                                                                                                                                                                           | Notes |
| ----------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectUID**                | **String**                                                    |                                                                                                                                                                                                                                                                                                       |
| **deviceUID**                 | **String**                                                    |                                                                                                                                                                                                                                                                                                       |
| **deleteDeviceFleetsRequest** | [**DeleteDeviceFleetsRequest**](DeleteDeviceFleetsRequest.md) | The fleets to remove from the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error. |

### Return type

[**GetProjectFleets200Response**](GetProjectFleets200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteFleet

> deleteFleet(projectUID, fleetUID)

Delete Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.deleteFleet(projectUID, fleetUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **fleetUID**   | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteFleetEnvironmentVariable

> EnvironmentVariables deleteFleetEnvironmentVariable(projectUID, fleetUID, key)

Delete environment variables of a fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteFleetEnvironmentVariable(projectUID, fleetUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description                             | Notes |
| -------------- | ---------- | --------------------------------------- | ----- |
| **projectUID** | **String** |                                         |
| **fleetUID**   | **String** |                                         |
| **key**        | **String** | The environment variable key to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
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

## deleteProjectEnvironmentVariable

> EnvironmentVariables deleteProjectEnvironmentVariable(projectUID, key)

Delete an environment variable of a project by key

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteProjectEnvironmentVariable(projectUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description                             | Notes |
| -------------- | ---------- | --------------------------------------- | ----- |
| **projectUID** | **String** |                                         |
| **key**        | **String** | The environment variable key to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

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

## getDeviceFleets

> GetProjectFleets200Response getDeviceFleets(projectUID, deviceUID)

Get Device Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
apiInstance.getDeviceFleets(projectUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **deviceUID**  | **String** |             |

### Return type

[**GetProjectFleets200Response**](GetProjectFleets200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetEnvironmentVariables

> EnvironmentVariables getFleetEnvironmentVariables(projectUID, fleetUID)

Get environment variables of a fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.getFleetEnvironmentVariables(projectUID, fleetUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **fleetUID**   | **String** |             |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

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

## getProjectEnvironmentVariables

> EnvironmentVariables getProjectEnvironmentVariables(projectUID)

Get environment variables of a project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectEnvironmentVariables(projectUID).then((data) => {
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

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectFleets

> GetProjectFleets200Response getProjectFleets(projectUID)

Get Project Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectFleets(projectUID).then((data) => {
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

[**GetProjectFleets200Response**](GetProjectFleets200Response.md)

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

## putDeviceFleets

> GetProjectFleets200Response putDeviceFleets(projectUID, deviceUID, putDeviceFleetsRequest)

Add Device to Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = "deviceUID_example"; // String |
let putDeviceFleetsRequest = new NotehubJs.PutDeviceFleetsRequest(); // PutDeviceFleetsRequest | The fleets to add to the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
apiInstance.putDeviceFleets(projectUID, deviceUID, putDeviceFleetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                       | Type                                                    | Description                                                                                                                                                                                                                                                                                      | Notes |
| -------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| **projectUID**             | **String**                                              |                                                                                                                                                                                                                                                                                                  |
| **deviceUID**              | **String**                                              |                                                                                                                                                                                                                                                                                                  |
| **putDeviceFleetsRequest** | [**PutDeviceFleetsRequest**](PutDeviceFleetsRequest.md) | The fleets to add to the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error. |

### Return type

[**GetProjectFleets200Response**](GetProjectFleets200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## putFleetEnvironmentVariables

> EnvironmentVariables putFleetEnvironmentVariables(projectUID, fleetUID, environmentVariables)

Put environment variables of a fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | Environment variables to be added to the fleet
apiInstance.putFleetEnvironmentVariables(projectUID, fleetUID, environmentVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description                                    | Notes |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------- | ----- |
| **projectUID**           | **String**                                          |                                                |
| **fleetUID**             | **String**                                          |                                                |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) | Environment variables to be added to the fleet |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## putProjectEnvironmentVariables

> EnvironmentVariables putProjectEnvironmentVariables(projectUID, opts)

Put environment variables of a project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'environmentVariables': new NotehubJs.EnvironmentVariables() // EnvironmentVariables |
};
apiInstance.putProjectEnvironmentVariables(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description | Notes      |
| ------------------------ | --------------------------------------------------- | ----------- | ---------- |
| **projectUID**           | **String**                                          |             |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) |             | [optional] |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
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

## updateFleet

> Fleet updateFleet(projectUID, fleetUID, updateFleetRequest)

Update Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let updateFleetRequest = new NotehubJs.UpdateFleetRequest(); // UpdateFleetRequest | Fleet details to update
apiInstance.updateFleet(projectUID, fleetUID, updateFleetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                   | Type                                            | Description             | Notes |
| ---------------------- | ----------------------------------------------- | ----------------------- | ----- |
| **projectUID**         | **String**                                      |                         |
| **fleetUID**           | **String**                                      |                         |
| **updateFleetRequest** | [**UpdateFleetRequest**](UpdateFleetRequest.md) | Fleet details to update |

### Return type

[**Fleet**](Fleet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
