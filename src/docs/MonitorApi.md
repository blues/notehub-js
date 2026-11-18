# NotehubJs.MonitorApi

All URIs are relative to *https://api.notefile.net*

| Method                                           | HTTP request                                                        | Description      |
| ------------------------------------------------ | ------------------------------------------------------------------- | ---------------- |
| [**createMonitor**](MonitorApi.md#createMonitor) | **POST** /v1/projects/{projectOrProductUID}/monitors                | Create a monitor |
| [**deleteMonitor**](MonitorApi.md#deleteMonitor) | **DELETE** /v1/projects/{projectOrProductUID}/monitors/{monitorUID} | Delete a monitor |
| [**getMonitor**](MonitorApi.md#getMonitor)       | **GET** /v1/projects/{projectOrProductUID}/monitors/{monitorUID}    | Get a monitor    |
| [**getMonitors**](MonitorApi.md#getMonitors)     | **GET** /v1/projects/{projectOrProductUID}/monitors                 | List monitors    |
| [**updateMonitor**](MonitorApi.md#updateMonitor) | **PUT** /v1/projects/{projectOrProductUID}/monitors/{monitorUID}    | Update a monitor |

## createMonitor

> Monitor createMonitor(projectOrProductUID, createMonitor)

Create a monitor

Create a monitor that raises an alert and notifies email, Slack or Twilio when its condition holds. It can watch an event value (&#x60;event&#x60;, the default), devices going quiet (&#x60;heartbeat&#x60;), or data usage (&#x60;usage&#x60;). Requires the Owner or Developer role. Returns 403 if the project&#39;s plan doesn&#39;t allow the monitor, and 400 for invalid settings.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let createMonitor = new NotehubJs.CreateMonitor(); // CreateMonitor | Body or payload of monitor to be created
apiInstance.createMonitor(projectOrProductUID, createMonitor).then(
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

| Name                    | Type                                  | Description                              | Notes |
| ----------------------- | ------------------------------------- | ---------------------------------------- | ----- |
| **projectOrProductUID** | **String**                            |                                          |
| **createMonitor**       | [**CreateMonitor**](CreateMonitor.md) | Body or payload of monitor to be created |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteMonitor

> Monitor deleteMonitor(projectOrProductUID, monitorUID)

Delete a monitor

Delete a monitor so it stops raising alerts. Returns an empty monitor object. To pause it instead, set &#x60;disabled&#x60; with &#x60;UpdateMonitor&#x60;. Requires the Owner or Developer role. Returns 404 if the monitor never existed; deleting it again succeeds.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let monitorUID = "monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad"; // String | MonitorUID, `monitor:` followed by a UUID. List with `GetMonitors`.
apiInstance.deleteMonitor(projectOrProductUID, monitorUID).then(
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

| Name                    | Type       | Description                                                                             | Notes |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                         |
| **monitorUID**          | **String** | MonitorUID, &#x60;monitor:&#x60; followed by a UUID. List with &#x60;GetMonitors&#x60;. |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMonitor

> Monitor getMonitor(projectOrProductUID, monitorUID)

Get a monitor

Get one monitor&#39;s settings and whether it&#39;s in alert. Slack and Twilio credentials in &#x60;alert_routes&#x60; come back as &#x60;(omitted)&#x60;. Returns 404 if the monitor never existed; a deleted monitor is still returned.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let monitorUID = "monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad"; // String | MonitorUID, `monitor:` followed by a UUID. List with `GetMonitors`.
apiInstance.getMonitor(projectOrProductUID, monitorUID).then(
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

| Name                    | Type       | Description                                                                             | Notes |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                         |
| **monitorUID**          | **String** | MonitorUID, &#x60;monitor:&#x60; followed by a UUID. List with &#x60;GetMonitors&#x60;. |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getMonitors

> [Monitor] getMonitors(projectOrProductUID)

List monitors

List a project&#39;s monitors with their settings and whether each is in alert. For the alerts they&#39;ve raised, use &#x60;GetAlerts&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getMonitors(projectOrProductUID).then(
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

[**[Monitor]**](Monitor.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateMonitor

> Monitor updateMonitor(projectOrProductUID, monitorUID, monitor)

Update a monitor

Replace a monitor&#39;s settings with the whole monitor, as &#x60;GetMonitor&#x60; returns it. Omitted fields are cleared or reset, except &#x60;source_type&#x60;, &#x60;fleet_filter&#x60;, &#x60;notefile_filter&#x60;, &#x60;condition_type&#x60;, &#x60;aggregate_window&#x60; and &#x60;alert_routes&#x60;. Slack and Twilio credentials left as &#x60;(omitted)&#x60; are kept. Requires the Owner or Developer role. Returns 403 if the plan doesn&#39;t allow a new &#x60;source_type&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.MonitorApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let monitorUID = "monitor:8bAdf00d-000f-51c-af-01d5eaf00dbad"; // String | MonitorUID, `monitor:` followed by a UUID. List with `GetMonitors`.
let monitor = new NotehubJs.Monitor(); // Monitor | Body or payload of monitor to be created
apiInstance.updateMonitor(projectOrProductUID, monitorUID, monitor).then(
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

| Name                    | Type                      | Description                                                                             | Notes |
| ----------------------- | ------------------------- | --------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                |                                                                                         |
| **monitorUID**          | **String**                | MonitorUID, &#x60;monitor:&#x60; followed by a UUID. List with &#x60;GetMonitors&#x60;. |
| **monitor**             | [**Monitor**](Monitor.md) | Body or payload of monitor to be created                                                |

### Return type

[**Monitor**](Monitor.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
