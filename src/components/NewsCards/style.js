import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container:{
        padding:'0 3%',
        width:'100%',
        margin:'auto',
    },
    card: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent:'space-between',
        alignItems: 'center',
        width:'100%',
        height:'45vh',
        padding:'5%',
        borderRadius:10,
        color:'white'
      },
      infoCard: {
        display: 'flex', 
        flexDirection: 'column',
        textAlign:'center' 
      },
      boxCard: {
        display: 'flex', 
        flexDirection: 'column',
        textAlign:'center',
        width:'30%', 
        margin:'0 auto'
      },
      newsheader: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent:'space-between',
        alignItems: 'center',
        width:'100%',
        height:'10vh',
        padding:'5%',
        margin:'auto',
        borderRadius:10,
        color:'white'
      },
});