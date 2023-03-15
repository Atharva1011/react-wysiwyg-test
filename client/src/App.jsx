import React, { Component } from "react";
import { render } from "react-dom";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./App.scss";

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}

const App = () => {
  const global = globalThis;
  return (
    <div className="App">
      <div className="container">
        <div className="editor">
          <h1>This is the text container</h1>
          <div className="editorContainer">
            <EditorContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
