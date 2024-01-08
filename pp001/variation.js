const anchorPoint = document.querySelector('.ProductForm__BuyButtons');
const htmlStr = `
	<div class= "estimated-delivery-date">
		<span>Fastest 3-day delivery on <span class= "estimated-date">23 December</span>. Order within <span class= "estimated_time">4 hrs 7 min</span>.
		</span>
	</div>`

anchorPoint.insertAdjacentHTML('afterend', htmlStr)
