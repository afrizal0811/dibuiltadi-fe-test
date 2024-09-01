import { CloseOutlined, MenuOutlined, MoreOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imagePath from '../../constants/imagePath'
import { removeToken } from '../../utilities/localStorages'
import titleCase from '../../utilities/titleCase'
import { Button } from '../antd_components'
import { menuList } from './help'

const NavigationBar = (props) => {
  const { context } = props
  const { navigate, pathname } = context
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const handleLogout = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <div>
      <nav className='relative px-4 py-4 flex justify-between items-center shadow-md bg-white'>
        <Link
          to='/'
          className='text-3xl font-bold leading-none'
        >
          <img
            src={imagePath.logo}
            alt='logo'
            className='w-12 h-12'
          />
        </Link>
        <div className='sm:hidden'>
          <div
            className='flex items-center text-eerie-black p-4 border bg-jet-stream rounded-lg cursor-pointer hover:bg-jet-stream-dark'
            onClick={() => setIsBurgerOpen(true)}
          >
            <MenuOutlined />
          </div>
        </div>
        <ul className='hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 sm:flex sm:mx-auto sm:items-center sm:w-auto sm:gap-4'>
          {menuList.map((item, index) => {
            const isOrderPage =
              item.link.substring(0, item.link.indexOf('?')) === pathname
            const isCouponPage = item.link === pathname

            return (
              <span
                key={index}
                className='flex gap-4'
              >
                <li>
                  <Link
                    to={item.link}
                    className={`text-md text-eerie-black hover:bg-gray-50 p-2 ${
                      isCouponPage || isOrderPage
                        ? 'font-bold border-b-2 border-jet-stream-dark pb-2'
                        : 'font-normal'
                    }`}
                  >
                    {titleCase(item.name)}
                  </Link>
                </li>
                {index !== menuList.length - 1 && (
                  <li className='text-gray-500'>
                    <MoreOutlined />
                  </li>
                )}
              </span>
            )
          })}
        </ul>
        <Button
          className='hidden sm:flex'
          onClick={handleLogout}
          text='Log Out'
        />
      </nav>
      <div
        className={`absolute top-0 left-0 w-full z-50 block sm:hidden transition-all ease-in-out duration-500 h-full ${
          isBurgerOpen
            ? 'transform translate-x-0'
            : 'transform -translate-x-full'
        }`}
      >
        <div
          className={`fixed inset-0 bg-gray-800 w-100 transition-all ease-out duration-500  ${
            isBurgerOpen
              ? 'opacity-25 transform translate-x-0'
              : 'opacity-0 transform -translate-x-full'
          }`}
        />
        <nav className='fixed top-0 left-0 bottom-0 w-5/6 max-w-sm flex flex-col p-6 bg-white h-full shadow-lg'>
          <div className='flex justify-between items-center mb-8'>
            <Link
              to='/'
              className='text-3xl font-bold leading-none'
              onClick={() => setIsBurgerOpen(false)}
            >
              <img
                src={imagePath.logo}
                alt='logo'
                className='w-12 h-12'
              />
            </Link>
            <div
              className='flex items-center text-eerie-black p-4 border bg-jet-stream rounded-lg cursor-pointer hover:bg-jet-stream-dark'
              onClick={() => setIsBurgerOpen(false)}
            >
              <CloseOutlined />
            </div>
          </div>
          <div>
            <ul>
              {menuList.map((item, index) => (
                <li
                  className='mb-1'
                  key={index}
                >
                  <Link
                    to={item.link}
                    onClick={() => setIsBurgerOpen(false)}
                    className='block p-4 text-md font-semibold text-eerie-black hover:bg-jet-stream-light hover:font-bold rounded'
                  >
                    {titleCase(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-auto'>
            <Button
              block
              onClick={handleLogout}
              text='Log Out'
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavigationBar
