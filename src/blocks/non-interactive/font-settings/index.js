import { assign } from 'lodash';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls, BlockListBlock } = wp.blockEditor;
const { PanelBody, SelectControl } = wp.components;
const { addFilter } = wp.hooks;
const { __ } = wp.i18n;

// Enable attribute control on the following blocks
const enableControlOnBlocks = [
    'core/paragraph',
    'core/heading',
    'core/button',
    'core/categories',
    'core/code',
    'core/list',
    'core/pullquote',
    'core/quote',
    'core/subhead',
    'core/table',
];

/**
 * Add scroll controls attribute to block.
 *
 * @param {object} settings Current block settings.
 * @param {string} name Name of block.
 *
 * @returns {object} Modified block settings.
 */
const addControlAttribute = (settings, name) => {
    // Do nothing if it's another block than our defined ones.
    if (!enableControlOnBlocks.includes(name)) {
        return settings;
    }

    // Use Lodash's assign to gracefully handle if attributes are undefined
    settings.attributes = assign(settings.attributes, {
        fontSize: {
            type: 'string',
        }, 
    });

    return settings;
};

addFilter('blocks.registerBlockType', 'wwx/attribute/font-settings', addControlAttribute);

/**
 * Create HOC to add hover and scroll control to inspector controls of block.
 */
const withFontSettings = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        // Do nothing if it's another block than our defined ones.
        if (!enableControlOnBlocks.includes(props.name)) {
            return (
                <BlockEdit {...props} />
            );
        }

        const { fontSize } = props.attributes;

        return (
            <Fragment>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody
                        title={__('Font Settings')}
                        initialOpen={false}
                    >
                        <SelectControl
                            label="Font Size"
                            value={fontSize}
                            options={[
                                { label: 'default', value: '' }, 
                                { label: 'Jumbo', value: 'has-jumbo-font-size' },
                                { label: 'H1', value: 'has-h1-font-size' },
                                { label: 'H2', value: 'has-h2-font-size' },
                                { label: 'H3', value: 'has-h3-font-size' },
                                { label: 'H4', value: 'has-h4-font-size' },
                                { label: 'Body Normal', value: 'has-body-font-size' },
                                { label: 'Body Medium', value: 'has-body-m-font-size' },
                                { label: 'Body Large', value: 'has-body-l-font-size' },
                                { label: 'Body XLarge', value: 'has-body-xl-font-size' },
                            ]}
                            onChange={(v) => {
                                props.setAttributes({
                                    fontSize: v,
                                });
                            }}
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withFontSettings');

addFilter('editor.BlockEdit', 'wwx/with-animate-control', withFontSettings);

/**
 * Apply extra class in save element.
 */
const addExtraClass = (extraProps, blockType, attributes) => {
    if (enableControlOnBlocks.includes(blockType.name) && attributes.fontSize) {
        extraProps.className = `${extraProps.className} test ${attributes.fontSize}`.trim();
    }

    return extraProps;
};

addFilter('blocks.getSaveContent.extraProps', 'wwx/apply-extra-class', addExtraClass);
