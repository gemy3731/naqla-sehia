import React from "react";
import usePreventScroll from "../hooks/usePreventScroll";
import { X } from "lucide-react";

interface Props {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ children, setIsOpen }: Props) => {
  usePreventScroll();
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="rounded-xl border  shadow-sm relative bg-white border-color p-8">
          <button
            type="button"
            onClick={close}
            className="h-10 w-10 absolute top-4 right-4 rounded-full hover:bg-(--color-primary)/50 hover:text-white flex items-center justify-center"
          >
            <X size={24} />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
