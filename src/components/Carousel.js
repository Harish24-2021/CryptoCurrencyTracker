import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TrendingCoins } from '../Config/Config'
import { CryptoState } from '../CryptoContext'

import AliceCarousel from 'react-alice-carousel';


const useStyles = makeStyles(() => ({

    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",

    },
    carouselItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        curosor: 'pointer',
        textTransform: 'uppercase',
        color: 'white',
    }


}))


const Carousel = () => {
    const classes = useStyles()
    const [trending, setTrending] = useState([])

    const { currency } = CryptoState()
    const getTrendingCoins = async () => {
        let { data } = await axios.get(TrendingCoins(currency))

        setTrending(data)
        console.log(data)

    }


    useEffect(() => {
        getTrendingCoins()


    }, [currency])

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 3
        }
    }

    // JS function Intl.NumberFormat to convert number to currency
    //format.
    let dollarUSLocale = Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
    });
    let dollarIndianLocale = Intl.NumberFormat('en-IN', {
        style: "currency",
        currency: "INR",
    });

    const items = trending.map((coin) => {
        //return a boolean value if profit is more than 0
        let profit = coin.price_change_percentage_24h > 0


        return (
            <Link
                className={classes.carouselItem}
                to={`/coins/${coin.id}`}
            >
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height='80'
                    style={{ marginBottom: 10 }}
                />
                <span    >
                    {coin?.symbol.toUpperCase()}
                </span>
                {/* if profit , conditionally render profit value in green color otherwise in red */}
                <span style={{ color: profit ? 'green' : 'red', fontSize: 20 }}  >
                    {profit && '+'}{coin?.price_change_percentage_24h?.toFixed(2)}%
                </span>
                <span>
                    {

                        currency === 'USD' ? dollarUSLocale.format(coin?.current_price.toFixed(2)) :
                            dollarIndianLocale.format(coin?.current_price.toFixed(2))
                    }
                </span>

            </Link>
        )
    })


    return (
        <div className={classes.carousel} >

            <AliceCarousel
                mouseTracking
                autoPlay
                disableDotsControls
                animationDuration={1500}
                autoPlayInterval={1000}
                animationType='slide'
                infinite
                keyboardNavigation
                items={items}
                responsive={responsive}
            />
        </div>
    )
}

export default Carousel