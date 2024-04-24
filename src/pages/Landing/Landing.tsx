import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Markdown from 'markdown-to-jsx';

const Landing = () => {
    const [markdown, setMarkdown] = useState('');
    const theme = useTheme();

    useEffect(() => {
        fetch('/src/pages/Landing/readme.md')
            .then(response => response.text())
            .then(text => setMarkdown(text));
    }, []);

    return (
        <Markdown
            options={{
                overrides: {
                    a: {
                        props: {
                            style: { color: theme.palette.primary.main },
                        },
                    },
                    img: {
                        props: {
                            style: { maxWidth: '50%', height: 'auto' },
                        },
                    },
                },
            }}
        >
            {markdown}
        </Markdown>
    );
};

export default Landing;