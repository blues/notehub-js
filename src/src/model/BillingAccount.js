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
import BillingAccountRole from './BillingAccountRole';

/**
 * The BillingAccount model module.
 * @module model/BillingAccount
 * @version 1.0.5
 */
class BillingAccount {
    /**
     * Constructs a new <code>BillingAccount</code>.
     * @alias module:model/BillingAccount
     * @param uid {String} 
     * @param name {String} 
     * @param role {module:model/BillingAccountRole} 
     */
    constructor(uid, name, role) { 
        
        BillingAccount.initialize(this, uid, name, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uid, name, role) { 
        obj['uid'] = uid;
        obj['name'] = name;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>BillingAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingAccount} obj Optional instance to populate.
     * @return {module:model/BillingAccount} The populated <code>BillingAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingAccount();

            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = BillingAccountRole.constructFromObject(data['role']);
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingAccount</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingAccount.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uid'] && !(typeof data['uid'] === 'string' || data['uid'] instanceof String)) {
            throw new Error("Expected the field `uid` to be a primitive type in the JSON string but got " + data['uid']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

BillingAccount.RequiredProperties = ["uid", "name", "role"];

/**
 * @member {String} uid
 */
BillingAccount.prototype['uid'] = undefined;

/**
 * @member {String} name
 */
BillingAccount.prototype['name'] = undefined;

/**
 * @member {module:model/BillingAccountRole} role
 */
BillingAccount.prototype['role'] = undefined;






export default BillingAccount;

