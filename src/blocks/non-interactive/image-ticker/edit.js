import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const TEMPLATE = [
		['core/image'],
		['core/image'],
		['core/image'],
		['core/image']
	];

	return (
		<Fragment>

			<div {...blockProps}>
				<InnerBlocks
					template={TEMPLATE}
					allowedBlocks={['core/image']}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</div>
		</Fragment>
	);
}
