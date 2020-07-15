import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
// import { Redirect } from 'react-router-dom'
import { createComment } from '../store/actions/commentActions'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './Comment.css';

class Comment extends React.PureComponent {

  state = {    
    comments: [],   
    form: {   
      name: this.props.profile.initials,    
      comment: ''    
    },

    idVideo: this.props.idVideo, 
    disabled:true,
    validMessage:'', 

  }  
  
  componentWillReceiveProps = (newProps) => {
    this.setState({form: {    
      name: newProps.profile.initials,    
      comment: ''   
    }})
  }
   
  componentDidMount() {     
    let idVideo =  this.props.idVideo;  
    // if (localStorage.getItem('state'+ idVideo)) {    
    //   this.setState({ ...JSON.parse(localStorage.getItem('state'+ idVideo)) })  
    // }
    
    if (localStorage.getItem('state'+ idVideo)) {    
      this.setState({ comments: JSON.parse(localStorage.getItem('state'+ idVideo)) })  
    }  
  }  
     
   
  addComment = (e) => { 
    e.target.blur();
    let idVideo =  this.props.idVideo;
     this.setState({   
      comments: [    
         ...this.state.comments,  
        { 
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1, // max id +1
          name: this.state.form.name,
          comment: this.state.form.comment,   
          date: new Date().toLocaleString(),
         }
  
      ],
   
      form: {    
        name: this.state.form.name,    
        comment: ''   
      }
   
    }, () => localStorage.setItem('state'+ idVideo, JSON.stringify(this.state.comments)));
   
    // this.props.createComment(this.state.idVideo, this.state.form);
    // this.props.createComment(this.state.idVideo, this.state.comments
    // () => localStorage.setItem('state'+ idVideo, JSON.stringify(this.state.comments))

    
   
  }     
  
  removeComment = (id) => {
    let idVideo =  this.props.idVideo;        
    this.setState({  
      comments: this.state.comments.filter(comment => comment.id !== id)    
    }, () => localStorage.setItem('state' + idVideo, JSON.stringify(this.state.comments)))
  
  }     
    
   handleChange = (e) => {  
     console.log(e.target.name)    
    this.setState({
        
      form: {    
         ...this.state.form,  
          [e.target.name]: e.target.value,   
       }
    
    })    
  }
  
  validation = () => {
    (this.state.form.comment == "")?
      (this.setState({validMessage: "*Пожалуйста, напишите свой комментарий", disabled: true })):
      (this.setState({validMessage: "", disabled: false}));  

 }
    
  render() {
    const {auth, profile} = this.props;
    const links = auth.uid? (<span >{profile.initials}</span> ) : null; 
       

    return (
      <TransitionGroup>            
        {this.state.comments.map(comment => 
        <CSSTransition key={comment.id} timeout={500} classNames="item">
        <div className="CommentContainer" >    
          {/* <span>{comment.id}</span>     */}
          <p className="CommentName">{comment.name} {comment.date}   </p>         
          <p className="Comment">{comment.comment}</p>
         
          {(auth.uid === '9FVxvCsLrNgOIlkTUcV7qKUwbPB2') ? (<button onClick={this.removeComment.bind( undefined ,comment.id)}>Удалить комментарий</button>  ) : null}
        </div>
        </CSSTransition>
        )
        } 

        <div className="CommentContainer">  
         <div>           
          <p className="CommentTextareaTitle">{links}  оставьте ваш комментарий:</p>
          <textarea className="CommentTextarea"  name="comment" value={this.state.form.comment} onChange={this.handleChange} onBlur={this.validation}></textarea>  
          <p className='ValidMessage'>{this.state.validMessage}</p>
          <div>
          <button className="CommentBtn" onClick={this.addComment} disabled={this.state.disabled}>Добавить</button>
          </div>   
        </div>


       </div>
      </TransitionGroup>  
     )  
   }    
}
  
const mapStateToProps = (state) => { 
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    // order: state.firestore.ordered.order,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createComment: (idVideo, comment) => dispatch(createComment(idVideo, comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { collection: 'order' }
//   ])
// )(Comment)