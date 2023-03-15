# NotehubJs.FleetApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                           | HTTP request                                                                       | Description |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| [**createFleet**](FleetApi.md#createFleet)                                       | **POST** /v1/projects/{projectUID}/fleets                                          |
| [**deleteDeviceFleets**](FleetApi.md#deleteDeviceFleets)                         | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/fleets                    |
| [**deleteFleet**](FleetApi.md#deleteFleet)                                       | **DELETE** /v1/projects/{projectUID}/fleets/{fleetUID}                             |
| [**deleteFleetEnvironmentVariable**](FleetApi.md#deleteFleetEnvironmentVariable) | **DELETE** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables/{key} |
| [**getDeviceFleets**](FleetApi.md#getDeviceFleets)                               | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/fleets                       |
| [**getFleetEnvironmentVariables**](FleetApi.md#getFleetEnvironmentVariables)     | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables          |
| [**getFleetEvents**](FleetApi.md#getFleetEvents)                                 | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/events                         |
| [**getFleetEventsByCursor**](FleetApi.md#getFleetEventsByCursor)                 | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/events-cursor                  |
| [**getProjectFleetDevices**](FleetApi.md#getProjectFleetDevices)                 | **GET** /v1/projects/{projectUID}/fleets/{fleetUID}/devices                        |
| [**getProjectFleets**](FleetApi.md#getProjectFleets)                             | **GET** /v1/projects/{projectUID}/fleets                                           |
| [**putDeviceFleets**](FleetApi.md#putDeviceFleets)                               | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/fleets                       |
| [**putFleetEnvironmentVariables**](FleetApi.md#putFleetEnvironmentVariables)     | **PUT** /v1/projects/{projectUID}/fleets/{fleetUID}/environment_variables          |
| [**updateFleet**](FleetApi.md#updateFleet)                                       | **PUT** /v1/projects/{projectUID}/fleets/{fleetUID}                                |

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

let apiInstance = new NotehubJs.FleetApi();
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

let apiInstance = new NotehubJs.FleetApi();
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

let apiInstance = new NotehubJs.FleetApi();
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

## getFleetEvents

> GetProjectEvents200Response getFleetEvents(projectUID, fleetUID, opts)

Get Events of a Fleet

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
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': "deviceUID_example", // String | A Device UID.
  'sortBy': "'captured'", // String |
  'sortOrder': "'asc'", // String |
  'startDate': 1628631763, // Number | Unix timestamp
  'endDate': 1657894210, // Number | Unix timestamp
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo // String |
};
apiInstance.getFleetEvents(projectUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type        | Description    | Notes                                      |
| ------------------- | ----------- | -------------- | ------------------------------------------ |
| **projectUID**      | **String**  |                |
| **fleetUID**        | **String**  |                |
| **pageSize**        | **Number**  |                | [optional] [default to 50]                 |
| **pageNum**         | **Number**  |                | [optional] [default to 1]                  |
| **deviceUID**       | **String**  | A Device UID.  | [optional]                                 |
| **sortBy**          | **String**  |                | [optional] [default to &#39;captured&#39;] |
| **sortOrder**       | **String**  |                | [optional] [default to &#39;asc&#39;]      |
| **startDate**       | **Number**  | Unix timestamp | [optional]                                 |
| **endDate**         | **Number**  | Unix timestamp | [optional]                                 |
| **systemFilesOnly** | **Boolean** |                | [optional]                                 |
| **files**           | **String**  |                | [optional]                                 |

### Return type

[**GetProjectEvents200Response**](GetProjectEvents200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetEventsByCursor

> GetProjectEventsByCursor200Response getFleetEventsByCursor(projectUID, fleetUID, opts)

Get Events of a Fleet by cursor

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
let opts = {
  'limit': 50, // Number |
  'cursor': "cursor_example", // String | A cursor, which can be obtained from the `next_cursor` value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included.
  'sortOrder': "'asc'", // String |
  'systemFilesOnly': true, // Boolean |
  'files': _health.qo, data.qo, // String |
  'deviceUID': "deviceUID_example", // String | A Device UID.
  'startDate': 1628631763, // Number | Unix timestamp
  'endDate': 1657894210 // Number | Unix timestamp
};
apiInstance.getFleetEventsByCursor(projectUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type        | Description                                                                                                                                                                                                                                                                                                                                                                | Notes                                 |
| ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| **projectUID**      | **String**  |                                                                                                                                                                                                                                                                                                                                                                            |
| **fleetUID**        | **String**  |                                                                                                                                                                                                                                                                                                                                                                            |
| **limit**           | **Number**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to 50]            |
| **cursor**          | **String**  | A cursor, which can be obtained from the &#x60;next_cursor&#x60; value from a previous call to this endpoint. The results set returned will include this event as its first result if the given identifier is actually the UID of an event. If this event UID is not found, the parameter is ignored and the results set is the same as if the parameter was not included. | [optional]                            |
| **sortOrder**       | **String**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional] [default to &#39;asc&#39;] |
| **systemFilesOnly** | **Boolean** |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **files**           | **String**  |                                                                                                                                                                                                                                                                                                                                                                            | [optional]                            |
| **deviceUID**       | **String**  | A Device UID.                                                                                                                                                                                                                                                                                                                                                              | [optional]                            |
| **startDate**       | **Number**  | Unix timestamp                                                                                                                                                                                                                                                                                                                                                             | [optional]                            |
| **endDate**         | **Number**  | Unix timestamp                                                                                                                                                                                                                                                                                                                                                             | [optional]                            |

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
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.FleetApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1 // Number |
};
apiInstance.getProjectFleetDevices(projectUID, fleetUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes                      |
| -------------- | ---------- | ----------- | -------------------------- |
| **projectUID** | **String** |             |
| **fleetUID**   | **String** |             |
| **pageSize**   | **Number** |             | [optional] [default to 50] |
| **pageNum**    | **Number** |             | [optional] [default to 1]  |

### Return type

[**GetProjectDevices200Response**](GetProjectDevices200Response.md)

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

let apiInstance = new NotehubJs.FleetApi();
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
