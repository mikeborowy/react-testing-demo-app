// eslint-disable-next-line
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveComment, fetchComments} from 'reducers/comments';
// import {bindActionCreators} from 'redux';

const propTypes = {
};
  
const defaultProps = {
};

class CommentBox extends React.Component {

    state = {
        comment: ''
    };

    handleChange = (evt) => {
        this.setState({comment: evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea 
                        onChange={this.handleChange}
                        value={this.state.comment} />
                    <div>
                        <button>Subbmit comment</button>
                    </div>
                </form>
                <button className="fetch-comments-btn" onClick={this.props.fetchComments}>Fetch comment</button>
            </div>
        );
    }
}

CommentBox.propTypes = propTypes;
CommentBox.defaultProps = defaultProps;

// function mapStateToProps(state) {
//   return {
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    saveComment, 
    fetchComments
  }, dispatch);
}

export default connect(
  null, 
  mapDispatchToProps
)(CommentBox);