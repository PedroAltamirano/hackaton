import { useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import Input from './Input'

interface IProps {
  header: string
}

const Header = ({ header }: IProps) => {
  const [showSearch, setShowSearch] = useState(false)
  const [hideOptions, setHideOptions] = useState(true)

  const handleOptions = () => {
    setHideOptions(!hideOptions)
  }

  const handleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <div>
      <div className="bg-orange-500 p-2 text-white flex">
        <Bars3Icon className="h-10 w-10" onClick={handleOptions} />
        {showSearch ? (
          <div className="flex justify-center w-full items-center text-lg">
            <Input name="search" />
          </div>
        ) : (
          <div className="flex justify-center w-full items-center text-lg">
            {header}
          </div>
        )}
        <MagnifyingGlassIcon className="h-10 w-10" onClick={handleSearch} />
      </div>

      <div className={`w-full ${hideOptions && 'hidden'}`}>
        <ul>
          <li className="p-4 bg-gray-100">
            <div className="flex space-x-2 items-center">
              <div className="w-4 h-4 bg-orange-400 rounded-full" />
              <p>Проекты</p>
            </div>
          </li>
          <li className="p-4 bg-gray-100">
            <div className="flex space-x-2 items-center">
              <div className="w-4 h-4 bg-orange-400 rounded-full" />
              <p>Резюме</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
