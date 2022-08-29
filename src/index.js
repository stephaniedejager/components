import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>WARNING</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post!" 
                    avatar ='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' 
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Alex"
                timeAgo="Today at 2:00AM"
                content="I like the subject" 
                avatar ='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' 

            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Jane"
                timeAgo="Yesterday at 5:35PM"
                content="Good writing!" 
                avatar ='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 

            />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));