
// Get form, expense list, and total amount elements 
const expenseForm = 
	document.getElementById("expense-form"); 
const expenseList = 
	document.getElementById("expense-list"); 
const totalAmountElement = 
	document.getElementById("total-amount"); 

// Initialize expenses array from localStorage 
let expenses = 
	JSON.parse(localStorage.getItem("expenses")) || []; 


// Function to render expenses in tabular form 
function renderExpenses() {
    expenseList.innerHTML = "";
    let totalAmount = 0;

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        const expenseRow = document.createElement("tr");
        const textColor = expense.type === 'outcome' ? 'red' : 'green'; // Determine text color

        expenseRow.innerHTML = `
            <td class="${expense.type === 'income' ? 'income' : 'outcome'}">${expense.type}</td>
            <td>${expense.category}</td>
            <td>${expense.name}</td> 
            <td>${expense.amount} €</td> 
            <td>${expense.date}</td> 
            <td class="delete-btn" data-id="${i}">Delete</td>
        `;

        expenseList.appendChild(expenseRow);

        if (expense.type === 'income') {
            totalAmount += expense.amount;
        } else {
            totalAmount -= expense.amount;
        }
    }

    const totalAmountElement = document.getElementById("total-amount");
    totalAmountElement.textContent = totalAmount.toFixed(2) + '€';

   const totalAmountFooter = document.getElementById("total-footer");

const footerBackground = totalAmount < 0 ?
    'linear-gradient(to top, #ba202d, rgba(174, 217, 224, 0.5))' :
    'linear-gradient(to top, #aed9e0, rgba(174, 217, 224, 0.5))';

totalAmountFooter.style.background = footerBackground;

const totalAmountText = totalAmount < 0 ?
    `Total Amount: ${totalAmount.toFixed(2)} €` :
    `Total Amount: ${totalAmount.toFixed(2)} €`;

totalAmountFooter.innerHTML = `<p>${totalAmountText}</p>`;


    


    localStorage.setItem("expenses", JSON.stringify(expenses));
}








function addExpense(event) {
    event.preventDefault();

    const expenseTypeInput = document.querySelector('input[name="expense-type"]:checked');
    const expenseCategoryInput = document.querySelector('input[name="expense-category"]:checked');
    const expenseType = expenseTypeInput ? expenseTypeInput.value : '';
    const expenseCategory = expenseCategoryInput ? expenseCategoryInput.value : '';

    const expenseNameInput = document.getElementById("expense-name");
    const expenseAmountInput = document.getElementById("expense-amount");
    const expenseDateInput = document.getElementById("date");

    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);
    const expenseDate = expenseDateInput.value;

    if (expenseName === "" || isNaN(expenseAmount) || expenseType === '' || expenseCategory === '') {
        alert("Please enter valid expense details.");
        
        return;
    }

    expenseNameInput.value = "";
    expenseAmountInput.value = "";
    expenseDateInput.value = "";

    const expense = {
        type: expenseType,
        category: expenseCategory,
        name: expenseName,
        amount: expenseAmount,
        date: expenseDate
    };

    expenses.push(expense);

    renderExpenses();
}




function deleteExpense(event) { 
	if (event.target.classList.contains("delete-btn")) { 

		
		const expenseIndex = 
			parseInt(event.target.getAttribute("data-id")); 

		// Remove expense from expenses array 
		expenses.splice(expenseIndex, 1); 

		
		renderExpenses(); 
	} 
} 



expenseForm.addEventListener("submit", addExpense); 
expenseList.addEventListener("click", deleteExpense); 


renderExpenses();


// Toggle side menu visibility
document.getElementById('menuButton').addEventListener('click', function() {
    var sideMenu = document.getElementById('sideMenu');

    
    if (sideMenu.style.right === '-250px') {
        sideMenu.style.right = '0';
    } else {
        sideMenu.style.right = '-250px';
    }
});




var menuButton = document.getElementById('menuButton');
var sideMenu = document.getElementById('sideMenu');

// Toggle side menu visibility
menuButton.addEventListener('click', function() {
    var sideMenuRight = window.getComputedStyle(sideMenu).getPropertyValue('right');

    
    if (sideMenuRight === '-250px') {
        sideMenu.style.right = '0';
    } else {
        sideMenu.style.right = '-250px';
    }
});

// Close side menu
document.getElementById('closeBtn').addEventListener('click', function() {
    sideMenu.style.right = '-250px';
});



function toggleColumn(columnName) {
    const columnIndex = getColumnIndex(columnName);
    const table = document.querySelector('table');
    
    if (columnIndex !== -1) {
        const cells = table.querySelectorAll(`td:nth-child(${columnIndex}), th:nth-child(${columnIndex})`);
        cells.forEach(cell => {
            cell.classList.toggle('hidden-column');
        });

        adjustWidths();
    }
}

function getColumnIndex(columnName) {
    const headers = document.querySelectorAll('thead th');
    for (let i = 0; i < headers.length; i++) {
        if (headers[i].textContent === columnName) {
            return i + 1;
        }
    }
    return -1;
}

function adjustWidths() {
    const visibleColumns = document.querySelectorAll('td:not(.hidden-column), th:not(.hidden-column)');
    const columnCount = visibleColumns.length;

    visibleColumns.forEach(column => {
        column.style.width = `${100 / columnCount}%`;
    });
}

// Call adjustWidths initially to set widths for default visible columns
adjustWidths();


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        toggleColumn(this.value);
    });
});
