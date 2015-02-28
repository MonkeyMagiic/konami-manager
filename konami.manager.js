/*
 * Konami Manager
 * Copyright 2012-2014
 * Authors: Tyrone Neill.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Tyrone Neill
 *
 * Project: https://github.com/MonkeyMagiic/konamiManager
 */
var konamiManager = (function (ns) {
    'use strict';

    /**
     * Collection of managed <code>Konami</code> objects.
     * @type {Array} <Konami>
     * @private
     */
    var _konamis = [];

    /**
     * Attach a new Konami to the managed collection by specifying the combination to test against and
     * the method/function to execute when the test succeeds.
     *
     * @param result callback when the <code>combination</code> has been executed successfully.
     * @param combination sequence of characters (usually keyboard codes).
     */
    ns.add = function (result, combination) {
        _konamis.push(new Konami(result, combination));
    }

    /**
     * @private
     */
    window.addEventListener('keydown', function (event) {
        var i = 0;
        do {
            _konamis[i].testSequence(event.keyCode);
            i++;
        } while (i < _konamis.length);
    });
    return ns;

    /**
     * Konami
     *
     * @param result callback when the <code>combination</code> has been executed successfully.
     * @param combination sequence of characters (usually keyboard codes).
     * @constructor
     */
    function Konami(result, combination) {

        /**
         * Current position in the <code>combination</code>.
         * @type {number}
         * @private
         */
        this._position = 0;
        /**
         * Result handler when the combination has successfully executed.
         * @type {function}
         * @private
         */
        this._result = result;
        /**
         * The combination or sequence to test against
         * @type {array}
         * @private
         */
        this._combination = combination;

        /**
         * Test a given code against the current <code>position</code>
         *  within the <code>combination</code>.
         * @param code
         */
        Konami.prototype.testSequence = function (code) {

            if (this._combination[this._position++] === code) {
                if (this._position === this._combination.length) {
                    this._result();
                    this._position = 0;
                }
            } else {
                this._position = 0;
            }
        };
    } // End of Konami.

})(window.konamiManager || {});
