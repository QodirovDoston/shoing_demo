import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import Card2 from './Card2';
import Tiitle from './Tiitle';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';

const Header = ({ handleClick }) => {
    const { t } = useTranslation()
    const [name, setName] = useState([])
    const getData = () => {
        axios.get('https://dbjsoninserver-production.up.railway.app/data')
            .then((data) => {
                setName(data.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div >
                <Card/>
                <Card2 />
                <Tiitle />
                <div className="sm:flex sm:gap-[490px]  ">
                    {name.map((item) => {
                        return (
                            <>
                           <div className=' container mx-auto mt-7   '>
                            <div className=" sm:grid-cols-3  grid-cols-1  w-[390px] h-[480px]mt-7  bg-white rounded-[40px]">
                                <FavoriteIcon className='m-4 active:text-red-400 focus:outline-none focus:ring' />
                                <img className='mx-auto w-[370px] h-[340px] ' src={item.img} alt="d" />
                                <div className="flex justify-between m-6 ">
                                    <h3 className='font-semibold'>{item.title} </h3>
                                    <div className="d">
                                        <h5 className='text-[25px]  text-yellow-500'>{item.price} ₸</h5>
                                        <h5 className='text-[17px] text-yellow-300 line-through'> {item.author}</h5>
                                    </div>
                                </div>
                                <div className="flex m-6 gap-2">
                                    <StarIcon className='text-yellow-500 ' />
                                    <h4 className='text-gray-500'>4.7</h4>
                                    <button onClick={() => handleClick(item)} className=' ml-[180px] bg-cyan-400 w-[80px] text-white  h-[31px] rounded-[4px]'>{t('text.fot1')}</button>
                                </div>
                            </div>
                        </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Header
