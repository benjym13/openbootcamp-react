import React, { useState } from 'react'
import getChuckJokes from '../../services/chuckService';
// Material UI
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import  Typography  from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { green, red } from '@mui/material/colors';

const Chuck = () => {
    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0)


    const getJoke = () => {
        getChuckJokes()
            .then((response) => {
                console.log(response.data.value);
                setJoke(response.data)
            })
            .catch()
    }

    const setLike = () => {
        setLikes(likes + 1);
        getJoke();
    }
    const setDislike = () => {
        setDislikes(dislikes + 1);
        getJoke();
    }

    return (
        <div>
            <div>
                <h2>Counter</h2>
                <p>Chistes Valorados positivamente - {likes}</p>
                <p>Chistes Valorados negativamente - {dislikes}</p>
            </div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {
                    joke != null ?
                    (
                        <div>
                            <Typography variant='body1'mb={2}>{joke.value}</Typography>
                            <div>
                                <ThumbUpIcon  sx={{ color:green[400] }} onClick={setLike} />
                                <span style={{marginInline:'8px 16px'}}>{likes}</span>
                                <ThumbDownAltIcon ml={3} sx={{ color: red[400] }}onClick={setDislike}/>
                                <span style={{marginInline:'8px 16px'}}>{dislikes}</span>
                            </div>
                        </div>

                    ) :
                    (<Typography variant='body1' mb={2}>No hay chistes sobre Chuck Norris</Typography>)
                }
                <Button variant='contained'onClick={getJoke}>give me a Joke</Button>
            </Grid>
        </div>
    )
}

export default Chuck
