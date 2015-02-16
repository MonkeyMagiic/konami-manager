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

    return (function () {

        /**
         * Konami Manager
         *
         * @param stage
         * @constructor
         */
        function KonamiManager(stage) {

            /**
             * Collection of konami items
             * @type {Array}
             * @private
             */
            var _konamis = [];

            /**
             * Add a combination to result.....
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
            stage.addEventListener('keydown', function (event) {

                var i = 0;
                do {
                    _konamis[i].testSequence(event.keyCode);
                    i++;
                } while (i < _konamis.length);
            });
        }

        ////// HACKING
        window.konamiManager = new KonamiManager(window);
        /*
         return {konamiManager: new KonamiManager(window)};

         */

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
             * @private
             */
            function complete() {
                result && result();
                position = 0;
            }

            /**
             * Test a given code against the current <code>position</code>
             *  within the <code>combination</code>.
             * @param code
             */
            Konami.prototype.testSequence = function (code) {
                if (combination[position++] === code) {
                    if (position === combination.length) {
                        complete();
                    }
                } else {
                    position = 0;
                }
            };
        } // End of Konami.

    })();

})(this);