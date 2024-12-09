function getTotalHours(u_fullname,u_callback) {
	fetch(`getData.php?name=${u_fullname}&num=` + Math.random())
		.then(response => response.text())
		.then((txt) => {
			let data = JSON.parse(txt);
			let tHours = 0;
			data.forEach((val) => {
				if (val.hours != 0 && val.hours != "0") {
					tHours += val.hours;
				}
			})
			u_callback(tHours);
		})
}
