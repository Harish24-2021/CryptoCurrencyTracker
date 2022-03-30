import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, ThemeProvider, createTheme } from '@material-ui/core'

import { useNavigate } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(() => ({

    title: {

        flex: 1,
        color: "red",
        fontWeight: "bold",
        cursor: "pointer",



    }

}))


const Header = () => {

const {currency,setCurrency} = CryptoState()

    const darkTheme = createTheme({
        palette: {
            primary: {
                main:"#fff", 
            },

            type: 'dark',
        },
    });

    const navigate = useNavigate();


    const classes = useStyles()
    return (
        // using themerprovider component to apply dark theme to whole header component  
        // passing theme attribute to themeprovider to apply dark theme
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate("/")} className={classes.title} variant="h6">
                            Crypto Tracker</Typography>
                        <Select variant="outlined"

                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 50,

                            }}

                            value={currency}
                            onChange={(e)=>setCurrency(e.target.value)}
                        >
                            <MenuItem value={'USD'}>
                                USD</MenuItem>
                            <MenuItem value={'INR'}>
                                INR</MenuItem>
                        </Select>


                    </Toolbar>

                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header