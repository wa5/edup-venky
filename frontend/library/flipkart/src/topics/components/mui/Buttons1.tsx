import { Button } from '@mui/material';
import React from 'react';

export interface IButtons1Props{};

export const  Buttons1:React.FC<IButtons1Props>=(props)=>{
    return (<>
    <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
    </>);
};

