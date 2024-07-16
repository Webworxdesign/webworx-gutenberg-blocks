/**
 * WordPress dependencies
 */
import { getElement, store, getContext } from '@wordpress/interactivity';

store( 'image-ticker', {
	callbacks: {
		imageTickerInit: () => {
			
			const context = getContext();
			const { ref } = getElement();
			let scrollWidthSum = 0

			// Set scroll width of list
			context.scrollListWidth = ref.scrollWidth;
			Array.from(ref.children).forEach(element => {
				scrollWidthSum += element.scrollWidth
			});
			console.log("ref",scrollWidthSum);

			// add to parent container to hide overflow
			const parent = ref.parentElement;

			// set the scroll width as a css variable
			parent.style = '--'+context.id+'-scroll-width: '+scrollWidthSum+'px';
		},
	},
} );
