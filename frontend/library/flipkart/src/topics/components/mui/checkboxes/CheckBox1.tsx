import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { pink } from "@mui/material/colors";

interface ICheckBox1{}
export const CheckBox1:React.FC<ICheckBox1>=(props)=>{
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return <>
    <Checkbox {...label} defaultChecked />
<Checkbox {...label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked />
<>
<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
sx={{
    color: pink[800]
  }}
/>
<Checkbox
  {...label}
  icon={<BookmarkBorderIcon />}
  checkedIcon={<BookmarkIcon />}

/>
</>
    </>
}