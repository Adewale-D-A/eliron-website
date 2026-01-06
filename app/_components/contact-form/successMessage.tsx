"use client";

import { Fragment, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

const SuccessModal = ({
  openSuccessModal,
  setOpenSuccessModal,
  closeMainModal,
}: {
  openSuccessModal: boolean;
  setOpenSuccessModal: Function;
  closeMainModal?: Function;
}) => {
  const handleClose = useCallback(() => {
    setOpenSuccessModal(false);
    if (closeMainModal) {
      closeMainModal();
    }
  }, []);

  return (
    <Transition appear show={openSuccessModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => handleClose()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-2xl" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-screen-sm transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col gap-6 justify-center items-center">
                  <div className="flex justify-end w-full">
                    <button
                      type="button"
                      title="close modal"
                      onClick={() => handleClose()}
                    >
                      <X className="w-6 h-6 text-red-500" />
                    </button>
                  </div>
                  <div className=" w-full flex items-center flex-col gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-24 h-24 text-green-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <h4 className=" font-semibold text-3xl">Message Sent</h4>
                    <p className=" text-sm">
                      Your message has been sent successfully
                    </p>
                    <button
                      type="button"
                      onClick={() => handleClose()}
                      className=" text-primary-500 p-2 px-4 text-lg font-semibold rounded-md border-2 border-gray-300 hover:bg-primary hover:text-white transition-all"
                    >
                      {" "}
                      Back
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SuccessModal;
