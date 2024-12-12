import React from 'react'
import './quizStyles.css';


export default function Quiz({info }) {
  
    return (
        <>
            <h1>Quiz App</h1>

            <div className="quiz-container">
                <h2 className="quiz-title"></h2>
                <form>
                    <input type="radio" name="question1_answer" value="HTML"/>
                    <label for="html"></label>
                    <input type="radio" name="question1_answer" value="CSS"/>
                    <label for="css"></label>
                    <input type="radio" name="question1_answer" value="JavaScript"/>
                    <label for="javascript"></label>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        </>
  )
}
