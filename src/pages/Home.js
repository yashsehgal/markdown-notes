import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
    const [markdowndataRef, setMarkdownData] = useState('');
    return (
        <div className="home container">
            <div className="content-wrapper m-x-auto" 
                style={{ 
                    width: 'fit-content',
                    display: 'grid',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between'
                }}
            >
                <textarea type="text" onChange={(textInput) => setMarkdownData(textInput.target.value)} 
                    style={{
                        width: '500px',
                        height: '600px',
                        resize: 'none',
                    }}
                />
                <ReactMarkdown children={markdowndataRef} />
            </div>
        </div>
    )
}