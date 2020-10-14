import React from 'react';
import Song from './Song';

export default function SongList(props){
    const listItems = props.songs.map(song => {
        return <Song song={song} key={song.id.attributes['im:id']}/>
    })

    
    return(
        <ol>
            {listItems}
        </ol>
    )
}