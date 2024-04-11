import React from 'react';
import { useState } from 'react'
import { Switch } from '@headlessui/react'
const darkTheme = {
  backgroundColor: '#222',
  textColor: '#fff',
  // Add more dark theme styles as needed
};
const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000',
  // Add more light theme styles as needed
};

export default function DarkMode() {
  const [enabled, setEnabled] = useState(false)
  const toggledarkmode=()=>{
      setEnabled(!enabled)
  }
  const theme = enabled ? darkTheme : lightTheme

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={toggledarkmode}
        className={`${enabled ? 'bg-slate-400' : 'bg-blue-700'}
          relative inline-flex h-[28px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}