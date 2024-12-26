import React from 'react'

function EditButtons({onCancel}) {
  return (
    <div className="flex justify-end mt-2 md:border-t pt-3 px-5">
        <button
          className="mx-2  bg-[#28A745] rounded-[5px] w-full md:w-36 h-10 text-white text-base font-normal"
          type="submit"
        >
          تایید
        </button>
        <button
          onClick={onCancel}
          className="mx-2 border-2 border-[#28A745] text-[#28A745] rounded-[5px] w-full md:w-36 h-10 text-base font-normal"
          type="button"
        >
          انصراف
        </button>
      </div>
  )
}

export default EditButtons