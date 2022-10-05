import { Button, ButtonGroup } from "@mui/material"

interface IButtonGroup1{}
export const ButtonGroup1:React.FC<IButtonGroup1>=()=>{
    return (<>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
    </>)
}