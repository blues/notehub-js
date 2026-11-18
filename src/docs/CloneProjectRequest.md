# NotehubJs.CloneProjectRequest

## Properties

| Name                   | Type        | Description                                                                                                                            | Notes      |
| ---------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **billingAccountUid**  | **String**  | UID of the organization that owns the new project. List them with &#x60;GetBillingAccounts&#x60;.                                      |
| **disableCloneFleets** | **Boolean** | If &#x60;true&#x60;, the new project gets one default fleet instead of copies of this project&#39;s fleets. Default &#x60;false&#x60;. | [optional] |
| **disableCloneRoutes** | **Boolean** | If &#x60;true&#x60;, the new project starts with no routes. Default &#x60;false&#x60;.                                                 | [optional] |
| **label**              | **String**  | Name of the new project.                                                                                                               |
