import React, { Component } from 'react';
import axios from 'axios';

import Question from './Question'
import '../styles/Quiz.css'

export default class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      quiz: [],
    }
  }

  componentDidMount() {
    this.fetchQuiz();
  }

  fetchQuiz() {
    axios.get('/quizzes')
      .then((response) => {
        this.setState({ quiz: response.data.quizzes });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return(
      <div>
        {this.state.quiz.map((quiz) => {
          return (
            <div key={quiz.id}>
              <h1 className='quiz-title'>{quiz.title}</h1>
              <form >
              {quiz.questions.map((question) => {
                return (
                  <Question key={question.id} {...question}/>
                )
              })}
              <input type='submit' value='SUBMIT' />
              </form>
            </div>
          )
        })}
      </div>
    )
  }
}
