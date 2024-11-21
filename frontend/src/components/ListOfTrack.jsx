import { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom';
import api from "../api";
import CreateTrack from "./CreateTrack";
function ListOfTracker({cashflowtype,route}){
  const navigate = useNavigate();
  const [info,setInfo] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showTrack,setShowTrack] = useState(false);

    useEffect(()=>{
     api.get(route).then((res)=> {
      setInfo(res.data);
  })
  .catch((err) => alert(err));
     
    },[route])

    const handleOnClick = () => {
        console.log({cashflowtype})
        setIsModalVisible(true);
        setShowTrack(true);
    };
   
    const closeModal = () => {
        setIsModalVisible(false);
        setShowTrack(false);
    };
    const handleCreateTrack = (newData) => {
        api
          .post(route, newData)
          .then((res) => {        
            if (res.status === 201) {
                setInfo([...info, res.data]);
              } else {
                console.warn("Record creation failed or unexpected response:", res);
              }
              closeModal();
          })
          .catch((err) => alert(err));
      };

    return <div className="mt-10 ml-5">
    <div className="flex">
    {cashflowtype==='Income'? (<h1 className="text-blue-500 text-lg">My Earnings</h1>):
    (<h1 className="text-blue-500 text-lg">My Expenses</h1>)
    }
    <button
        onClick={handleOnClick}
        className="bg-white-500 text-blue-500 ml-[50px] font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        +
      </button>
      {showTrack && <CreateTrack route={route} cashflowtype={cashflowtype} isVisible={isModalVisible} onClose={closeModal} onCreate={handleCreateTrack}/>}
    </div>

<div className="flex relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mr-5">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-blue-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
           {cashflowtype==='Income'? (<tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Income Source
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Payment Method
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Income Date
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>):(<tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Expense Source
                </th>
                <th scope="col" className="px-6 py-3">
                    Expense Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Payment Method
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Purchased Date
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
            )}
        </thead>
        <tbody>
            
              {
                info.map((x)=>(
                  cashflowtype==='Income'?(
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={x.id}>
                    <td className="px-6 py-4">{x.id}</td>
                    <td className="px-6 py-4">{x.income_source}</td>
                    <td className="px-6 py-4">{x.income_amount}</td>
                    <td className="px-6 py-4">{x.income_payment_method}</td>
                    <td className="px-6 py-4">{x.income_category}</td>
                    <td className="px-6 py-4">{x.income_date}</td>
                    <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>):(
               <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={x.id}>
               <td className="px-6 py-4">{x.id}</td>
               <td className="px-6 py-4">{x.expense_item}</td>
               <td className="px-6 py-4">{x.expense_amount}</td>
               <td className="px-6 py-4">{x.expense_payment_method}</td>
               <td className="px-6 py-4">{x.expense_category}</td>
               <td className="px-6 py-4">{x.purchased_date}</td>
               <td className="px-6 py-4 text-right">
               <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
           </td>
       </tr>)               
        ))
        }              
        </tbody>
    </table>
</div>

    </div>
}

export default ListOfTracker;