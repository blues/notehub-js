# NotehubJs.EventApi

All URIs are relative to *https://api.notefile.net*

| Method                                                     | HTTP request                                                            | Description                   |
| ---------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------- |
| [**getEvents**](EventApi.md#getEvents)                     | **GET** /v1/projects/{projectOrProductUID}/events                       | List events in a project      |
| [**getFleetEvents**](EventApi.md#getFleetEvents)           | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/events     | List events in a fleet        |
| [**getRouteLogsByEvent**](EventApi.md#getRouteLogsByEvent) | **GET** /v1/projects/{projectOrProductUID}/events/{eventUID}/route-logs | Get an event&#39;s route logs |

## getEvents

> GetEvents200Response getEvents(projectOrProductUID, opts)

List events in a project

List a project&#39;s events, filtered by device, notefile, date, fleet, session and more. Use &#x60;cursor&#x60; to read events in the order Notehub stored them and to poll for new ones. Set &#x60;format&#x3D;csv&#x60; for CSV. For one fleet, use &#x60;GetFleetEvents&#x60;. Paginated. Returns 403 if the organization is suspended, and 500 if the query times out; narrow the filters and retry.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.EventApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  deviceUID: ["null"], // [String] | A DeviceUID.
  sensorUID: ["null"], // [String] | SensorUID to filter by, matched exactly. Repeat for more than one.
  sortBy: "'captured'", // String |
  sortOrder: "'asc'", // String |
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  dateType: "uploaded", // String | Which time `startDate` and `endDate` filter on. - `captured`: when the Notecard created the event - `uploaded`: when Notehub received it
  systemFilesOnly: true, // Boolean | If true, return only events from system notefiles, such as `_session.qo` and `_health.qo`.
  files: "_health.qo, data.qo", // String | Comma-separated notefiles, e.g. `data.qo,_health.qo`. Don't combine with `systemFilesOnly`.
  format: "'json'", // String | Response format. - `json`: a JSON object with `events` - `csv`: CSV, with the columns in `selectFields`
  serialNumber: ["null"], // [String] | Serial number to filter by. Repeat for more than one.
  fleetUID: ["null"], // [String] | Filter by FleetUID
  sessionUID: ["null"], // [String] | SessionUID to filter by. Repeat for more than one.
  eventUID: ["null"], // [String] | EventUID to filter by. Repeat for more than one.
  selectFields: "selectFields_example", // String | Comma-separated event fields to return, e.g. `device,when,body.temp`. Also sets the CSV columns.
};
apiInstance.getEvents(projectOrProductUID, opts).then(
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

| Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                                      |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **projectOrProductUID** | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **pageSize**            | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000]               |
| **pageNum**             | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]                  |
| **cursor**              | **String**                | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                                 |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                                 |
| **sensorUID**           | [**[String]**](String.md) | SensorUID to filter by, matched exactly. Repeat for more than one.                                                                                                                                                                                                                                                                                                                                                                                                      | [optional]                                 |
| **sortBy**              | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;captured&#39;] |
| **sortOrder**           | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;asc&#39;]      |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                                 |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                           | [optional]                                 |
| **dateType**            | **String**                | Which time &#x60;startDate&#x60; and &#x60;endDate&#x60; filter on. - &#x60;captured&#x60;: when the Notecard created the event - &#x60;uploaded&#x60;: when Notehub received it                                                                                                                                                                                                                                                                                        | [optional] [default to &#39;captured&#39;] |
| **systemFilesOnly**     | **Boolean**               | If true, return only events from system notefiles, such as &#x60;\_session.qo&#x60; and &#x60;\_health.qo&#x60;.                                                                                                                                                                                                                                                                                                                                                        | [optional]                                 |
| **files**               | **String**                | Comma-separated notefiles, e.g. &#x60;data.qo,\_health.qo&#x60;. Don&#39;t combine with &#x60;systemFilesOnly&#x60;.                                                                                                                                                                                                                                                                                                                                                    | [optional]                                 |
| **format**              | **String**                | Response format. - &#x60;json&#x60;: a JSON object with &#x60;events&#x60; - &#x60;csv&#x60;: CSV, with the columns in &#x60;selectFields&#x60;                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;json&#39;]     |
| **serialNumber**        | [**[String]**](String.md) | Serial number to filter by. Repeat for more than one.                                                                                                                                                                                                                                                                                                                                                                                                                   | [optional]                                 |
| **fleetUID**            | [**[String]**](String.md) | Filter by FleetUID                                                                                                                                                                                                                                                                                                                                                                                                                                                      | [optional]                                 |
| **sessionUID**          | [**[String]**](String.md) | SessionUID to filter by. Repeat for more than one.                                                                                                                                                                                                                                                                                                                                                                                                                      | [optional]                                 |
| **eventUID**            | [**[String]**](String.md) | EventUID to filter by. Repeat for more than one.                                                                                                                                                                                                                                                                                                                                                                                                                        | [optional]                                 |
| **selectFields**        | **String**                | Comma-separated event fields to return, e.g. &#x60;device,when,body.temp&#x60;. Also sets the CSV columns.                                                                                                                                                                                                                                                                                                                                                              | [optional]                                 |

### Return type

[**GetEvents200Response**](GetEvents200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv

## getFleetEvents

> GetEvents200Response getFleetEvents(projectOrProductUID, fleetUID, opts)

List events in a fleet

List the events from one fleet, with the same filters, &#x60;cursor&#x60; and CSV output as &#x60;GetEvents&#x60;. Paginated. Returns 403 if the organization is suspended, and 500 if the query times out; narrow the filters and retry.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.EventApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  deviceUID: ["null"], // [String] | A DeviceUID.
  sensorUID: ["null"], // [String] | SensorUID to filter by, matched exactly. Repeat for more than one.
  sortBy: "'captured'", // String |
  sortOrder: "'asc'", // String |
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  dateType: "uploaded", // String | Which time `startDate` and `endDate` filter on. - `captured`: when the Notecard created the event - `uploaded`: when Notehub received it
  systemFilesOnly: true, // Boolean | If true, return only events from system notefiles, such as `_session.qo` and `_health.qo`.
  files: "_health.qo, data.qo", // String | Comma-separated notefiles, e.g. `data.qo,_health.qo`. Don't combine with `systemFilesOnly`.
  format: "'json'", // String | Response format. - `json`: a JSON object with `events` - `csv`: CSV, with the columns in `selectFields`
  serialNumber: ["null"], // [String] | Serial number to filter by. Repeat for more than one.
  sessionUID: ["null"], // [String] | SessionUID to filter by. Repeat for more than one.
  eventUID: ["null"], // [String] | EventUID to filter by. Repeat for more than one.
  selectFields: "selectFields_example", // String | Comma-separated event fields to return, e.g. `device,when,body.temp`. Also sets the CSV columns.
};
apiInstance.getFleetEvents(projectOrProductUID, fleetUID, opts).then(
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

| Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                                      |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **projectOrProductUID** | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **fleetUID**            | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **pageSize**            | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000]               |
| **pageNum**             | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]                  |
| **cursor**              | **String**                | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                                 |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                                 |
| **sensorUID**           | [**[String]**](String.md) | SensorUID to filter by, matched exactly. Repeat for more than one.                                                                                                                                                                                                                                                                                                                                                                                                      | [optional]                                 |
| **sortBy**              | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;captured&#39;] |
| **sortOrder**           | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;asc&#39;]      |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                                 |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                           | [optional]                                 |
| **dateType**            | **String**                | Which time &#x60;startDate&#x60; and &#x60;endDate&#x60; filter on. - &#x60;captured&#x60;: when the Notecard created the event - &#x60;uploaded&#x60;: when Notehub received it                                                                                                                                                                                                                                                                                        | [optional] [default to &#39;captured&#39;] |
| **systemFilesOnly**     | **Boolean**               | If true, return only events from system notefiles, such as &#x60;\_session.qo&#x60; and &#x60;\_health.qo&#x60;.                                                                                                                                                                                                                                                                                                                                                        | [optional]                                 |
| **files**               | **String**                | Comma-separated notefiles, e.g. &#x60;data.qo,\_health.qo&#x60;. Don&#39;t combine with &#x60;systemFilesOnly&#x60;.                                                                                                                                                                                                                                                                                                                                                    | [optional]                                 |
| **format**              | **String**                | Response format. - &#x60;json&#x60;: a JSON object with &#x60;events&#x60; - &#x60;csv&#x60;: CSV, with the columns in &#x60;selectFields&#x60;                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;json&#39;]     |
| **serialNumber**        | [**[String]**](String.md) | Serial number to filter by. Repeat for more than one.                                                                                                                                                                                                                                                                                                                                                                                                                   | [optional]                                 |
| **sessionUID**          | [**[String]**](String.md) | SessionUID to filter by. Repeat for more than one.                                                                                                                                                                                                                                                                                                                                                                                                                      | [optional]                                 |
| **eventUID**            | [**[String]**](String.md) | EventUID to filter by. Repeat for more than one.                                                                                                                                                                                                                                                                                                                                                                                                                        | [optional]                                 |
| **selectFields**        | **String**                | Comma-separated event fields to return, e.g. &#x60;device,when,body.temp&#x60;. Also sets the CSV columns.                                                                                                                                                                                                                                                                                                                                                              | [optional]                                 |

### Return type

[**GetEvents200Response**](GetEvents200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/csv

## getRouteLogsByEvent

> [RouteLog] getRouteLogsByEvent(projectOrProductUID, eventUID)

Get an event&#39;s route logs

Get the log of every attempt to send one event to each route, with the response status, body and duration. For a route&#39;s logs across events, use &#x60;GetRouteLogsByRoute&#x60;. Returns 404 if the event doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.EventApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let eventUID = "4506f411-dea6-44a0-9743-1130f57d7747"; // String | EventUID, e.g. `4506f411-dea6-44a0-9743-1130f57d7747`.
apiInstance.getRouteLogsByEvent(projectOrProductUID, eventUID).then(
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

| Name                    | Type       | Description                                                      | Notes |
| ----------------------- | ---------- | ---------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                  |
| **eventUID**            | **String** | EventUID, e.g. &#x60;4506f411-dea6-44a0-9743-1130f57d7747&#x60;. |

### Return type

[**[RouteLog]**](RouteLog.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
