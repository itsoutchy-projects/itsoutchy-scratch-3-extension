var itsoutchyExtension = function () {
};

/**
 * @return {object} This extension's metadata.
 */
itsoutchyExtension.prototype.getInfo = function () {
    return {
        // Required: the machine-readable name of this extension.
        // Will be used as the extension's namespace. Must not contain a '.' character.
        id: 'itsoutchy',

        // Optional: the human-readable name of this extension as string.
        // This and any other string to be displayed in the Scratch UI may either be
        // a string or a call to `intlDefineMessage`; a plain string will not be
        // translated whereas a call to `intlDefineMessage` will connect the string
        // to the translation map (see below). The `intlDefineMessage` call is
        // similar to `defineMessages` from `react-intl` in form, but will actually
        // call some extension support code to do its magic. For example, we will
        // internally namespace the messages such that two extensions could have
        // messages with the same ID without colliding.
        // See also: https://github.com/yahoo/react-intl/wiki/API#definemessages
        name: 'itsoutchy',

        blockIconURI: 'data:image/png;base64,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',

        // Optional: URI for an icon for this extension. Data URI OK.
        // If not present, use a generic icon.
        // TODO: what file types are OK? All web images? Just PNG?
        iconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DE' +
            'UIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

        // Optional: Link to documentation content for this extension.
        // If not present, offer no link.
        docsURI: 'https://....',

        // Required: the list of blocks implemented by this extension,
        // in the order intended for display.
        blocks: [
            {
                opcode: 'example-noop',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: false,
                text: 'do nothing',
                func: 'noop'
            },
            {
                opcode: 'itsoutchy-alert',
                blockType: Scratch.BlockType.COMMAND,
                blockAllThreads: true,
                text: 'alert [MESSAGE]',
                arguments: {
                    MESSAGE: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "yay!"
                    }
                },
                func: 'alert'
            },
            {
                opcode: 'example-conditional',
                blockType: Scratch.BlockType.CONDITIONAL,
                branchCount: 4,
                isTerminal: true,
                blockAllThreads: false,
                text: 'choose [BRANCH]',
                arguments: {
                    BRANCH: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1
                    }
                },
                func: 'choose'
            },
            {
                opcode: 'loopif',
                blockType: Scratch.BlockType.CONDITIONAL,
                branchCount: 1,
                isTerminal: true,
                blockAllThreads: true,
                text: 'forever if [BOOLEAN]',
                arguments: {
                    BOOLEAN: {
                        type: Scratch.ArgumentType.BOOLEAN
                    }
                },
                func: 'foreverif'
            },
            {
                opcode: 'isVarTrue',
                blockType: Scratch.BlockType.BOOLEAN,
                text: '[VAR]',
                arguments: {
                    VAR: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: "true"
                    }
                },
                func: 'varTrue'
            },
            {
                opcode: 'greaterOrEqual',
                blockType: Scratch.BlockType.BOOLEAN,
                text: '[VAR1] >= [VAR2]',
                arguments: {
                    VAR1: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "1"
                    },
                    VAR2: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: "1"
                    }
                },
                func: 'greaterOrEqual'
            },
            {
                opcode: 'whenBOOLtrue',
                blockType: Scratch.BlockType.HAT,
                text: 'when [BOOLEAN]',
                arguments: {
                    BOOLEAN: {
                        type: Scratch.ArgumentType.BOOLEAN
                    }
                },
                func: 'whenbooltrue'
            },
            {
                // Required: the machine-readable name of this operation.
                // This will appear in project JSON. Must not contain a '.' character.
                opcode: 'myReporter', // becomes 'someBlocks.myReporter'

                // Required: the kind of block we're defining, from a predefined list:
                // 'command' - a normal command block, like "move {} steps"
                // 'reporter' - returns a value, like "direction"
                // 'Boolean' - same as 'reporter' but returns a Boolean value
                // 'hat' - starts a stack if its value is truthy
                // 'conditional' - control flow, like "if {}" or "repeat {}"
                // A 'conditional' block may return the one-based index of a branch
                // to run, or it may return zero/falsy to run no branch. Each time a
                // child branch finishes, the block is called again. This is only a
                // slight change to the current model for control flow blocks, and is
                // also compatible with returning true/false for an "if" or "repeat"
                // block.
                // TODO: Consider Blockly-like nextStatement, previousStatement, and
                // output attributes as an alternative. Those are more flexible, but
                // allow bad combinations.
                blockType: Scratch.BlockType.REPORTER,

                // Required for conditional blocks, ignored for others: the number of
                // child branches this block controls. An "if" or "repeat" block would
                // specify a branch count of 1; an "if-else" block would specify a
                // branch count of 2.
                // TODO: should we support dynamic branch count for "switch"-likes?
                branchCount: 0,

                // Optional, default false: whether or not this block ends a stack.
                // The "forever" and "stop all" blocks would specify true here.
                isTerminal: true,

                // Optional, default false: whether or not to block all threads while
                // this block is busy. This is for things like the "touching color"
                // block in compatibility mode, and is only needed if the VM runs in a
                // worker. We might even consider omitting it from extension docs...
                blockAllThreads: false,

                // Required: the human-readable text on this block, including argument
                // placeholders. Argument placeholders should be in [MACRO_CASE] and
                // must be [ENCLOSED_WITHIN_SQUARE_BRACKETS].
                text: 'letter [LETTER_NUM] of [TEXT]',

                // Required: describe each argument.
                // Note that this is an array: the order of arguments will be used
                arguments: {
                    // Required: the ID of the argument, which will be the name in the
                    // args object passed to the implementation function.
                    LETTER_NUM: {
                        // Required: type of the argument / shape of the block input
                        type: Scratch.ArgumentType.NUMBER,

                        // Optional: the default value of the argument
                        defaultValue: 1
                    },

                    // Required: the ID of the argument, which will be the name in the
                    // args object passed to the implementation function.
                    TEXT: {
                        // Required: type of the argument / shape of the block input
                        type: Scratch.ArgumentType.STRING,

                        // Optional: the default value of the argument
                        defaultValue: 'text'
                    }
                },

                // Optional: a string naming the function implementing this block.
                // If this is omitted, use the opcode string.
                func: 'myReporter',

                // Optional: list of target types for which this block should appear.
                // If absent, assume it applies to all builtin targets -- that is:
                // ['sprite', 'stage']
                filter: ['someBlocks.wedo2', 'sprite', 'stage']
            },
            {
                opcode: 'example-Boolean',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'return true',
                func: 'returnTrue'
            },
            {
                opcode: 'example-hat',
                blockType: Scratch.BlockType.HAT,
                text: 'start',
                func: 'returnTrue'
            },
            {
                // Another block...
            }
        ],

        // Optional: define extension-specific menus here.
        menus: {
            // Required: an identifier for this menu, unique within this extension.
            menuA: [
                // Static menu: list items which should appear in the menu.
                {
                    // Required: the value of the menu item when it is chosen.
                    value: 'itemId1',

                    // Optional: the human-readable label for this item.
                    // Use `value` as the text if this is absent.
                    text: 'Item One'
                },

                // The simplest form of a list item is a string which will be used as
                // both value and text.
                'itemId2'
            ],

            // Dynamic menu: a string naming a function which returns an array as above.
            // Called each time the menu is opened.
            menuB: 'getItemsForMenuB'
        },

        // Optional: translations
        translation_map: {
            de: {
                'extensionName': 'Einige Blöcke',
                'myReporter': 'Buchstabe [LETTER_NUM] von [TEXT]',
                'myReporter.TEXT_default': 'Text',
                'menuA_item1': 'Artikel eins',

                // Dynamic menus can be translated too
                'menuB_example': 'Beispiel',

                // This message contains ICU placeholders (see `myReporter()` below)
                'myReporter.result': 'Buchstabe {LETTER_NUM} von {TEXT} ist {LETTER}.'
            },
            it: {
                // ...
            }
        },

        // Optional: list new target type(s) provided by this extension.
        targetTypes: [
            'wedo2', // automatically transformed to 'someBlocks.wedo2'
            'speech' // automatically transformed to 'someBlocks.speech'
        ]
    };
};

/**
 * Implement myReporter.
 * @param {object} args - the block's arguments.
 * @property {number} LETTER_NUM - the string value of the argument.
 * @property {string} TEXT - the string value of the argument.
 * @returns {string} a string which includes the block argument value.
 */
itsoutchyExtension.prototype.myReporter = function (args) {
    // Note: this implementation is not Unicode-clean; it's just here as an example.
    const result = args.TEXT.charAt(args.LETTER_NUM);

    return ['Letter ', args.LETTER_NUM, ' of ', args.TEXT, ' is ', result, '.'].join('');
};

itsoutchyExtension.prototype.varTrue = function (args) {
    return args.VAR == "true";
};

itsoutchyExtension.prototype.greaterOrEqual = function (args) {
    return args.VAR1 >= args.VAR2;
};

itsoutchyExtension.prototype.noop = function () {
};

itsoutchyExtension.prototype.whenbooltrue = function (args) {
    return args.BOOLEAN;
};

itsoutchyExtension.prototype.foreverif = function(args) {
    while (true) {
        if (args.BOOLEAN == true) {
            return 1;
        } else {
            return false;
        }
    }
}

itsoutchyExtension.prototype.alert = function (args) {
    //alert(args.MESSAGE);
    console.log("Sorry, but alerts are unsupported as of now!");
};

itsoutchyExtension.prototype.returnTrue = function () {
    return true;
};

itsoutchyExtension.prototype.choose = function (args) {
    return args.BRANCH;
};

Scratch.extensions.register(new itsoutchyExtension());
