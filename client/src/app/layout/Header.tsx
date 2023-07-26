 
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography,  } from "@mui/material";
import {  NavLink} from "react-router-dom";
interface Props {
    darkMode: boolean,
    toggle: () => void;
}
const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]

const navStyles = {
    color: 'inherit', 
    typography: 'h6',
    textDecoration:'none', 
    '&:hover':{
        color: 'grey.500'
    },
    '&.active':{
        'color':'text.secondary'
    }
}

export default function Header({darkMode, toggle} : Props){
    

    return(
        <AppBar position='static' sx={{mb: 4}}>

            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

            <Box display='flex' alignItems='center'>
                <Typography variant="h6" component={NavLink} 
                to="/"
                sx={navStyles}
                >
                    Re-Store</Typography>
                <Switch  color="secondary" checked={darkMode} onChange={toggle}/>
            </Box>

            <List sx={{display: 'flex'}}>
            {midLinks.map(({title, path}) => (
                <ListItem 
                component={NavLink} 
                to={path}
                key={path}
                sx={navStyles}
                >
                    {title.toUpperCase()}
                </ListItem>
                ))}
            </List> 

            <Box display='flex' alignItems='center'> 
                <IconButton size='large' edge='start' color='inherit' sx={{mr:2}}>
                    <Badge badgeContent='4' color='secondary'>
                        <ShoppingCart />
                    </Badge>

                </IconButton>
                <List sx={{display: 'flex'}}>
                {rightLinks.map(({title, path}) => (
                    <ListItem 
                    component={NavLink} 
                    to={path}
                    key={path}
                    sx={navStyles} 
                    >
                        {title.toUpperCase()}
                    </ListItem>
                    ))}
                </List>
            </Box>

            </Toolbar>
        </AppBar>
    )
}