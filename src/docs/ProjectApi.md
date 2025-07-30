# NotehubJs.ProjectApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                 | HTTP request                                                                                | Description                                     |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [**cloneProject**](ProjectApi.md#cloneProject)                                         | **POST** /v1/projects/{projectOrProductUID}/clone                                           |
| [**createFleet**](ProjectApi.md#createFleet)                                           | **POST** /v1/projects/{projectOrProductUID}/fleets                                          |
| [**createProduct**](ProjectApi.md#createProduct)                                       | **POST** /v1/projects/{projectOrProductUID}/products                                        |
| [**createProject**](ProjectApi.md#createProject)                                       | **POST** /v1/projects                                                                       |
| [**deleteDeviceFleets**](ProjectApi.md#deleteDeviceFleets)                             | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/fleets                    |
| [**deleteFleet**](ProjectApi.md#deleteFleet)                                           | **DELETE** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}                             |
| [**deleteFleetEnvironmentVariable**](ProjectApi.md#deleteFleetEnvironmentVariable)     | **DELETE** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/environment_variables/{key} |
| [**deleteProject**](ProjectApi.md#deleteProject)                                       | **DELETE** /v1/projects/{projectUID}                                                        |
| [**deleteProjectEnvironmentVariable**](ProjectApi.md#deleteProjectEnvironmentVariable) | **DELETE** /v1/projects/{projectOrProductUID}/environment_variables/{key}                   |
| [**dfuAction**](ProjectApi.md#dfuAction)                                               | **POST** /v1/projects/{projectOrProductUID}/dfu/{firmwareType}/{action}                     |
| [**disableGlobalTransformation**](ProjectApi.md#disableGlobalTransformation)           | **POST** /v1/projects/{projectOrProductUID}/global-transformation/disable                   |
| [**enableGlobalTransformation**](ProjectApi.md#enableGlobalTransformation)             | **POST** /v1/projects/{projectOrProductUID}/global-transformation/enable                    |
| [**getDeviceDfuHistory**](ProjectApi.md#getDeviceDfuHistory)                           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/dfu/{firmwareType}/history   |
| [**getDeviceDfuStatus**](ProjectApi.md#getDeviceDfuStatus)                             | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/dfu/{firmwareType}/status    |
| [**getDeviceFleets**](ProjectApi.md#getDeviceFleets)                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/fleets                       |
| [**getDevicesDfuHistory**](ProjectApi.md#getDevicesDfuHistory)                         | **GET** /v1/projects/{projectOrProductUID}/dfu/{firmwareType}/history                       |
| [**getDevicesDfuStatus**](ProjectApi.md#getDevicesDfuStatus)                           | **GET** /v1/projects/{projectOrProductUID}/dfu/{firmwareType}/status                        |
| [**getFirmwareInfo**](ProjectApi.md#getFirmwareInfo)                                   | **GET** /v1/projects/{projectOrProductUID}/firmware                                         |
| [**getFleet**](ProjectApi.md#getFleet)                                                 | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}                                |
| [**getFleetEnvironmentHierarchy**](ProjectApi.md#getFleetEnvironmentHierarchy)         | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/environment_hierarchy          | Get environment variable hierarchy for a device |
| [**getFleetEnvironmentVariables**](ProjectApi.md#getFleetEnvironmentVariables)         | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/environment_variables          |
| [**getNotefileSchemas**](ProjectApi.md#getNotefileSchemas)                             | **GET** /v1/projects/{projectOrProductUID}/schemas                                          | Get variable format for a notefile              |
| [**getProject**](ProjectApi.md#getProject)                                             | **GET** /v1/projects/{projectUID}                                                           |
| [**getProjectByProduct**](ProjectApi.md#getProjectByProduct)                           | **GET** /v1/products/{productUID}/project                                                   |
| [**getProjectEnvironmentHierarchy**](ProjectApi.md#getProjectEnvironmentHierarchy)     | **GET** /v1/projects/{projectOrProductUID}/environment_hierarchy                            | Get environment variable hierarchy for a device |
| [**getProjectEnvironmentVariables**](ProjectApi.md#getProjectEnvironmentVariables)     | **GET** /v1/projects/{projectOrProductUID}/environment_variables                            |
| [**getProjectFleets**](ProjectApi.md#getProjectFleets)                                 | **GET** /v1/projects/{projectOrProductUID}/fleets                                           |
| [**getProjectMembers**](ProjectApi.md#getProjectMembers)                               | **GET** /v1/projects/{projectOrProductUID}/members                                          |
| [**getProjectProducts**](ProjectApi.md#getProjectProducts)                             | **GET** /v1/projects/{projectOrProductUID}/products                                         |
| [**getProjects**](ProjectApi.md#getProjects)                                           | **GET** /v1/projects                                                                        |
| [**putDeviceFleets**](ProjectApi.md#putDeviceFleets)                                   | **PUT** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/fleets                       |
| [**putFleetEnvironmentVariables**](ProjectApi.md#putFleetEnvironmentVariables)         | **PUT** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/environment_variables          |
| [**putProjectEnvironmentVariables**](ProjectApi.md#putProjectEnvironmentVariables)     | **PUT** /v1/projects/{projectOrProductUID}/environment_variables                            |
| [**setGlobalTransformation**](ProjectApi.md#setGlobalTransformation)                   | **POST** /v1/projects/{projectOrProductUID}/global-transformation                           |
| [**updateFleet**](ProjectApi.md#updateFleet)                                           | **PUT** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}                                |
| [**uploadFirmware**](ProjectApi.md#uploadFirmware)                                     | **PUT** /v1/projects/{projectOrProductUID}/firmware/{firmwareType}/{filename}               |

## cloneProject

> Project cloneProject(projectOrProductUID, cloneProjectRequest)

Clone a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let cloneProjectRequest = new NotehubJs.CloneProjectRequest(); // CloneProjectRequest | Project to be cloned
apiInstance.cloneProject(projectOrProductUID, cloneProjectRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                              | Description          | Notes |
| ----------------------- | ------------------------------------------------- | -------------------- | ----- |
| **projectOrProductUID** | **String**                                        |                      |
| **cloneProjectRequest** | [**CloneProjectRequest**](CloneProjectRequest.md) | Project to be cloned |

### Return type

[**Project**](Project.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createFleet

> Fleet createFleet(projectOrProductUID, createFleetRequest)

Create Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let createFleetRequest = new NotehubJs.CreateFleetRequest(); // CreateFleetRequest | Fleet to be added
apiInstance.createFleet(projectOrProductUID, createFleetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                            | Description       | Notes |
| ----------------------- | ----------------------------------------------- | ----------------- | ----- |
| **projectOrProductUID** | **String**                                      |                   |
| **createFleetRequest**  | [**CreateFleetRequest**](CreateFleetRequest.md) | Fleet to be added |

### Return type

[**Fleet**](Fleet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProduct

> Product createProduct(projectOrProductUID, createProductRequest)

Create Product within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let createProductRequest = new NotehubJs.CreateProductRequest(); // CreateProductRequest | Product to be created
apiInstance.createProduct(projectOrProductUID, createProductRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description           | Notes |
| ------------------------ | --------------------------------------------------- | --------------------- | ----- |
| **projectOrProductUID**  | **String**                                          |                       |
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

> GetProjectFleets200Response deleteDeviceFleets(projectOrProductUID, deviceUID, deleteDeviceFleetsRequest)

Remove Device from Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let deleteDeviceFleetsRequest = new NotehubJs.DeleteDeviceFleetsRequest(); // DeleteDeviceFleetsRequest | The fleets to remove from the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
apiInstance.deleteDeviceFleets(projectOrProductUID, deviceUID, deleteDeviceFleetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                          | Type                                                          | Description                                                                                                                                                                                                                                                                                           | Notes |
| ----------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID**       | **String**                                                    |                                                                                                                                                                                                                                                                                                       |
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

> deleteFleet(projectOrProductUID, fleetUID)

Delete Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.deleteFleet(projectOrProductUID, fleetUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **fleetUID**            | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteFleetEnvironmentVariable

> EnvironmentVariables deleteFleetEnvironmentVariable(projectOrProductUID, fleetUID, key)

Delete environment variables of a fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteFleetEnvironmentVariable(projectOrProductUID, fleetUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description                             | Notes |
| ----------------------- | ---------- | --------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                         |
| **fleetUID**            | **String** |                                         |
| **key**                 | **String** | The environment variable key to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProject

> deleteProject(projectOrProductUID)

Delete a Project by ProjectUID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.deleteProject(projectOrProductUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProjectEnvironmentVariable

> EnvironmentVariables deleteProjectEnvironmentVariable(projectOrProductUID, key)

Delete an environment variable of a project by key

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let key = "key_example"; // String | The environment variable key to delete.
apiInstance.deleteProjectEnvironmentVariable(projectOrProductUID, key).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description                             | Notes |
| ----------------------- | ---------- | --------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                         |
| **key**                 | **String** | The environment variable key to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## dfuAction

> dfuAction(projectOrProductUID, firmwareType, action, opts)

Update/cancel host or notecard firmware updates

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let firmwareType = "firmwareType_example"; // String |
let action = "action_example"; // String |
let opts = {
  'deviceUID': ["null"], // [String] | A Device UID.
  'tag': ["null"], // [String] | Tag filter
  'serialNumber': ["null"], // [String] | Serial number filter
  'fleetUID': "fleetUID_example", // String |
  'notecardFirmware': ["null"], // [String] | Firmware version filter
  'location': ["null"], // [String] | Location filter
  'hostFirmware': ["null"], // [String] | Host firmware filter
  'productUID': ["null"], // [String] |
  'sku': ["null"], // [String] | SKU filter
  'dfuActionRequest': new NotehubJs.DfuActionRequest() // DfuActionRequest | Which firmware in the case of an update action
};
apiInstance.dfuAction(projectOrProductUID, firmwareType, action, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                        | Description                                    | Notes      |
| ----------------------- | ------------------------------------------- | ---------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                                  |                                                |
| **firmwareType**        | **String**                                  |                                                |
| **action**              | **String**                                  |                                                |
| **deviceUID**           | [**[String]**](String.md)                   | A Device UID.                                  | [optional] |
| **tag**                 | [**[String]**](String.md)                   | Tag filter                                     | [optional] |
| **serialNumber**        | [**[String]**](String.md)                   | Serial number filter                           | [optional] |
| **fleetUID**            | **String**                                  |                                                | [optional] |
| **notecardFirmware**    | [**[String]**](String.md)                   | Firmware version filter                        | [optional] |
| **location**            | [**[String]**](String.md)                   | Location filter                                | [optional] |
| **hostFirmware**        | [**[String]**](String.md)                   | Host firmware filter                           | [optional] |
| **productUID**          | [**[String]**](String.md)                   |                                                | [optional] |
| **sku**                 | [**[String]**](String.md)                   | SKU filter                                     | [optional] |
| **dfuActionRequest**    | [**DfuActionRequest**](DfuActionRequest.md) | Which firmware in the case of an update action | [optional] |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## disableGlobalTransformation

> disableGlobalTransformation(projectOrProductUID)

Disable the project-level event JSONata transformation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.disableGlobalTransformation(projectOrProductUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## enableGlobalTransformation

> enableGlobalTransformation(projectOrProductUID)

Enable the project-level event JSONata transformation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.enableGlobalTransformation(projectOrProductUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceDfuHistory

> DeviceDfuHistory getDeviceDfuHistory(projectOrProductUID, deviceUID, firmwareType)

Get device DFU history for host or Notecard firmware

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let firmwareType = "firmwareType_example"; // String |
apiInstance.getDeviceDfuHistory(projectOrProductUID, deviceUID, firmwareType).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |
| **firmwareType**        | **String** |             |

### Return type

[**DeviceDfuHistory**](DeviceDfuHistory.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceDfuStatus

> DeviceDfuStatus getDeviceDfuStatus(projectOrProductUID, deviceUID, firmwareType)

Get device DFU history for host or Notecard firmware

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let firmwareType = "firmwareType_example"; // String |
apiInstance.getDeviceDfuStatus(projectOrProductUID, deviceUID, firmwareType).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |
| **firmwareType**        | **String** |             |

### Return type

[**DeviceDfuStatus**](DeviceDfuStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceFleets

> GetProjectFleets200Response getDeviceFleets(projectOrProductUID, deviceUID)

Get Device Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
apiInstance.getDeviceFleets(projectOrProductUID, deviceUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **deviceUID**           | **String** |             |

### Return type

[**GetProjectFleets200Response**](GetProjectFleets200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicesDfuHistory

> DeviceDfuHistoryPage getDevicesDfuHistory(projectOrProductUID, firmwareType, opts)

Get host or Notecard DFU history for all devices that match the filter criteria

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let firmwareType = "firmwareType_example"; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'sortBy': "'captured'", // String |
  'sortOrder': "'asc'", // String |
  'deviceUID': ["null"], // [String] | A Device UID.
  'tag': ["null"], // [String] | Tag filter
  'serialNumber': ["null"], // [String] | Serial number filter
  'fleetUID': "fleetUID_example", // String |
  'notecardFirmware': ["null"], // [String] | Firmware version filter
  'location': ["null"], // [String] | Location filter
  'hostFirmware': ["null"], // [String] | Host firmware filter
  'productUID': ["null"], // [String] |
  'sku': ["null"] // [String] | SKU filter
};
apiInstance.getDevicesDfuHistory(projectOrProductUID, firmwareType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description             | Notes                                      |
| ----------------------- | ------------------------- | ----------------------- | ------------------------------------------ |
| **projectOrProductUID** | **String**                |                         |
| **firmwareType**        | **String**                |                         |
| **pageSize**            | **Number**                |                         | [optional] [default to 50]                 |
| **pageNum**             | **Number**                |                         | [optional] [default to 1]                  |
| **sortBy**              | **String**                |                         | [optional] [default to &#39;captured&#39;] |
| **sortOrder**           | **String**                |                         | [optional] [default to &#39;asc&#39;]      |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.           | [optional]                                 |
| **tag**                 | [**[String]**](String.md) | Tag filter              | [optional]                                 |
| **serialNumber**        | [**[String]**](String.md) | Serial number filter    | [optional]                                 |
| **fleetUID**            | **String**                |                         | [optional]                                 |
| **notecardFirmware**    | [**[String]**](String.md) | Firmware version filter | [optional]                                 |
| **location**            | [**[String]**](String.md) | Location filter         | [optional]                                 |
| **hostFirmware**        | [**[String]**](String.md) | Host firmware filter    | [optional]                                 |
| **productUID**          | [**[String]**](String.md) |                         | [optional]                                 |
| **sku**                 | [**[String]**](String.md) | SKU filter              | [optional]                                 |

### Return type

[**DeviceDfuHistoryPage**](DeviceDfuHistoryPage.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicesDfuStatus

> DeviceDfuStatusPage getDevicesDfuStatus(projectOrProductUID, firmwareType, opts)

Get host or Notecard DFU history for all devices that match the filter criteria

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let firmwareType = "firmwareType_example"; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'sortBy': "'captured'", // String |
  'sortOrder': "'asc'", // String |
  'deviceUID': ["null"], // [String] | A Device UID.
  'tag': ["null"], // [String] | Tag filter
  'serialNumber': ["null"], // [String] | Serial number filter
  'fleetUID': "fleetUID_example", // String |
  'notecardFirmware': ["null"], // [String] | Firmware version filter
  'location': ["null"], // [String] | Location filter
  'hostFirmware': ["null"], // [String] | Host firmware filter
  'productUID': ["null"], // [String] |
  'sku': ["null"] // [String] | SKU filter
};
apiInstance.getDevicesDfuStatus(projectOrProductUID, firmwareType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description             | Notes                                      |
| ----------------------- | ------------------------- | ----------------------- | ------------------------------------------ |
| **projectOrProductUID** | **String**                |                         |
| **firmwareType**        | **String**                |                         |
| **pageSize**            | **Number**                |                         | [optional] [default to 50]                 |
| **pageNum**             | **Number**                |                         | [optional] [default to 1]                  |
| **sortBy**              | **String**                |                         | [optional] [default to &#39;captured&#39;] |
| **sortOrder**           | **String**                |                         | [optional] [default to &#39;asc&#39;]      |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.           | [optional]                                 |
| **tag**                 | [**[String]**](String.md) | Tag filter              | [optional]                                 |
| **serialNumber**        | [**[String]**](String.md) | Serial number filter    | [optional]                                 |
| **fleetUID**            | **String**                |                         | [optional]                                 |
| **notecardFirmware**    | [**[String]**](String.md) | Firmware version filter | [optional]                                 |
| **location**            | [**[String]**](String.md) | Location filter         | [optional]                                 |
| **hostFirmware**        | [**[String]**](String.md) | Host firmware filter    | [optional]                                 |
| **productUID**          | [**[String]**](String.md) |                         | [optional]                                 |
| **sku**                 | [**[String]**](String.md) | SKU filter              | [optional]                                 |

### Return type

[**DeviceDfuStatusPage**](DeviceDfuStatusPage.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFirmwareInfo

> [FirmwareInfo] getFirmwareInfo(projectOrProductUID, opts)

Get Available Firmware Information

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'product': "product_example", // String |
  'firmwareType': "firmwareType_example", // String |
  'version': "version_example", // String |
  'target': "target_example", // String |
  'filename': notecard-7.2.2.16518$20240410043100.bin, // String |
  'md5': "md5_example", // String |
  'unpublished': true // Boolean |
};
apiInstance.getFirmwareInfo(projectOrProductUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type        | Description | Notes      |
| ----------------------- | ----------- | ----------- | ---------- |
| **projectOrProductUID** | **String**  |             |
| **product**             | **String**  |             | [optional] |
| **firmwareType**        | **String**  |             | [optional] |
| **version**             | **String**  |             | [optional] |
| **target**              | **String**  |             | [optional] |
| **filename**            | **String**  |             | [optional] |
| **md5**                 | **String**  |             | [optional] |
| **unpublished**         | **Boolean** |             | [optional] |

### Return type

[**[FirmwareInfo]**](FirmwareInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleet

> Fleet getFleet(projectOrProductUID, fleetUID)

Get Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.getFleet(projectOrProductUID, fleetUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **fleetUID**            | **String** |             |

### Return type

[**Fleet**](Fleet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetEnvironmentHierarchy

> EnvTreeJsonNode getFleetEnvironmentHierarchy(projectOrProductUID, fleetUID)

Get environment variable hierarchy for a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.getFleetEnvironmentHierarchy(projectOrProductUID, fleetUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **fleetUID**            | **String** |             |

### Return type

[**EnvTreeJsonNode**](EnvTreeJsonNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetEnvironmentVariables

> EnvironmentVariables getFleetEnvironmentVariables(projectOrProductUID, fleetUID)

Get environment variables of a fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.getFleetEnvironmentVariables(projectOrProductUID, fleetUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **fleetUID**            | **String** |             |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getNotefileSchemas

> [NotefileSchema] getNotefileSchemas(projectOrProductUID)

Get variable format for a notefile

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getNotefileSchemas(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**[NotefileSchema]**](NotefileSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProject

> Project getProject(projectOrProductUID)

Get a Project by ProjectUID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProject(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

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

## getProjectEnvironmentHierarchy

> EnvTreeJsonNode getProjectEnvironmentHierarchy(projectOrProductUID)

Get environment variable hierarchy for a device

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectEnvironmentHierarchy(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**EnvTreeJsonNode**](EnvTreeJsonNode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectEnvironmentVariables

> EnvironmentVariables getProjectEnvironmentVariables(projectOrProductUID)

Get environment variables of a project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectEnvironmentVariables(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectFleets

> GetProjectFleets200Response getProjectFleets(projectOrProductUID)

Get Project Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectFleets(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**GetProjectFleets200Response**](GetProjectFleets200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectMembers

> GetProjectMembers200Response getProjectMembers(projectOrProductUID)

Get Project Members

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectMembers(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**GetProjectMembers200Response**](GetProjectMembers200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectProducts

> GetProjectProducts200Response getProjectProducts(projectOrProductUID)

Get Products within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getProjectProducts(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

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

> GetProjectFleets200Response putDeviceFleets(projectOrProductUID, deviceUID, putDeviceFleetsRequest)

Add Device to Fleets

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let deviceUID = dev:000000000000000; // String |
let putDeviceFleetsRequest = new NotehubJs.PutDeviceFleetsRequest(); // PutDeviceFleetsRequest | The fleets to add to the device. Note that the endpoint takes an array of fleetUIDs, to facilitate multi-fleet devices. Multi-fleet is not yet enabled on all SaaS plans - unless it is supported by the SaaS plan of the project, passing more than a single fleetUID in the array is an error.
apiInstance.putDeviceFleets(projectOrProductUID, deviceUID, putDeviceFleetsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                       | Type                                                    | Description                                                                                                                                                                                                                                                                                      | Notes |
| -------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| **projectOrProductUID**    | **String**                                              |                                                                                                                                                                                                                                                                                                  |
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

> EnvironmentVariables putFleetEnvironmentVariables(projectOrProductUID, fleetUID, environmentVariables)

Put environment variables of a fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | Environment variables to be added to the fleet
apiInstance.putFleetEnvironmentVariables(projectOrProductUID, fleetUID, environmentVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description                                    | Notes |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------- | ----- |
| **projectOrProductUID**  | **String**                                          |                                                |
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

> EnvironmentVariables putProjectEnvironmentVariables(projectOrProductUID, opts)

Put environment variables of a project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'environmentVariables': new NotehubJs.EnvironmentVariables() // EnvironmentVariables |
};
apiInstance.putProjectEnvironmentVariables(projectOrProductUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                     | Type                                                | Description | Notes      |
| ------------------------ | --------------------------------------------------- | ----------- | ---------- |
| **projectOrProductUID**  | **String**                                          |             |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) |             | [optional] |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## setGlobalTransformation

> setGlobalTransformation(projectOrProductUID, body)

Set the project-level event JSONata transformation

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let body = {key: null}; // Object | JSONata expression which will be applied to each event before it is persisted and routed
apiInstance.setGlobalTransformation(projectOrProductUID, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description                                                                              | Notes |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                          |
| **body**                | **Object** | JSONata expression which will be applied to each event before it is persisted and routed |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateFleet

> Fleet updateFleet(projectOrProductUID, fleetUID, updateFleetRequest)

Update Fleet

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let fleetUID = "fleetUID_example"; // String |
let updateFleetRequest = new NotehubJs.UpdateFleetRequest(); // UpdateFleetRequest | Fleet details to update
apiInstance.updateFleet(projectOrProductUID, fleetUID, updateFleetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                            | Description             | Notes |
| ----------------------- | ----------------------------------------------- | ----------------------- | ----- |
| **projectOrProductUID** | **String**                                      |                         |
| **fleetUID**            | **String**                                      |                         |
| **updateFleetRequest**  | [**UpdateFleetRequest**](UpdateFleetRequest.md) | Fleet details to update |

### Return type

[**Fleet**](Fleet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## uploadFirmware

> FirmwareInfo uploadFirmware(projectOrProductUID, firmwareType, filename, body)

Upload firmware binary

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let firmwareType = "firmwareType_example"; // String |
let filename = "filename_example"; // String |
let body = "/path/to/file"; // File | contents of the firmware binary
apiInstance.uploadFirmware(projectOrProductUID, firmwareType, filename, body).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description                     | Notes |
| ----------------------- | ---------- | ------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                 |
| **firmwareType**        | **String** |                                 |
| **filename**            | **String** |                                 |
| **body**                | **File**   | contents of the firmware binary |

### Return type

[**FirmwareInfo**](FirmwareInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json
