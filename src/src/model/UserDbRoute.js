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
 * The UserDbRoute model module.
 * @module model/UserDbRoute
 * @version 1.0.7
 */
class UserDbRoute {
    /**
     * Constructs a new <code>UserDbRoute</code>.
     * @alias module:model/UserDbRoute
     */
    constructor() { 
        
        UserDbRoute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserDbRoute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDbRoute} obj Optional instance to populate.
     * @return {module:model/UserDbRoute} The populated <code>UserDbRoute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserDbRoute();

            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('modified')) {
                obj['modified'] = ApiClient.convertToType(data['modified'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserDbRoute</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserDbRoute</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uid'] && !(typeof data['uid'] === 'string' || data['uid'] instanceof String)) {
            throw new Error("Expected the field `uid` to be a primitive type in the JSON string but got " + data['uid']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['modified'] && !(typeof data['modified'] === 'string' || data['modified'] instanceof String)) {
            throw new Error("Expected the field `modified` to be a primitive type in the JSON string but got " + data['modified']);
        }

        return true;
    }


}



/**
 * @member {String} uid
 * @default 'route:8d65a087d5d290ce5bdf03aeff2becc0'
 */
UserDbRoute.prototype['uid'] = 'route:8d65a087d5d290ce5bdf03aeff2becc0';

/**
 * @member {String} label
 * @default 'success route'
 */
UserDbRoute.prototype['label'] = 'success route';

/**
 * @member {String} type
 * @default 'http'
 */
UserDbRoute.prototype['type'] = 'http';

/**
 * @member {String} modified
 * @default '2020-03-09T17:58:37Z'
 */
UserDbRoute.prototype['modified'] = '2020-03-09T17:58:37Z';

/**
 * @member {Boolean} disabled
 * @default false
 */
UserDbRoute.prototype['disabled'] = false;






export default UserDbRoute;

