import Editor from "@monaco-editor/react";

const CodeEditor = () => {
    return (
    <div className='editor'>
        <Editor
            height="40vh"
            defaultLanguage="javascript"
            defaultValue=""
        />
    </div>
    );
}
 
export default CodeEditor;