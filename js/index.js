const blogElements = document.querySelectorAll(
	"#blog-mobile-device, #blog-large-device"
);

blogElements.forEach((blogEl) => {
	blogEl.addEventListener("click", function () {
		window.location.href = "blog.html";
	});
});

const donationBtn = document.getElementById("show-donation");
const historyBtn = document.getElementById("show-history");

donationBtn.addEventListener("click", function () {
	hide_Show_Sec("transaction-history", "donation-container");

	donationBtn.classList.remove("border-gray-200");
	donationBtn.classList.add(
		"border-donatePrimaryColor",
		"bg-donatePrimaryColor"
	);
	historyBtn.classList.remove(
		"border-donatePrimaryColor",
		"bg-donatePrimaryColor"
	);
	historyBtn.classList.add("border-gray-200");
});

historyBtn.addEventListener("click", function () {
	hide_Show_Sec("donation-container", "transaction-history");

	donationBtn.classList.remove(
		"border-donatePrimaryColor",
		"bg-donatePrimaryColor"
	);
	donationBtn.classList.add("border-gray-200");
	historyBtn.classList.remove("border-gray-200");
	historyBtn.classList.add(
		"border-donatePrimaryColor",
		"bg-donatePrimaryColor"
	);
});

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
