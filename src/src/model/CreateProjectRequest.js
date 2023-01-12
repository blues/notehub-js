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

/**
 * The CreateProjectRequest model module.
 * @module model/CreateProjectRequest
 * @version 1.0.3
 */
class CreateProjectRequest {
    /**
     * Constructs a new <code>CreateProjectRequest</code>.
     * @alias module:model/CreateProjectRequest
     * @param label {String} The label for the project.
     */
    constructor(label) { 
        
        CreateProjectRequest.initialize(this, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, label) { 
        obj['label'] = label;
    }

    /**
     * Constructs a <code>CreateProjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProjectRequest} obj Optional instance to populate.
     * @return {module:model/CreateProjectRequest} The populated <code>CreateProjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProjectRequest();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('billing_account_uid')) {
                obj['billing_account_uid'] = ApiClient.convertToType(data['billing_account_uid'], 'String');
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProjectRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProjectRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateProjectRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['billing_account_uid'] && !(typeof data['billing_account_uid'] === 'string' || data['billing_account_uid'] instanceof String)) {
            throw new Error("Expected the field `billing_account_uid` to be a primitive type in the JSON string but got " + data['billing_account_uid']);
        }

        return true;
    }


}

CreateProjectRequest.RequiredProperties = ["label"];

/**
 * The label for the project.
 * @member {String} label
 */
CreateProjectRequest.prototype['label'] = undefined;

/**
 * The billing account UID for the project. The caller of the API must be able to create projects within the billing account, otherwise an error will be returned. 
 * @member {String} billing_account_uid
 */
CreateProjectRequest.prototype['billing_account_uid'] = undefined;






export default CreateProjectRequest;

