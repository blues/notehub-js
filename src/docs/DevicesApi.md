# BluesNotehubJs.DevicesApi

All URIs are relative to *https://api.notefile.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProjectDevice**](DevicesApi.md#deleteProjectDevice) | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID} | 
[**getDevice**](DevicesApi.md#getDevice) | **GET** /v1/projects/{projectUID}/devices/{deviceUID} | 
[**getProjectDevicePublicKeys**](DevicesApi.md#getProjectDevicePublicKeys) | **GET** /v1/projects/{projectUID}/devices/public-keys | 
[**getProjectDevices**](DevicesApi.md#getProjectDevices) | **GET** /v1/projects/{projectUID}/devices | 
[**getProjectFleetDevices**](DevicesApi.md#getProjectFleetDevices) | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/devices | 



## deleteProjectDevice

> deleteProjectDevice(projectUID, deviceUID, purge)



Delete Device

### Example

```javascript
import BluesNotehubJs from '@blues/notehub-js';
let defaultClient = BluesNotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BluesNotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let purge = "'false'"; // String | 
apiInstance.deleteProjectDevice(projectUID, deviceUID, purge).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **purge** | **String**|  | [default to &#39;false&#39;]

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDevice

> Device getDevice(projectUID, deviceUID)



Get Device

### Example

```javascript
import BluesNotehubJs from '@blues/notehub-js';
let defaultClient = BluesNotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BluesNotehubJs.DevicesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
apiInstance.getDevice(projectUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
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

[**Device**](Device.md)

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
import BluesNotehubJs from '@blues/notehub-js';
let defaultClient = BluesNotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BluesNotehubJs.DevicesApi();
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
import BluesNotehubJs from '@blues/notehub-js';
let defaultClient = BluesNotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BluesNotehubJs.DevicesApi();
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


## getProjectFleetDevices

> GetProjectDevices200Response getProjectFleetDevices(projectUID, fleetUID, opts)



Get Devices of a Fleet within a Project

### Example

```javascript
import BluesNotehubJs from '@blues/notehub-js';
let defaultClient = BluesNotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new BluesNotehubJs.DevicesApi();
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

