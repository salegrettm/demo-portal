import React from 'react';
import './styles/MyTrusts.css';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/SideMenu';
import { useHistory } from 'react-router';
import DropdownTable, { DropdownTableMenu, DropdownTableItem } from '../components/DropdownTable';
import DropdownElement from '../components/DropdownElement';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

/* A page with all trust banking information for a user */

function MyTrusts() {

    //Populate HTML table with Trust information
    const myTrusts = JSON.parse(sessionStorage.getItem('myTrusts'))
    const history = useHistory();

    if (myTrusts === null) {
        history.push('/trusts-error');
    }

    const { t } = useTranslation(); //react-i18-next

    const realEstateIcon = <BsIcons.BsHouse style={{color: 'rgb(179, 197, 197)'}}  />
    const marketIcon = <BsIcons.BsGraphUp style={{color: 'rgb(179, 197, 197)'}}  />
    const otherIcon = <BsIcons.BsThreeDots style={{color: 'rgb(179, 197, 197)'}}  />
    const adminIcon = <FaIcons.FaUser style={{color: 'rgb(179, 197, 197)'}}  />
    const guaranteesIcon = <MdIcons.MdAttachMoney style={{color: 'rgb(179, 197, 197)'}}  />

    const headers = [t('contract-date'), t('contract-name')];
    return (
        <div className='mytrusts'>
            <Sidebar className='sidebar' />
            <div className='my-trusts-container'>
                <h1 className='my-trusts-title'>{t('my-trusts')}</h1>
                <DropdownElement icon={adminIcon} header='Administration'>
                    <DropdownTable headers={headers}>
                        {
                            myTrusts[0] ? (
                                myTrusts[0].map((t, index) => {
                                    return (
                                        <DropdownTableItem
                                            key={t.trust.headers.date.value + index}
                                            label1={t.trust.headers.date.value}
                                            label2={t.trust.headers.contract_name.value}
                                            index={index}
                                            styles='grey'
                                        >
                                            <DropdownTableMenu styles='grey' mainMenu={t.trust.body} leftMenu />
                                        </DropdownTableItem>
                                    );
                                })
                            ) : (
                                null
                            )
                        }
                    </DropdownTable>
                </DropdownElement>
                <DropdownElement icon={realEstateIcon} header='Real Estate'>
                    <DropdownTable headers={headers}>
                        {
                            myTrusts[2] ? (
                                myTrusts[2].map((t, index) => {
                                    return (
                                        <DropdownTableItem
                                            key={t.trust.headers.date.value + index}
                                            label1={t.trust.headers.date.value}
                                            label2={t.trust.headers.contract_name.value}
                                            index={index}
                                            styles='grey'
                                        >
                                            <DropdownTableMenu styles='grey' mainMenu={t.trust.body} leftMenu />
                                        </DropdownTableItem>
                                    );
                                })
                            ) : (
                                null
                            )
                        }
                    </DropdownTable>
                </DropdownElement>
                <DropdownElement icon={marketIcon} header='Investment'>
                    <DropdownTable headers={headers}>
                        {
                            myTrusts[3] ? (
                                myTrusts[3].map((t, index) => {
                                    return (
                                        <DropdownTableItem
                                            key={t.trust.headers.date.value + index}
                                            label1={t.trust.headers.date.value}
                                            label2={t.trust.headers.contract_name.value}
                                            index={index}
                                            styles='grey'
                                        >
                                            <DropdownTableMenu styles='grey' mainMenu={t.trust.body} leftMenu />
                                        </DropdownTableItem>
                                    );
                                })
                            ) : (
                                null
                            )
                        }
                    </DropdownTable>
                </DropdownElement>
                <DropdownElement icon={guaranteesIcon} header='Guarantees'>
                    <DropdownTable headers={headers}>
                        {
                            myTrusts[4] ? (
                                myTrusts[4].map((t, index) => {
                                    return (
                                        <DropdownTableItem
                                            key={t.trust.headers.date.value + index}
                                            label1={t.trust.headers.date.value}
                                            label2={t.trust.headers.contract_name.value}
                                            index={index}
                                            styles='grey'
                                        >
                                            <DropdownTableMenu styles='grey' mainMenu={t.trust.body} leftMenu />
                                        </DropdownTableItem>
                                    );
                                })
                            ) : (
                                null
                            )
                        }
                    </DropdownTable>
                </DropdownElement>
                <DropdownElement icon={otherIcon} header='Other'>
                    <DropdownTable headers={headers}>
                        {
                            myTrusts[1] ? (
                                myTrusts[1].map((t, index) => {
                                    return (
                                        <DropdownTableItem
                                            key={t.trust.headers.date.value + index}
                                            label1={t.trust.headers.date.value}
                                            label2={t.trust.headers.contract_name.value}
                                            index={index}
                                            styles='grey'
                                        >
                                            <DropdownTableMenu styles='grey' mainMenu={t.trust.body} leftMenu />
                                        </DropdownTableItem>
                                    );
                                })
                            ) : (
                                null
                            )
                        }
                    </DropdownTable>
                </DropdownElement>
            </div>
        </div>
    )
}

export default MyTrusts
