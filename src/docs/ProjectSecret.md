# NotehubJs.ProjectSecret

## Properties

| Name           | Type       | Description                                                                    | Notes      |
| -------------- | ---------- | ------------------------------------------------------------------------------ | ---------- |
| **created**    | **Date**   | When the secret was first created.                                             |
| **createdBy**  | **String** | UID of the user or OAuth client that created the secret.                       |
| **modified**   | **Date**   | When the secret&#39;s value was last set.                                      | [optional] |
| **modifiedBy** | **String** | UID of the user or OAuth client that last set the secret&#39;s value.          | [optional] |
| **name**       | **String** | The secret&#39;s name. Routes and alerts reference it as &#x60;[$$name]&#x60;. |
