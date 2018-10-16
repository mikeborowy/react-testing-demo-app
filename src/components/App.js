import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         Test
//       </div>
//     );
//   }
// }

// export default App;

export default () => {
  return(
    <div>
      <CommentBox />
      <CommentList />
    </div>
  )
}
