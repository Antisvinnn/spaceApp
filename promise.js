// // console.log('Hello World!!!');

// // setTimeout(() => {
// // 	console.log('Hello World after 3 seconds');
// // }, 3000);

// // let p = new Promise((resolve, reject) => {
// // 	setTimeout(() => {
// // 		console.log('Inside promise after 2 seconds');
// // 		resolve(true);
// // 	}, 2000);
// // });

// // p.then((boolVariable) => {
// // 	return new Promise((resolve, reject) => {
// // 		console.log(
// // 			`Promise resolved and result is ${typeof boolVariable} and this var is ${boolVariable}`
// // 		);
// // 		setTimeout(() => {
// // 			console.log('Inside returnded promise after 3');
// // 			resolve(true);
// // 		}, 3000);
// // 	});
// // })
// // 	.then((boolVariable) => {
// // 		return new Promise((resolve, reject) => {
// // 			setTimeout(() => {
// // 				console.log('Promise resolved after 1000 ' + boolVariable);
// // 				reject('Promise rejected');
// // 			}, 1000);
// // 		});
// // 	})
// // 	.catch((rejectVariable) => {
// // 		return new Promise((resolve, reject) => {
// // 			console.log('New promise in catch func');
// // 			console.error('Promise was crashed: ' + rejectVariable);
// // 			resolve('Program ended succesfully');
// // 		});
// // 	})
// // 	.finally((result) => {
// // 		setTimeout(() => {
// // 			console.log('Program ended');
// // 		}, 1000);
// // 	});

// let sleep = (ms) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve(), ms);
// 	});
// };

// // sleep(2000).then(() => {
// // 	console.log('After 2 sec');
// // });

// // sleep(5000).then(() => {
// // 	console.log('After 5 sec');
// // });

// Promise.all([sleep(2000), sleep(6000)]).then(() => {
// 	console.log('All promises resolved');
// });

// Promise.race([sleep(2000), sleep(5000)]).then(() => {
// 	console.log('Race promises');
// });

// let sleep = (seconds) => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(seconds);
// 		}, seconds);
// 	});
// };

// let func = async () => {
// 	let number = await sleep(5000);
// 	console.log(`Cпустя ${number} миллисекунд я вывел число ${number / 1000}`);
// };

// func().then(() => {
// 	console.log('Function done');
// });

let delay = () => {
	setTimeout(() => {
		console.log('Delay 2 sec');
	}, 2000);
};

let promiseEngine = async () => {
	let promiseDelay = new Promise((r) => {
		setTimeout(() => {
			r('Promise resolved in resolve func');
		}, 6000);
	}).catch(() => {
		console.log('Promise rejected');
	});
	let result = await promiseDelay;
	console.log(result);
};

delay();

promiseEngine();
