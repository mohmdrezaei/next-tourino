const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4  rounded-lg shadow-lg w-auto md:w-[571px] h-[362px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
