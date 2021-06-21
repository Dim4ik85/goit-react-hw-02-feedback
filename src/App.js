import React from "react";
import PropTypes from 'prop-types';

import Layout from './components/Layout';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';


class App extends React.Component { 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


  countTotalFeedback() {

  }
  
  countPositiveFeedbackPercentage() {

  }


  render () {

    return (
      <div className="Layout">
        <Layout>
            <Section title="Please leave feedback">
              <FeedbackOptions 
                options={} 
                onLeaveFeedback={} />
            </Section>

            <Section title="Statistics">  
              <Statistics
                good={}
                neutral={}
                bad={}
                total={}
                positivePercentage={} />
            
                : <Notification message="No feedback given" />
            </Section>
        </Layout>
      </div>
    );
  }
}


export default App;
