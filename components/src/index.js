import React from 'react'
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return (  
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4pm"
                    comment="Nice Text" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 5pm"
                    comment="Briliant"
                    avatar={faker.image.avatar()}
                />
             </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Yesterday at 1pm"
                    comment="this is ok"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
}



ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);