import * as React from 'react';

const Link = ({href, text}: {href: string, text: string}) => (
    <a href={href}>{text}</a>
);

export default Link;