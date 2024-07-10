import arrows from './components/arrows';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	InnerBlocks
} from '@wordpress/block-editor';
import {
	Fragment,
	useEffect
} from '@wordpress/element';
import {
	Dashicon,
	ToolbarGroup,
	TextControl,
	TextareaControl,
	PanelBody,
	ToolbarButton,
	SelectControl,
	RangeControl,
	ToggleControl
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const { 
		slickOptions,
		arrowStyle,
		arrowPosition,
		arrowPositionX,
		arrowPositionY,
		arrowStack,
		arrowSize,
		arrowWrap,
		theme,
		dotsSize,
		editOffset
	} = attributes;

	const updateOptions = (id, value) => {
		const options = { ...slickOptions, [id]: value };
		if (value === '' || value === false) {
			delete options[id];
		}
		setAttributes({ slickOptions: options });
	};

	const updateResponsiveBreakpoint = (value) => {
		const options = { ...slickOptions };
		options.responsive[0].breakpoint = value || 0;
		setAttributes({ slickOptions: options });
	};

	const updateResponsiveSettings = (id, value) => {
		const options = { ...slickOptions };
		options.responsive[0].settings[id] = value;
		if (value === '' || value === false) {
			delete options.responsive[0].settings[id];
		}
		setAttributes({ slickOptions: options });
	};

	const updateArrows = (style) => {
		const options = { ...slickOptions };
		switch (style) {
			case 'arrows-default':
				options.prevArrow = arrows.defaultPrev;
				options.nextArrow = arrows.defaultNext;
				break;
			case 'arrows-slim':
				options.prevArrow = arrows.slimPrev;
				options.nextArrow = arrows.slimNext;
				break;
			case 'arrows-minimal':
				options.prevArrow = arrows.minimalPrev;
				options.nextArrow = arrows.minimalNext;
				break;
			case 'arrows-custom':
				delete options.prevArrow;
				delete options.nextArrow;
				break;
			default:
				options.prevArrow = arrows.defaultPrev;
				options.nextArrow = arrows.defaultNext;
		}
		setAttributes({ slickOptions: options, arrowStyle: style });
	};

	const TEMPLATE = [
		['create-block/slick-item', {}, [['core/paragraph', { placeholder: 'Add slide 1 content here...' }]]],
		['create-block/slick-item', {}, [['core/paragraph', { placeholder: 'Add slide 2 content here...' }]]],
		['create-block/slick-item', {}, [['core/paragraph', { placeholder: 'Add slide 3 content here...' }]]],
		['create-block/slick-item', {}, [['core/paragraph', { placeholder: 'Add slide 4 content here...' }]]]
	];

	const { blockCount } = useSelect((select) => ({
		blockCount: select('core/block-editor').getBlockCount(attributes.clientId)
	}));

	const handleNextSlide = () => {
		const totalSlides = Math.floor(blockCount / slickOptions.slidesToShow);
		setAttributes({ editOffset: editOffset >= totalSlides ? 1 : editOffset + 1 });
	};

	const handlePrevSlide = () => {
		const totalSlides = Math.floor(blockCount / slickOptions.slidesToShow);
		setAttributes({ editOffset: editOffset === 1 ? totalSlides : editOffset - 1 });
	};

	useEffect(() => {
		const options = { ...slickOptions, responsive: slickOptions.responsive || [{ breakpoint: 1, settings: { slidesToShow: 1 } }] };
		setAttributes({ slickOptions: options });
	}, []);

	// add classes to blockProps 
	blockProps.className += ' ' + theme;
	blockProps.className += ' ' + 'slides-visible-' + slickOptions.slidesToShow;
	blockProps.className += ' edit-offset-' + editOffset;
	console.log(slickOptions.slidesToShow);


	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton label="Navigate Previous Slide" onClick={handlePrevSlide}>
						<Dashicon icon="arrow-left-alt" />
					</ToolbarButton>
					<ToolbarButton label="Navigate Next Slide" onClick={handleNextSlide}>
						<Dashicon icon="arrow-right-alt" />
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			
			<InspectorControls>
				<PanelBody title={__('Slider Display Settings', 'slick-slider')}>
					<SelectControl
						label={__('Color Scheme', 'slick-slider')}
						value={theme}
						options={[
							{ label: 'Light', value: 'theme-light' },
							{ label: 'Dark', value: 'theme-dark' }
						]}
						onChange={(value) => setAttributes({ theme: value })}
					/>
					<RangeControl
						label={__('Slides in view', 'slick-slider')}
						value={slickOptions.slidesToShow}
						min={1}
						max={12}
						onChange={(value) => updateOptions('slidesToShow', value)}
					/>
					<ToggleControl
						label={__('Dot Navigation', 'slick-slider')}
						checked={slickOptions.dots}
						onChange={(value) => updateOptions('dots', value)}
					/>
					<ToggleControl
						label={__('Arrow Navigation', 'slick-slider')}
						checked={slickOptions.arrows}
						onChange={(value) => updateOptions('arrows', value)}
					/>
					<ToggleControl
						label={__('Center Mode', 'slick-slider')}
						checked={slickOptions.centerMode}
						onChange={(value) => updateOptions('centerMode', value)}
					/>
					<ToggleControl
						label={__('Loop Slides', 'slick-slider')}
						checked={slickOptions.infinite}
						onChange={(value) => updateOptions('infinite', value)}
					/>
				</PanelBody>
				{slickOptions.arrows && (
					<PanelBody title={__('Slider Arrow Settings', 'slick-slider')}>
						<SelectControl
							label={__('Arrow Style', 'slick-slider')}
							value={arrowStyle}
							options={[
								{ label: 'Default', value: 'arrows-default' },
								{ label: 'Slim', value: 'arrows-slim' },
								{ label: 'Minimal', value: 'arrows-minimal' },
								{ label: 'Custom', value: 'arrows-custom' }
							]}
							onChange={updateArrows}
						/>
						<SelectControl
							label={__('Arrow Size', 'slick-slider')}
							value={arrowSize}
							options={[
								{ label: 'Small', value: 'arrows-small' },
								{ label: 'Medium', value: 'arrows-medium' },
								{ label: 'Large', value: 'arrows-large' }
							]}
							onChange={(value) => setAttributes({ arrowSize: value })}
						/>
						<SelectControl
							label={__('Arrow Wrap', 'slick-slider')}
							value={arrowWrap}
							options={[
								{ label: 'Default', value: '' },
								{ label: 'Arrow Wrap 1', value: 'arrow-wrap-1' },
								{ label: 'Arrow Wrap 2', value: 'arrow-wrap-2' }
							]}
							onChange={(value) => setAttributes({ arrowWrap: value })}
						/>
						<SelectControl
							label={__('Arrow Stack', 'slick-slider')}
							value={arrowStack}
							options={[
								{ label: 'Horizontal', value: 'arrows-stack-horizontal' },
								{ label: 'Vertical', value: 'arrows-stack-vertical' }
							]}
							onChange={(value) => setAttributes({ arrowStack: value })}
						/>
					</PanelBody>
				)}
				{slickOptions.dots && (
					<PanelBody title={__('Slider Dots Settings', 'slick-slider')}>
						<SelectControl
							label={__('Dot Size', 'slick-slider')}
							value={dotsSize}
							options={[
								{ label: 'Small', value: 'dots-small' },
								{ label: 'Medium', value: 'dots-medium' },
								{ label: 'Large', value: 'dots-large' }
							]}
							onChange={(value) => setAttributes({ dotsSize: value })}
						/>
					</PanelBody>
				)}
				<PanelBody title={__('Responsive Settings', 'slick-slider')}>
					<RangeControl
						label={__('Breakpoint', 'slick-slider')}
						value={slickOptions.responsive[0].breakpoint}
						min={1}
						max={12}
						onChange={updateResponsiveBreakpoint}
					/>
					<RangeControl
						label={__('Slides in view (responsive)', 'slick-slider')}
						value={slickOptions.responsive[0].settings.slidesToShow}
						min={1}
						max={12}
						onChange={(value) => updateResponsiveSettings('slidesToShow', value)}
					/>
					<TextControl
						label={__('Slides to scroll (responsive)', 'slick-slider')}
						value={slickOptions.responsive[0].settings.slidesToScroll}
						onChange={(value) => updateResponsiveSettings('slidesToScroll', value)}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks
					template={TEMPLATE}
					allowedBlocks={['create-block/slick-item']}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</div>
		</Fragment>
	);
}
