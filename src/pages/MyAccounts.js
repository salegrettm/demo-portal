import React from 'react'
import { useTranslation } from 'react-i18next'
import SideMenu from '../components/SideMenu'
import DataProcessingUtil from '../functions/DataProcessingUtil'
import './styles/MyAccounts.css'

function MyAccounts() {

    const { t } = useTranslation();

    const dataUtil = new DataProcessingUtil();
    const myAccounts = dataUtil.populateAccounts();

    return (
        <div className='my-accounts-container'>
            <SideMenu />
            <div className='my-accounts-wrapper'>
                <h1 className='my-accounts-title'>{t('my-accounts')}</h1>
                <table className='my-accounts-table'>
                    <thead>
                        <tr className='headers'>
                            <th className='table-header'>{t('company')}</th>
                            <th className='table-header'>{t('account_type')}</th>
                            <th className='table-header'>{t('account_no')}</th>
                            <th className='table-header'>{t('transaction-contract')}</th>
                            <th className='table-header'>{t('balance')}</th>
                            <th className='table-header'>{t('int_earned')}</th>
                            <th className='table-header'>{t('int_paid')}</th>
                        </tr>
                    </thead>
                    <tbody id='my-accounts-table'>{myAccounts}</tbody>
                </table>
            </div>
        </div>
    )
}

export default MyAccounts
