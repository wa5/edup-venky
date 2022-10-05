
import { Container, Grid } from "@mui/material"
import { Autocompletexample, ButtonGroup1, CheckBox1, Floating1 } from "../components/mui"
import { Ratings1 } from "../components/mui/Ratings"
import Props from "../components/props/Props"

const MuiTopics:React.FC=()=>{
return (<>
<Container maxWidth="xl" >

<Grid 
container
direction="row"
justifyContent="space-around"
alignItems="center"
 style={{backgroundColor:'red'}}>
<Grid item style={{backgroundColor:'blue'}}>
<Autocompletexample/>
  </Grid>
 
  <Grid item style={{backgroundColor:'green'}}>
<ButtonGroup1/>
</Grid>
<Grid item style={{backgroundColor:'blue'}}>
<CheckBox1/>
</Grid>
<Grid item style={{backgroundColor:'pink'}}>
<Floating1/>
</Grid>
<Grid item style={{backgroundColor:'green'}}>
<Props/>
</Grid>
</Grid>

<Grid container  direction="row"
  justifyContent="center"
  alignItems="center">

<Grid item>
  <Ratings1/>
</Grid>
</Grid>



</Container>
</>)
}
export default MuiTopics