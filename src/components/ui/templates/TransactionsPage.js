"use client"
import Loader from "@/elements/Loader";
import { useGetTransactions } from "@/services/queries";

function TransactionsPage() {
    const {data , isPending} = useGetTransactions()
    console.log(data)

    if(isPending) return <Loader />
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#00000033]">
    <table className="w-full ">
      <thead className="bg-[#F3F3F3] h-14">
        <tr>
          <th>تاریخ و ساعت</th>
          <th>مبلغ (تومان)</th>
          <th>نوع تراکنش</th>
          <th>شماره سفارش</th>
        </tr>
      </thead>
      <tbody className="text-center h-auto">
        {data?.data?.map(item=>(
            <tr className="h-14" key={item.id}>
          <td>{item.createdAt}</td>
          <td>{item.amount}</td>
          <td>{item.type} </td>
          <td>سفارش 12054902</td>
        </tr>
        ))}
        
        
      </tbody>
    </table>
    </div>
  );
}

export default TransactionsPage;
