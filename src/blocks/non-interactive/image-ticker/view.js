/**
 * WordPress dependencies
 */
import { getElement, store, getContext } from '@wordpress/interactivity';

store( 'image-ticker', {
	callbacks: {
		imageTickerInit: () => {
			
			const context = getContext();
			const { ref } = getElement();

			// Set scroll width of list
			context.scrollListWidth = ref.scrollWidth;

			// add to parent container to hide overflow
			const parent = ref.parentElement;

			// set the scroll width as a css variable
			parent.style = '--'+context.id+'-scroll-width: -'+context.scrollListWidth+'px';
		},
	},
} );
