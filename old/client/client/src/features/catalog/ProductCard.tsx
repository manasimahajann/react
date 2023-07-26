      
        import { List, ListItem, Avatar, ListItemAvatar, ListItemText, Button,Typography,CardActions, Card, CardMedia, CardContent, CardHeader,  } from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../../app/models/product';

interface Props{
    product: Product;
}
export default function ProductCard({product}: Props){
    return (
        <Card variant="outlined" >
            <CardHeader 
                avatar = {
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {/* {product.name.charAt(0).toUpperCase} */}
                    </Avatar> 
                }
                title={product.name}
                titleTypographyProps={{
                  sx: {fontWeight: 'bold', color:'primary.main'}
                }}
            />
      <CardMedia
        component="img"
        sx = {{
          height:"140", backgroundSize:"contain", bgcolor: 'primary.light'}}
        image={product.pictureUrl}
        title={product.name} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary" component="div">
          ${(product.price/100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.brand} / {product.type}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
    //     <ListItem key={product.id}>
    //      <ListItemAvatar> 
    //          <Avatar src={product.pictureUrl}></Avatar>
    //      </ListItemAvatar>
    //      <ListItemText>
    //          {product.name} - {product.price} 
    //      </ListItemText>
    //   </ListItem>
        )}