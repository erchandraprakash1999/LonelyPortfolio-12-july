import React from 'react'

export default function ThemeSetter({handleTheme}) {
  return (
    <>
      <li ><select name="theme" id="theme" className='py-2 px-4 text-md sm:text-lg bg-transparent text-black  outline-none' onChange={handleTheme}>
                                        <option value='pink'>Pink</option>
                                        <option className='text-rose-700 flex' value='rose'><> <span className='p-4 border-2 border-black rounded-full bg-red-600'></span> <span>Rose</span></></option>
                                        <option className='text-violet-700' value='violet' >Violet</option>
                                        <option className='text-indigo-700' value='indigo'>Indigo</option>
                                        <option className='text-amber-700' value='amber'>Amber</option>
                                        <option className='text-blue-700' value='blue'>Blue</option>
                                        <option  className='text-emerald-700' value='emerald'>Emerald</option>
                                        <option className='text-purple-700' value='purple'>Purple</option>
                                        <option className='text-fuchsia-700' value='fuchsia'>Fuchsia</option>
                                        <option className='text-neutral-700' value='neutral'>Neutral</option>
                                </select></li>
    </>
  )
}
