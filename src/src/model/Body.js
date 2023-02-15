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
 * The Body model module.
 * @module model/Body
 * @version 1.0.8
 */
class Body {
    /**
     * Constructs a new <code>Body</code>.
     * @alias module:model/Body
     */
    constructor() { 
        
        Body.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Body} obj Optional instance to populate.
     * @return {module:model/Body} The populated <code>Body</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], Object);
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Body</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Body</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object} body
 */
Body.prototype['body'] = undefined;






export default Body;

