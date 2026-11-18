# NotehubJs.DeviceApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                    | HTTP request                                                                                  | Description                                  |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [**addDbNote**](DeviceApi.md#addDbNote)                                                   | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}   | Add a note to a .db notefile                 |
| [**addQiNote**](DeviceApi.md#addQiNote)                                                   | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}            | Queue a note for a Notecard                  |
| [**createNotefile**](DeviceApi.md#createNotefile)                                         | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notefiles/{notefileID}        | Create an empty notefile                     |
| [**deleteDevice**](DeviceApi.md#deleteDevice)                                             | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}                             | Delete a device                              |
| [**deleteDeviceEnvironmentVariable**](DeviceApi.md#deleteDeviceEnvironmentVariable)       | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables/{key} | Delete a device environment variable         |
| [**deleteNote**](DeviceApi.md#deleteNote)                                                 | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID} | Delete a note                                |
| [**deleteNotefiles**](DeviceApi.md#deleteNotefiles)                                       | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/files                       | Delete notefiles                             |
| [**disableDevice**](DeviceApi.md#disableDevice)                                           | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/disable                       | Disable a device                             |
| [**enableDevice**](DeviceApi.md#enableDevice)                                             | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/enable                        | Enable a device                              |
| [**getDbNote**](DeviceApi.md#getDbNote)                                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}    | Get a note                                   |
| [**getDevice**](DeviceApi.md#getDevice)                                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}                                | Get a device                                 |
| [**getDeviceEnvironmentHierarchy**](DeviceApi.md#getDeviceEnvironmentHierarchy)           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_hierarchy          | Get a device&#39;s environment hierarchy     |
| [**getDeviceEnvironmentVariables**](DeviceApi.md#getDeviceEnvironmentVariables)           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables          | Get device environment variables             |
| [**getDeviceEnvironmentVariablesByPin**](DeviceApi.md#getDeviceEnvironmentVariablesByPin) | **GET** /v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin          | Get device environment variables using a PIN |
| [**getDeviceHealthLog**](DeviceApi.md#getDeviceHealthLog)                                 | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/health-log                     | Get a device&#39;s health log                |
| [**getDeviceJourney**](DeviceApi.md#getDeviceJourney)                                     | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/journeys/{journeyID}           | Get a journey and its events                 |
| [**getDeviceJourneys**](DeviceApi.md#getDeviceJourneys)                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/journeys                       | List a device&#39;s journeys                 |
| [**getDeviceLatestEvents**](DeviceApi.md#getDeviceLatestEvents)                           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/latest                         | Get a device&#39;s latest event per notefile |
| [**getDevicePlans**](DeviceApi.md#getDevicePlans)                                         | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/plans                          | Get a device&#39;s cellular data plans       |
| [**getDevicePublicKey**](DeviceApi.md#getDevicePublicKey)                                 | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/public-key                     | Get a device&#39;s public key                |
| [**getDevicePublicKeys**](DeviceApi.md#getDevicePublicKeys)                               | **GET** /v1/projects/{projectOrProductUID}/devices/public-keys                                | List public keys of all devices              |
| [**getDeviceSessions**](DeviceApi.md#getDeviceSessions)                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/sessions                       | List a device&#39;s sessions                 |
| [**getDevices**](DeviceApi.md#getDevices)                                                 | **GET** /v1/projects/{projectOrProductUID}/devices                                            | List devices in a project                    |
| [**getFleetDevices**](DeviceApi.md#getFleetDevices)                                       | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/devices                          | List devices in a fleet                      |
| [**getNotefile**](DeviceApi.md#getNotefile)                                               | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}             | Get the notes in a notefile                  |
| [**getSessions**](DeviceApi.md#getSessions)                                               | **GET** /v1/projects/{projectOrProductUID}/sessions                                           | List sessions in a project                   |
| [**listNotefiles**](DeviceApi.md#listNotefiles)                                           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/files                          | List a device&#39;s notefiles and notes      |
| [**provisionDevice**](DeviceApi.md#provisionDevice)                                       | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/provision                     | Provision a Notecard                         |
| [**setDeviceEnvironmentVariables**](DeviceApi.md#setDeviceEnvironmentVariables)           | **PUT** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/environment_variables          | Set device environment variables             |
| [**setDeviceEnvironmentVariablesByPin**](DeviceApi.md#setDeviceEnvironmentVariablesByPin) | **PUT** /v1/products/{productUID}/devices/{deviceUID}/environment_variables_with_pin          | Set device environment variables using a PIN |
| [**signalDevice**](DeviceApi.md#signalDevice)                                             | **POST** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/signal                        | Send a signal to a connected Notecard        |
| [**updateDbNote**](DeviceApi.md#updateDbNote)                                             | **PUT** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/notes/{notefileID}/{noteID}    | Update a note in a .db notefile              |

## addDbNote

> addDbNote(projectOrProductUID, deviceUID, notefileID, noteID, noteInput)

Add a note to a .db notefile

Add a note with the given ID to a database notefile on a device, synced to the Notecard on its next sync. To change an existing note, use &#x60;UpdateDbNote&#x60;; to queue a note in a &#x60;.qi&#x60; notefile, use &#x60;AddQiNote&#x60;. Requires the Owner or Developer role. Returns 400 unless the notefile ends in &#x60;.db&#x60; or &#x60;.dbs&#x60;, or if &#x60;payload&#x60; isn&#39;t valid base64.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let notefileID = "notefileID_example"; // String | Notefile name, including its extension, e.g. `config.db` or `commands.qi`.
let noteID = "noteID_example"; // String | Note ID within the notefile, e.g. `my_note`. Notes in a `.qi` notefile have IDs like `1:435`.
let noteInput = new NotehubJs.NoteInput(); // NoteInput | Body or payload of note to be added to the device
apiInstance
  .addDbNote(projectOrProductUID, deviceUID, notefileID, noteID, noteInput)
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

| Name                    | Type                          | Description                                                                                                                 | Notes |
| ----------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                    |                                                                                                                             |
| **deviceUID**           | **String**                    |                                                                                                                             |
| **notefileID**          | **String**                    | Notefile name, including its extension, e.g. &#x60;config.db&#x60; or &#x60;commands.qi&#x60;.                              |
| **noteID**              | **String**                    | Note ID within the notefile, e.g. &#x60;my_note&#x60;. Notes in a &#x60;.qi&#x60; notefile have IDs like &#x60;1:435&#x60;. |
| **noteInput**           | [**NoteInput**](NoteInput.md) | Body or payload of note to be added to the device                                                                           |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addQiNote

> addQiNote(projectOrProductUID, deviceUID, notefileID, noteInput)

Queue a note for a Notecard

Add a note to an inbound queue (&#x60;.qi&#x60;) notefile on a device, creating the notefile if needed. The Notecard receives it on its next sync. For a &#x60;.db&#x60; notefile, use &#x60;AddDbNote&#x60;; to reach a connected Notecard immediately, use &#x60;SignalDevice&#x60;. Requires the Owner or Developer role. Returns 400 unless the notefile ends in &#x60;.qi&#x60; or &#x60;.qis&#x60;, or if &#x60;payload&#x60; isn&#39;t valid base64.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let notefileID = "notefileID_example"; // String | Notefile name, including its extension, e.g. `config.db` or `commands.qi`.
let noteInput = new NotehubJs.NoteInput(); // NoteInput | Body or payload of note to be added to the device
apiInstance
  .addQiNote(projectOrProductUID, deviceUID, notefileID, noteInput)
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

| Name                    | Type                          | Description                                                                                    | Notes |
| ----------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                    |                                                                                                |
| **deviceUID**           | **String**                    |                                                                                                |
| **notefileID**          | **String**                    | Notefile name, including its extension, e.g. &#x60;config.db&#x60; or &#x60;commands.qi&#x60;. |
| **noteInput**           | [**NoteInput**](NoteInput.md) | Body or payload of note to be added to the device                                              |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createNotefile

> createNotefile(projectOrProductUID, deviceUID, notefileID)

Create an empty notefile

Create an empty notefile on a device. &#x60;AddQiNote&#x60; creates a notefile when needed, so this is only required for an empty one. Requires the Owner or Developer role. Returns 400 if the notefile already exists.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let notefileID = "notefileID_example"; // String | Notefile name, including its extension, e.g. `config.db` or `commands.qi`.
apiInstance.createNotefile(projectOrProductUID, deviceUID, notefileID).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                                    | Notes |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                |
| **deviceUID**           | **String** |                                                                                                |
| **notefileID**          | **String** | Notefile name, including its extension, e.g. &#x60;config.db&#x60; or &#x60;commands.qi&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteDevice

> deleteDevice(projectOrProductUID, deviceUID)

Delete a device

Delete a device and its notefiles from a project. Its events are kept. A Notecard that syncs again is added back as a new device; to block it instead, use &#x60;DisableDevice&#x60;. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.deleteDevice(projectOrProductUID, deviceUID).then(
  () => {
    console.log("API called successfully.");
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
| **deviceUID**           | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteDeviceEnvironmentVariable

> EnvironmentVariables deleteDeviceEnvironmentVariable(projectOrProductUID, deviceUID, key)

Delete a device environment variable

Delete one device environment variable and return the ones left. Fleet and project variables with the same name then apply. Deleting a variable that doesn&#39;t exist succeeds. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let key = "key_example"; // String | The environment variable key to delete.
apiInstance
  .deleteDeviceEnvironmentVariable(projectOrProductUID, deviceUID, key)
  .then(
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

| Name                    | Type       | Description                             | Notes |
| ----------------------- | ---------- | --------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                         |
| **deviceUID**           | **String** |                                         |
| **key**                 | **String** | The environment variable key to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteNote

> deleteNote(projectOrProductUID, deviceUID, notefileID, noteID)

Delete a note

Delete one note from a notefile on a device. To delete whole notefiles, use &#x60;DeleteNotefiles&#x60;. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let notefileID = "notefileID_example"; // String | Notefile name, including its extension, e.g. `config.db` or `commands.qi`.
let noteID = "noteID_example"; // String | Note ID within the notefile, e.g. `my_note`. Notes in a `.qi` notefile have IDs like `1:435`.
apiInstance.deleteNote(projectOrProductUID, deviceUID, notefileID, noteID).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                                                                 | Notes |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                                                                             |
| **deviceUID**           | **String** |                                                                                                                             |
| **notefileID**          | **String** | Notefile name, including its extension, e.g. &#x60;config.db&#x60; or &#x60;commands.qi&#x60;.                              |
| **noteID**              | **String** | Note ID within the notefile, e.g. &#x60;my_note&#x60;. Notes in a &#x60;.qi&#x60; notefile have IDs like &#x60;1:435&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteNotefiles

> deleteNotefiles(projectOrProductUID, deviceUID, deleteNotefilesRequest)

Delete notefiles

Delete notefiles and all their notes from a device. To delete one note, use &#x60;DeleteNote&#x60;. Requires the Owner or Developer role. Returns 400 if &#x60;files&#x60; is empty.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let deleteNotefilesRequest = new NotehubJs.DeleteNotefilesRequest(); // DeleteNotefilesRequest | The notefiles to delete.
apiInstance
  .deleteNotefiles(projectOrProductUID, deviceUID, deleteNotefilesRequest)
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

| Name                       | Type                                                    | Description              | Notes |
| -------------------------- | ------------------------------------------------------- | ------------------------ | ----- |
| **projectOrProductUID**    | **String**                                              |                          |
| **deviceUID**              | **String**                                              |                          |
| **deleteNotefilesRequest** | [**DeleteNotefilesRequest**](DeleteNotefilesRequest.md) | The notefiles to delete. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## disableDevice

> disableDevice(projectOrProductUID, deviceUID)

Disable a device

Stop a device from connecting to Notehub, ending any open session. The device and its data stay in the project; undo with &#x60;EnableDevice&#x60;. Does nothing if it&#39;s already disabled. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.disableDevice(projectOrProductUID, deviceUID).then(
  () => {
    console.log("API called successfully.");
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
| **deviceUID**           | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## enableDevice

> enableDevice(projectOrProductUID, deviceUID)

Enable a device

Re-enable a device turned off with &#x60;DisableDevice&#x60;, so it can connect to Notehub again. Does nothing if the device is already enabled. Requires the Owner or Developer role. Returns 409 if the device&#39;s cellular service was deactivated; it must be reactivated instead.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.enableDevice(projectOrProductUID, deviceUID).then(
  () => {
    console.log("API called successfully.");
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
| **deviceUID**           | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDbNote

> GetDbNote200Response getDbNote(projectOrProductUID, deviceUID, notefileID, noteID, opts)

Get a note

Get one note&#39;s body, payload and time from a notefile on a device. To get every note in a notefile, use &#x60;GetNotefile&#x60;. With &#x60;delete&#x3D;true&#x60;, the note is deleted after it is read, which requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let notefileID = "notefileID_example"; // String | Notefile name, including its extension, e.g. `config.db` or `commands.qi`.
let noteID = "noteID_example"; // String | Note ID within the notefile, e.g. `my_note`. Notes in a `.qi` notefile have IDs like `1:435`.
let opts = {
  _delete: true, // Boolean | If true, delete the note after returning it. Requires the Owner or Developer role.
  deleted: true, // Boolean | If true, also return the note if it has been deleted.
};
apiInstance
  .getDbNote(projectOrProductUID, deviceUID, notefileID, noteID, opts)
  .then(
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

| Name                    | Type        | Description                                                                                                                 | Notes      |
| ----------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**  |                                                                                                                             |
| **deviceUID**           | **String**  |                                                                                                                             |
| **notefileID**          | **String**  | Notefile name, including its extension, e.g. &#x60;config.db&#x60; or &#x60;commands.qi&#x60;.                              |
| **noteID**              | **String**  | Note ID within the notefile, e.g. &#x60;my_note&#x60;. Notes in a &#x60;.qi&#x60; notefile have IDs like &#x60;1:435&#x60;. |
| **\_delete**            | **Boolean** | If true, delete the note after returning it. Requires the Owner or Developer role.                                          | [optional] |
| **deleted**             | **Boolean** | If true, also return the note if it has been deleted.                                                                       | [optional] |

### Return type

[**GetDbNote200Response**](GetDbNote200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevice

> Device getDevice(projectOrProductUID, deviceUID)

Get a device

Get one device&#39;s details: serial number, product, fleets, locations, firmware versions, SIM usage and DFU state. To find devices by tag, serial number or other fields, use &#x60;GetDevices&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.getDevice(projectOrProductUID, deviceUID).then(
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
| **deviceUID**           | **String** |             |

### Return type

[**Device**](Device.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceEnvironmentHierarchy

> EnvTreeJsonNode getDeviceEnvironmentHierarchy(projectOrProductUID, deviceUID)

Get a device&#39;s environment hierarchy

Get a device&#39;s environment variables and the fleet and project variables it inherits, as a tree. Each variable has its precedence and whether it is used or overridden. For just the resolved values, use &#x60;GetDeviceEnvironmentVariables&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.getDeviceEnvironmentHierarchy(projectOrProductUID, deviceUID).then(
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
| **deviceUID**           | **String** |             |

### Return type

[**EnvTreeJsonNode**](EnvTreeJsonNode.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceEnvironmentVariables

> GetDeviceEnvironmentVariablesByPin200Response getDeviceEnvironmentVariables(projectOrProductUID, deviceUID)

Get device environment variables

Get a device&#39;s own environment variables, its &#x60;env.default&#x60; values, and its effective values. Effective values merge in project and fleet variables, which device variables override. To see where each value comes from, use &#x60;GetDeviceEnvironmentHierarchy&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.getDeviceEnvironmentVariables(projectOrProductUID, deviceUID).then(
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
| **deviceUID**           | **String** |             |

### Return type

[**GetDeviceEnvironmentVariablesByPin200Response**](GetDeviceEnvironmentVariablesByPin200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceEnvironmentVariablesByPin

> GetDeviceEnvironmentVariablesByPin200Response getDeviceEnvironmentVariablesByPin(productUID, deviceUID, xAuthToken)

Get device environment variables using a PIN

Get a device&#39;s environment variables using its PIN instead of an API token. Pass the PIN in &#x60;X-Auth-Token&#x60;. Made for device dashboard pages; with a token, use &#x60;GetDeviceEnvironmentVariables&#x60;, which also returns effective values. Returns 401 if the project&#39;s device dashboard URL has no &#x60;[pin]&#x60;, or the PIN is wrong.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let productUID = "com.blues.bridge:sensors"; // String |
let deviceUID = "dev:000000000000000"; // String |
let xAuthToken = "xAuthToken_example"; // String | The device's PIN, used instead of an API token.
apiInstance
  .getDeviceEnvironmentVariablesByPin(productUID, deviceUID, xAuthToken)
  .then(
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

| Name           | Type       | Description                                         | Notes |
| -------------- | ---------- | --------------------------------------------------- | ----- |
| **productUID** | **String** |                                                     |
| **deviceUID**  | **String** |                                                     |
| **xAuthToken** | **String** | The device&#39;s PIN, used instead of an API token. |

### Return type

[**GetDeviceEnvironmentVariablesByPin200Response**](GetDeviceEnvironmentVariablesByPin200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceHealthLog

> GetDeviceHealthLog200Response getDeviceHealthLog(projectOrProductUID, deviceUID, opts)

Get a device&#39;s health log

Get a device&#39;s health log: timestamped status messages such as restarts and completed firmware updates. Only the latest 100 entries are kept. To filter by date, pass both &#x60;startDate&#x60; and &#x60;endDate&#x60;; &#x60;startDate&#x60; alone returns 400, and the same value for both returns every entry.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  logType: ["null"], // [String] | Return only these kinds of entry. If omitted, all entries are returned. - `boot`: the device restarted - `dfu_completed`: a host firmware update finished
};
apiInstance.getDeviceHealthLog(projectOrProductUID, deviceUID, opts).then(
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

| Name                    | Type                      | Description                                                                                                                                                                   | Notes      |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                                                                                                                                               |
| **deviceUID**           | **String**                |                                                                                                                                                                               |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                                                                                               | [optional] |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                                                                                                 | [optional] |
| **logType**             | [**[String]**](String.md) | Return only these kinds of entry. If omitted, all entries are returned. - &#x60;boot&#x60;: the device restarted - &#x60;dfu_completed&#x60;: a host firmware update finished | [optional] |

### Return type

[**GetDeviceHealthLog200Response**](GetDeviceHealthLog200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceJourney

> GetDeviceJourney200Response getDeviceJourney(projectOrProductUID, deviceUID, journeyID, opts)

Get a journey and its events

Get one journey&#39;s start and end time and its events, oldest first. Only events with a location are included, and a run of events at the same location is reduced to the first. The events are paginated; &#x60;journey.has_more&#x60; is true if there are more. Returns 404 if the journey doesn&#39;t exist, and 403 if the organization is suspended.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let journeyID = 789; // Number | Identifier of the journey, taken from the numeric `journey` field in the event body (a Unix timestamp marking the start of the journey).
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
};
apiInstance
  .getDeviceJourney(projectOrProductUID, deviceUID, journeyID, opts)
  .then(
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

| Name                    | Type       | Description                                                                                                                                        | Notes                        |
| ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **projectOrProductUID** | **String** |                                                                                                                                                    |
| **deviceUID**           | **String** |                                                                                                                                                    |
| **journeyID**           | **Number** | Identifier of the journey, taken from the numeric &#x60;journey&#x60; field in the event body (a Unix timestamp marking the start of the journey). |
| **pageSize**            | **Number** |                                                                                                                                                    | [optional] [default to 1000] |
| **pageNum**             | **Number** |                                                                                                                                                    | [optional] [default to 1]    |

### Return type

[**GetDeviceJourney200Response**](GetDeviceJourney200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceJourneys

> GetDeviceJourneys200Response getDeviceJourneys(projectOrProductUID, deviceUID, opts)

List a device&#39;s journeys

List a device&#39;s journeys, newest first, without their events. A journey is the events whose body has the same &#x60;journey&#x60; value and a &#x60;jcount&#x60; field; one-event journeys are left out. For a journey&#39;s events, use &#x60;GetDeviceJourney&#x60;. Returns at most 100; &#x60;has_more&#x60; is true if there are more. &#x60;startDate&#x60; and &#x60;endDate&#x60; filter on the journey&#39;s start. Returns 403 if the organization is suspended.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
};
apiInstance.getDeviceJourneys(projectOrProductUID, deviceUID, opts).then(
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

| Name                    | Type       | Description                                                     | Notes      |
| ----------------------- | ---------- | --------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String** |                                                                 |
| **deviceUID**           | **String** |                                                                 |
| **startDate**           | **Number** | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**             | **Number** | End date for filtering results, specified as a Unix timestamp   | [optional] |

### Return type

[**GetDeviceJourneys200Response**](GetDeviceJourneys200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceLatestEvents

> GetDeviceLatestEvents200Response getDeviceLatestEvents(projectOrProductUID, deviceUID)

Get a device&#39;s latest event per notefile

Get the most recent event from each of a device&#39;s notefiles, sorted by notefile name. &#x60;\_env.qo&#x60; is left out. To search a device&#39;s event history, use &#x60;GetEvents&#x60;. Returns 403 if the organization is suspended.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.getDeviceLatestEvents(projectOrProductUID, deviceUID).then(
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
| **deviceUID**           | **String** |             |

### Return type

[**GetDeviceLatestEvents200Response**](GetDeviceLatestEvents200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicePlans

> GetDevicePlans200Response getDevicePlans(projectOrProductUID, deviceUID)

Get a device&#39;s cellular data plans

Get the data plan of each cellular SIM in a device: plan type, data used and remaining, and expiry. Covers the built-in SIM and any external SIM, but not satellite plans. Returns 404 if the device has no cellular or satellite SIM.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.getDevicePlans(projectOrProductUID, deviceUID).then(
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
| **deviceUID**           | **String** |             |

### Return type

[**GetDevicePlans200Response**](GetDevicePlans200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicePublicKey

> GetDevicePublicKey200Response getDevicePublicKey(projectOrProductUID, deviceUID)

Get a device&#39;s public key

Get one Notecard&#39;s public key, in PEM format. For every device in the project, use &#x60;GetDevicePublicKeys&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.getDevicePublicKey(projectOrProductUID, deviceUID).then(
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
| **deviceUID**           | **String** |             |

### Return type

[**GetDevicePublicKey200Response**](GetDevicePublicKey200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicePublicKeys

> GetDevicePublicKeys200Response getDevicePublicKeys(projectOrProductUID, opts)

List public keys of all devices

List the public key of every device in a project. For one device, use &#x60;GetDevicePublicKey&#x60;. Paginated. Deleted devices are included only when reading with a &#x60;cursor&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
};
apiInstance.getDevicePublicKeys(projectOrProductUID, opts).then(
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

| Name                    | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                        |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **projectOrProductUID** | **String** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **pageSize**            | **Number** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000] |
| **pageNum**             | **Number** |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]    |
| **cursor**              | **String** | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                   |

### Return type

[**GetDevicePublicKeys200Response**](GetDevicePublicKeys200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceSessions

> GetDeviceSessions200Response getDeviceSessions(projectOrProductUID, deviceUID, opts)

List a device&#39;s sessions

List a device&#39;s sessions, its connections to Notehub. Each shows why it opened and closed, signal strength, location and data usage. &#x60;startDate&#x60; and &#x60;endDate&#x60; filter on when the session began. For every device&#39;s sessions, use &#x60;GetSessions&#x60;. Paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  firstSync: false, // Boolean | If true, return only sessions whose `why_session_opened` begins with \"first sync\".
};
apiInstance.getDeviceSessions(projectOrProductUID, deviceUID, opts).then(
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

| Name                    | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                         |
| ----------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **projectOrProductUID** | **String**  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **deviceUID**           | **String**  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **pageSize**            | **Number**  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000]  |
| **pageNum**             | **Number**  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]     |
| **cursor**              | **String**  | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                    |
| **startDate**           | **Number**  | Start date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                    |
| **endDate**             | **Number**  | End date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                           | [optional]                    |
| **firstSync**           | **Boolean** | If true, return only sessions whose &#x60;why_session_opened&#x60; begins with \&quot;first sync\&quot;.                                                                                                                                                                                                                                                                                                                                                                | [optional] [default to false] |

### Return type

[**GetDeviceSessions200Response**](GetDeviceSessions200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevices

> GetDevices200Response getDevices(projectOrProductUID, opts)

List devices in a project

List the devices in a project, with optional filters such as tag, serial number, fleet, location and firmware version. For one fleet&#39;s devices, use &#x60;GetFleetDevices&#x60;. Paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  deviceUID: ["null"], // [String] | A DeviceUID.
  tag: ["null"], // [String] | Tag filter. Matches the whole tag, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally. For example, `51*` matches tags starting with `51`.
  serialNumber: ["null"], // [String] | Serial number filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  fleetUID: ["null"], // [String] |
  notecardFirmware: ["null"], // [String] | Firmware version filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  location: ["null"], // [String] | Location filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  hostFirmware: ["null"], // [String] | Host firmware filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  productUID: ["null"], // [String] | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  sku: ["null"], // [String] | SKU filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
};
apiInstance.getDevices(projectOrProductUID, opts).then(
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

| Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                        |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **pageSize**            | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000] |
| **pageNum**             | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]    |
| **cursor**              | **String**                | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                   |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                   |
| **tag**                 | [**[String]**](String.md) | Tag filter. Matches the whole tag, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;_&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally. For example, &#x60;51_&#x60; matches tags starting with &#x60;51&#x60;.                                                                                                                                                                   | [optional]                   |
| **serialNumber**        | [**[String]**](String.md) | Serial number filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                           | [optional]                   |
| **fleetUID**            | [**[String]**](String.md) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                   |
| **notecardFirmware**    | [**[String]**](String.md) | Firmware version filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                        | [optional]                   |
| **location**            | [**[String]**](String.md) | Location filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                                | [optional]                   |
| **hostFirmware**        | [**[String]**](String.md) | Host firmware filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                           | [optional]                   |
| **productUID**          | [**[String]**](String.md) | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                            | [optional]                   |
| **sku**                 | [**[String]**](String.md) | SKU filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                                     | [optional]                   |

### Return type

[**GetDevices200Response**](GetDevices200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetDevices

> GetDevices200Response getFleetDevices(projectOrProductUID, fleetUID, opts)

List devices in a fleet

List the devices in one fleet, with the same filters as &#x60;GetDevices&#x60;. To list a device&#39;s fleets instead, use &#x60;GetDeviceFleets&#x60;. Paginated. Returns 404 if the fleet doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  deviceUID: ["null"], // [String] | A DeviceUID.
  tag: ["null"], // [String] | Tag filter. Matches the whole tag, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally. For example, `51*` matches tags starting with `51`.
  serialNumber: ["null"], // [String] | Serial number filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  notecardFirmware: ["null"], // [String] | Firmware version filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  location: ["null"], // [String] | Location filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  hostFirmware: ["null"], // [String] | Host firmware filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  productUID: ["null"], // [String] | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  sku: ["null"], // [String] | SKU filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
};
apiInstance.getFleetDevices(projectOrProductUID, fleetUID, opts).then(
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

| Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                        |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **fleetUID**            | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **pageSize**            | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000] |
| **pageNum**             | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]    |
| **cursor**              | **String**                | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                   |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                   |
| **tag**                 | [**[String]**](String.md) | Tag filter. Matches the whole tag, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;_&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally. For example, &#x60;51_&#x60; matches tags starting with &#x60;51&#x60;.                                                                                                                                                                   | [optional]                   |
| **serialNumber**        | [**[String]**](String.md) | Serial number filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                           | [optional]                   |
| **notecardFirmware**    | [**[String]**](String.md) | Firmware version filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                        | [optional]                   |
| **location**            | [**[String]**](String.md) | Location filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                                | [optional]                   |
| **hostFirmware**        | [**[String]**](String.md) | Host firmware filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                           | [optional]                   |
| **productUID**          | [**[String]**](String.md) | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                            | [optional]                   |
| **sku**                 | [**[String]**](String.md) | SKU filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                                     | [optional]                   |

### Return type

[**GetDevices200Response**](GetDevices200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getNotefile

> GetNotefile200Response getNotefile(projectOrProductUID, deviceUID, notefileID, opts)

Get the notes in a notefile

Get the notes in one notefile on a device. For a &#x60;.qi&#x60; notefile, that&#39;s the notes still queued; for a &#x60;.db&#x60; notefile, every note. To list all of a device&#39;s notefiles with their notes, use &#x60;ListNotefiles&#x60;. With &#x60;delete&#x3D;true&#x60;, the returned notes are deleted, which requires the Owner or Developer role. Returns 400 if &#x60;notefileID&#x60; has no valid notefile extension.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let notefileID = "notefileID_example"; // String | Notefile name, including its extension, e.g. `config.db` or `commands.qi`.
let opts = {
  max: 56, // Number | The most notes to return.
  deleted: true, // Boolean | If true, also return deleted notes.
  _delete: true, // Boolean | If true, delete the notes this request returns. Requires the Owner or Developer role.
};
apiInstance.getNotefile(projectOrProductUID, deviceUID, notefileID, opts).then(
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

| Name                    | Type        | Description                                                                                    | Notes      |
| ----------------------- | ----------- | ---------------------------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**  |                                                                                                |
| **deviceUID**           | **String**  |                                                                                                |
| **notefileID**          | **String**  | Notefile name, including its extension, e.g. &#x60;config.db&#x60; or &#x60;commands.qi&#x60;. |
| **max**                 | **Number**  | The most notes to return.                                                                      | [optional] |
| **deleted**             | **Boolean** | If true, also return deleted notes.                                                            | [optional] |
| **\_delete**            | **Boolean** | If true, delete the notes this request returns. Requires the Owner or Developer role.          | [optional] |

### Return type

[**GetNotefile200Response**](GetNotefile200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getSessions

> GetDeviceSessions200Response getSessions(projectOrProductUID, opts)

List sessions in a project

List the sessions of every device in a project, as &#x60;GetDeviceSessions&#x60; does for one device. &#x60;startDate&#x60; and &#x60;endDate&#x60; filter on when the session began. &#x60;deviceUID&#x60; and &#x60;fleetUID&#x60; each match any of their values; &#x60;fleetUID&#x60; matches the fleets recorded on the session. Paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
  firstSync: false, // Boolean | If true, return only sessions whose `why_session_opened` begins with \"first sync\".
  deviceUID: ["null"], // [String] | A DeviceUID.
  fleetUID: ["null"], // [String] |
};
apiInstance.getSessions(projectOrProductUID, opts).then(
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

| Name                    | Type                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Notes                         |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| **projectOrProductUID** | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **pageSize**            | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000]  |
| **pageNum**             | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]     |
| **cursor**              | **String**                | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                    |
| **startDate**           | **Number**                | Start date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                    |
| **endDate**             | **Number**                | End date for filtering results, specified as a Unix timestamp                                                                                                                                                                                                                                                                                                                                                                                                           | [optional]                    |
| **firstSync**           | **Boolean**               | If true, return only sessions whose &#x60;why_session_opened&#x60; begins with \&quot;first sync\&quot;.                                                                                                                                                                                                                                                                                                                                                                | [optional] [default to false] |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                    |
| **fleetUID**            | [**[String]**](String.md) |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                    |

### Return type

[**GetDeviceSessions200Response**](GetDeviceSessions200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listNotefiles

> [Notefile] listNotefiles(projectOrProductUID, deviceUID, opts)

List a device&#39;s notefiles and notes

List a device&#39;s notefiles with the notes in each, sorted &#x60;.qo&#x60;, then &#x60;.qi&#x60;, then &#x60;.db&#x60;. &#x60;.qo&#x60; notefiles are listed without notes, since Notehub empties them as it processes them. Most system notefiles (names starting with &#x60;\_&#x60;) are left out. For one notefile, use &#x60;GetNotefile&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let opts = {
  files: ["null"], // [String] | Notefiles to include, e.g. `config.db`. If omitted, all are listed.
  pending: true, // Boolean | show only files that are pending sync to the Notecard
};
apiInstance.listNotefiles(projectOrProductUID, deviceUID, opts).then(
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

| Name                    | Type                      | Description                                                                   | Notes      |
| ----------------------- | ------------------------- | ----------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                |                                                                               |
| **deviceUID**           | **String**                |                                                                               |
| **files**               | [**[String]**](String.md) | Notefiles to include, e.g. &#x60;config.db&#x60;. If omitted, all are listed. | [optional] |
| **pending**             | **Boolean**               | show only files that are pending sync to the Notecard                         | [optional] |

### Return type

[**[Notefile]**](Notefile.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## provisionDevice

> Object provisionDevice(projectOrProductUID, deviceUID, provisionDeviceRequest)

Provision a Notecard

Add a Notecard to a project before it first connects, with its product, serial number and fleets. A device that already exists isn&#39;t reset and keeps its fleets. Requires the Owner or Developer role. Returns 404 if &#x60;product_uid&#x60; doesn&#39;t exist, and 400 if it belongs to another project or &#x60;deviceUID&#x60; isn&#39;t a valid Notecard DeviceUID.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let provisionDeviceRequest = new NotehubJs.ProvisionDeviceRequest(); // ProvisionDeviceRequest | The product, serial number and fleets for the device.
apiInstance
  .provisionDevice(projectOrProductUID, deviceUID, provisionDeviceRequest)
  .then(
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

| Name                       | Type                                                    | Description                                           | Notes |
| -------------------------- | ------------------------------------------------------- | ----------------------------------------------------- | ----- |
| **projectOrProductUID**    | **String**                                              |                                                       |
| **deviceUID**              | **String**                                              |                                                       |
| **provisionDeviceRequest** | [**ProvisionDeviceRequest**](ProvisionDeviceRequest.md) | The product, serial number and fleets for the device. |

### Return type

**Object**

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## setDeviceEnvironmentVariables

> EnvironmentVariables setDeviceEnvironmentVariables(projectOrProductUID, deviceUID, environmentVariables)

Set device environment variables

Add or change a device&#39;s environment variables; variables you don&#39;t send keep their values. A value of &#x60;\&quot;\&quot;&#x60; or &#x60;-&#x60; deletes that variable. Setting &#x60;\_fw&#x60;, &#x60;\_fwc&#x60; or &#x60;\_fwm&#x60; starts a host, Notecard or modem firmware update. Requires the Owner or Developer role. Returns 400 if a note&#39;s key isn&#39;t a variable.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | The variables to add or change, and optional notes.
apiInstance
  .setDeviceEnvironmentVariables(
    projectOrProductUID,
    deviceUID,
    environmentVariables
  )
  .then(
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

| Name                     | Type                                                | Description                                         | Notes |
| ------------------------ | --------------------------------------------------- | --------------------------------------------------- | ----- |
| **projectOrProductUID**  | **String**                                          |                                                     |
| **deviceUID**            | **String**                                          |                                                     |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) | The variables to add or change, and optional notes. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## setDeviceEnvironmentVariablesByPin

> EnvironmentVariables setDeviceEnvironmentVariablesByPin(productUID, deviceUID, xAuthToken, environmentVariables)

Set device environment variables using a PIN

Add or change a device&#39;s environment variables using its PIN instead of an API token. Pass the PIN in &#x60;X-Auth-Token&#x60;. Works like &#x60;SetDeviceEnvironmentVariables&#x60;: a value of &#x60;\&quot;\&quot;&#x60; or &#x60;-&#x60; deletes that variable. Returns 401 if the project&#39;s device dashboard URL has no &#x60;[pin]&#x60;, or the PIN is wrong.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let productUID = "com.blues.bridge:sensors"; // String |
let deviceUID = "dev:000000000000000"; // String |
let xAuthToken = "xAuthToken_example"; // String | The device's PIN, used instead of an API token.
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | The variables to add or change, and optional notes.
apiInstance
  .setDeviceEnvironmentVariablesByPin(
    productUID,
    deviceUID,
    xAuthToken,
    environmentVariables
  )
  .then(
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

| Name                     | Type                                                | Description                                         | Notes |
| ------------------------ | --------------------------------------------------- | --------------------------------------------------- | ----- |
| **productUID**           | **String**                                          |                                                     |
| **deviceUID**            | **String**                                          |                                                     |
| **xAuthToken**           | **String**                                          | The device&#39;s PIN, used instead of an API token. |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) | The variables to add or change, and optional notes. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## signalDevice

> SignalDevice200Response signalDevice(projectOrProductUID, deviceUID, body)

Send a signal to a connected Notecard

Send a JSON object straight to a Notecard, which the host can read with &#x60;hub.signal&#x60;. It&#39;s delivered only if the Notecard is connected to Notehub at that moment, and is never queued; &#x60;connected&#x60; in the response says whether it was. To queue data for the next sync, use &#x60;AddQiNote&#x60; instead. Requires the Owner or Developer role. Returns 400 if the body has a &#x60;type&#x60; field.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let body = new NotehubJs.Body(); // Body | The signal to send.
apiInstance.signalDevice(projectOrProductUID, deviceUID, body).then(
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

| Name                    | Type                | Description         | Notes |
| ----------------------- | ------------------- | ------------------- | ----- |
| **projectOrProductUID** | **String**          |                     |
| **deviceUID**           | **String**          |                     |
| **body**                | [**Body**](Body.md) | The signal to send. |

### Return type

[**SignalDevice200Response**](SignalDevice200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateDbNote

> updateDbNote(projectOrProductUID, deviceUID, notefileID, noteID, noteInput)

Update a note in a .db notefile

Replace the body and payload of a note in a database notefile on a device, synced to the Notecard on its next sync. To add a new note, use &#x60;AddDbNote&#x60;. Requires the Owner or Developer role. Returns 400 unless the notefile ends in &#x60;.db&#x60; or &#x60;.dbs&#x60;, or if &#x60;payload&#x60; isn&#39;t valid base64.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.DeviceApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let notefileID = "notefileID_example"; // String | Notefile name, including its extension, e.g. `config.db` or `commands.qi`.
let noteID = "noteID_example"; // String | Note ID within the notefile, e.g. `my_note`. Notes in a `.qi` notefile have IDs like `1:435`.
let noteInput = new NotehubJs.NoteInput(); // NoteInput | Body or payload of note to be added to the device
apiInstance
  .updateDbNote(projectOrProductUID, deviceUID, notefileID, noteID, noteInput)
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

| Name                    | Type                          | Description                                                                                                                 | Notes |
| ----------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                    |                                                                                                                             |
| **deviceUID**           | **String**                    |                                                                                                                             |
| **notefileID**          | **String**                    | Notefile name, including its extension, e.g. &#x60;config.db&#x60; or &#x60;commands.qi&#x60;.                              |
| **noteID**              | **String**                    | Note ID within the notefile, e.g. &#x60;my_note&#x60;. Notes in a &#x60;.qi&#x60; notefile have IDs like &#x60;1:435&#x60;. |
| **noteInput**           | [**NoteInput**](NoteInput.md) | Body or payload of note to be added to the device                                                                           |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
