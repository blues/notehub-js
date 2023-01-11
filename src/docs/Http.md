# BluesNotehubJs.Http

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fleets** | **[String]** | list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets | [optional] 
**filter** | [**HttpFilter**](HttpFilter.md) |  | [optional] 
**transform** | [**HttpTransform**](HttpTransform.md) |  | [optional] 
**throttleMs** | **Number** | Minimum time between requests in Miliseconds | [optional] 
**url** | **String** | Route URL | [optional] 
**httpHeaders** | **{String: String}** |  | [optional] 
**disableHttpHeaders** | **Boolean** |  | [optional] [default to false]
**timeout** | **Number** | Timeout in seconds for each request | [optional] [default to 15]


