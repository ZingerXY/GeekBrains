document.querySelectorAll('.adminReview').forEach(formReview => {
	reviewId = formReview.dataset['id'];
	changePublic = formReview.querySelector('select');
	changePublic.addEventListener('change', changeReviewPublic);
	deleteButton = formReview.querySelector('input[type="button"]');
	deleteButton.addEventListener('click', deleteReview);
});

document.querySelectorAll('.changeStatus').forEach(select => {
	select.addEventListener('change', changeOrderStatus);
})

document.querySelectorAll('.deleteOrder').forEach(select => {
	select.addEventListener('click', deleteOrder);
})

document.querySelectorAll('.deleteItem').forEach(select => {
	select.addEventListener('click', isAdmin ? deleteItem : deleteUserItem);
})

function updateTotalPrice(orderElem) {
	totalPrice = Array.from(orderElem.querySelectorAll('.summPrice')).reduce((s, e) => s + +e.innerText, 0);
	orderElem.querySelector('.totalPrice').innerText = totalPrice;
}

function deleteItem(e) {
	actionExecute('deleteitem', {
		id: e.target.dataset['id'],
	}, result => {
		if (result.result == 'ok') {
			orderInfo = e.target.closest('.orderInfo');
			e.target.closest('.itemInfo').remove();
			updateTotalPrice(orderInfo);
		} else {
			console.log(result);
		}
	});
}

function deleteUserItem(e) {
	actionExecute('deleteuseritem', {
		id: e.target.dataset['id'],
	}, result => {
		if (result.result == 'ok') {
			orderInfo = e.target.closest('.orderInfo');
			e.target.closest('.itemInfo').remove();
			updateTotalPrice(orderInfo);
		} else {
			console.log(result);
		}
	});
}

function deleteOrder(e) {
	actionExecute('deleteorder', {
		id: e.target.dataset['id'],
	}, result => {
		if (result.result == 'ok') {
			e.target.closest('.orderInfo').remove();
		} else {
			console.log(result);
		}
	});
}

function changeOrderStatus(e) {
	actionExecute('changeorderstatus', {
		id: e.target.dataset['id'],
		val: e.target.value
	}, result => {
		if (result.result != 'ok') {
			console.log(result);
		}
	});
}

function changeReviewPublic(e) {
	actionExecute('changereviewpublic', {
			id: e.target.parentNode.dataset['id'],
			val: e.target.value
		}, result => {
		if (result.result != 'ok') {
			console.log(result);
		}
	});
}

function deleteReview(e) {
	actionExecute('deletereview', {
		id: e.target.parentNode.dataset['id']
	}, result => {
		if (result.result == 'ok') {
			e.target.closest('.review').remove();
		} else {
			console.log(result);
		}
	});
}

function actionExecute(action, arg, callback) {
	fetch('index.php?action=' + action, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(arg)
		})
		.then(response => response.json())
		.then(result => {
			callback(result);
		});
}