function hide_Show_Sec(hidingSecId, showingSecId) {
	const showingSec = document.getElementById(showingSecId);
	const hidingSec = document.getElementById(hidingSecId);

	showingSec.classList.remove("hidden");
	hidingSec.classList.add("hidden");
}

function inputVal(id) {
	return parseFloat(document.getElementById(id).value);
}

function textVal(id) {
	return parseFloat(document.getElementById(id).innerText);
}

function updateBalance(balanceId, nameId, inputId) {
	const balNum = textVal(balanceId);
	const cardName = document.getElementById(nameId).innerText;
	const inputNum = inputVal(inputId);
	const totalBalance = textVal("total-amount");

	if (isNaN(inputNum) || inputNum <= 0) {
		alert("Please enter a positive number.");
		return;
	}

	if (inputNum > totalBalance) {
		alert("Insufficient funds for this transaction.");
		return;
	}

	document.getElementById(balanceId).innerText = balNum + inputNum;
	document.getElementById("total-amount").innerText = totalBalance - inputNum;

	// Update the transaction history
	const transactionHistory = document.getElementById("transaction-history");

	const div = document.createElement("div");
	div.classList.add("border", "rounded-md", "p-6");
	div.innerHTML = `
         <p class="text-xl font-bold">${inputNum} Taka is Donated for ${cardName}</p>
         <p>Date : ${new Date().toString()}</p>
   `;
	transactionHistory.appendChild(div);

	// Clear the input field
	document.getElementById(inputId).value = "";

	my_modal_2.showModal();
}
