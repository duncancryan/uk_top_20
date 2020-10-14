import React from 'react';

export default function Song(props){


    return(
        <li>
            <img src={props.song['im:image'][1].label} alt="artwork"></img>
            <audio controls src={props.song.link[1].attributes.href}></audio>
            <p>{props.song.title.label}</p>
        </li>
    )
}