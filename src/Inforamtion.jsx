import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './style.css'
export default function Info({Data}) {
    const initail_image = "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2t5fGVufDB8fDB8fHww"
    const Cold_image = "https://images.unsplash.com/photo-1643047404540-37970282b3f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    const Dirty_image = "https://images.unsplash.com/photo-1514519273132-6a1abd48302c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    const rainy_day = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    return (
        <div className='divs2'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={Data.Humidity >80 ? rainy_day : Data.temp > 15  ? Dirty_image : Cold_image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" id='n3'  >
                        {Data.City}&nbsp; {Data.Humidity >80 ? <ThunderstormIcon/> : Data.temp > 15  ? <WbSunnyIcon/> :  <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"} id='n1'>
                        <p>Temperature : {Data.temp}</p>
                        <p>Humidity : {Data.temp}</p>
                        <p>Max Temperature : {Data.Maximum_temp}&deg;C</p>
                        <p>Min Temperature : {Data.Minimul_temp}</p>
                        <p>THe Weather Can Be Describes As <b>{Data.Weather}</b> And feels Like <b>{Data.FeelsLike}</b></p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}