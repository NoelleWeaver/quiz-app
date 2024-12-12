import React from 'react';
import QuizTheme from '../components/QuizTheme';

function Quiz() {
    let data = [
            {
                "id": 1,
                "title": "Question 1",
                "question": "Who is the lead singer in Soundgarden?",
                "options": ["sdjasdja", "dnjksnnsldv", "ansjkcnakj", "Chris Cornell"],
                "correct_answer": "Chris Cornell"
            },
            {
                "id": 2,
                "title": "Question 2",
                "question": "What is the name of the band that released the album 'The Dark Side of the Moon'?",
                "options": ["Pink Floyd", "Led Zeppelin", "Queen", "The Beatles"],
                "correct_answer": "Pink Floyd"
            },
            {
                "id": 3,
                "title": "Question 3",
                "question": "Which British rock band released the album 'A Night at the Opera' in 1975?",
                "options": ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
                "correct_answer": "Queen"
            },
            {
                "id": 4,
                "title": "Question 4",
                "question": "Which American rock band released the album 'Thriller' in 1982?",
                "options": ["Pink Floyd", "Queen", "The Beatles", "Nirvana"],
                "correct_answer": "Pink Floyd"
            },
            {
                "id": 5,
                "title": "Question 5",
                "question": "Who wrote the song 'Bohemian Rhapsody'?",
                "options": ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
                "correct_answer": "Queen"
            },
            {
                "id": 6,
                "title": "Question 6",
                "question": "Who is the lead singer in the band 'The Rolling Stones'?",
                "options": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
                "correct_answer": "John Lennon"
            },
            {
                "title": "Question 7",
                "question": "Which American singer-songwriter released the album '1989' in 1991?",
                "options": ["Michael Jackson", "Billie Eilish", "The Weeknd", "Ariana Grande"],
                "correct_answer": "Ariana Grande"
            },
            {
                "title": "Question 8",
                "question": "Which American singer-songwriter released the album 'The Dark Side of the Moon' in 1973?",
                "options": ["Michael Jackson", "Billie Eilish", "The Weeknd", "Ariana Grande"],
                "correct_answer": "Pink Floyd"
            },
            {
                "title": "Question 9",
                "question": "Who wrote the song 'Stairway to Heaven'?",
                "options": ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
                "correct_answer": "Led Zeppelin"
            },
            {
                "title": "Question 10",
                "question": "Who is the lead singer in the band 'The Beatles'?",
                "options": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
                "correct_answer": "George Harrison"
            },
            {
                "title": "Question 11",
                "question": "Which American singer-songwriter released the album 'Sgt. Pepper's Lonely Hearts Club Band' in 1967?",
                "options": ["Michael Jackson", "Billie Eilish", "The Weeknd", "Ariana Grande"],
                "correct_answer": "The Beatles"
            },
            {
                "title": "Question 12",
                "question": "Who is the lead singer in the band 'Nirvana'?",
                "options": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
                "correct_answer": "George Harrison"
            },
            {
                "title": "Question 13",
                "question": "Which American singer-songwriter released the album 'Abbey Road' in 1969?",
                "options": ["Michael Jackson", "Billie Eilish", "The Weeknd", "Ariana Grande"],
                "correct_answer": "The Beatles"
            },
            {
                "title": "Question 14",
                "question": "Who is the lead singer in the band 'The Who'?",
                "options": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
                "correct_answer": "John Lennon"
            },
            {
                "title": "Question 15",
                "question": "Who wrote the song 'Bohemian Rhapsody'?",
                "options": ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
                "correct_answer": "Queen"
            },
            {
                "title": "Question 16",
                "question": "Which American singer-songwriter released the album '1975' in 1976?",
                "options": ["Michael Jackson", "Billie Eilish", "The Weeknd", "Ariana Grande"],
                "correct_answer": "Michael Jackson"
            },
            {
                "title": "Question 17",
                "question": "Who wrote the song 'Bohemian Rhapsody'?",
                "options": ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
                "correct_answer": "Queen"
            },
            {
                "title": "Question 18",
                "question": "Who is the lead singer in the band 'The Beatles'?",
                "options": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
                "correct_answer": "George Harrison"
            },
            {
                "title": "Question 19",
                "question": "Who is the lead singer in the band 'The Who'?",
                "options": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
                "correct_answer": "John Lennon"
            },
            {
                "title": "Question 20",
                "question": "Who wrote the song 'Bohemian Rhapsody'?",
                "options": ["Queen", "The Beatles", "Led Zeppelin", "Pink Floyd"],
                "correct_answer": "Queen"
            }
        ]   
    return (
        <>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <QuizTheme  {...data} />
            </div>
        </>
    );
}

export default Quiz;