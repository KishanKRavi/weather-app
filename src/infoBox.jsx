import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import "./infoBox.css";

export default function Info({ data }) {
    const [image, setImage] = useState("");

    useEffect(() => {
        let imageUrl = "https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.webp?a=1&b=1&s=612x612&w=0&k=20&c=yzqICBAOz4R_V0ftpFpeRkrV1eIX_R3W8LmXcyfGnXg=";
        let sunny_url = "https://media.istockphoto.com/id/917178010/photo/road-panorama-on-sunny-spring-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=xBrnKPYdoOQjECCUCtGyVfg1987s6lr1Ek7Spxk-rRU=";
        let normalday_url = "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9ybWFsJTIwZGF5JTIwc2t5fGVufDB8fDB8fHww";
        let brightday_url = "https://media.istockphoto.com/id/921341724/photo/sunrise-in-the-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=C6VHSI60QtT84HlZ5KJMbFY_2UL414O0t6e59k4GTpE=";
        let darkday_url = "https://media.istockphoto.com/id/1023201682/photo/nimbus-moving.webp?a=1&b=1&s=612x612&w=0&k=20&c=h5BNZ1P2cCU7dwHUskA8Zt74uCkC5qiOPgzUcnrFmps=";
        let cloudy_url = "https://media.istockphoto.com/id/893092946/photo/clouds-in-the-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=gCufDDsEXKG21DVzbYJJ1S0-JfJK9x43hEAcWN6lss0=";
        let freeze_url = "https://images.unsplash.com/photo-1535025287458-e3badca98021?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZCUyMHdpdGglMjBpY2V8ZW58MHx8MHx8fDA%3D";
        let mountains_url = "https://media.istockphoto.com/id/485828690/photo/arctic-spring-in-south-spitsbergen.webp?a=1&b=1&s=612x612&w=0&k=20&c=vvzfXpk8XX67rA4qw8XRWb7SMK_Ti5-c51MSK0ZdtXQ=";

       

        if(data.temp <5){
            setImage(mountains_url);
        } else if (data.temp >=10 && data.temp <5) {
            setImage(freeze_url);
        } else if (data.temp >= 10 && data.temp < 14) {
            setImage(cloudy_url);
        } else if (data.temp >= 14 && data.temp < 18) {
            setImage(darkday_url);
        } else if (data.temp >= 18 && data.temp < 20) {
            setImage(normalday_url);
        } else if (data.temp >= 20 && data.temp < 24) {
            setImage(brightday_url);
        } else if (data.temp >= 24 && data.temp < 28) {
            setImage(sunny_url);
        } else {
            setImage(imageUrl);
        }
    });

    return (
        <>
            <br />
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title="weather"
                        alt="image of weather"
                    />
                    <CardContent className="content_card">
                        <Typography gutterBottom variant="h6" component="div">
                            {data.city.toUpperCase()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature = {data.temp}&deg;C</p>
                            <p>Maximum Temp = {data.tempMax}&deg;C</p>
                            <p>Minimum Temp = {data.tempMin}&deg;C</p>
                            <p>Humidity = {data.humidity}</p>
                            <p>
                                The weather is described as <b><i>{data.weather}</i></b> and feels like {data.feel}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
