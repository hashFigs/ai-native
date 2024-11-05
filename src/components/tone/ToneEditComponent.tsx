import React from 'react'
import {Text} from 'react-native'

interface Itone {
    transcripts: [string],
}

const ToneEditComponent: React.FC<Itone> = ({transcripts}) => {

    return(
        <>
        <Text> This is the Edit component</Text>
        <Text>{transcripts[0]}</Text>
        </>
    )
}

export default ToneEditComponent;