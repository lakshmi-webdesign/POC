import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as BiIcons  from 'react-icons/bi';
import * as RiIcons  from 'react-icons/ri';
//import Header from './Header';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Balance Enquiry',
    path: '/balanceenquiry',
    icon: <MdIcons.MdAccountBalanceWallet />,
    cName: 'nav-text'
  },
  {
    title: 'Fund Transfer',
    path: '/fundtransfer',
    icon: <BiIcons.BiTransfer />,
    cName: 'nav-text'
  },
  {
    title: 'Mini Statement',
    path: '/ministatement',
    icon: <AiIcons.AiFillFileExcel />,
    cName: 'nav-text'
  },
  {
    title: 'Customized Statement',
    path: '/customizedstatement',
    icon: <AiIcons.AiFillFileExcel />,
    cName: 'nav-text'
  },
  {
    title: 'Login ',
    path: '/login',
    icon: <IoIcons5.IoLogInSharp />,
    cName: 'nav-text'
  }
];