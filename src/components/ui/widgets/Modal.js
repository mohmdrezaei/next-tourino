const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4  rounded-lg shadow-lg w-[571px] h-[362px]">
        <div className="flex justify-end">
        <button onClick={onClose} className="inline-block text-[#171717] text-xl ">
          &times;
        </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
