document
	.getElementById("donate-noakhali")
	.addEventListener("click", function () {
		updateBalance("balance-noakhali", "name-noakhali", "input-noakhali");
	});

document.getElementById("donate-feni").addEventListener("click", function () {
	updateBalance("balance-feni", "name-feni", "input-feni");
});

document.getElementById("donate-quota").addEventListener("click", function () {
	updateBalance("balance-quota", "name-quota", "input-quota");
});
