import { Container, Grid } from "@mui/material"

export const Gridsystem:React.FC<{}>=()=>{
    return <>
    <Container maxWidth='xl' style={{backgroundColor:'red'}}>
<Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'yellow'}}>

    <Grid item xs={2} sm={4} md={4} style={{backgroundColor:'white'}} >
        1
    </Grid>
    <Grid item>
        2
    </Grid>
    <Grid item style={{backgroundColor:'white'}} >
        3
    </Grid>
    <Grid item>
        4
    </Grid>

</Grid>
<Grid container 
direction="row"
  justifyContent="space-around"
  alignItems="center"
   style={{backgroundColor:'pink'}}>
  <Grid item style={{backgroundColor:'white'}} >
        1
    </Grid>
    <Grid item>
        2
    </Grid>
    <Grid item style={{backgroundColor:'white'}} >
        3
    </Grid>
    <Grid item>
        4hdddddddddddddddd
    </Grid>
    <Grid item style={{backgroundColor:'white'}} >
        1fdhhhhhhhhhhhhh
    </Grid>
    <Grid item>
        2dfhhhhhhhhhhhhhh
    </Grid>
    <Grid item style={{backgroundColor:'white'}} >
        3dhhhhhhhfffffffffffffffff
    </Grid>
    <Grid item>
        4
    </Grid>
    <Grid item style={{backgroundColor:'white'}} >
        1
    </Grid>
    <Grid item>
        2
    </Grid>
    <Grid item style={{backgroundColor:'white'}} >
        3
    </Grid>
    <Grid item>
        4
    </Grid>
    <Grid item style={{backgroundColor:'white'}} >
        1ghfdhdhdddddddddddddddddddddgh
    </Grid>
    <Grid item>
        2fdgdgdhhgddghghdhghg
    </Grid>
    <Grid item style={{backgroundColor:'white'}} >
        3gddhgggdhhdg
    </Grid>
    <Grid item>
        4ghggdgfhgd
    </Grid>
</Grid>


        
    </Container>
    </>
}