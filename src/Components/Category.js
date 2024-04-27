import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';


function Category({image,tittle}) {
    return ( 
    <Card  sx={{ maxWidth: 345,border:'1px solid gray',borderRadius:'20px',height:'140px' }}>
        <CardActionArea>
          <CardMedia sx={{width:'100%',height:'70px'}}
            component="img"
            height="40"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography sx={{fontSize:'14px',fontFamily:'fantasy'}}  variant="h6" component="div">
              {tittle}
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
       );
}

export default Category;