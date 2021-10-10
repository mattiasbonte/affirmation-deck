import React, { useRef, useState } from 'react'
import BloomLogo from '../assets/PWA/android-chrome-256x256.png'

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

    setValidate(false)
    setTimeout(() => {
      setValidate(true)
    }, 2000)
  }

  return (
    <div className="bg-pattern flex flex-col items-center justify-center h-screen bg-center bg-no-repeat bg-cover">
      <img src={BloomLogo} alt="Bloom Logo" className="w-40" />
      <div className="flex items-center justify-center">
        <h2 className="text-white/40 font-extralight mb-2 text-2xl text-center">Bloom With Tea</h2>
      </div>
      <div className="inline-flex h-auto">
        <div className="relative h-full bg-white rounded-md shadow-sm">
          <label htmlFor="userInput" className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
            <svg
              className="hover:text-black w-5 h-5 text-gray-400"
              onClick={() => alert('Voer de correcte wachtwoord in om toegang te krijgen tot de app')}
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
          </label>
          <input
            ref={userInput}
            id="userInput"
            type="text"
            name="userInput"
            title="Wachtwoord"
            onKeyUp={(e) => {
              if (e.key === 'Enter') return checkValue()
              if (e.key === 'Escape') return (e.currentTarget.value = '')
            }}
            className={`text-center h-full sm:text-sm w-52 p-3 border-gray-300 rounded-l-md ${validate || 'bg-rose-300'}`}
            placeholder="Wachtwoord"
          />
        </div>
        <button
          className="rounded-r-md relative inline-flex items-center px-3 text-gray-700 bg-white border border-gray-300 bg-gradient-to-r from-[#d1913c] via-[#dfac6b] to-[#d1913c]"
          onClick={() => checkValue()}
          title="Open kaart deck"
        >
          {validate ? '🗝' : '🔒'}
        </button>
      </div>
    </div>
  )
}

export default AuthModal
