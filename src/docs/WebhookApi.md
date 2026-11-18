# NotehubJs.WebhookApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                   | HTTP request                                                                       | Description                                           |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [**createLegacyWebhookEvent**](WebhookApi.md#createLegacyWebhookEvent)                   | **POST** /v1/products/{productUID}/devices/{deviceUID}/webhook-event               | Add a note-shaped event from a device (legacy)        |
| [**createWebhook**](WebhookApi.md#createWebhook)                                         | **POST** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}                  | Create a webhook                                      |
| [**createWebhookDeviceEventByProduct**](WebhookApi.md#createWebhookDeviceEventByProduct) | **POST** /v1/products/{productUID}/webhooks/{webhookUID}/devices/{deviceUID}/event | Send a device&#39;s event through a webhook           |
| [**createWebhookEventByProduct**](WebhookApi.md#createWebhookEventByProduct)             | **POST** /v1/products/{productUID}/webhooks/{webhookUID}/event                     | Send an event through a webhook                       |
| [**deleteWebhook**](WebhookApi.md#deleteWebhook)                                         | **DELETE** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}                | Delete a webhook                                      |
| [**getWebhook**](WebhookApi.md#getWebhook)                                               | **GET** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}                   | Get a webhook                                         |
| [**getWebhookSettingsByProduct**](WebhookApi.md#getWebhookSettingsByProduct)             | **GET** /v1/products/{productUID}/webhooks/{webhookUID}/settings                   | Get a webhook by ProductUID                           |
| [**getWebhooks**](WebhookApi.md#getWebhooks)                                             | **GET** /v1/projects/{projectOrProductUID}/webhooks                                | List webhooks                                         |
| [**updateLegacyWebhookSession**](WebhookApi.md#updateLegacyWebhookSession)               | **PUT** /v1/products/{productUID}/devices/{deviceUID}/webhook-session              | Open or close a webhook device&#39;s session (legacy) |
| [**updateWebhook**](WebhookApi.md#updateWebhook)                                         | **PUT** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}                   | Update a webhook                                      |
| [**updateWebhookSettingsByProduct**](WebhookApi.md#updateWebhookSettingsByProduct)       | **PUT** /v1/products/{productUID}/webhooks/{webhookUID}/settings                   | Update a webhook by ProductUID                        |

## createLegacyWebhookEvent

> createLegacyWebhookEvent(productUID, deviceUID, requestBody)

Add a note-shaped event from a device (legacy)

Legacy: add an event from a device, adding the device to the project if it&#39;s new. The body is note-shaped: &#x60;file&#x60;, &#x60;body&#x60;, an optional base64 &#x60;payload&#x60;, and other event fields such as &#x60;when&#x60; and &#x60;sn&#x60;. No webhook transform applies. New integrations should use &#x60;CreateWebhookDeviceEventByProduct&#x60;. Requires the Owner or Developer role. Returns 400 if there&#39;s no &#x60;body&#x60; or &#x60;payload&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let deviceUID = "dev:000000000000000"; // String |
let requestBody = {
  body: { key: "value" },
  file: "data.qo",
  payload: "SGVsbG8sIFdvcmxkIQ==",
}; // {String: Object} | A Note-shaped event. Typically contains the notefile name (file), a JSON body, and an optional base64-encoded payload, but any additional Note fields (e.g. when, sn, where_lat, where_lon) are accepted and honored.
apiInstance.createLegacyWebhookEvent(productUID, deviceUID, requestBody).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type                              | Description                                                                                                                                                                                                           | Notes |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **productUID**  | **String**                        |                                                                                                                                                                                                                       |
| **deviceUID**   | **String**                        |                                                                                                                                                                                                                       |
| **requestBody** | [**{String: Object}**](Object.md) | A Note-shaped event. Typically contains the notefile name (file), a JSON body, and an optional base64-encoded payload, but any additional Note fields (e.g. when, sn, where_lat, where_lon) are accepted and honored. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createWebhook

> createWebhook(projectOrProductUID, webhookUID, webhookSettings)

Create a webhook

Create an inbound webhook that outside services post to with &#x60;CreateWebhookEventByProduct&#x60;. Its events go to the notefile &#x60;&lt;webhookUID&gt;.qo&#x60; unless its JSONata &#x60;transform&#x60; sets &#x60;file&#x60;. Use a lower-case ID; the event endpoints look it up in lower case. Requires the Owner or Developer role. Returns 409 if the ID is taken, and 400 if it has characters other than letters, digits, &#x60;-&#x60; and &#x60;\_&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let webhookUID = ttn - uplink; // String | Webhook ID, e.g. `ttn-uplink`. Use lower case. List with `GetWebhooks`.
let webhookSettings = {
  disabled: false,
  id: "ttn-uplink",
  transform:
    '{"device":body.end_device_ids.dev_eui,"sn":body.end_device_ids.device_id,"body":body.uplink_message.decoded_payload,"details":body}',
}; // WebhookSettings |
apiInstance
  .createWebhook(projectOrProductUID, webhookUID, webhookSettings)
  .then(
    () => {
      console.log("API called successfully.");
    },
    (error) => {
      console.error(error);
    }
  );
```

### Parameters

| Name                    | Type                                      | Description                                                                                 | Notes |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                                |                                                                                             |
| **webhookUID**          | **String**                                | Webhook ID, e.g. &#x60;ttn-uplink&#x60;. Use lower case. List with &#x60;GetWebhooks&#x60;. |
| **webhookSettings**     | [**WebhookSettings**](WebhookSettings.md) |                                                                                             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createWebhookDeviceEventByProduct

> createWebhookDeviceEventByProduct(productUID, webhookUID, deviceUID, requestBody)

Send a device&#39;s event through a webhook

Post JSON to a webhook as one device&#39;s event, like &#x60;CreateWebhookEventByProduct&#x60;, adding the device if it&#39;s new. The DeviceUID is lower-cased and gets &#x60;dev:ext:&#x60; unless it has its own sub-prefix, so &#x60;dev:abc&#x60; becomes &#x60;dev:ext:abc&#x60;, not an existing Notecard. Requires the Owner or Developer role. Returns 400 if the transform fails, and 500 if the webhook is disabled.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let webhookUID = ttn - uplink; // String | Webhook ID, e.g. `ttn-uplink`. Use lower case. List with `GetWebhooks`.
let deviceUID = "dev:000000000000000"; // String |
let requestBody = { key: null }; // {String: Object} | Any JSON object; it becomes the event body, or the transform's input.
apiInstance
  .createWebhookDeviceEventByProduct(
    productUID,
    webhookUID,
    deviceUID,
    requestBody
  )
  .then(
    () => {
      console.log("API called successfully.");
    },
    (error) => {
      console.error(error);
    }
  );
```

### Parameters

| Name            | Type                              | Description                                                                                 | Notes |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------- | ----- |
| **productUID**  | **String**                        |                                                                                             |
| **webhookUID**  | **String**                        | Webhook ID, e.g. &#x60;ttn-uplink&#x60;. Use lower case. List with &#x60;GetWebhooks&#x60;. |
| **deviceUID**   | **String**                        |                                                                                             |
| **requestBody** | [**{String: Object}**](Object.md) | Any JSON object; it becomes the event body, or the transform&#39;s input.                   |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createWebhookEventByProduct

> createWebhookEventByProduct(productUID, webhookUID, requestBody)

Send an event through a webhook

Post JSON to a webhook. The body becomes the event body, in &#x60;&lt;webhookUID&gt;.qo&#x60;, from &#x60;dev:ext:webhook&#x60;; a &#x60;transform&#x60; can change all three, but must set &#x60;body&#x60;. For a specific device, use &#x60;CreateWebhookDeviceEventByProduct&#x60;. Requires the Owner or Developer role. Returns 400 if the transform fails or sets no &#x60;body&#x60;, and 500 if the webhook is disabled.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let webhookUID = ttn - uplink; // String | Webhook ID, e.g. `ttn-uplink`. Use lower case. List with `GetWebhooks`.
let requestBody = { key: null }; // {String: Object} | Any JSON object; it becomes the event body, or the transform's input.
apiInstance
  .createWebhookEventByProduct(productUID, webhookUID, requestBody)
  .then(
    () => {
      console.log("API called successfully.");
    },
    (error) => {
      console.error(error);
    }
  );
```

### Parameters

| Name            | Type                              | Description                                                                                 | Notes |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------------------- | ----- |
| **productUID**  | **String**                        |                                                                                             |
| **webhookUID**  | **String**                        | Webhook ID, e.g. &#x60;ttn-uplink&#x60;. Use lower case. List with &#x60;GetWebhooks&#x60;. |
| **requestBody** | [**{String: Object}**](Object.md) | Any JSON object; it becomes the event body, or the transform&#39;s input.                   |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteWebhook

> deleteWebhook(projectOrProductUID, webhookUID)

Delete a webhook

Delete a webhook&#39;s settings. Posts to its ID are still accepted, just without a transform; to stop accepting them, set &#x60;disabled&#x60; with &#x60;UpdateWebhook&#x60; instead. Requires the Owner or Developer role. Returns 404 if the webhook doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let webhookUID = ttn - uplink; // String | Webhook ID, e.g. `ttn-uplink`. Use lower case. List with `GetWebhooks`.
apiInstance.deleteWebhook(projectOrProductUID, webhookUID).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                                 | Notes |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                             |
| **webhookUID**          | **String** | Webhook ID, e.g. &#x60;ttn-uplink&#x60;. Use lower case. List with &#x60;GetWebhooks&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhook

> WebhookSettings getWebhook(projectOrProductUID, webhookUID)

Get a webhook

Get one webhook&#39;s transform and whether it&#39;s disabled. Requires the Owner or Developer role. Returns 404 if the webhook doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let webhookUID = ttn - uplink; // String | Webhook ID, e.g. `ttn-uplink`. Use lower case. List with `GetWebhooks`.
apiInstance.getWebhook(projectOrProductUID, webhookUID).then(
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

| Name                    | Type       | Description                                                                                 | Notes |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                             |
| **webhookUID**          | **String** | Webhook ID, e.g. &#x60;ttn-uplink&#x60;. Use lower case. List with &#x60;GetWebhooks&#x60;. |

### Return type

[**WebhookSettings**](WebhookSettings.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhookSettingsByProduct

> WebhookSettings getWebhookSettingsByProduct(productUID, webhookUID)

Get a webhook by ProductUID

Get one webhook&#39;s settings, like &#x60;GetWebhook&#x60;, but addressed by ProductUID instead of the project. Requires the Owner or Developer role. Returns 500, not 404, if the webhook doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let webhookUID = ttn - uplink; // String | Webhook ID, e.g. `ttn-uplink`. Use lower case. List with `GetWebhooks`.
apiInstance.getWebhookSettingsByProduct(productUID, webhookUID).then(
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

| Name           | Type       | Description                                                                                 | Notes |
| -------------- | ---------- | ------------------------------------------------------------------------------------------- | ----- |
| **productUID** | **String** |                                                                                             |
| **webhookUID** | **String** | Webhook ID, e.g. &#x60;ttn-uplink&#x60;. Use lower case. List with &#x60;GetWebhooks&#x60;. |

### Return type

[**WebhookSettings**](WebhookSettings.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhooks

> GetWebhooks200Response getWebhooks(projectOrProductUID)

List webhooks

List a project&#39;s inbound webhooks with their transforms and whether they&#39;re disabled. An inbound webhook lets an outside service post data that Notehub turns into events. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getWebhooks(projectOrProductUID).then(
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

[**GetWebhooks200Response**](GetWebhooks200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateLegacyWebhookSession

> updateLegacyWebhookSession(productUID, deviceUID, opts)

Open or close a webhook device&#39;s session (legacy)

Legacy: open, update or close a webhook device&#39;s session, adding the device if it&#39;s new. The body is a session: set &#x60;why_session_opened&#x60; to open one, &#x60;why_session_closed&#x60; to close it, both to close and reopen, or neither to update the open session. Requires the Owner or Developer role. Returns 400 when updating with no session open.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let deviceUID = "dev:000000000000000"; // String |
let opts = {
  requestBody: { key: null }, // {String: Object} | Session fields, such as `why_session_opened`, `why_session_closed` and signal or location values.
};
apiInstance.updateLegacyWebhookSession(productUID, deviceUID, opts).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name            | Type                              | Description                                                                                                           | Notes      |
| --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| **productUID**  | **String**                        |                                                                                                                       |
| **deviceUID**   | **String**                        |                                                                                                                       |
| **requestBody** | [**{String: Object}**](Object.md) | Session fields, such as &#x60;why_session_opened&#x60;, &#x60;why_session_closed&#x60; and signal or location values. | [optional] |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateWebhook

> updateWebhook(projectOrProductUID, webhookUID, webhookSettings)

Update a webhook

Replace a webhook&#39;s settings, creating the webhook if it doesn&#39;t exist. Send every field: a missing &#x60;transform&#x60; is cleared and a missing &#x60;disabled&#x60; enables the webhook. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let webhookUID = ttn - uplink; // String | Webhook ID, e.g. `ttn-uplink`. Use lower case. List with `GetWebhooks`.
let webhookSettings = {
  disabled: false,
  transform:
    '{"device":body.end_device_ids.dev_eui,"sn":body.end_device_ids.device_id,"body":body.uplink_message.decoded_payload,"details":body}',
}; // WebhookSettings |
apiInstance
  .updateWebhook(projectOrProductUID, webhookUID, webhookSettings)
  .then(
    () => {
      console.log("API called successfully.");
    },
    (error) => {
      console.error(error);
    }
  );
```

### Parameters

| Name                    | Type                                      | Description                                                                                 | Notes |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                                |                                                                                             |
| **webhookUID**          | **String**                                | Webhook ID, e.g. &#x60;ttn-uplink&#x60;. Use lower case. List with &#x60;GetWebhooks&#x60;. |
| **webhookSettings**     | [**WebhookSettings**](WebhookSettings.md) |                                                                                             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateWebhookSettingsByProduct

> updateWebhookSettingsByProduct(productUID, webhookUID, webhookSettings)

Update a webhook by ProductUID

Replace a webhook&#39;s settings, like &#x60;UpdateWebhook&#x60;, but addressed by ProductUID. Creates the webhook if it doesn&#39;t exist. Requires the Owner or Developer role. Returns 400 if the ID has characters other than letters, digits, &#x60;-&#x60; and &#x60;\_&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let webhookUID = ttn - uplink; // String | Webhook ID, e.g. `ttn-uplink`. Use lower case. List with `GetWebhooks`.
let webhookSettings = {
  disabled: false,
  transform:
    '{"device":body.end_device_ids.dev_eui,"sn":body.end_device_ids.device_id,"body":body.uplink_message.decoded_payload,"details":body}',
}; // WebhookSettings |
apiInstance
  .updateWebhookSettingsByProduct(productUID, webhookUID, webhookSettings)
  .then(
    () => {
      console.log("API called successfully.");
    },
    (error) => {
      console.error(error);
    }
  );
```

### Parameters

| Name                | Type                                      | Description                                                                                 | Notes |
| ------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- | ----- |
| **productUID**      | **String**                                |                                                                                             |
| **webhookUID**      | **String**                                | Webhook ID, e.g. &#x60;ttn-uplink&#x60;. Use lower case. List with &#x60;GetWebhooks&#x60;. |
| **webhookSettings** | [**WebhookSettings**](WebhookSettings.md) |                                                                                             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
