import { Typography } from '@mui/material';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

interface EmailBodyProps {
    onChange: (value: string) => void;
}

const EmailBody: React.FC<EmailBodyProps> = ({ onChange }) => {
    const [content, setContent] = useState<string>('');

    const handleChange = (value: string) => {
        setContent(value);
        onChange(value);
    };
    const formats = [
        'align',
        'bold',
        'italic',
        'underline',
        'strike',
        'font',
        'size',
        'list',
        'bullet',
        'indent',
        'link',
        'color',
    ];

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],        
            ['blockquote', 'code-block'],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      
            [{ 'indent': '-1' }, { 'indent': '+1' }],         
            [{ 'color': [] }, { 'background': [] }],          
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],  
            ['link', 'image', 'video'],
            ['clean'],
           
        ],
    };

    return (
        <div style={{ marginBottom: '42px' }}>
            <Typography style={{ fontSize: '14px', marginBottom: '4px', fontWeight: 700 }}>
                Email Body
            </Typography>
            <ReactQuill
                theme="snow" // Choose a theme, such as 'snow'
                value={content}
                onChange={handleChange} // Use onChange to update the content state
                modules={modules}
                formats={formats}
                style={{ height: '250px', whiteSpace: 'normal' }} // Set the height of the editor and allow text wrapping
            />
        </div>
    );
};

export default EmailBody;

