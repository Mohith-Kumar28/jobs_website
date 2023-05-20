import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import FileUpload from '../FileUpload'
import { XMarkIcon } from '@heroicons/react/24/outline'


export default function FileModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-full"
        >
          Click to upload files
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-xl " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-screen transform overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl  text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
              <FileUpload/>
<div>
    <XMarkIcon onClick={closeModal} className="w-10 absolute top-4 left-4 border-2 p-1 rounded-full border-gray-600 bg-red-50 cursor-pointer"/>
</div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
