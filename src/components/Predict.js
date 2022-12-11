import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { predict } from "../api";

function Predict() {
  const [prediksi, setPrediksi] = React.useState("");
  const [token, setToken] = React.useState("");
  React.useEffect(() => {
    console.log()
  });
  return (
      <>
        <div className="flex flex-col w-full bg-white p-px lg:flex-row lg:justify-evenly"  onMouseEnter={() => {
        setToken(JSON.parse(localStorage.getItem("token")));
      }}>
          <div className="w-full rounded-md pd-5">
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">Okai aku sudah tau kamu </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-secondary">
              {prediksi === ''?'...': `${prediksi.hasilprediksi === 'Yes'?'menurutku kamu mengalami masalah kesehatan mental': 'menurutku kamu tidak mengalami masalah kesehatan mental' }`}
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-accent">
              {prediksi === ''?'...': `dibawah ada informasi tambahan buat kamu `}
              </div>
            </div>
          </div>
          <div className="w-full flex  justify-center p-5 ">
          {token === "" ? (
                <button className="btn loading">login untuk bisa melakukan prediksi</button>
              ) : (
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={(e)=>{
            predict().then((e)=>{
              setPrediksi(e.data)
            })
          }}>Prediksi kesehatan mentalku</button>
              )}         
          </div>
        </div>
          {prediksi === "" ?"" :(
         <div className="w-full px-4 pt-16">
         <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
           <Disclosure>
             {({ open }) => (
               <>
                 <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                   <span>Hasil prediksi</span>
                   <ChevronUpIcon
                     className={`${
                       open ? 'rotate-180 transform' : ''
                     } h-5 w-5 text-purple-500`}
                   />
                 </Disclosure.Button>
                 <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                   <h4>{prediksi.hasilprediksi === 'Yes'? 'anda terkena gangguan mental ':'anda tidak terkena gangguan mental'}</h4>
                   <p>{prediksi.deskripsi}</p>
                 </Disclosure.Panel>
               </>
             )}
           </Disclosure>
           <Disclosure as="div" className="mt-2">
             {({ open }) => (
               <>
                 <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                   <span>informasi atau solusi</span>
                   <ChevronUpIcon
                     className={`${
                       open ? 'rotate-180 transform' : ''
                     } h-5 w-5 text-purple-500`}
                   />
                 </Disclosure.Button>
                 <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <ul>
                     <li className='text-pink-400 '>{prediksi.solusi.dep}</li>
                     <li className='text-green-400'>{prediksi.solusi.eat}</li>
                     <li className='text-blue-400'>{prediksi.solusi.exe}</li>
                     <li className='text-green-400'>{prediksi.solusi.inc}</li>
                     <li className='text-sky-400'>{prediksi.solusi.ove}</li>
                  </ul>
                   
                 </Disclosure.Panel>
               </>
             )}
           </Disclosure>
         </div>
       </div>
       )}
       </>
      );
}

export default Predict


