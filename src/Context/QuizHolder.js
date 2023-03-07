import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "Name the person who replaced Ozzy Osbourne as Black Sabbath's lead singer?",
        "a": "Ronnie James Dio",
        "b": "Judas Priest",
        "c": "Dokken",
        "d": "Whitesnake",
        "correct": "a"
    },
    {
        "question": "To consider a band as a Big Band what is the minimum number of musicians to be needed?",
        "a": "11",
        "b": "21",
        "c": "12",
        "d": "10",
        "correct": "d"
    },
    {
        "question": " In an Orchestra, which is the largest brass section instrument?",
        "a": "Trumpet",
        "b": "Tenor",
        "c": "French horns",
        "d": "Tuba",
        "correct": "d"
    },
    {
        "question": "Name the singer who released the album, Here, My Dear?",
        "a": "Frankie Gaye",
        "b": "Bruno Mars",
        "c": "Elton John",
        "d": "Marvin Gaye",
        "correct": "d"
    },
    {
        "question": "A tribute to David Bowie's ex-wife was given with a song by The Rolling stones, name the song?",
        "a": "Wild Horses",
        "b": "Gimme Shelter",
        "c": "Angie",
        "d": "Satisfaction ",
        "correct": "c"
    },
    {
        "question": "Name the orchestral instrument that can play high note?",
        "a": "Viola",
        "b": "Piccolo",
        "c": "Violin",
        "d": "Cellos",
        "correct": "c"
    },
    {
        "question": "What does a spectrum mean?",
        "a": "Stick",
        "b": "Guitar pick",
        "c": "Showel",
        "d": "Matchstick",
        "correct": "b"
    },
    {
        "question": "The number of strings on a Ukulele is?",
        "a": "3",
        "b": "6",
        "c": "4",
        "d": "8",
        "correct": "c"
    },
    {
        "question": "Name the lead singer born Farrokh Bulsara?",
        "a": "Brian May",
        "b": "Rami Malek",
        "c": "Freddie Mercury",
        "d": "Jim Hutton",
        "correct": "c"
    },
    {
        "question": "Marimba means ________?",
        "a": "Balafon",
        "b": "Txalaparta",
        "c": "Laggutu",
        "d": "Bass xylophone",
        "correct": "d"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
