import React, { useRef, useState } from 'react'

interface Props {
  checkAuth: Function
  setAuth: Function
}

const AuthModal = ({ checkAuth, setAuth }: Props) => {
  const [validate, setValidate] = useState(true)
  const userInput = useRef(null)

  const checkValue = () => {
    const input: any = userInput.current
    if (checkAuth(input?.value)) return setAuth(true)
  }

  return (
    <div className="bg-pattern flex flex-col items-center justify-center h-screen bg-center bg-no-repeat bg-cover">
      <h2 className={`${validate ? 'text-blue-400' : 'text-yellow-400'} font-extralight text-3xl text-center uppercase`}>Bloom With Tea</h2>
      <div>
        <div className="relative my-3 rounded-md shadow-sm">
          <input
            ref={userInput}
            id="userInput"
            type="text"
            name="userInput"
            title="Openingszin"
            onKeyUp={(e) => {
              if (e.key === 'Enter') return checkValue()
              if (e.key === 'Escape') return (e.currentTarget.value = '')
            }}
            className={`focus:ring-indigo-500 text-center focus:border-indigo-500 sm:text-sm w-52 p-3 pr-10 border-gray-300 rounded-md ${
              validate || 'bg-yellow-500'
            }`}
            placeholder="Openingszin"
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => alert('Voer de correcte openingszin in om toegang te krijgen tot de app')}
          >
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <button
        className={`px-4 py-2 w-52 text-sm font-medium text-white transition border-0 rounded-md hover:shadow-lg ${
          validate ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700' : 'uppercase bg-red-500 hover:bg-red-600 active:bg-red-700'
        }`}
        onClick={() => checkValue()}
        title="Valideer openingszin"
      >
        {validate ? 'Valideer' : 'Incorrect...'}
      </button>
    </div>
  )
}

export default AuthModal
