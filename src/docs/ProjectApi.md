# NotehubJs.ProjectApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                 | HTTP request                                                                                | Description                                              |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [**addDeviceToFleets**](ProjectApi.md#addDeviceToFleets)                               | **PUT** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/fleets                       | Add a device to fleets                                   |
| [**cloneProject**](ProjectApi.md#cloneProject)                                         | **POST** /v1/projects/{projectOrProductUID}/clone                                           | Clone a project                                          |
| [**createFleet**](ProjectApi.md#createFleet)                                           | **POST** /v1/projects/{projectOrProductUID}/fleets                                          | Create a fleet                                           |
| [**createProduct**](ProjectApi.md#createProduct)                                       | **POST** /v1/projects/{projectOrProductUID}/products                                        | Create a product                                         |
| [**createProject**](ProjectApi.md#createProject)                                       | **POST** /v1/projects                                                                       | Create a project                                         |
| [**createProjectSecret**](ProjectApi.md#createProjectSecret)                           | **POST** /v1/projects/{projectOrProductUID}/secrets                                         | Create a project secret                                  |
| [**deleteDeviceFromFleets**](ProjectApi.md#deleteDeviceFromFleets)                     | **DELETE** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/fleets                    | Remove a device from fleets                              |
| [**deleteFirmware**](ProjectApi.md#deleteFirmware)                                     | **DELETE** /v1/projects/{projectOrProductUID}/firmware/{firmwareType}/{filename}            | Delete host firmware                                     |
| [**deleteFleet**](ProjectApi.md#deleteFleet)                                           | **DELETE** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}                             | Delete a fleet                                           |
| [**deleteFleetEnvironmentVariable**](ProjectApi.md#deleteFleetEnvironmentVariable)     | **DELETE** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/environment_variables/{key} | Delete a fleet environment variable                      |
| [**deleteProduct**](ProjectApi.md#deleteProduct)                                       | **DELETE** /v1/projects/{projectOrProductUID}/products/{productUID}                         | Delete a product                                         |
| [**deleteProject**](ProjectApi.md#deleteProject)                                       | **DELETE** /v1/projects/{projectOrProductUID}                                               | Delete a project                                         |
| [**deleteProjectEnvironmentVariable**](ProjectApi.md#deleteProjectEnvironmentVariable) | **DELETE** /v1/projects/{projectOrProductUID}/environment_variables/{key}                   | Delete a project environment variable                    |
| [**deleteProjectSecret**](ProjectApi.md#deleteProjectSecret)                           | **DELETE** /v1/projects/{projectOrProductUID}/secrets/{secretName}                          | Delete a project secret                                  |
| [**disableGlobalEventTransformation**](ProjectApi.md#disableGlobalEventTransformation) | **POST** /v1/projects/{projectOrProductUID}/global-transformation/disable                   | Disable the global event transformation                  |
| [**downloadFirmware**](ProjectApi.md#downloadFirmware)                                 | **GET** /v1/projects/{projectOrProductUID}/firmware/{firmwareType}/{filename}               | Download host firmware                                   |
| [**enableGlobalEventTransformation**](ProjectApi.md#enableGlobalEventTransformation)   | **POST** /v1/projects/{projectOrProductUID}/global-transformation/enable                    | Enable the global event transformation                   |
| [**getAWSRoleConfig**](ProjectApi.md#getAWSRoleConfig)                                 | **GET** /v1/projects/{projectOrProductUID}/aws-role-config                                  | Get AWS role configuration for role-based authentication |
| [**getDeviceDfuHistory**](ProjectApi.md#getDeviceDfuHistory)                           | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/dfu/{firmwareType}/history   | Get a device&#39;s firmware update history               |
| [**getDeviceDfuStatus**](ProjectApi.md#getDeviceDfuStatus)                             | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/dfu/{firmwareType}/status    | Get a device&#39;s firmware update status                |
| [**getDeviceFleets**](ProjectApi.md#getDeviceFleets)                                   | **GET** /v1/projects/{projectOrProductUID}/devices/{deviceUID}/fleets                       | List a device&#39;s fleets                               |
| [**getDevicesDfuHistory**](ProjectApi.md#getDevicesDfuHistory)                         | **GET** /v1/projects/{projectOrProductUID}/dfu/{firmwareType}/history                       | List devices&#39; firmware update history                |
| [**getDevicesDfuStatus**](ProjectApi.md#getDevicesDfuStatus)                           | **GET** /v1/projects/{projectOrProductUID}/dfu/{firmwareType}/status                        | List devices&#39; firmware status                        |
| [**getFirmwareInfo**](ProjectApi.md#getFirmwareInfo)                                   | **GET** /v1/projects/{projectOrProductUID}/firmware                                         | List firmware                                            |
| [**getFleet**](ProjectApi.md#getFleet)                                                 | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}                                | Get a fleet                                              |
| [**getFleetEnvironmentHierarchy**](ProjectApi.md#getFleetEnvironmentHierarchy)         | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/environment_hierarchy          | Get a fleet&#39;s environment hierarchy                  |
| [**getFleetEnvironmentVariables**](ProjectApi.md#getFleetEnvironmentVariables)         | **GET** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/environment_variables          | Get fleet environment variables                          |
| [**getFleets**](ProjectApi.md#getFleets)                                               | **GET** /v1/projects/{projectOrProductUID}/fleets                                           | List fleets                                              |
| [**getNotefileSchemas**](ProjectApi.md#getNotefileSchemas)                             | **GET** /v1/projects/{projectOrProductUID}/schemas                                          | List Notefile schemas                                    |
| [**getProducts**](ProjectApi.md#getProducts)                                           | **GET** /v1/projects/{projectOrProductUID}/products                                         | List a project&#39;s products                            |
| [**getProject**](ProjectApi.md#getProject)                                             | **GET** /v1/projects/{projectOrProductUID}                                                  | Get a project                                            |
| [**getProjectByProduct**](ProjectApi.md#getProjectByProduct)                           | **GET** /v1/products/{productUID}/project                                                   | Get the project for a ProductUID                         |
| [**getProjectEnvironmentHierarchy**](ProjectApi.md#getProjectEnvironmentHierarchy)     | **GET** /v1/projects/{projectOrProductUID}/environment_hierarchy                            | Get the project environment hierarchy                    |
| [**getProjectEnvironmentVariables**](ProjectApi.md#getProjectEnvironmentVariables)     | **GET** /v1/projects/{projectOrProductUID}/environment_variables                            | Get project environment variables                        |
| [**getProjectMembers**](ProjectApi.md#getProjectMembers)                               | **GET** /v1/projects/{projectOrProductUID}/members                                          | List project members                                     |
| [**getProjectSecrets**](ProjectApi.md#getProjectSecrets)                               | **GET** /v1/projects/{projectOrProductUID}/secrets                                          | List project secrets                                     |
| [**getProjects**](ProjectApi.md#getProjects)                                           | **GET** /v1/projects                                                                        | List projects                                            |
| [**performDfuAction**](ProjectApi.md#performDfuAction)                                 | **POST** /v1/projects/{projectOrProductUID}/dfu/{firmwareType}/{action}                     | Start or cancel firmware updates                         |
| [**setFleetEnvironmentVariables**](ProjectApi.md#setFleetEnvironmentVariables)         | **PUT** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}/environment_variables          | Set fleet environment variables                          |
| [**setGlobalEventTransformation**](ProjectApi.md#setGlobalEventTransformation)         | **POST** /v1/projects/{projectOrProductUID}/global-transformation                           | Set the global event transformation                      |
| [**setProjectEnvironmentVariables**](ProjectApi.md#setProjectEnvironmentVariables)     | **PUT** /v1/projects/{projectOrProductUID}/environment_variables                            | Set project environment variables                        |
| [**updateFirmware**](ProjectApi.md#updateFirmware)                                     | **POST** /v1/projects/{projectOrProductUID}/firmware/{firmwareType}/{filename}              | Update host firmware metadata                            |
| [**updateFleet**](ProjectApi.md#updateFleet)                                           | **PUT** /v1/projects/{projectOrProductUID}/fleets/{fleetUID}                                | Update a fleet                                           |
| [**updateProjectSecret**](ProjectApi.md#updateProjectSecret)                           | **PUT** /v1/projects/{projectOrProductUID}/secrets/{secretName}                             | Update a project secret                                  |
| [**uploadFirmware**](ProjectApi.md#uploadFirmware)                                     | **PUT** /v1/projects/{projectOrProductUID}/firmware/{firmwareType}/{filename}               | Upload firmware                                          |

## addDeviceToFleets

> GetDeviceFleets200Response addDeviceToFleets(projectOrProductUID, deviceUID, addDeviceToFleetsRequest)

Add a device to fleets

Add a device to one or more fleets, keeping the fleets it&#39;s already in, and return all its fleets. Fleets it&#39;s already in are skipped, so a retry is safe. Requires the Owner or Developer role. Returns 400 if a fleet doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let addDeviceToFleetsRequest = new NotehubJs.AddDeviceToFleetsRequest(); // AddDeviceToFleetsRequest | The fleets to add the device to.
apiInstance
  .addDeviceToFleets(projectOrProductUID, deviceUID, addDeviceToFleetsRequest)
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

| Name                         | Type                                                        | Description                      | Notes |
| ---------------------------- | ----------------------------------------------------------- | -------------------------------- | ----- |
| **projectOrProductUID**      | **String**                                                  |                                  |
| **deviceUID**                | **String**                                                  |                                  |
| **addDeviceToFleetsRequest** | [**AddDeviceToFleetsRequest**](AddDeviceToFleetsRequest.md) | The fleets to add the device to. |

### Return type

[**GetDeviceFleets200Response**](GetDeviceFleets200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## cloneProject

> Project cloneProject(projectOrProductUID, cloneProjectRequest)

Clone a project

Create a new project as a copy of this one. Settings, environment variables, transformation, fleets, routes and host firmware are copied; devices, products and members aren&#39;t. Copied fleets get new FleetUIDs. Requires the Owner role (400 otherwise), a verified email address (401 otherwise), and permission to create projects in the target organization (403 otherwise).

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let cloneProjectRequest = new NotehubJs.CloneProjectRequest(); // CloneProjectRequest | The new project's name and organization, and what to leave out of the copy.
apiInstance.cloneProject(projectOrProductUID, cloneProjectRequest).then(
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

| Name                    | Type                                              | Description                                                                     | Notes |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                                        |                                                                                 |
| **cloneProjectRequest** | [**CloneProjectRequest**](CloneProjectRequest.md) | The new project&#39;s name and organization, and what to leave out of the copy. |

### Return type

[**Project**](Project.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createFleet

> Fleet createFleet(projectOrProductUID, createFleetRequest)

Create a fleet

Create a fleet in the project. Connectivity assurance is on unless &#x60;connectivity_assurance.enabled&#x60; is &#x60;false&#x60;. A second call creates another fleet. Requires the Owner or Developer role. Returns 400 if &#x60;label&#x60; is missing or empty.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let createFleetRequest = new NotehubJs.CreateFleetRequest(); // CreateFleetRequest | The new fleet's name and settings.
apiInstance.createFleet(projectOrProductUID, createFleetRequest).then(
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

| Name                    | Type                                            | Description                            | Notes |
| ----------------------- | ----------------------------------------------- | -------------------------------------- | ----- |
| **projectOrProductUID** | **String**                                      |                                        |
| **createFleetRequest**  | [**CreateFleetRequest**](CreateFleetRequest.md) | The new fleet&#39;s name and settings. |

### Return type

[**Fleet**](Fleet.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProduct

> Product createProduct(projectOrProductUID, createProductRequest)

Create a product

Add a ProductUID to the project, formed from the caller&#39;s reversed email and &#x60;product_uid&#x60;. For &#x60;jane@acme.com&#x60; and &#x60;sensors&#x60; it is &#x60;com.acme.jane:sensors&#x60;. Requires the Owner or Developer role and a verified email address (400 otherwise). Returns 404 if an &#x60;auto_provision_fleets&#x60; entry isn&#39;t a fleet in this project, and 500 if &#x60;product_uid&#x60; is invalid or already taken.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let createProductRequest = new NotehubJs.CreateProductRequest(); // CreateProductRequest | The new product's UID suffix, name and provisioning settings.
apiInstance.createProduct(projectOrProductUID, createProductRequest).then(
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

| Name                     | Type                                                | Description                                                       | Notes |
| ------------------------ | --------------------------------------------------- | ----------------------------------------------------------------- | ----- |
| **projectOrProductUID**  | **String**                                          |                                                                   |
| **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md) | The new product&#39;s UID suffix, name and provisioning settings. |

### Return type

[**Product**](Product.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProject

> Project createProject(createProjectRequest)

Create a project

Create a project in an organization, with one default fleet, no products, and the caller as its Owner. A second call creates another project. Requires a verified email address (401 otherwise) and permission to create projects in the organization (403 otherwise).

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let createProjectRequest = new NotehubJs.CreateProjectRequest(); // CreateProjectRequest | The new project's name and organization.
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

| Name                     | Type                                                | Description                                  | Notes |
| ------------------------ | --------------------------------------------------- | -------------------------------------------- | ----- |
| **createProjectRequest** | [**CreateProjectRequest**](CreateProjectRequest.md) | The new project&#39;s name and organization. |

### Return type

[**Project**](Project.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## createProjectSecret

> ProjectSecret createProjectSecret(projectOrProductUID, createProjectSecretRequest)

Create a project secret

Store a secret value that routes and alerts can reference as &#x60;[$$name]&#x60; without exposing it. The value can&#39;t be read back. Requires the Owner or Developer role. Returns 409 if the name is taken, and 400 if it&#39;s invalid.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let createProjectSecretRequest = new NotehubJs.CreateProjectSecretRequest(); // CreateProjectSecretRequest |
apiInstance
  .createProjectSecret(projectOrProductUID, createProjectSecretRequest)
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

| Name                           | Type                                                            | Description | Notes |
| ------------------------------ | --------------------------------------------------------------- | ----------- | ----- |
| **projectOrProductUID**        | **String**                                                      |             |
| **createProjectSecretRequest** | [**CreateProjectSecretRequest**](CreateProjectSecretRequest.md) |             |

### Return type

[**ProjectSecret**](ProjectSecret.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteDeviceFromFleets

> GetDeviceFleets200Response deleteDeviceFromFleets(projectOrProductUID, deviceUID, deleteDeviceFromFleetsRequest)

Remove a device from fleets

Remove a device from one or more fleets and return the fleets it&#39;s still in. Fleets it isn&#39;t in are ignored, so a retry is safe. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let deleteDeviceFromFleetsRequest =
  new NotehubJs.DeleteDeviceFromFleetsRequest(); // DeleteDeviceFromFleetsRequest | The fleets to remove the device from.
apiInstance
  .deleteDeviceFromFleets(
    projectOrProductUID,
    deviceUID,
    deleteDeviceFromFleetsRequest
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

| Name                              | Type                                                                  | Description                           | Notes |
| --------------------------------- | --------------------------------------------------------------------- | ------------------------------------- | ----- |
| **projectOrProductUID**           | **String**                                                            |                                       |
| **deviceUID**                     | **String**                                                            |                                       |
| **deleteDeviceFromFleetsRequest** | [**DeleteDeviceFromFleetsRequest**](DeleteDeviceFromFleetsRequest.md) | The fleets to remove the device from. |

### Return type

[**GetDeviceFleets200Response**](GetDeviceFleets200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteFirmware

> deleteFirmware(projectOrProductUID, firmwareType, filename)

Delete host firmware

Delete a host firmware file by its stored filename, including its &#x60;$&#x60; timestamp suffix. Notecard firmware can&#39;t be deleted. Requires the Owner or Developer role. Returns 404 if the file doesn&#39;t exist, and 400 for a sub-project, whose parent manages host firmware.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let firmwareType = "firmwareType_example"; // String |
let filename = "filename_example"; // String |
apiInstance.deleteFirmware(projectOrProductUID, firmwareType, filename).then(
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
| **firmwareType**        | **String** |             |
| **filename**            | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteFleet

> deleteFleet(projectOrProductUID, fleetUID)

Delete a fleet

Delete a fleet and remove it from all its devices. The devices stay in the project; the fleet&#39;s environment variables are deleted. To remove one device from a fleet, use &#x60;DeleteDeviceFromFleets&#x60;. Requires the Owner or Developer role. Returns 400 if the fleet does not exist, including on a retry.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.deleteFleet(projectOrProductUID, fleetUID).then(
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
| **fleetUID**            | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteFleetEnvironmentVariable

> EnvironmentVariables deleteFleetEnvironmentVariable(projectOrProductUID, fleetUID, key)

Delete a fleet environment variable

Delete one fleet environment variable and return the ones left. Requires the Owner or Developer role. Returns 404 if the fleet or the variable doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
let key = "key_example"; // String | Name of the environment variable to delete.
apiInstance
  .deleteFleetEnvironmentVariable(projectOrProductUID, fleetUID, key)
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

| Name                    | Type       | Description                                 | Notes |
| ----------------------- | ---------- | ------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                             |
| **fleetUID**            | **String** |                                             |
| **key**                 | **String** | Name of the environment variable to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProduct

> deleteProduct(projectOrProductUID, productUID)

Delete a product

Remove a ProductUID from the project. Accepts the UID with or without the &#x60;product:&#x60; prefix. Requires the Owner or Developer role. Returns 404 if the project has no such ProductUID.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let productUID = "com.blues.bridge:sensors"; // String |
apiInstance.deleteProduct(projectOrProductUID, productUID).then(
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
| **productUID**          | **String** |             |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProject

> deleteProject(projectOrProductUID)

Delete a project

Delete a project, its ProductUIDs, and every member&#39;s access to it. Can&#39;t be undone through the API. Requires the Owner or Developer role. Returns 200 with no body.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.deleteProject(projectOrProductUID).then(
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

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProjectEnvironmentVariable

> EnvironmentVariables deleteProjectEnvironmentVariable(projectOrProductUID, key)

Delete a project environment variable

Delete one project environment variable and return the ones left. Deleting a variable that doesn&#39;t exist still succeeds. Requires the Owner or Developer role.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let key = "key_example"; // String | Name of the environment variable to delete.
apiInstance.deleteProjectEnvironmentVariable(projectOrProductUID, key).then(
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

| Name                    | Type       | Description                                 | Notes |
| ----------------------- | ---------- | ------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                             |
| **key**                 | **String** | Name of the environment variable to delete. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteProjectSecret

> deleteProjectSecret(projectOrProductUID, secretName)

Delete a project secret

Delete a project secret. Routes and alerts that still reference it can no longer resolve it. Requires the Owner or Developer role. Returns 404 if the secret doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let secretName = "secretName_example"; // String | Name of the secret, as listed by `GetProjectSecrets`.
apiInstance.deleteProjectSecret(projectOrProductUID, secretName).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                     | Notes |
| ----------------------- | ---------- | --------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                 |
| **secretName**          | **String** | Name of the secret, as listed by &#x60;GetProjectSecrets&#x60;. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## disableGlobalEventTransformation

> disableGlobalEventTransformation(projectOrProductUID)

Disable the global event transformation

Stop applying the project&#39;s global event transformation to new events. The expression is kept, so &#x60;EnableGlobalEventTransformation&#x60; can turn it back on. Requires the Owner or Developer role. Returns 400 for a sub-project, whose parent&#39;s transformation applies.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.disableGlobalEventTransformation(projectOrProductUID).then(
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

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## downloadFirmware

> File downloadFirmware(projectOrProductUID, firmwareType, filename)

Download host firmware

Download a host firmware binary by its stored filename, including its &#x60;$&#x60; timestamp suffix. Notecard firmware can&#39;t be downloaded (400). Requires the Owner or Developer role. Returns 404 if the file doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let firmwareType = "firmwareType_example"; // String | Which firmware: `host` (the host microcontroller's) or `notecard`.
let filename = "filename_example"; // String |
apiInstance.downloadFirmware(projectOrProductUID, firmwareType, filename).then(
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

| Name                    | Type       | Description                                                                                | Notes |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------ | ----- |
| **projectOrProductUID** | **String** |                                                                                            |
| **firmwareType**        | **String** | Which firmware: &#x60;host&#x60; (the host microcontroller&#39;s) or &#x60;notecard&#x60;. |
| **filename**            | **String** |                                                                                            |

### Return type

**File**

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json

## enableGlobalEventTransformation

> enableGlobalEventTransformation(projectOrProductUID)

Enable the global event transformation

Resume applying the project&#39;s global event transformation to new events, without changing the expression. Undoes &#x60;DisableGlobalEventTransformation&#x60;. Requires the Owner or Developer role. Returns 400 for a sub-project, whose parent&#39;s transformation applies.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.enableGlobalEventTransformation(projectOrProductUID).then(
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

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAWSRoleConfig

> AWSRoleConfig getAWSRoleConfig(projectOrProductUID)

Get AWS role configuration for role-based authentication

Get the AWS account ID and External ID for the IAM role trust policy used by AWS routes with role-based authentication. The External ID is created on the first call and stays the same after that.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getAWSRoleConfig(projectOrProductUID).then(
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

[**AWSRoleConfig**](AWSRoleConfig.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceDfuHistory

> DeviceDfuHistory getDeviceDfuHistory(projectOrProductUID, deviceUID, firmwareType)

Get a device&#39;s firmware update history

Get a device&#39;s current host or Notecard firmware version and every firmware update requested for it, newest first. For just the latest update, use &#x60;GetDeviceDfuStatus&#x60;. Returns 400 if the device isn&#39;t in the project.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let firmwareType = "firmwareType_example"; // String | Which firmware: `host` (the host microcontroller's) or `notecard`.
apiInstance
  .getDeviceDfuHistory(projectOrProductUID, deviceUID, firmwareType)
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

| Name                    | Type       | Description                                                                                | Notes |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------ | ----- |
| **projectOrProductUID** | **String** |                                                                                            |
| **deviceUID**           | **String** |                                                                                            |
| **firmwareType**        | **String** | Which firmware: &#x60;host&#x60; (the host microcontroller&#39;s) or &#x60;notecard&#x60;. |

### Return type

[**DeviceDfuHistory**](DeviceDfuHistory.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceDfuStatus

> DeviceDfuStatus getDeviceDfuStatus(projectOrProductUID, deviceUID, firmwareType)

Get a device&#39;s firmware update status

Get a device&#39;s current host or Notecard firmware version and its latest firmware update. Includes whether an update is in progress. For every past update, use &#x60;GetDeviceDfuHistory&#x60;. Returns 400 if the device isn&#39;t in the project.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
let firmwareType = "firmwareType_example"; // String | Which firmware: `host` (the host microcontroller's) or `notecard`.
apiInstance
  .getDeviceDfuStatus(projectOrProductUID, deviceUID, firmwareType)
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

| Name                    | Type       | Description                                                                                | Notes |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------ | ----- |
| **projectOrProductUID** | **String** |                                                                                            |
| **deviceUID**           | **String** |                                                                                            |
| **firmwareType**        | **String** | Which firmware: &#x60;host&#x60; (the host microcontroller&#39;s) or &#x60;notecard&#x60;. |

### Return type

[**DeviceDfuStatus**](DeviceDfuStatus.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDeviceFleets

> GetDeviceFleets200Response getDeviceFleets(projectOrProductUID, deviceUID)

List a device&#39;s fleets

List the fleets a device belongs to, with only each fleet&#39;s UID, label and creation time. For a fleet&#39;s full details use &#x60;GetFleet&#x60;. Returns 404 if the device isn&#39;t in the project.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let deviceUID = "dev:000000000000000"; // String |
apiInstance.getDeviceFleets(projectOrProductUID, deviceUID).then(
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

[**GetDeviceFleets200Response**](GetDeviceFleets200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicesDfuHistory

> DeviceDfuHistoryPage getDevicesDfuHistory(projectOrProductUID, firmwareType, opts)

List devices&#39; firmware update history

List every host or Notecard firmware update requested for each matching device, newest first. Includes each device&#39;s current firmware version. For just the latest update, use &#x60;GetDevicesDfuStatus&#x60;. Paginated, by page or &#x60;cursor&#x60;. With a &#x60;cursor&#x60;, changes made through fleet or project firmware settings don&#39;t appear until the device itself is next updated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let firmwareType = "firmwareType_example"; // String | Which firmware: `host` (the host microcontroller's) or `notecard`.
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  sortBy: "'captured'", // String |
  sortOrder: "'asc'", // String |
  deviceUID: ["null"], // [String] | A DeviceUID.
  tag: ["null"], // [String] | Tag filter. Matches the whole tag, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally. For example, `51*` matches tags starting with `51`.
  serialNumber: ["null"], // [String] | Serial number filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  fleetUID: "fleetUID_example", // String |
  notecardFirmware: ["null"], // [String] | Firmware version filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  location: ["null"], // [String] | Location filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  hostFirmware: ["null"], // [String] | Host firmware filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  productUID: ["null"], // [String] | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  sku: ["null"], // [String] | SKU filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
};
apiInstance.getDevicesDfuHistory(projectOrProductUID, firmwareType, opts).then(
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
| **firmwareType**        | **String**                | Which firmware: &#x60;host&#x60; (the host microcontroller&#39;s) or &#x60;notecard&#x60;.                                                                                                                                                                                                                                                                                                                                                                              |
| **pageSize**            | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000]               |
| **pageNum**             | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]                  |
| **cursor**              | **String**                | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                                 |
| **sortBy**              | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;captured&#39;] |
| **sortOrder**           | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;asc&#39;]      |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                                 |
| **tag**                 | [**[String]**](String.md) | Tag filter. Matches the whole tag, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;_&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally. For example, &#x60;51_&#x60; matches tags starting with &#x60;51&#x60;.                                                                                                                                                                   | [optional]                                 |
| **serialNumber**        | [**[String]**](String.md) | Serial number filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                           | [optional]                                 |
| **fleetUID**            | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                                 |
| **notecardFirmware**    | [**[String]**](String.md) | Firmware version filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                        | [optional]                                 |
| **location**            | [**[String]**](String.md) | Location filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                                | [optional]                                 |
| **hostFirmware**        | [**[String]**](String.md) | Host firmware filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                           | [optional]                                 |
| **productUID**          | [**[String]**](String.md) | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                            | [optional]                                 |
| **sku**                 | [**[String]**](String.md) | SKU filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                                     | [optional]                                 |

### Return type

[**DeviceDfuHistoryPage**](DeviceDfuHistoryPage.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDevicesDfuStatus

> DeviceDfuStatusPage getDevicesDfuStatus(projectOrProductUID, firmwareType, opts)

List devices&#39; firmware status

List the host or Notecard firmware version each matching device runs now, with its latest firmware update. Use this to find which firmware devices run. Paginated, by page or &#x60;cursor&#x60;. With a &#x60;cursor&#x60;, changes made through fleet or project firmware settings don&#39;t appear until the device itself is next updated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let firmwareType = "firmwareType_example"; // String | Which firmware: `host` (the host microcontroller's) or `notecard`.
let opts = {
  pageSize: 1000, // Number |
  pageNum: 1, // Number |
  cursor: "cursor_example", // String | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by `.N`. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; `.N` is the serial of the last row read at that microsecond, so nothing repeats or is skipped.
  sortBy: "'captured'", // String |
  sortOrder: "'asc'", // String |
  deviceUID: ["null"], // [String] | A DeviceUID.
  tag: ["null"], // [String] | Tag filter. Matches the whole tag, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally. For example, `51*` matches tags starting with `51`.
  serialNumber: ["null"], // [String] | Serial number filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  fleetUID: "fleetUID_example", // String |
  notecardFirmware: ["null"], // [String] | Firmware version filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  location: ["null"], // [String] | Location filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  hostFirmware: ["null"], // [String] | Host firmware filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  productUID: ["null"], // [String] | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  sku: ["null"], // [String] | SKU filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
};
apiInstance.getDevicesDfuStatus(projectOrProductUID, firmwareType, opts).then(
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
| **firmwareType**        | **String**                | Which firmware: &#x60;host&#x60; (the host microcontroller&#39;s) or &#x60;notecard&#x60;.                                                                                                                                                                                                                                                                                                                                                                              |
| **pageSize**            | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1000]               |
| **pageNum**             | **Number**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to 1]                  |
| **cursor**              | **String**                | If supplied, results are returned in ascending order of modification time. A cursor is a timestamp: Unix epoch microseconds (UTC), optionally followed by &#x60;.N&#x60;. To start at a time, pass the bare microsecond value (inclusive; e.g. now minus 30 days); 0 starts from the beginning. To resume, pass next_cursor (or X-Next-Cursor) back unchanged; &#x60;.N&#x60; is the serial of the last row read at that microsecond, so nothing repeats or is skipped. | [optional]                                 |
| **sortBy**              | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;captured&#39;] |
| **sortOrder**           | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional] [default to &#39;asc&#39;]      |
| **deviceUID**           | [**[String]**](String.md) | A DeviceUID.                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [optional]                                 |
| **tag**                 | [**[String]**](String.md) | Tag filter. Matches the whole tag, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;_&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally. For example, &#x60;51_&#x60; matches tags starting with &#x60;51&#x60;.                                                                                                                                                                   | [optional]                                 |
| **serialNumber**        | [**[String]**](String.md) | Serial number filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                           | [optional]                                 |
| **fleetUID**            | **String**                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [optional]                                 |
| **notecardFirmware**    | [**[String]**](String.md) | Firmware version filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                        | [optional]                                 |
| **location**            | [**[String]**](String.md) | Location filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                                | [optional]                                 |
| **hostFirmware**        | [**[String]**](String.md) | Host firmware filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                           | [optional]                                 |
| **productUID**          | [**[String]**](String.md) | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                            | [optional]                                 |
| **sku**                 | [**[String]**](String.md) | SKU filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                                                                                                                                                                                     | [optional]                                 |

### Return type

[**DeviceDfuStatusPage**](DeviceDfuStatusPage.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFirmwareInfo

> [FirmwareInfo] getFirmwareInfo(projectOrProductUID, opts)

List firmware

List the host firmware uploaded to the project and the Notecard firmware available to it. Text filters match substrings, and unpublished Notecard builds are left out unless &#x60;unpublished&#x60; is &#x60;true&#x60;. Not paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let opts = {
  product: "product_example", // String | Only firmware whose product contains this text.
  firmwareType: "firmwareType_example", // String | Only list `host` or `notecard` firmware. Omit for both.
  version: "version_example", // String | Only firmware whose version contains this text.
  target: "target_example", // String | Only firmware whose target contains this text.
  filename: "notecard-7.2.2.16518$20240410043100.bin", // String | Only firmware whose stored filename contains this text.
  md5: "md5_example", // String | Only firmware whose MD5 hash contains this text.
  unpublished: true, // Boolean | If `true`, also list unpublished Notecard firmware.
  sortBy: "'created'", // String | Field to sort by
  sortOrder: "'desc'", // String | Sort order (asc for ascending, desc for descending)
};
apiInstance.getFirmwareInfo(projectOrProductUID, opts).then(
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

| Name                    | Type        | Description                                                                 | Notes                                     |
| ----------------------- | ----------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| **projectOrProductUID** | **String**  |                                                                             |
| **product**             | **String**  | Only firmware whose product contains this text.                             | [optional]                                |
| **firmwareType**        | **String**  | Only list &#x60;host&#x60; or &#x60;notecard&#x60; firmware. Omit for both. | [optional]                                |
| **version**             | **String**  | Only firmware whose version contains this text.                             | [optional]                                |
| **target**              | **String**  | Only firmware whose target contains this text.                              | [optional]                                |
| **filename**            | **String**  | Only firmware whose stored filename contains this text.                     | [optional]                                |
| **md5**                 | **String**  | Only firmware whose MD5 hash contains this text.                            | [optional]                                |
| **unpublished**         | **Boolean** | If &#x60;true&#x60;, also list unpublished Notecard firmware.               | [optional]                                |
| **sortBy**              | **String**  | Field to sort by                                                            | [optional] [default to &#39;created&#39;] |
| **sortOrder**           | **String**  | Sort order (asc for ascending, desc for descending)                         | [optional] [default to &#39;desc&#39;]    |

### Return type

[**[FirmwareInfo]**](FirmwareInfo.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleet

> Fleet getFleet(projectOrProductUID, fleetUID)

Get a fleet

Get one fleet&#39;s label, smart rule, watchdog and environment variables. Doesn&#39;t include &#x60;smart_rule_enabled&#x60;. Returns 404 if the fleet doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.getFleet(projectOrProductUID, fleetUID).then(
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
| **fleetUID**            | **String** |             |

### Return type

[**Fleet**](Fleet.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetEnvironmentHierarchy

> EnvTreeJsonNode getFleetEnvironmentHierarchy(projectOrProductUID, fleetUID)

Get a fleet&#39;s environment hierarchy

Get a fleet&#39;s environment variables and the project variables it inherits, as a tree. Each variable has its precedence and whether it is used or overridden. Returns 500 if the fleet doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.getFleetEnvironmentHierarchy(projectOrProductUID, fleetUID).then(
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
| **fleetUID**            | **String** |             |

### Return type

[**EnvTreeJsonNode**](EnvTreeJsonNode.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleetEnvironmentVariables

> EnvironmentVariables getFleetEnvironmentVariables(projectOrProductUID, fleetUID)

Get fleet environment variables

Get the environment variables set on a fleet, with their notes. They override project variables, and device variables override them. Returns 404 if the fleet doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
apiInstance.getFleetEnvironmentVariables(projectOrProductUID, fleetUID).then(
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
| **fleetUID**            | **String** |             |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getFleets

> GetDeviceFleets200Response getFleets(projectOrProductUID)

List fleets

List the project&#39;s fleets with each one&#39;s label, smart rule, watchdog and environment variables. Doesn&#39;t include &#x60;smart_rule_enabled&#x60;. Not paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getFleets(projectOrProductUID).then(
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

[**GetDeviceFleets200Response**](GetDeviceFleets200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getNotefileSchemas

> [NotefileSchema] getNotefileSchemas(projectOrProductUID)

List Notefile schemas

List the project&#39;s Notefiles, each with the event &#x60;body&#x60; fields Notehub has seen in it and their JSON types. Inferred from received events.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getNotefileSchemas(projectOrProductUID).then(
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

[**[NotefileSchema]**](NotefileSchema.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProducts

> GetProducts200Response getProducts(projectOrProductUID)

List a project&#39;s products

List the project&#39;s ProductUIDs, each with its label, auto-provision fleets, and whether new devices start disabled. UIDs here include the &#x60;product:&#x60; prefix; &#x60;CreateProduct&#x60; returns them without it. Not paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getProducts(projectOrProductUID).then(
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

[**GetProducts200Response**](GetProducts200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProject

> Project getProject(projectOrProductUID)

Get a project

Get a project&#39;s label, creation time, contacts, and the caller&#39;s &#x60;role&#x60; in it. Accepts a ProductUID in place of the ProjectUID.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getProject(projectOrProductUID).then(
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

[**Project**](Project.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectByProduct

> Project getProjectByProduct(productUID)

Get the project for a ProductUID

Get the project that a ProductUID belongs to. Returns the same object as &#x60;GetProject&#x60;, which also accepts a ProductUID in place of a ProjectUID.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let productUID = com.blues.airnote; // String | ProductUID, e.g. `com.blues.airnote`, with or without the `product:` prefix.
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

| Name           | Type       | Description                                                                                      | Notes |
| -------------- | ---------- | ------------------------------------------------------------------------------------------------ | ----- |
| **productUID** | **String** | ProductUID, e.g. &#x60;com.blues.airnote&#x60;, with or without the &#x60;product:&#x60; prefix. |

### Return type

[**Project**](Project.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectEnvironmentHierarchy

> EnvTreeJsonNode getProjectEnvironmentHierarchy(projectOrProductUID)

Get the project environment hierarchy

Get the project&#39;s environment variables as a one-node environment hierarchy tree. The fleet and device hierarchy operations use the same format; for plain key/value pairs, use &#x60;GetProjectEnvironmentVariables&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getProjectEnvironmentHierarchy(projectOrProductUID).then(
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

[**EnvTreeJsonNode**](EnvTreeJsonNode.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectEnvironmentVariables

> EnvironmentVariables getProjectEnvironmentVariables(projectOrProductUID)

Get project environment variables

Get the environment variables set on the project, with their notes. Fleet and device variables override these; for what a device actually sees, use &#x60;GetDeviceEnvironmentVariables&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getProjectEnvironmentVariables(projectOrProductUID).then(
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

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectMembers

> GetProjectMembers200Response getProjectMembers(projectOrProductUID)

List project members

List the project&#39;s members with each one&#39;s name and role. Emails are filled in only when the caller is an Owner. Not paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getProjectMembers(projectOrProductUID).then(
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

[**GetProjectMembers200Response**](GetProjectMembers200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjectSecrets

> GetProjectSecretsResponse getProjectSecrets(projectOrProductUID)

List project secrets

List the project&#39;s secrets by name, with who created and last changed each one and when. Values are never returned.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
apiInstance.getProjectSecrets(projectOrProductUID).then(
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

[**GetProjectSecretsResponse**](GetProjectSecretsResponse.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getProjects

> GetProjects200Response getProjects()

List projects

List every project the caller is a member of, with the caller&#39;s &#x60;role&#x60; in each. Not paginated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

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

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## performDfuAction

> performDfuAction(projectOrProductUID, firmwareType, action, opts)

Start or cancel firmware updates

Start or cancel a host or Notecard firmware update on every device matching the filters. With no filters, that is every device in the project. &#x60;update&#x60; sets each device&#39;s &#x60;\_fw&#x60; or &#x60;\_fwc&#x60; variable to &#x60;filename&#x60;. Requires the Owner or Developer role. &#x60;update&#x60; returns 404 if the file isn&#39;t found, and can return 400 if a matching device already has an update in progress.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let firmwareType = "firmwareType_example"; // String | Which firmware: `host` (the host microcontroller's) or `notecard`.
let action = "action_example"; // String | - `update`: start updating to the firmware in `filename` - `cancel`: cancel any update in progress
let opts = {
  deviceUID: ["null"], // [String] | A DeviceUID.
  tag: ["null"], // [String] | Tag filter. Matches the whole tag, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally. For example, `51*` matches tags starting with `51`.
  serialNumber: ["null"], // [String] | Serial number filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  fleetUID: "fleetUID_example", // String |
  notecardFirmware: ["null"], // [String] | Firmware version filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  location: ["null"], // [String] | Location filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  hostFirmware: ["null"], // [String] | Host firmware filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  productUID: ["null"], // [String] | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  sku: ["null"], // [String] | SKU filter. Matches any value containing the filter text. Use `*` as a wildcard and `\\*` to match a literal `*`; all other characters, including `%` and `_`, match literally.
  dfuActionRequest: new NotehubJs.DfuActionRequest(), // DfuActionRequest | Which firmware in the case of an update action
};
apiInstance
  .performDfuAction(projectOrProductUID, firmwareType, action, opts)
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

| Name                    | Type                                        | Description                                                                                                                                                                                                                                                                                           | Notes      |
| ----------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String**                                  |                                                                                                                                                                                                                                                                                                       |
| **firmwareType**        | **String**                                  | Which firmware: &#x60;host&#x60; (the host microcontroller&#39;s) or &#x60;notecard&#x60;.                                                                                                                                                                                                            |
| **action**              | **String**                                  | - &#x60;update&#x60;: start updating to the firmware in &#x60;filename&#x60; - &#x60;cancel&#x60;: cancel any update in progress                                                                                                                                                                      |
| **deviceUID**           | [**[String]**](String.md)                   | A DeviceUID.                                                                                                                                                                                                                                                                                          | [optional] |
| **tag**                 | [**[String]**](String.md)                   | Tag filter. Matches the whole tag, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;_&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally. For example, &#x60;51_&#x60; matches tags starting with &#x60;51&#x60;. | [optional] |
| **serialNumber**        | [**[String]**](String.md)                   | Serial number filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                         | [optional] |
| **fleetUID**            | **String**                                  |                                                                                                                                                                                                                                                                                                       | [optional] |
| **notecardFirmware**    | [**[String]**](String.md)                   | Firmware version filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                      | [optional] |
| **location**            | [**[String]**](String.md)                   | Location filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                              | [optional] |
| **hostFirmware**        | [**[String]**](String.md)                   | Host firmware filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                         | [optional] |
| **productUID**          | [**[String]**](String.md)                   | ProductUID filter. Matches any value containing the filter text, case-insensitive. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                          | [optional] |
| **sku**                 | [**[String]**](String.md)                   | SKU filter. Matches any value containing the filter text. Use &#x60;_&#x60; as a wildcard and &#x60;\\_&#x60; to match a literal &#x60;\*&#x60;; all other characters, including &#x60;%&#x60; and &#x60;\_&#x60;, match literally.                                                                   | [optional] |
| **dfuActionRequest**    | [**DfuActionRequest**](DfuActionRequest.md) | Which firmware in the case of an update action                                                                                                                                                                                                                                                        | [optional] |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## setFleetEnvironmentVariables

> EnvironmentVariables setFleetEnvironmentVariables(projectOrProductUID, fleetUID, environmentVariables)

Set fleet environment variables

Add or change a fleet&#39;s environment variables; variables you don&#39;t send keep their values. A value of &#x60;\&quot;\&quot;&#x60; or &#x60;-&#x60; deletes that variable. Setting &#x60;\_fw&#x60;, &#x60;\_fwc&#x60; or &#x60;\_fwm&#x60; starts a host, Notecard or modem firmware update. Requires the Owner or Developer role. Returns 404 if the fleet doesn&#39;t exist, and 400 if a note&#39;s key isn&#39;t a variable.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
let environmentVariables = new NotehubJs.EnvironmentVariables(); // EnvironmentVariables | The variables to add or change, and optional notes.
apiInstance
  .setFleetEnvironmentVariables(
    projectOrProductUID,
    fleetUID,
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
| **fleetUID**             | **String**                                          |                                                     |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) | The variables to add or change, and optional notes. |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## setGlobalEventTransformation

> setGlobalEventTransformation(projectOrProductUID, body)

Set the global event transformation

Set the project&#39;s JSONata expression that rewrites each new event before it&#39;s stored and routed. It can change &#x60;body&#x60;, &#x60;payload&#x60;, &#x60;details&#x60;, &#x60;file&#x60; and &#x60;note&#x60;, or drop the event with &#x60;$doNotRoute()&#x60;; an event it fails on is kept with &#x60;error&#x60; set. Doesn&#39;t enable or disable it. Requires the Owner or Developer role. Returns 400 if it doesn&#39;t compile, or for a sub-project, which uses its parent&#39;s.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let body = "body_example"; // String | JSONata expression as plain text. An empty body clears the transformation.
apiInstance.setGlobalEventTransformation(projectOrProductUID, body).then(
  () => {
    console.log("API called successfully.");
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name                    | Type       | Description                                                                | Notes |
| ----------------------- | ---------- | -------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String** |                                                                            |
| **body**                | **String** | JSONata expression as plain text. An empty body clears the transformation. |

### Return type

null (empty response body)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

## setProjectEnvironmentVariables

> EnvironmentVariables setProjectEnvironmentVariables(projectOrProductUID, opts)

Set project environment variables

Add or change project environment variables; variables you don&#39;t send keep their values. A value of &#x60;\&quot;\&quot;&#x60; or &#x60;-&#x60; deletes that variable. Setting &#x60;\_fw&#x60;, &#x60;\_fwc&#x60; or &#x60;\_fwm&#x60; starts a host, Notecard or modem firmware update. Requires the Owner or Developer role. Returns 400 if a note&#39;s key isn&#39;t a variable.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let opts = {
  environmentVariables: new NotehubJs.EnvironmentVariables(), // EnvironmentVariables |
};
apiInstance.setProjectEnvironmentVariables(projectOrProductUID, opts).then(
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

| Name                     | Type                                                | Description | Notes      |
| ------------------------ | --------------------------------------------------- | ----------- | ---------- |
| **projectOrProductUID**  | **String**                                          |             |
| **environmentVariables** | [**EnvironmentVariables**](EnvironmentVariables.md) |             | [optional] |

### Return type

[**EnvironmentVariables**](EnvironmentVariables.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateFirmware

> FirmwareInfo updateFirmware(projectOrProductUID, firmwareType, filename, updateHostFirmwareRequest)

Update host firmware metadata

Change a host firmware file&#39;s &#x60;version&#x60;, &#x60;notes&#x60; or &#x60;info&#x60;; fields you leave out or send empty keep their values. Use the stored filename, including its &#x60;$&#x60; timestamp suffix. Requires the Owner or Developer role. Returns 400 for a sub-project, whose parent manages host firmware, and 404 if the file doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let firmwareType = "firmwareType_example"; // String |
let filename = "filename_example"; // String |
let updateHostFirmwareRequest = new NotehubJs.UpdateHostFirmwareRequest(); // UpdateHostFirmwareRequest | Firmware metadata fields to update. All fields are optional; only provided fields will be updated.
apiInstance
  .updateFirmware(
    projectOrProductUID,
    firmwareType,
    filename,
    updateHostFirmwareRequest
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

| Name                          | Type                                                          | Description                                                                                        | Notes |
| ----------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID**       | **String**                                                    |                                                                                                    |
| **firmwareType**              | **String**                                                    |                                                                                                    |
| **filename**                  | **String**                                                    |                                                                                                    |
| **updateHostFirmwareRequest** | [**UpdateHostFirmwareRequest**](UpdateHostFirmwareRequest.md) | Firmware metadata fields to update. All fields are optional; only provided fields will be updated. |

### Return type

[**FirmwareInfo**](FirmwareInfo.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateFleet

> Fleet updateFleet(projectOrProductUID, fleetUID, updateFleetRequest)

Update a fleet

Change a fleet&#39;s label, smart rule, watchdog or connectivity assurance, or add and remove devices. Always send &#x60;smart_rule_enabled&#x60;; leaving it out turns the smart rule off. Empty &#x60;label&#x60; or &#x60;smart_rule&#x60; keeps the current value; &#x60;-&#x60; clears &#x60;smart_rule&#x60;. Requires the Owner or Developer role. Returns 400 for an unknown fleet or &#x60;label&#x60; of &#x60;-&#x60;, and for a bad DeviceUID after saving the other changes.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let fleetUID = "fleetUID_example"; // String |
let updateFleetRequest = new NotehubJs.UpdateFleetRequest(); // UpdateFleetRequest | The fields to change. Fields left out keep their values, except `smart_rule_enabled`.
apiInstance.updateFleet(projectOrProductUID, fleetUID, updateFleetRequest).then(
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

| Name                    | Type                                            | Description                                                                                     | Notes |
| ----------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----- |
| **projectOrProductUID** | **String**                                      |                                                                                                 |
| **fleetUID**            | **String**                                      |                                                                                                 |
| **updateFleetRequest**  | [**UpdateFleetRequest**](UpdateFleetRequest.md) | The fields to change. Fields left out keep their values, except &#x60;smart_rule_enabled&#x60;. |

### Return type

[**Fleet**](Fleet.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateProjectSecret

> ProjectSecret updateProjectSecret(projectOrProductUID, secretName, updateProjectSecretRequest)

Update a project secret

Replace the value of an existing project secret. Routes and alerts that reference it use the new value from then on. Requires the Owner or Developer role. Returns 404 if the secret doesn&#39;t exist.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let secretName = "secretName_example"; // String | Name of the secret, as listed by `GetProjectSecrets`.
let updateProjectSecretRequest = new NotehubJs.UpdateProjectSecretRequest(); // UpdateProjectSecretRequest |
apiInstance
  .updateProjectSecret(
    projectOrProductUID,
    secretName,
    updateProjectSecretRequest
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

| Name                           | Type                                                            | Description                                                     | Notes |
| ------------------------------ | --------------------------------------------------------------- | --------------------------------------------------------------- | ----- |
| **projectOrProductUID**        | **String**                                                      |                                                                 |
| **secretName**                 | **String**                                                      | Name of the secret, as listed by &#x60;GetProjectSecrets&#x60;. |
| **updateProjectSecretRequest** | [**UpdateProjectSecretRequest**](UpdateProjectSecretRequest.md) |                                                                 |

### Return type

[**ProjectSecret**](ProjectSecret.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## uploadFirmware

> FirmwareInfo uploadFirmware(projectOrProductUID, firmwareType, filename, body, opts)

Upload firmware

Upload a host or Notecard firmware binary. Notehub usually adds a timestamp to &#x60;filename&#x60;; use the returned &#x60;filename&#x60; from then on. Requires the Owner or Developer role. Returns 400 for host firmware on a sub-project, whose parent manages it, and 500 for a wrong file type or a file over the limit: 1.5 MB for host firmware, 2 MB for &#x60;notecard-s3-\*&#x60; and 1 MB for other Notecard firmware.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.ProjectApi();
let projectOrProductUID = "app:2606f411-dea6-44a0-9743-1130f57d77d8"; // String |
let firmwareType = "firmwareType_example"; // String | Which firmware: `host` (the host microcontroller's) or `notecard`.
let filename = "filename_example"; // String | Name to store the file under. Notehub adds `$` and a timestamp before the extension, except for a Notecard firmware name that already contains `$`.
let body = "/path/to/file"; // File | contents of the firmware binary
let opts = {
  version: "version_example", // String | Firmware version (optional). If not provided, the version will be extracted from firmware binary if available, otherwise left empty
  notes: "notes_example", // String | Optional notes describing what's different about this firmware version
};
apiInstance
  .uploadFirmware(projectOrProductUID, firmwareType, filename, body, opts)
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

| Name                    | Type       | Description                                                                                                                                                             | Notes      |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **projectOrProductUID** | **String** |                                                                                                                                                                         |
| **firmwareType**        | **String** | Which firmware: &#x60;host&#x60; (the host microcontroller&#39;s) or &#x60;notecard&#x60;.                                                                              |
| **filename**            | **String** | Name to store the file under. Notehub adds &#x60;$&#x60; and a timestamp before the extension, except for a Notecard firmware name that already contains &#x60;$&#x60;. |
| **body**                | **File**   | contents of the firmware binary                                                                                                                                         |
| **version**             | **String** | Firmware version (optional). If not provided, the version will be extracted from firmware binary if available, otherwise left empty                                     | [optional] |
| **notes**               | **String** | Optional notes describing what&#39;s different about this firmware version                                                                                              | [optional] |

### Return type

[**FirmwareInfo**](FirmwareInfo.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json
