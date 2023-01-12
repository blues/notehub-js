# NotehubJs.ProjectApi

All URIs are relative to *https://api.notefile.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProjectApi.md#createProduct) | **POST** /v1/projects/{projectUID}/products | 
[**createProject**](ProjectApi.md#createProject) | **POST** /v1/projects | 
[**deleteProjectEnvironmentVariable**](ProjectApi.md#deleteProjectEnvironmentVariable) | **DELETE** /v1/projects/{projectUID}/environment_variables/{key} | 
[**getProject**](ProjectApi.md#getProject) | **GET** /v1/projects/{projectUID} | 
[**getProjectByProduct**](ProjectApi.md#getProjectByProduct) | **GET** /v1/products/{productUID}/project | 
[**getProjectDevicePublicKeys**](ProjectApi.md#getProjectDevicePublicKeys) | **GET** /v1/projects/{projectUID}/devices/public-keys | 
[**getProjectDevices**](ProjectApi.md#getProjectDevices) | **GET** /v1/projects/{projectUID}/devices | 
[**getProjectEnvironmentVariables**](ProjectApi.md#getProjectEnvironmentVariables) | **GET** /v1/projects/{projectUID}/environment_variables | 
[**getProjectEvents**](ProjectApi.md#getProjectEvents) | **GET** /v1/projects/{projectUID}/events | 
[**getProjectEventsByCursor**](ProjectApi.md#getProjectEventsByCursor) | **GET** /v1/projects/{projectUID}/events-cursor | 
[**getProjectFleetDevices**](ProjectApi.md#getProjectFleetDevices) | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/devices | 
[**getProjectMembers**](ProjectApi.md#getProjectMembers) | **GET** /v1/projects/{projectUID}/members | 
[**getProjectProducts**](ProjectApi.md#getProjectProducts) | **GET** /v1/projects/{projectUID}/products | 
[**getProjects**](ProjectApi.md#getProjects) | **GET** /v1/projects | 
[**putProjectEnvironmentVariables**](ProjectApi.md#putProjectEnvironmentVariables) | **PUT** /v1/projects/{projectUID}/environment_variables | 



## createProduct

> Product createProduct(projectUID, createProductRequest)



Create Product within a Project

### Example

```javascript
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let createProductRequest = new NotehubJs.CreateProductRequest(); // CreateProductRequest | Product to be created
apiInstance.createProduct(projectUID, createProductRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)| Product to be created | 

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
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let createProjectRequest = new NotehubJs.CreateProjectRequest(); // CreateProjectRequest | Project to be created
apiInstance.createProject(createProjectRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProjectRequest** | [**CreateProjectRequest**](CreateProjectRequest.md)| Project to be created | 

### Return type

[**Project**](Project.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProjectEnvironmentVariable

> EnvironmentVariables deleteProjectEnvironmentVariable(projectUID, key)



Delete an environment variable of a project by key

### Example

```javascript
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteProjectEnvironmentVariable(projectUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **key** | **String**| The environment variable key to delete. | 

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
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
apiInstance.getProject(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 

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
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let productUID = com.blues.airnote; // String | 
apiInstance.getProjectByProduct(productUID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productUID** | **String**|  | 

### Return type

[**Project**](Project.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectDevicePublicKeys

> GetProjectDevicePublicKeys200Response getProjectDevicePublicKeys(projectUID, opts)



Get Device Public Keys of a Project

### Example

```javascript
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let opts = {
  'pageSize': 50, // Number | 
  'pageNum': 1 // Number | 
};
apiInstance.getProjectDevicePublicKeys(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **pageSize** | **Number**|  | [optional] [default to 50]
 **pageNum** | **Number**|  | [optional] [default to 1]

### Return type

[**GetProjectDevicePublicKeys200Response**](GetProjectDevicePublicKeys200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectDevices

> GetProjectDevices200Response getProjectDevices(projectUID, opts)



Get Devices of a Project

### Example

```javascript
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let opts = {
  'pageSize': 50, // Number | 
  'pageNum': 1 // Number | 
};
apiInstance.getProjectDevices(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **pageSize** | **Number**|  | [optional] [default to 50]
 **pageNum** | **Number**|  | [optional] [default to 1]

### Return type

[**GetProjectDevices200Response**](GetProjectDevices200Response.md)

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
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
apiInstance.getProjectEnvironmentVariables(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectEvents

> GetProjectEvents200Response getProjectEvents(projectUID, opts)



Get Events of a Project

### Example

```javascript
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let opts = {
  'pageSize': 50, // Number | 
  'pageNum': 1, // Number | 
  'deviceUIDs': ["null"], // [String] | A comma separated list of Device UIDs.
  'sortBy': "'captured'", // String | 
  'sortOrder': "'asc'", // String | 
  'startDate': 1628631763, // Number | Unix timestamp
  'endDate': 1657894210 // Number | Unix timestamp
};
apiInstance.getProjectEvents(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **pageSize** | **Number**|  | [optional] [default to 50]
 **pageNum** | **Number**|  | [optional] [default to 1]
 **deviceUIDs** | [**[String]**](String.md)| A comma separated list of Device UIDs. | [optional] 
 **sortBy** | **String**|  | [optional] [default to &#39;captured&#39;]
 **sortOrder** | **String**|  | [optional] [default to &#39;asc&#39;]
 **startDate** | **Number**| Unix timestamp | [optional] 
 **endDate** | **Number**| Unix timestamp | [optional] 

### Return type

[**GetProjectEvents200Response**](GetProjectEvents200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectEventsByCursor

> GetProjectEventsByCursor200Response getProjectEventsByCursor(projectUID, opts)



Get Events of a Project by cursor

### Example

```javascript
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let opts = {
  'limit': 50, // Number | 
  'cursor': "cursor_example", // String | A cursor, which can be obtained from the `next_cursor` value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included. 
  'sortOrder': "'asc'" // String | 
};
apiInstance.getProjectEventsByCursor(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **limit** | **Number**|  | [optional] [default to 50]
 **cursor** | **String**| A cursor, which can be obtained from the &#x60;next_cursor&#x60; value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included.  | [optional] 
 **sortOrder** | **String**|  | [optional] [default to &#39;asc&#39;]

### Return type

[**GetProjectEventsByCursor200Response**](GetProjectEventsByCursor200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectFleetDevices

> GetProjectDevices200Response getProjectFleetDevices(projectUID, fleetUID, opts)



Get Devices of a Fleet within a Project

### Example

```javascript
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let fleetUID = "fleetUID_example"; // String | 
let opts = {
  'pageSize': 50, // Number | 
  'pageNum': 1 // Number | 
};
apiInstance.getProjectFleetDevices(projectUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **fleetUID** | **String**|  | 
 **pageSize** | **Number**|  | [optional] [default to 50]
 **pageNum** | **Number**|  | [optional] [default to 1]

### Return type

[**GetProjectDevices200Response**](GetProjectDevices200Response.md)

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
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
apiInstance.getProjectMembers(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 

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
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
apiInstance.getProjectProducts(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 

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
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
apiInstance.getProjects().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

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


## putProjectEnvironmentVariables

> EnvironmentVariables putProjectEnvironmentVariables(projectUID, opts)



Put environment variables of a project

### Example

```javascript
import NotehubJs from 'notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new NotehubJs.ProjectApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let opts = {
  'environmentVariables': new NotehubJs.EnvironmentVariables() // EnvironmentVariables | 
};
apiInstance.putProjectEnvironmentVariables(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md)|  | [optional] 

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

