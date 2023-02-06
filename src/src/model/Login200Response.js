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
 * The Login200Response model module.
 * @module model/Login200Response
 * @version 1.0.6
 */
class Login200Response {
    /**
     * Constructs a new <code>Login200Response</code>.
     * @alias module:model/Login200Response
     */
    constructor() { 
        
        Login200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Login200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Login200Response} obj Optional instance to populate.
     * @return {module:model/Login200Response} The populated <code>Login200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Login200Response();

            if (data.hasOwnProperty('session_token')) {
                obj['session_token'] = ApiClient.convertToType(data['session_token'], 'String');
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Login200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Login200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['session_token'] && !(typeof data['session_token'] === 'string' || data['session_token'] instanceof String)) {
            throw new Error("Expected the field `session_token` to be a primitive type in the JSON string but got " + data['session_token']);
        }

        return true;
    }


}



/**
 * @member {String} session_token
 */
Login200Response.prototype['session_token'] = undefined;






export default Login200Response;

