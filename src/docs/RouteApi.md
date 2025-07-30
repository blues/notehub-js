# NotehubJs.RouteApi

All URIs are relative to *https://api.notefile.net*

| Method                                                     | HTTP request                                                            | Description |
| ---------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| [**createRoute**](RouteApi.md#createRoute)                 | **POST** /v1/projects/{projectOrProductUID}/routes                      |
| [**deleteRoute**](RouteApi.md#deleteRoute)                 | **DELETE** /v1/projects/{projectOrProductUID}/routes/{routeUID}         |
| [**getRoute**](RouteApi.md#getRoute)                       | **GET** /v1/projects/{projectOrProductUID}/routes/{routeUID}            |
| [**getRouteLogsByRoute**](RouteApi.md#getRouteLogsByRoute) | **GET** /v1/projects/{projectOrProductUID}/routes/{routeUID}/route-logs |
| [**getRoutes**](RouteApi.md#getRoutes)                     | **GET** /v1/projects/{projectOrProductUID}/routes                       |
| [**updateRoute**](RouteApi.md#updateRoute)                 | **PUT** /v1/projects/{projectOrProductUID}/routes/{routeUID}            |

## createRoute

> NotehubRoute createRoute(projectOrProductUID, notehubRoute)

Create Route within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let notehubRoute = {
  "label": "Route Label",
  "type":"http",
  "http": {
    "fleets": ["fleet:1042ddc5-3b2c-4cec-b1fb-d3040538094d"],
    "throttle_ms": 100,
    "url": "http://route.url"
  }
}
; // NotehubRoute | Route to be Created
apiInstance.createRoute(projectOrProductUID, notehubRoute).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                | Description         | Notes |
| ----------------------- | ----------------------------------- | ------------------- | ----- |
| **projectOrProductUID** | **String**                          |                     |
| **notehubRoute**        | [**NotehubRoute**](NotehubRoute.md) | Route to be Created |

### Return type

[**NotehubRoute**](NotehubRoute.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteRoute

> Object deleteRoute(projectOrProductUID, routeUID)

Delete single route within a project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
apiInstance.deleteRoute(projectOrProductUID, routeUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **routeUID**            | **String** |             |

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRoute

> NotehubRoute getRoute(projectOrProductUID, routeUID)

Get single route within a project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
apiInstance.getRoute(projectOrProductUID, routeUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **routeUID**            | **String** |             |

### Return type

[**NotehubRoute**](NotehubRoute.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRouteLogsByRoute

> [RouteLog] getRouteLogsByRoute(projectOrProductUID, routeUID, opts)

Get Route Logs by Route UID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'deviceUID': ["null"], // [String] | A Device UID.
  'sortBy': "'date'", // String |
  'sortOrder': "'desc'", // String |
  'startDate': 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  'endDate': 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  'systemFilesOnly': true, // Boolean |
  'mostRecentOnly': true, // Boolean |
  'files': _health.qo, data.qo // String |
};
apiInstance.getRouteLogsByRoute(projectOrProductUID, routeUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                      | Description                                                     | Notes                                  |
| ----------------------- | ------------------------- | --------------------------------------------------------------- | -------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                 |
| **routeUID**            | **String**                |                                                                 |
| **pageSize**            | **Number**                |                                                                 | [optional] [default to 50]             |
| **pageNum**             | **Number**                |                                                                 | [optional] [default to 1]              |
| **deviceUID**           | [**[String]**](String.md) | A Device UID.                                                   | [optional]                             |
| **sortBy**              | **String**                |                                                                 | [optional] [default to &#39;date&#39;] |
| **sortOrder**           | **String**                |                                                                 | [optional] [default to &#39;desc&#39;] |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp | [optional]                             |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp   | [optional]                             |
| **systemFilesOnly**     | **Boolean**               |                                                                 | [optional]                             |
| **mostRecentOnly**      | **Boolean**               |                                                                 | [optional]                             |
| **files**               | **String**                |                                                                 | [optional]                             |

### Return type

[**[RouteLog]**](RouteLog.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRoutes

> [UserDbRoute] getRoutes(projectOrProductUID)

Get all Routes within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getRoutes(projectOrProductUID).then((data) => {
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

[**[UserDbRoute]**](UserDbRoute.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateRoute

> NotehubRoute updateRoute(projectOrProductUID, routeUID, notehubRoute)

Update route by UID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
let notehubRoute = {
  "http" {
    "filter": {
      "type": "include",
      "system_notefiles": true,
      "files": ["somefile.qo"],
    },
    "throttle_ms": 50,
    "url": "http://new-route.url",
  },
}
; // NotehubRoute | Route settings to be updated
apiInstance.updateRoute(projectOrProductUID, routeUID, notehubRoute).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                | Description                  | Notes |
| ----------------------- | ----------------------------------- | ---------------------------- | ----- |
| **projectOrProductUID** | **String**                          |                              |
| **routeUID**            | **String**                          |                              |
| **notehubRoute**        | [**NotehubRoute**](NotehubRoute.md) | Route settings to be updated |

### Return type

[**NotehubRoute**](NotehubRoute.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
