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
(function () {
    'use strict';

    var Keyboard = {
        /**
         * Constant associated with the key code value for the A key (65).
         * @type uint
         */
        A: 65,

        /**
         * Constant associated with the key code value for the Alternate (Option) key (18).
         * @type uint
         */
        ALTERNATE: 18,

        /**
         * Constant associated with the key code value for the button for selecting the audio mode.
         * @type uint
         */
        AUDIO: 0x01000017,

        /**
         * Constant associated with the key code value for the B key (66).
         * @type uint
         */
        B: 66,

        /**
         * Constant associated with the key code value for the button for returning to the previous page in the application.
         * @type uint
         */
        BACK: 0x01000016,

        /**
         * Constant associated with the key code value for the ` key (192).
         * @type uint
         */
        BACKQUOTE: 192,

        /**
         * Constant associated with the key code value for the \ key (220).
         * @type uint
         */
        BACKSLASH: 220,

        /**
         * Constant associated with the key code value for the Backspace key (8).
         * @type uint
         */
        BACKSPACE: 8,

        /**
         * Constant associated with the key code value for the blue function key button.
         * @type uint
         */
        BLUE: 0x01000003,

        /**
         * Constant associated with the key code value for the C key (67).
         * @type uint
         */
        C: 67,

        /**
         * Constant associated with the key code value for the Caps Lock key (20).
         * @type uint
         */
        CAPS_LOCK: 20,

        /**
         * Constant associated with the key code value for the channel down button.
         * @type uint
         */
        CHANNEL_DOWN: 0x01000005,

        /**
         * Constant associated with the key code value for the channel up button.
         * @type uint
         */
        CHANNEL_UP: 0x01000004,

        /**
         * An array containing all the defined key name constants.
         * @type Array
         */
        CharCodeStrings: [],

        /**
         * Constant associated with the key code value for the , key (188).
         * @type uint
         */
        COMMA: 188,

        /**
         * Constant associated with the Mac command key (15).
         * @type uint
         */
        COMMAND: 15,

        /**
         * Constant associated with the key code value for the Control key (17).
         * @type uint
         */
        CONTROL: 17,

        /**
         * Constant associated with the key code value for the D key (68).
         * @type uint
         */
        D: 68,

        /**
         * Constant associated with the key code value for the Delete key (46).
         * @type uint
         */
        DELETE: 46,

        /**
         * Constant associated with the key code value for the Down Arrow key (40).
         * @type uint
         */
        DOWN: 40,

        /**
         * Constant associated with the key code value for the button for engaging DVR application mode.
         * @type uint
         */
        DVR: 0x01000019,

        /**
         * Constant associated with the key code value for the E key (69).
         * @type uint
         */
        E: 69,

        /**
         * Constant associated with the key code value for the End key (35).
         * @type uint
         */
        END: 35,

        /**
         * Constant associated with the key code value for the Enter key (13).
         * @type uint
         */
        ENTER: 13,

        /**
         * Constant associated with the key code value for the = key (187).
         * @type uint
         */
        EQUAL: 187,

        /**
         * Constant associated with the key code value for the Escape key (27).
         * @type uint
         */
        ESCAPE: 27,

        /**
         * Constant associated with the key code value for the button for exiting the current application mode.
         * @type uint
         */
        EXIT: 0x01000015,

        /**
         * Constant associated with the key code value for the F key (70).
         * @type uint
         */
        F: 70,

        /**
         * Constant associated with the key code value for the F1 key (112).
         * @type uint
         */
        F1: 112,

        /**
         * Constant associated with the key code value for the F10 key (121).
         * @type uint
         */
        F10: 121,

        /**
         * Constant associated with the key code value for the F11 key (122).
         * @type uint
         */
        F11: 122,

        /**
         * Constant associated with the key code value for the F12 key (123).
         * @type uint
         */
        F12: 123,

        /**
         * Constant associated with the key code value for the F13 key (124).
         * @type uint
         */
        F13: 124,

        /**
         * Constant associated with the key code value for the F14 key (125).
         * @type uint
         */
        F14: 125,

        /**
         * Constant associated with the key code value for the F15 key (126).
         * @type uint
         */
        F15: 126,

        /**
         * Constant associated with the key code value for the F2 key (113).
         * @type uint
         */
        F2: 113,

        /**
         * Constant associated with the key code value for the F3 key (114).
         * @type uint
         */
        F3: 114,

        /**
         * Constant associated with the key code value for the F4 key (115).
         * @type uint
         */
        F4: 115,

        /**
         * Constant associated with the key code value for the F5 key (116).
         * @type uint
         */
        F5: 116,

        /**
         * Constant associated with the key code value for the F6 key (117).
         * @type uint
         */
        F6: 117,

        /**
         * Constant associated with the key code value for the F7 key (118).
         * @type uint
         */
        F7: 118,

        /**
         * Constant associated with the key code value for the F8 key (119).
         * @type uint
         */
        F8: 119,

        /**
         * Constant associated with the key code value for the F9 key (120).
         * @type uint
         */
        F9: 120,

        /**
         * Constant associated with the key code value for the button for engaging fast-forward transport mode.
         * @type uint
         */
        FAST_FORWARD: 0x0100000A,

        /**
         * Constant associated with the key code value for the G key (71).
         * @type uint
         */
        G: 71,

        /**
         * Constant associated with the key code value for the green function key button.
         * @type uint
         */
        GREEN: 0x01000001,

        /**
         * Constant associated with the key code value for the button for engaging the program guide.
         * @type uint
         */
        GUIDE: 0x01000014,

        /**
         * Constant associated with the key code value for the H key (72).
         * @type uint
         */
        H: 72,

        /**
         * Constant associated with the key code value for the button for engaging the help application or context-sensitive help.
         * @type uint
         */
        HELP: 0x0100001D,

        /**
         * Constant associated with the key code value for the Home key (36).
         * @type uint
         */
        HOME: 36,

        /**
         * Constant associated with the key code value for the I key (73).
         * @type uint
         */
        I: 73,

        /**
         * Constant associated with the key code value for the info button.
         * @type uint
         */
        INFO: 0x01000013,

        /**
         * Constant associated with the key code value for the button for cycling inputs.
         * @type uint
         */
        INPUT: 0x0100001B,

        /**
         * Constant associated with the key code value for the Insert key (45).
         * @type uint
         */
        INSERT: 45,

        /**
         * Constant associated with the key code value for the J key (74).
         * @type uint
         */
        J: 74,

        /**
         * Constant associated with the key code value for the K key (75).
         * @type uint
         */
        K: 75,

        /**
         * Constant associated with the key code value for the L key (76).
         * @type uint
         */
        L: 76,

        /**
         * Constant associated with the key code value for the button for watching the last channel or show watched.
         * @type uint
         */
        LAST: 0x01000011,

        /**
         * Constant associated with the key code value for the Left Arrow key (37).
         * @type uint
         */
        LEFT: 37,

        /**
         * Constant associated with the key code value for the [ key (219).
         * @type uint
         */
        LEFTBRACKET: 219,

        /**
         * Constant associated with the key code value for the button for returning to live [position in broadcast].
         * @type uint
         */
        LIVE: 0x01000010,

        /**
         * Constant associated with the key code value for the M key (77).
         * @type uint
         */
        M: 77,

        /**
         * Constant associated with the key code value for the button for engaging the "Master Shell" (e.g.
         * @type uint
         */
        MASTER_SHELL: 0x0100001E,

        /**
         * Constant associated with the key code value for the button for engaging the menu.
         * @type uint
         */
        MENU: 0x01000012,

        /**
         * Constant associated with the key code value for the - key (189).
         * @type uint
         */
        MINUS: 189,

        /**
         * Constant associated with the key code value for the N key (78).
         * @type uint
         */
        N: 78,

        /**
         * Constant associated with the key code value for the button for skipping to next track or chapter.
         * @type uint
         */
        NEXT: 0x0100000E,

        /**
         * Constant associated with the key code value for the 0 key (48).
         * @type uint
         */
        NUMBER_0: 48,

        /**
         * Constant associated with the key code value for the 1 key (49).
         * @type uint
         */
        NUMBER_1: 49,

        /**
         * Constant associated with the key code value for the 2 key (50).
         * @type uint
         */
        NUMBER_2: 50,

        /**
         * Constant associated with the key code value for the 3 key (51).
         * @type uint
         */
        NUMBER_3: 51,

        /**
         * Constant associated with the key code value for the 4 key (52).
         * @type uint
         */
        NUMBER_4: 52,

        /**
         * Constant associated with the key code value for the 5 key (53).
         * @type uint
         */
        NUMBER_5: 53,

        /**
         * Constant associated with the key code value for the 6 key (54).
         * @type uint
         */
        NUMBER_6: 54,

        /**
         * Constant associated with the key code value for the 7 key (55).
         * @type uint
         */
        NUMBER_7: 55,

        /**
         * Constant associated with the key code value for the 8 key (56).
         * @type uint
         */
        NUMBER_8: 56,

        /**
         * Constant associated with the key code value for the 9 key (57).
         * @type uint
         */
        NUMBER_9: 57,

        /**
         * Constant associated with the pseudo-key code for the the number pad (21).
         * @type uint
         */
        NUMPAD: 21,


        /**
         * Constant associated with the key code value for the number 0 key on the number pad (96).
         * @type uint
         */
        NUMPAD_0: 96,

        /**
         * Constant associated with the key code value for the number 1 key on the number pad (97).
         * @type uint
         */
        NUMPAD_1: 97,

        /**
         * Constant associated with the key code value for the number 2 key on the number pad (98).
         * @type uint
         */
        NUMPAD_2: 98,

        /**
         * Constant associated with the key code value for the number 3 key on the number pad (99).
         * @type uint
         */
        NUMPAD_3: 99,

        /**
         *
         * @type uint
         */
        NUMPAD_4: 100,

        /**
         * Constant associated with the key code value for the number 5 key on the number pad (101).
         * @type uint
         */
        NUMPAD_5: 101,

        /**
         * Constant associated with the key code value for the number 6 key on the number pad (102).
         * @type uint
         */
        NUMPAD_6: 102,

        /**
         * Constant associated with the key code value for the number 7 key on the number pad (103).
         * @type uint
         */
        NUMPAD_7: 103,

        /**
         * Constant associated with the key code value for the number 8 key on the number pad (104).
         * @type uint
         */
        NUMPAD_8: 104,

        /**
         * Constant associated with the key code value for the number 9 key on the number pad (105).
         * @type uint
         */
        NUMPAD_9: 105,

        /**
         * Constant associated with the key code value for the addition key on the number pad (107).
         * @type uint
         */
        NUMPAD_ADD: 107,

        /**
         * Constant associated with the key code value for the decimal key on the number pad (110).
         * @type uint
         */
        NUMPAD_DECIMAL: 110,

        /**
         * Constant associated with the key code value for the division key on the number pad (111).
         * @type uint
         */
        NUMPAD_DIVIDE: 111,

        /**
         * Constant associated with the key code value for the Enter key on the number pad (108).
         * @type uint
         */
        NUMPAD_ENTER: 108,

        /**
         * Constant associated with the key code value for the multiplication key on the number pad (106).
         * @type uint
         */
        NUMPAD_MULTIPLY: 106,

        /**
         * Constant associated with the key code value for the subtraction key on the number pad (109).
         * @type uint
         */
        NUMPAD_SUBTRACT: 109,

        /**
         * Constant associated with the key code value for the O key (79).
         * @type uint
         */
        O: 79,

        /**
         * Constant associated with the key code value for the P key (80).
         * @type uint
         */
        P: 80,

        /**
         * Constant associated with the key code value for the Page Down key (34).
         * @type uint
         */
        PAGE_DOWN: 34,

        /**
         * Constant associated with the key code value for the Page Up key (33).
         * @type uint
         */
        PAGE_UP: 33,

        /**
         * Constant associated with the key code value for the button for pausing transport mode.
         * @type uint
         */
        PAUSE: 0x01000008,

        /**
         * Constant associated with the key code value for the .
         * @type uint
         */
        PERIOD: 190,

        /**
         * Constant associated with the key code value for the button for engaging play transport mode.
         * @type uint
         */
        PLAY: 0x01000007,

        /**
         * Constant associated with the key code value for the button for skipping to previous track or chapter.
         * @type uint
         */
        PREVIOUS: 0x0100000F,

        /**
         * Constant associated with the key code value for the Q key (81).
         * @type uint
         */
        Q: 81,

        /**
         * Constant associated with the key code value for the ' key (222).
         * @type uint
         */
        QUOTE: 222,

        /**
         * Constant associated with the key code value for the R key (82).
         * @type uint
         */
        R: 82,

        /**
         * Constant associated with the key code value for the button for recording or engaging record transport mode.
         * @type uint
         */
        RECORD: 0x01000006,

        /**
         * Red function key button.
         * @type uint
         */
        RED: 0x01000000,

        /**
         * Constant associated with the key code value for the button for engaging rewind transport mode.
         * @type uint
         */
        REWIND: 0x0100000B,

        /**
         * Constant associated with the key code value for the Right Arrow key (39).
         * @type uint
         */
        RIGHT: 39,

        /**
         * Constant associated with the key code value for the ] key (221).
         * @type uint
         */
        RIGHTBRACKET: 221,

        /**
         * Constant associated with the key code value for the S key (83).
         * @type uint
         */
        S: 83,

        /**
         * Constant associated with the key code value for the button for the search button.
         * @type uint
         */
        SEARCH: 0x0100001F,

        /**
         * Constant associated with the key code value for the ; key (186).
         * @type uint
         */
        SEMICOLON: 186,

        /**
         * Constant associated with the key code value for the button for engaging the setup application or menu.
         * @type uint
         */
        SETUP: 0x0100001C,

        /**
         * Constant associated with the key code value for the Shift key (16).
         * @type uint
         */
        SHIFT: 16,

        /**
         * Constant associated with the key code value for the button for engaging quick skip backward (usually 7-10 seconds).
         * @type uint
         */
        SKIP_BACKWARD: 0x0100000D,

        /**
         * Constant associated with the key code value for the button for engaging quick skip ahead (usually 30 seconds).
         * @type uint
         */
        SKIP_FORWARD: 0x0100000C,

        /**
         * Constant associated with the key code value for the / key (191).
         * @type uint
         */
        SLASH: 191,

        /**
         * Constant associated with the key code value for the Spacebar (32).
         * @type uint
         */
        SPACE: 32,

        /**
         * Constant associated with the key code value for the button for stopping transport mode.
         * @type uint
         */
        STOP: 0x01000009,

        /**
         * The OS X Unicode Begin constant
         * @type string
         */
        STRING_BEGIN: "",

        /**
         * The OS X Unicode Break constant
         * @type string
         */
        STRING_BREAK: "",

        /**
         * The OS X Unicode Clear Display constant
         * @type string
         */
        STRING_CLEARDISPLAY: "",

        /**
         * The OS X Unicode Clear Line constant
         * @type string
         */
        STRING_CLEARLINE: "",

        /**
         * The OS X Unicode Delete constant
         * @type string
         */
        STRING_DELETE: "",

        /**
         * The OS X Unicode Delete Character constant
         * @type string
         */
        STRING_DELETECHAR: "",

        /**
         * The OS X Unicode Delete Line constant
         * @type string
         */
        STRING_DELETELINE: "",

        /**
         * The OS X Unicode down arrow constant
         * @type string
         */
        STRING_DOWNARROW: "",

        /**
         * The OS X Unicode End constant
         * @type string
         */
        STRING_END: "",

        /**
         * The OS X Unicode Execute constant
         * @type string
         */
        STRING_EXECUTE: "",

        /**
         * The OS X Unicode F1 constant
         * @type string
         */
        STRING_F1: "",

        /**
         * The OS X Unicode F10 constant
         * @type string
         */
        STRING_F10: "",

        /**
         * The OS X Unicode F11 constant
         * @type string
         */
        STRING_F11: "",

        /**
         * The OS X Unicode F12 constant
         * @type string
         */
        STRING_F12: "",

        /**
         * The OS X Unicode F13 constant
         * @type string
         */
        STRING_F13: "",

        /**
         * The OS X Unicode F14 constant
         * @type string
         */
        STRING_F14: "",

        /**
         * The OS X Unicode F15 constant
         * @type string
         */
        STRING_F15: "",

        /**
         * The OS X Unicode F16 constant
         * @type string
         */
        STRING_F16: "",

        /**
         * The OS X Unicode F17 constant
         * @type string
         */
        STRING_F17: "",

        /**
         * The OS X Unicode F18 constant
         * @type string
         */
        STRING_F18: "",

        /**
         * The OS X Unicode F19 constant
         * @type string
         */
        STRING_F19: String = "",

        /**
         * The OS X Unicode F2 constant
         * @type string
         */
        STRING_F2: "",

        /**
         * The OS X Unicode F20 constant
         * @type string
         */
        STRING_F20: "",

        /**
         * The OS X Unicode F21 constant
         * @type string
         */
        STRING_F21: "",

        /**
         * The OS X Unicode F22 constant
         * @type string
         */
        STRING_F22: "",

        /**
         * The OS X Unicode F23 constant
         * @type string
         */
        STRING_F23: "",

        /**
         * The OS X Unicode F24 constant
         * @type string
         */
        STRING_F24: "",

        /**
         * The OS X Unicode F25 constant
         * @type string
         */
        STRING_F25: "",

        /**
         * The OS X Unicode F26 constant
         * @type string
         */
        STRING_F26: "",

        /**
         * The OS X Unicode F27 constant
         * @type string
         */
        STRING_F27: "",

        /**
         * The OS X Unicode F28 constant
         * @type string
         */
        STRING_F28: "",

        /**
         * The OS X Unicode F29 constant
         * @type string
         */
        STRING_F29: "",

        /**
         * The OS X Unicode F3 constant
         * @type string
         */
        STRING_F3: "",

        /**
         * The OS X Unicode F30 constant
         * @type string
         */
        STRING_F30: "",

        /**
         * The OS X Unicode F31 constant
         * @type string
         */
        STRING_F31: "",

        /**
         * The OS X Unicode F32 constant
         * @type string
         */
        STRING_F32: "",

        /**
         * The OS X Unicode F33 constant
         * @type string
         */
        STRING_F33: ""
    };

    /**
     * Attach library to window.
     */
    if (typeof define === "function" && define.amd) {
        define(Keyboard);
    } else {
        window.Keyboard = Keyboard;
    }

})();