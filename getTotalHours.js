function getTotalHours(u_fullname,u_callback) {
	fetch(`getData.php?name=${u_fullname}&num=` + Math.random())
		.then(response => response.text())
		.then((txt) => {
			let data = JSON.parse(txt);
			let tHours = 0;
			data.forEach((val) => {
				tHours += val.hours;
			})
			u_callback(tHours);
		})
}
