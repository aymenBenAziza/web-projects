marked.setOptions({
  breaks:true
})

const renderer = new marked.Renderer();

const App = () => {

  const [text, setText] = React.useState('');

  return (
    <>
      <div className="editorWrap">
        <div className="toolbar">
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
            Editor
          <i className="fa fa-arrows-alt"></i>
        </div>
        <textarea id="editor" value={text} onChange={ e => setText(e.target.value)}></textarea>
      </div>
      <Previewer markdown={text}/>
    </>
  );
}




const Previewer = ( { markdown } ) => {
  return (
    <>
      <div className="previewWrap">

        <div className="toolbar">
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          Previewer
          <i className="fa fa-arrows-alt"></i>
        </div>

        <div className="previewContent" id="preview"
          dangerouslySetInnerHTML= { {
            __html: marked(markdown, { renderer : renderer }),
          } }
        ></div>
      </div>
      
    </>
  );
};




ReactDOM.render(<App />, document.getElementById("root"));