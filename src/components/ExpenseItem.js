import './ExpenseItem.css';

function ExpenseItem(data){
    const expenseDate= data.date;
    const expenseTitle = data.title;
    const expenseAmount =data.amount;
    return(
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;