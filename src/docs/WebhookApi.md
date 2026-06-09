# NotehubJs.WebhookApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                   | HTTP request                                                                       | Description |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| [**createLegacyWebhookEvent**](WebhookApi.md#createLegacyWebhookEvent)                   | **POST** /v1/products/{productUID}/devices/{deviceUID}/webhook-event               |
| [**createWebhook**](WebhookApi.md#createWebhook)                                         | **POST** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}                  |
| [**createWebhookDeviceEventByProduct**](WebhookApi.md#createWebhookDeviceEventByProduct) | **POST** /v1/products/{productUID}/webhooks/{webhookUID}/devices/{deviceUID}/event |
| [**createWebhookEventByProduct**](WebhookApi.md#createWebhookEventByProduct)             | **POST** /v1/products/{productUID}/webhooks/{webhookUID}/event                     |
| [**deleteWebhook**](WebhookApi.md#deleteWebhook)                                         | **DELETE** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}                |
| [**getWebhook**](WebhookApi.md#getWebhook)                                               | **GET** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}                   |
| [**getWebhookSettingsByProduct**](WebhookApi.md#getWebhookSettingsByProduct)             | **GET** /v1/products/{productUID}/webhooks/{webhookUID}/settings                   |
| [**getWebhooks**](WebhookApi.md#getWebhooks)                                             | **GET** /v1/projects/{projectOrProductUID}/webhooks                                |
| [**updateLegacyWebhookSession**](WebhookApi.md#updateLegacyWebhookSession)               | **PUT** /v1/products/{productUID}/devices/{deviceUID}/webhook-session              |
| [**updateWebhook**](WebhookApi.md#updateWebhook)                                         | **PUT** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}                   |
| [**updateWebhookSettingsByProduct**](WebhookApi.md#updateWebhookSettingsByProduct)       | **PUT** /v1/products/{productUID}/webhooks/{webhookUID}/settings                   |

## createLegacyWebhookEvent

> createLegacyWebhookEvent(productUID, deviceUID, requestBody)

Legacy endpoint for sending an event from a webhook, associated with the given device (provisioning it if necessary). The request body is a Note-shaped object containing the notefile name, body, and optional payload.

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

Creates a webhook for the specified product with the given name. The name | must be unique within the project.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
let webhookSettings = {"settings":{"disabled":false,"id":"Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8","transform":"{\"device\":body.end_device_ids.dev_eui,\"sn\":body.end_device_ids.device_id,\"body\":body.uplink_message.decoded_payload,\"details\":body}"}}; // WebhookSettings |
apiInstance.createWebhook(projectOrProductUID, webhookUID, webhookSettings).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                      | Description | Notes |
| ----------------------- | ----------------------------------------- | ----------- | ----- |
| **projectOrProductUID** | **String**                                |             |
| **webhookUID**          | **String**                                | Webhook UID |
| **webhookSettings**     | [**WebhookSettings**](WebhookSettings.md) |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createWebhookDeviceEventByProduct

> createWebhookDeviceEventByProduct(productUID, webhookUID, deviceUID, requestBody)

Sends an event to be processed by the specified webhook, addressed by productUID, associated with the given device (provisioning it if necessary). The entire request body becomes the event body. The webhook&#39;s configured JSONata transform, if any, is applied before routing.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
let deviceUID = "dev:000000000000000"; // String |
let requestBody = {key: null}; // {String: Object} | The event body (arbitrary JSON)
apiInstance.createWebhookDeviceEventByProduct(productUID, webhookUID, deviceUID, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name            | Type                              | Description                     | Notes |
| --------------- | --------------------------------- | ------------------------------- | ----- |
| **productUID**  | **String**                        |                                 |
| **webhookUID**  | **String**                        | Webhook UID                     |
| **deviceUID**   | **String**                        |                                 |
| **requestBody** | [**{String: Object}**](Object.md) | The event body (arbitrary JSON) |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createWebhookEventByProduct

> createWebhookEventByProduct(productUID, webhookUID, requestBody)

Sends an event to be processed by the specified webhook, addressed by productUID. The entire request body becomes the event body. The webhook&#39;s configured JSONata transform, if any, is applied before routing. The event is not associated with a specific device.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
let requestBody = {key: null}; // {String: Object} | The event body (arbitrary JSON)
apiInstance.createWebhookEventByProduct(productUID, webhookUID, requestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name            | Type                              | Description                     | Notes |
| --------------- | --------------------------------- | ------------------------------- | ----- |
| **productUID**  | **String**                        |                                 |
| **webhookUID**  | **String**                        | Webhook UID                     |
| **requestBody** | [**{String: Object}**](Object.md) | The event body (arbitrary JSON) |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteWebhook

> deleteWebhook(projectOrProductUID, webhookUID)

Deletes the specified webhook

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
apiInstance.deleteWebhook(projectOrProductUID, webhookUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **webhookUID**          | **String** | Webhook UID |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhook

> WebhookSettings getWebhook(projectOrProductUID, webhookUID)

Retrieves the configuration settings for the specified webhook

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
apiInstance.getWebhook(projectOrProductUID, webhookUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **webhookUID**          | **String** | Webhook UID |

### Return type

[**WebhookSettings**](WebhookSettings.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhookSettingsByProduct

> WebhookSettings getWebhookSettingsByProduct(productUID, webhookUID)

Retrieves the configuration settings for the specified webhook, addressed by productUID.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
apiInstance.getWebhookSettingsByProduct(productUID, webhookUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name           | Type       | Description | Notes |
| -------------- | ---------- | ----------- | ----- |
| **productUID** | **String** |             |
| **webhookUID** | **String** | Webhook UID |

### Return type

[**WebhookSettings**](WebhookSettings.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhooks

> GetWebhooks200Response getWebhooks(projectOrProductUID)

Retrieves all webhooks for the specified project

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

Legacy endpoint for opening or updating a webhook session for the given device (provisioning the device if necessary). Used by external services that need to maintain a callable session against a device behind a webhook.

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
  requestBody: { key: null }, // {String: Object} | Optional session metadata.
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

| Name            | Type                              | Description                | Notes      |
| --------------- | --------------------------------- | -------------------------- | ---------- |
| **productUID**  | **String**                        |                            |
| **deviceUID**   | **String**                        |                            |
| **requestBody** | [**{String: Object}**](Object.md) | Optional session metadata. | [optional] |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateWebhook

> updateWebhook(projectOrProductUID, webhookUID, webhookSettings)

Updates the configuration settings for the specified webhook. | Webhook will be created if it does not exist. Update body will completely replace the existing settings.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
let webhookSettings = {"disabled":false,"transform":"{\"device\":body.end_device_ids.dev_eui,\"sn\":body.end_device_ids.device_id,\"body\":body.uplink_message.decoded_payload,\"details\":body}"}; // WebhookSettings |
apiInstance.updateWebhook(projectOrProductUID, webhookUID, webhookSettings).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                      | Description | Notes |
| ----------------------- | ----------------------------------------- | ----------- | ----- |
| **projectOrProductUID** | **String**                                |             |
| **webhookUID**          | **String**                                | Webhook UID |
| **webhookSettings**     | [**WebhookSettings**](WebhookSettings.md) |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateWebhookSettingsByProduct

> updateWebhookSettingsByProduct(productUID, webhookUID, webhookSettings)

Updates the configuration settings for the specified webhook, addressed by productUID. Update body will completely replace the existing settings.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications['personalAccessToken'];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NotehubJs.WebhookApi();
let productUID = "com.blues.bridge:sensors"; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
let webhookSettings = {"disabled":false,"transform":"{\"device\":body.end_device_ids.dev_eui,\"sn\":body.end_device_ids.device_id,\"body\":body.uplink_message.decoded_payload,\"details\":body}"}; // WebhookSettings |
apiInstance.updateWebhookSettingsByProduct(productUID, webhookUID, webhookSettings).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                | Type                                      | Description | Notes |
| ------------------- | ----------------------------------------- | ----------- | ----- |
| **productUID**      | **String**                                |             |
| **webhookUID**      | **String**                                | Webhook UID |
| **webhookSettings** | [**WebhookSettings**](WebhookSettings.md) |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
