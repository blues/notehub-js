# NotehubJs.EnvironmentVariablesApi

All URIs are relative to *https://api.notefile.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDeviceEnvironmentVariable**](EnvironmentVariablesApi.md#deleteDeviceEnvironmentVariable) | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/environment_variables/{key} | 
[**deleteFleetEnvironmentVariable**](EnvironmentVariablesApi.md#deleteFleetEnvironmentVariable) | **DELETE** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables/{key} | 
[**deleteProjectEnvironmentVariable**](EnvironmentVariablesApi.md#deleteProjectEnvironmentVariable) | **DELETE** /v1/projects/{projectUID}/environment_variables/{key} | 
[**getDeviceEnvironmentVariables**](EnvironmentVariablesApi.md#getDeviceEnvironmentVariables) | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/environment_variables | 
[**getDeviceEnvironmentVariablesByPin**](EnvironmentVariablesApi.md#getDeviceEnvironmentVariablesByPin) | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/environment_variables_with_pin | 
[**getFleetEnvironmentVariables**](EnvironmentVariablesApi.md#getFleetEnvironmentVariables) | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables | 
[**getProjectEnvironmentVariables**](EnvironmentVariablesApi.md#getProjectEnvironmentVariables) | **GET** /v1/projects/{projectUID}/environment_variables | 
[**putDeviceEnvironmentVariables**](EnvironmentVariablesApi.md#putDeviceEnvironmentVariables) | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/environment_variables | 
[**putDeviceEnvironmentVariablesByPin**](EnvironmentVariablesApi.md#putDeviceEnvironmentVariablesByPin) | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/environment_variables_with_pin | 
[**putFleetEnvironmentVariables**](EnvironmentVariablesApi.md#putFleetEnvironmentVariables) | **PUT** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables | 
[**putProjectEnvironmentVariables**](EnvironmentVariablesApi.md#putProjectEnvironmentVariables) | **PUT** /v1/projects/{projectUID}/environment_variables | 



## deleteDeviceEnvironmentVariable

> EnvironmentVariables deleteDeviceEnvironmentVariable(projectUID, deviceUID, key)



Delete environment variable of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteDeviceEnvironmentVariable(projectUID, deviceUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **key** | **String**| The environment variable key to delete. | 

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

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

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **fleetUID** | **String**|  | 
 **key** | **String**| The environment variable key to delete. | 

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

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

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteProjectEnvironmentVariable(projectUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
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


## getDeviceEnvironmentVariables

> GetDeviceEnvironmentVariables200Response getDeviceEnvironmentVariables(projectUID, deviceUID)



Get environment variables of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
apiInstance.getDeviceEnvironmentVariables(projectUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 

### Return type

[**GetDeviceEnvironmentVariables200Response**](GetDeviceEnvironmentVariables200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeviceEnvironmentVariablesByPin

> GetDeviceEnvironmentVariables200Response getDeviceEnvironmentVariablesByPin(projectUID, deviceUID)



Get environment variables of a device with device pin authorization

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: pin
let pin = defaultClient.authentications['pin'];
pin.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
apiInstance.getDeviceEnvironmentVariablesByPin(projectUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 

### Return type

[**GetDeviceEnvironmentVariables200Response**](GetDeviceEnvironmentVariables200Response.md)

### Authorization

[pin](../README.md#pin)

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

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let fleetUID = "fleetUID_example"; // String | 
apiInstance.getFleetEnvironmentVariables(projectUID, fleetUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **fleetUID** | **String**|  | 

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

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

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
apiInstance.getProjectEnvironmentVariables(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
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


## putDeviceEnvironmentVariables

> EnvironmentVariables putDeviceEnvironmentVariables(projectUID, deviceUID, environmentVariables)



Put environment variables of a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | Environment variables to be added to the device
apiInstance.putDeviceEnvironmentVariables(projectUID, deviceUID, environmentVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md)| Environment variables to be added to the device | 

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putDeviceEnvironmentVariablesByPin

> EnvironmentVariables putDeviceEnvironmentVariablesByPin(projectUID, deviceUID, environmentVariables)



Put environment variables of a device with device pin authorization

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: pin
let pin = defaultClient.authentications['pin'];
pin.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | Environment variables to be added to the device
apiInstance.putDeviceEnvironmentVariablesByPin(projectUID, deviceUID, environmentVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md)| Environment variables to be added to the device | 

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[pin](../README.md#pin)

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

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **fleetUID** | **String**|  | 
 **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md)| Environment variables to be added to the fleet | 

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

let apiInstance = new NotehubJs.EnvironmentVariablesApi();
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

