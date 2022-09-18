import React from 'react';
import Buttons1 from '../components/mui/Buttons1';
import Fragment from '../rules/fragments/Fragment';

export interface IFragmentPageProps{};

const  FragmentPage:React.FC<IFragmentPageProps>=(props)=>{
    return (<>
    <Fragment/>
    <Buttons1/>
    </>);
};

export default FragmentPage;