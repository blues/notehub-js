# NotehubJs.FleetApi

All URIs are relative to *https://api.notefile.net*

| Method                                               | HTTP request                                                 | Description |
| ---------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| [**createFleet**](FleetApi.md#createFleet)           | **POST** /v1/projects/{projectUID}/fleets                    |
| [**deleteFleet**](FleetApi.md#deleteFleet)           | **DELETE** /v1/projects/{projectUID}/fleets/{fleetUID}       |
| [**getDeviceFleets**](FleetApi.md#getDeviceFleets)   | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/fleets |
| [**getProjectFleets**](FleetApi.md#getProjectFleets) | **GET** /v1/projects/{projectUID}/fleets                     |
| [**putDeviceFleets**](FleetApi.md#putDeviceFleets)   | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/fleets |
| [**updateFleet**](FleetApi.md#updateFleet)           | **PUT** /v1/projects/{projectUID}/fleets/{fleetUID}          |

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

let apiInstance = new NotehubJs.FleetApi();
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

let apiInstance = new NotehubJs.FleetApi();
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

let apiInstance = new NotehubJs.FleetApi();
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

let apiInstance = new NotehubJs.FleetApi();
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

let apiInstance = new NotehubJs.FleetApi();
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

let apiInstance = new NotehubJs.FleetApi();
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
