import { Autocomplete, TextField } from "@mui/material"

interface IAutocompletexample{
    
}
export const Autocompletexample:React.FC<IAutocompletexample>=(props)=>{
    let top100Films=[{ label: 'venki movie', year: 1994 },
    { label: 'The Godfather', year: 1972 ,venky:'kk'}]
    return (<>
    
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      getOptionLabel={option => option.year.toString()}//this will giv optional lable
      renderInput={(params) => <TextField {...params} label="Movie123" />}
      
    />
    
    </>)
}

