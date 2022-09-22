import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
//import Header from './Header';


export const SidebarData = [
    {
        title: 'New Customer',
        path: '/manager/newcustomer',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Edit Customer',
        path: '/manager/editcustomer',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Delete Customer',
        path: '/manager/deletecustomer',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'New Account',
        path: '/manager/newaccount',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Edit Account',
        path: '/manager/editaccount',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Delete Account',
        path: '/manager/deleteaccount',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Deposit',
        path: '/manager/deposit',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Withdrawal',
        path: '/manager/withdrawal',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
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
    ,
    {
        title: 'Admin',
        path: '/manager/admin',
        icon: <IoIcons5.IoLogInSharp />,
        cName: 'nav-text'
    }
];