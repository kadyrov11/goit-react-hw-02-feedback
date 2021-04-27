import React, { Component } from "react";

import Section from '../Section'
import Statistics from '../Statistics'
import FeedbackOptions from '../FeedbackOptions'
import Notification from '../Notification'

class SpaStatistic extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleClick = (stateName) => {
        this.setState((state) => {
            const value = state[stateName];
            return {
                [stateName]: value + 1,
            }
        })
    }

    countTotalFeedback = () => {
        const grades = Object.values(this.state);
        const result = grades.reduce((acum, value) => acum + value);
        return result;
        
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback()
        if(!total){
           return 0
        }
        const positivePercentage = ((good / total) * 100).toFixed()
        return positivePercentage
    }



    createOptions = () => {
        const options = [
            {
                id: '1',
                name: 'good',
                onClick: () => this.handleClick('good'),
            },
            {
                id: '2',  
                name: 'neutral',
                onClick: () => this.handleClick('neutral'),
            },
            {
                id: '3', 
                name: 'bad',
                onClick: () => this.handleClick('bad'),
            }
        ]
        return options
    } 

    render() {
        const { good, neutral, bad } = this.state;

        const total = this.countTotalFeedback()
        return (
            <>
            <Section title="Please leave feedback">
                <FeedbackOptions options={this.createOptions()} />
            </Section>
                <Section title="Statistics">
                    {total ?
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.countPositiveFeedbackPercentage()} /> :
                    <Notification message="No feedback given"/>
                    }
            </Section>                
            </>
        )
        
    }
}
export default SpaStatistic;