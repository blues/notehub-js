/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: engineering@blues.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ProjectMember from './ProjectMember';

/**
 * The GetProjectMembers200Response model module.
 * @module model/GetProjectMembers200Response
 * @version 1.0.9
 */
class GetProjectMembers200Response {
    /**
     * Constructs a new <code>GetProjectMembers200Response</code>.
     * @alias module:model/GetProjectMembers200Response
     * @param members {Array.<module:model/ProjectMember>} 
     */
    constructor(members) { 
        
        GetProjectMembers200Response.initialize(this, members);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, members) { 
        obj['members'] = members;
    }

    /**
     * Constructs a <code>GetProjectMembers200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProjectMembers200Response} obj Optional instance to populate.
     * @return {module:model/GetProjectMembers200Response} The populated <code>GetProjectMembers200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProjectMembers200Response();

            if (data.hasOwnProperty('members')) {
                obj['members'] = ApiClient.convertToType(data['members'], [ProjectMember]);
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetProjectMembers200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjectMembers200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetProjectMembers200Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['members']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['members'])) {
                throw new Error("Expected the field `members` to be an array in the JSON data but got " + data['members']);
            }
            // validate the optional field `members` (array)
            for (const item of data['members']) {
                ProjectMember.validateJsonObject(item);
            };
        }

        return true;
    }


}

GetProjectMembers200Response.RequiredProperties = ["members"];

/**
 * @member {Array.<module:model/ProjectMember>} members
 */
GetProjectMembers200Response.prototype['members'] = undefined;






export default GetProjectMembers200Response;

