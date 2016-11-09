import React, { Component } from 'react';

import '../styles/Question.css';


export default class Question extends Component {
  constructor(props) {
    super()
  }

  render() {
    console.log(this.props);
    return(
      <div className='question-answer'>
        <div className='question-title-background'>
          <h3 className='question-title'>{this.props.title}</h3>
        </div>
        {this.props.answers.map((answer ,i) => {
          return(
            <div key={i} className='answer'>
              <label>
                <input
                  type='radio'
                  value={answer.score}
                  className='checkbox'
                  name={this.props.id}
                />
                  {answer.title}
              </label>
            </div>
          )
        })}
      </div>
    )
  }
}
