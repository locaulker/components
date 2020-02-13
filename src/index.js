import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () =>
{
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <h3>Demo Child Components</h3>
        <p>We believe that to date a social order has been formed for the general theory of advertising.</p>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45 PM"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00 AM"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00 PM"
          content={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
