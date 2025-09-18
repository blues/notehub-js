# NotehubJs.CloneProjectRequest

## Properties

| Name                   | Type        | Description                                                                                                                                                     | Notes      |
| ---------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **billingAccountUid**  | **String**  | The billing account UID for the project. The caller of the API must be able to create projects within the billing account, otherwise an error will be returned. |
| **disableCloneFleets** | **Boolean** | Whether to disallow the cloning of the fleets from the parent project. Default is false if not specified.                                                       | [optional] |
| **disableCloneRoutes** | **Boolean** | Whether to disallow the cloning of the routes from the parent project. Default is false if not specified.                                                       | [optional] |
| **label**              | **String**  | The label for the project.                                                                                                                                      |
