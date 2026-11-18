# NotehubJs.RouteApi

All URIs are relative to *https://api.notefile.net*

| Method                                                     | HTTP request                                                            | Description             |
| ---------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------- |
| [**createRoute**](RouteApi.md#createRoute)                 | **POST** /v1/projects/{projectOrProductUID}/routes                      | Create a route          |
| [**deleteRoute**](RouteApi.md#deleteRoute)                 | **DELETE** /v1/projects/{projectOrProductUID}/routes/{routeUID}         | Delete a route          |
| [**getRoute**](RouteApi.md#getRoute)                       | **GET** /v1/projects/{projectOrProductUID}/routes/{routeUID}            | Get a route             |
| [**getRouteLogsByRoute**](RouteApi.md#getRouteLogsByRoute) | **GET** /v1/projects/{projectOrProductUID}/routes/{routeUID}/route-logs | List a route&#39;s logs |
| [**getRoutes**](RouteApi.md#getRoutes)                     | **GET** /v1/projects/{projectOrProductUID}/routes                       | List routes             |
| [**updateRoute**](RouteApi.md#updateRoute)                 | **PUT** /v1/projects/{projectOrProductUID}/routes/{routeUID}            | Update a route          |

## createRoute

> NotehubRoute createRoute(projectOrProductUID, notehubRoute)

Create a route

Create a route that sends a project&#39;s events to a destination such as a URL, an MQTT broker or a cloud service. Set &#x60;type&#x60; and fill in the object it names. Omit &#x60;fleets&#x60; to send every fleet&#39;s events. Unknown FleetUIDs are ignored, so &#x60;fleets: []&#x60; or a list of only unknown UIDs gives a route that sends nothing. Requires the Owner or Developer role. Returns 400 for invalid settings.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let notehubRoute = {
  http: {
    disable_http_headers: false,
    filter: {},
    fleets: ["fleet:1042ddc5-3b2c-4cec-b1fb-d3040538094d"],
    http_headers: { "X-My-Header": "value" },
    throttle_ms: 100,
    timeout: 5000,
    transform: {},
    url: "https://example.com/ingest",
  },
  label: "Route Label",
}; // NotehubRoute | Route to be created
apiInstance.createRoute(projectOrProductUID, notehubRoute).then(
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

| Name                    | Type                                | Description         | Notes |
| ----------------------- | ----------------------------------- | ------------------- | ----- |
| **projectOrProductUID** | **String**                          |                     |
| **notehubRoute**        | [**NotehubRoute**](NotehubRoute.md) | Route to be created |

### Return type

[**NotehubRoute**](NotehubRoute.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteRoute

> deleteRoute(projectOrProductUID, routeUID)

Delete a route

Delete a route so it stops sending events. To pause it instead, set &#x60;disabled&#x60; with &#x60;UpdateRoute&#x60;. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let routeUID = "route:cbd20093cba58392c9f9bbdd0cdeb1a0"; // String | RouteUID, e.g. `route:cbd20093cba58392c9f9bbdd0cdeb1a0`. List with `GetRoutes`.
apiInstance.deleteRoute(projectOrProductUID, routeUID).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                                         | Notes |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                     |
| **routeUID**            | **String** | RouteUID, e.g. &#x60;route:cbd20093cba58392c9f9bbdd0cdeb1a0&#x60;. List with &#x60;GetRoutes&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRoute

> NotehubRoute getRoute(projectOrProductUID, routeUID)

Get a route

Get one route&#39;s full settings: destination, filter, transform and fleets. Secrets such as passwords and keys come back as &#x60;(omitted)&#x60;. Requires the Owner or Developer role. Viewers can use &#x60;GetRoutes&#x60;. Returns 404 if the route doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let routeUID = "route:cbd20093cba58392c9f9bbdd0cdeb1a0"; // String | RouteUID, e.g. `route:cbd20093cba58392c9f9bbdd0cdeb1a0`. List with `GetRoutes`.
apiInstance.getRoute(projectOrProductUID, routeUID).then(
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

| Name                    | Type       | Description                                                                                         | Notes |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                     |
| **routeUID**            | **String** | RouteUID, e.g. &#x60;route:cbd20093cba58392c9f9bbdd0cdeb1a0&#x60;. List with &#x60;GetRoutes&#x60;. |

### Return type

[**NotehubRoute**](NotehubRoute.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRouteLogsByRoute

> [RouteLog] getRouteLogsByRoute(projectOrProductUID, routeUID, opts)

List a route&#39;s logs

List a route&#39;s attempts to send events, newest first, with each one&#39;s event, response status, body and duration. Filter by device, notefile, date, success or HTTP status. For one event, use &#x60;GetRouteLogsByEvent&#x60;. Paginated. Returns 404 if the route doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let routeUID = "route:cbd20093cba58392c9f9bbdd0cdeb1a0"; // String | RouteUID, e.g. `route:cbd20093cba58392c9f9bbdd0cdeb1a0`. List with `GetRoutes`.
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  deviceUID: ["null"], // [String] | A DeviceUID.
  sortBy: "'date'", // String | Field to sort by. - `date`: when the attempt was made - `event`: the order the events arrived in, then the attempt time
  sortOrder: "'desc'", // String | Sort direction. - `asc`: oldest first - `desc`: newest first
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  systemFilesOnly: true, // Boolean | If true, return only events from system notefiles, such as `_session.qo` and `_health.qo`.
  mostRecentOnly: true, // Boolean | If true, return only the latest attempt for each event.
  files: "_health.qo, data.qo", // String | Comma-separated notefiles, e.g. `data.qo,_health.qo`. Don't combine with `systemFilesOnly`.
  routingStatus: failure, // [String] | Return only attempts with this outcome. - `success`: the destination accepted the event - `failure`: the attempt failed
  responseStatus: 500, // [String] | Response status codes to include, e.g. `500`.
};
apiInstance.getRouteLogsByRoute(projectOrProductUID, routeUID, opts).then(
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

| Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                                  |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **routeUID**            | **String**                | RouteUID, e.g. &#x60;route:cbd20093cba58392c9f9bbdd0cdeb1a0&#x60;. List with &#x60;GetRoutes&#x60;.                                                                                                                                                                                                                                                                                                                                                                     |
| **pageSize**            | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000]           |
| **pageNum**             | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]              |
| **cursor**              | **String**                | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                             |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                             |
| **sortBy**              | **String**                | Field to sort by. - &#x60;date&#x60;: when the attempt was made - &#x60;event&#x60;: the order the events arrived in, then the attempt time                                                                                                                                                                                                                                                                                                                             | [optional] [default to &#39;date&#39;] |
| **sortOrder**           | **String**                | Sort direction. - &#x60;asc&#x60;: oldest first - &#x60;desc&#x60;: newest first                                                                                                                                                                                                                                                                                                                                                                                        | [optional] [default to &#39;desc&#39;] |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                             |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                           | [optional]                             |
| **systemFilesOnly**     | **Boolean**               | If true, return only events from system notefiles, such as &#x60;\_session.qo&#x60; and &#x60;\_health.qo&#x60;.                                                                                                                                                                                                                                                                                                                                                        | [optional]                             |
| **mostRecentOnly**      | **Boolean**               | If true, return only the latest attempt for each event.                                                                                                                                                                                                                                                                                                                                                                                                                 | [optional]                             |
| **files**               | **String**                | Comma-separated notefiles, e.g. &#x60;data.qo,\_health.qo&#x60;. Don&#39;t combine with &#x60;systemFilesOnly&#x60;.                                                                                                                                                                                                                                                                                                                                                    | [optional]                             |
| **routingStatus**       | [**[String]**](String.md) | Return only attempts with this outcome. - &#x60;success&#x60;: the destination accepted the event - &#x60;failure&#x60;: the attempt failed                                                                                                                                                                                                                                                                                                                             | [optional]                             |
| **responseStatus**      | [**[String]**](String.md) | Response status codes to include, e.g. &#x60;500&#x60;.                                                                                                                                                                                                                                                                                                                                                                                                                 | [optional]                             |

### Return type

[**[RouteLog]**](RouteLog.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRoutes

> [NotehubRouteSummary] getRoutes(projectOrProductUID)

List routes

List a project&#39;s routes with their type and label and whether they&#39;re disabled, without their settings. For a route&#39;s settings, use &#x60;GetRoute&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getRoutes(projectOrProductUID).then(
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

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**[NotehubRouteSummary]**](NotehubRouteSummary.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateRoute

> NotehubRoute updateRoute(projectOrProductUID, routeUID, notehubRoute)

Update a route

Change a route&#39;s settings. Fields you leave out keep their values, and a secret sent back as &#x60;(omitted)&#x60; is kept, but leaving out &#x60;notes&#x60; clears it. Requires the Owner or Developer role. Returns 404 if the route doesn&#39;t exist, and 400 for invalid settings.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.RouteApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let routeUID = "route:cbd20093cba58392c9f9bbdd0cdeb1a0"; // String | RouteUID, e.g. `route:cbd20093cba58392c9f9bbdd0cdeb1a0`. List with `GetRoutes`.
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

| Name                    | Type                                | Description                                                                                         | Notes |
| ----------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                          |                                                                                                     |
| **routeUID**            | **String**                          | RouteUID, e.g. &#x60;route:cbd20093cba58392c9f9bbdd0cdeb1a0&#x60;. List with &#x60;GetRoutes&#x60;. |
| **notehubRoute**        | [**NotehubRoute**](NotehubRoute.md) | Route settings to be updated                                                                        |

### Return type

[**NotehubRoute**](NotehubRoute.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
