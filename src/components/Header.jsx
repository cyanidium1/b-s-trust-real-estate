import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React from 'react';
import logo from '../images/logoHeader.webp'
import Contact from './FloatingButton';

function Header({ lang, setLang }) {

    return (
        <header className="bg-amber-300 p-4 flex items-center justify-between">

            {/* Лого слева */}
            <img className='w-48' src={logo} alt='B&S Trust 369' />
            <Menu
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                }}
            >
                <MenuHandler>
                    <Button>{lang}</Button>
                </MenuHandler>
                <MenuList>
                    <MenuItem onClick={() => setLang('ua')}> Українська</MenuItem>
                    <MenuItem onClick={() => setLang('ru')}> Русский</MenuItem>
                    <MenuItem onClick={() => setLang('en')}> English</MenuItem>
                    <MenuItem onClick={() => setLang('pl')}> Polska</MenuItem>
                    <MenuItem onClick={() => setLang('it')}> Italiano</MenuItem>
                    <MenuItem onClick={() => setLang('cz')}> Čeština</MenuItem>
                </MenuList >
            </Menu >

            <Contact />

        </header >
    );
}

export default Header;
