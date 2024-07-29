import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const TEMPLATE = [
		['core/image', { className: 'image-ticker__image skip-lazy' }],
		['core/image', { className: 'image-ticker__image skip-lazy' }],
		['core/image', { className: 'image-ticker__image skip-lazy' }],
		['core/image', { className: 'image-ticker__image skip-lazy' }]
	];

	return (
		<Fragment>
			<div {...blockProps}>
				<InnerBlocks
					template={TEMPLATE}
					allowedBlocks={['core/image']}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender className="your-custom-class"/>}
				/>
			</div>
		</Fragment>
	);
}
