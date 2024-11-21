import { useState } from "react";
import api from "../api";
function CreateTrack({route,cashflowtype,isVisible,onClose,onCreate}){
 
    const [source,setSource] = useState('')
    const [amount,setAmount] = useState(0)
    const [category,setCategory] = useState('')
    const [paymentmethod,setPaymentmethod] = useState('')

    const handleOnClick= async(e)=>{
        
        e.preventDefault();
        try{
            console.log(route)
            let newTrackData = null;
            if(cashflowtype==='Income'){
                newTrackData =  {
                    income_source: source,
                    income_amount: amount,
                    income_payment_method: paymentmethod,
                    income_category: category,
                    }
            }
            else{
                newTrackData =  {
                    expense_item: source,
                    expense_amount: amount,
                    expense_payment_method: paymentmethod,
                    expense_category: category,
                    }

            }
            
            onCreate(newTrackData);
            
        }
        catch(error){
            alert(error)
        }
    }


if (!isVisible) {
    return null; 
}

return <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full justify-center">
       
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                {cashflowtype==='Income'?(<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add New Income
                </h3>):
                (<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add New Expense
                </h3>)}
                <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
          
            <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label htmlFor="source" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source</label>
                        <input type="text" name="source" id="source" value={source} onChange={(e)=>setSource(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                        <input type="number" name="amount" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
                    </div>
                   {cashflowtype==='Income'?(<div className="col-span-2 sm:col-span-1">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option defaultValue="">Select category</option>
                            <option value="have">have</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>):(
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option defaultValue="">Select category</option>
                            <option value="have">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>)
                    }
                    <div className="col-span-2 sm:col-span-1">
                        <label htmlFor="paymentmethod" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment Method</label>
                        <select id="paymentmethod" value={paymentmethod} onChange={(e)=>setPaymentmethod(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option defaultValue="">Select category</option>
                            <option value="Cash">Cash</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Credit Card">Credit Card</option>
                        </select>
                    </div>           
                </div>
                <button type="submit" onClick={handleOnClick} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        Add
                </button>    
            </form>
        </div>
    </div>
</div> 

}

export default CreateTrack;
