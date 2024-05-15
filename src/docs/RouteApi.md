# NotehubJs.RouteApi

All URIs are relative to *https://api.notefile.net*

| Method                                                     | HTTP request                                                   | Description |
| ---------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| [**createRoute**](RouteApi.md#createRoute)                 | **POST** /v1/projects/{projectUID}/routes                      |
| [**deleteRoute**](RouteApi.md#deleteRoute)                 | **DELETE** /v1/projects/{projectUID}/routes/{routeUID}         |
| [**getRoute**](RouteApi.md#getRoute)                       | **GET** /v1/projects/{projectUID}/routes/{routeUID}            |
| [**getRouteLogsByRoute**](RouteApi.md#getRouteLogsByRoute) | **GET** /v1/projects/{projectUID}/routes/{routeUID}/route-logs |
| [**getRoutes**](RouteApi.md#getRoutes)                     | **GET** /v1/projects/{projectUID}/routes                       |
| [**updateRoute**](RouteApi.md#updateRoute)                 | **PUT** /v1/projects/{projectUID}/routes/{routeUID}            |

## createRoute

> Route createRoute(projectUID, route)

Create Route within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let route = {
  "label": "Route Label",
  "type":"http",
  "http": {
    "fleets": ["fleet:1042ddc5-3b2c-4cec-b1fb-d3040538094d"],
    "throttle_ms": 100,
    "url": "http://route.url"
  }
}
; // Route | Route to be Created
apiInstance.createRoute(projectUID, route).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                  | Description         | Notes |
| -------------- | --------------------- | ------------------- | ----- |
| **projectUID** | **String**            |                     |
| **route**      | [**Route**](Route.md) | Route to be Created |

### Return type

[**Route**](Route.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteRoute

> Object deleteRoute(projectUID, routeUID)

Delete single route within a project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
apiInstance.deleteRoute(projectUID, routeUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **routeUID**   | **String** |             |

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRoute

> Route getRoute(projectUID, routeUID)

Get single route within a project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
apiInstance.getRoute(projectUID, routeUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **projectUID** | **String** |             |
| **routeUID**   | **String** |             |

### Return type

[**Route**](Route.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRouteLogsByRoute

> [GetRouteLogsByRoute200ResponseInner] getRouteLogsByRoute(projectUID, routeUID, opts)

Get Route Logs by Route UID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
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
apiInstance.getRouteLogsByRoute(projectUID, routeUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type        | Description    | Notes                                      |
| ------------------- | ----------- | -------------- | ------------------------------------------ |
| **projectUID**      | **String**  |                |
| **routeUID**        | **String**  |                |
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

[**[GetRouteLogsByRoute200ResponseInner]**](GetRouteLogsByRoute200ResponseInner.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRoutes

> [UserDbRoute] getRoutes(projectUID)

Get all Routes within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getRoutes(projectUID).then((data) => {
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

[**[UserDbRoute]**](UserDbRoute.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateRoute

> Route updateRoute(projectUID, routeUID, route)

Update route by UID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.RouteApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let routeUID = route:cbd20093cba58392c9f9bbdd0cdeb1a0; // String |
let route = {
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
; // Route | Route settings to be updated
apiInstance.updateRoute(projectUID, routeUID, route).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type                  | Description                  | Notes |
| -------------- | --------------------- | ---------------------------- | ----- |
| **projectUID** | **String**            |                              |
| **routeUID**   | **String**            |                              |
| **route**      | [**Route**](Route.md) | Route settings to be updated |

### Return type

[**Route**](Route.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
