# BluesNotehubJs.RouteSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fleets** | **[String]** | list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets | [optional] 
**filter** | [**HttpFilter**](HttpFilter.md) |  | [optional] 
**transform** | [**SnowflakeTransform**](SnowflakeTransform.md) |  | [optional] 
**throttleMs** | **Number** |  | [optional] 
**url** | **String** |  | [optional] 
**httpHeaders** | **{String: String}** |  | [optional] 
**disableHttpHeaders** | **Boolean** |  | [optional] [default to false]
**timeout** | **Number** | Timeout in seconds for each request | [optional] [default to 15]
**alias** | **String** |  | [optional] 
**broker** | **String** |  | [optional] 
**port** | **Number** |  | [optional] 
**username** | **String** |  | [optional] 
**password** | **String** |  | [optional] 
**topic** | **String** |  | [optional] 
**certificate** | **String** | Certificate with \\n newlines.  Field is input only, will not show contents on GET operations. | [optional] 
**certificateName** | **String** | Name of certificate.  If omitted, defaults to \&quot;present\&quot; | [optional] [default to &#39;present&#39;]
**key** | **String** | Key with \\n newlines.  Field is input only, will not show contents on GET operations. | [optional] 
**privateKeyName** | **String** | Name of PEM key.  If omitted, defaults to \&quot;present\&quot; | [optional] [default to &#39;present&#39;]
**region** | **String** |  | [optional] 
**accessKeyId** | **String** |  | [optional] 
**accessKeySecret** | **String** |  | [optional] 
**messageGroupId** | **String** |  | [optional] 
**messageDeduplicationId** | **String** |  | [optional] 
**channel** | **String** |  | [optional] 
**testApi** | **Boolean** |  | [optional] [default to false]
**dataFeedKey** | **String** |  | [optional] 
**clientId** | **String** |  | [optional] 
**clientSecret** | **String** | Client Secret is input only, will not display on GET operations | [optional] 
**sasPolicyName** | **String** |  | [optional] 
**sasPolicyKey** | **String** |  | [optional] 
**appKey** | **String** |  | [optional] 
**organizationName** | **String** |  | [optional] 
**accountName** | **String** |  | [optional] 
**userName** | **String** |  | [optional] 
**pem** | **String** | PEM key with \\n newlines.  Field is input only, will not show contents on GET operations. | [optional] 


