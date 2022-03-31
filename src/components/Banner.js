import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import banner from "./banner.jpg"
import Carousel from './Carousel'
const useStyles = makeStyles(() => ({

    banner: {
        backgroundImage: `url(${banner})`,
        
    },
    bannerContent: {
        height: 400,
        dispaly: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",

    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",


    }



}))

const Banner = () => {

    const classes = useStyles()

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}  >
                <div className={classes.tagline} >

                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 10,
                            fontFamily: "Montserrat",

                        }}

                    >
                        Crypto Tracker

                    </Typography>
                    <Typography

                        variant="h4"
                        style={{
                            color: "grey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",

                        }}


                    >

                        Get complete information regarding your favourite cryptocurrencies

                    </Typography>
                    <Carousel/>

                </div>

            </Container>



        </div>
    )
}

export default Banner