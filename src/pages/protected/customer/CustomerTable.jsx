import React from 'react';
import Image1 from "../../../assets/image/Image1.png";

const TableHead = [
    "Order Now",
    "Customer Name",
    "Product Name",
    "Company Name",
    "Country",
    "Phone No",
  ];

const CustomerTable = () => {
  const arr = Array(10).fill("");

  return (
    <table className="table-auto w-full text-sm  text-gray-500 dark:text-gray-400   border-separate  border-spacing-y-3">
    <thead className="text-xs text-gray-700  bg-[white]   rounded-md dark:bg-gray-900 dark:text-gray-400">
      <tr className=" shadow-md">
        {TableHead?.map((head, index) => {
          return <th scope="col" className="p-5" key={index}>
               {head}
          </th>;
        })}

      </tr>
    </thead>
    <tbody className="">
      {arr?.map((index, a) => {
        return (
          <tr className=" bg-[white] shadow-md text-center dark:bg-gray-900" key={a}>
           <td className="p-5">090232</td>
           <td>
              <div className=" flex items-center gap-3 justify-center">
                <img src={Image1} alt=" image1" />
                <p className=" text-black dark:text-gray-50">Brokery</p>
              </div>
            </td>

            <td>
              Zoho
            </td>

            <td>
              Walarmay
            </td>

            <td>
              USA
            </td>

            <td>
              982387
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default CustomerTable
