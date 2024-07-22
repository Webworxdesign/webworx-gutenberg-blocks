import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls, InnerBlocks, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';


export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { url } = attributes;


	return (
		<>
			
			<InspectorControls>
				<PanelBody
					title="Link Settings"
					initialOpen={true}
					>
					<TextControl
						label="URL"
						value={url}
						onChange={ ( v ) => {
							setAttributes( {
								url: v
							} );
						} }
						/>
					<ToggleControl 
						label="Open in new tab"
						checked={ attributes.openInNewTab }
						onChange={ ( v ) => {
							setAttributes( {
								openInNewTab: v
							} );
						} }
						/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks />
			</div>
		</>
	);
}
