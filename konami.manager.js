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
;
(function (global) {
    'use strict';

    /**
     * Konami Manager
     *
     * @param stage
     * @constructor
     */
    function KonamiManager() {

        /**
         * Collection of konami items
         * @type {Array}
         * @private
         */
        var _konamis = [];

        /**
         * Add a konami by specifying both the combination/sequence and the result handler.
         *
         * @param result callback when the <code>combination</code> has been executed successfully.
         * @param combination sequence of characters (usually keyboard codes).
         */
        KonamiManager.prototype.add = function (result, combination) {
            _konamis.push(new Konami(result, combination));
        };

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
    } // End of KonamiManager.

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
         */
        var position = 0;

        /**
         * Test a given code against the current <code>position</code>
         *  within the <code>combination</code>.
         * @param code
         */
        Konami.prototype.testSequence = function (code) {
            if (combination[position++] === code) {
                if (position === combination.length) {
                    result && result();
                    position = 0;
                }
            } else {
                position = 0;
            }
        };
    } // End of Konami.

    /**
     * Attach library to window.
     */
    if (typeof define === "function" && define.amd) {
        define(new KonamiManager());
    } else {
        window.konamiManager = new KonamiManager();
    }

})(this);