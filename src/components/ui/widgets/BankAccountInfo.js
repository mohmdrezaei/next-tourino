import { e2p } from '@/utils/numbers'
import React from 'react'

function BankAccountInfo({data}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-9 mt-5 text-sm px-5">
            <div className="flex gap-5 justify-between sm:justify-start">
              <p>شماره شبا</p>
              <span className=" font-medium ">
                {e2p(data.data.payment?.shaba_code) || "--"}
              </span>
            </div>
            <div className="flex gap-5 justify-between sm:justify-start">
              <p> شماره کارت </p>
              <span className="font-normal">
                {e2p(data?.data?.payment?.debitCard_code) || "--"}
              </span>
            </div>

            <div className="flex gap-5  justify-between sm:justify-start">
              <p>شماره حساب</p>
              <span className="font-medium">
                {e2p(data?.data?.payment?.accountIdentifier) || "--"}
              </span>
            </div>
          </div>
  )
}

export default BankAccountInfo