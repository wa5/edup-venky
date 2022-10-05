import { Rating, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";

export const Ratings1:React.FC<{}>=(props)=>{
let [value,setValue]=useState<number|null>(4)

    return <>
    <Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event: any, newValue: SetStateAction<number | null>) => {
    console.log("---",event.target.value)
    setValue(newValue);
  }}
/>
<Typography component="legend">Read only</Typography>
<Rating name="read-only" value={value} readOnly />
<Typography component="legend">Disabled</Typography>
<Rating name="disabled" value={value} disabled />
<Typography component="legend">No rating given</Typography>
<Rating name="no-value" value={null} />
    </>
}