import * as React from 'react';

const styles = require('./Link.css');

const Link = ({href, children}: {href: string, children: string}) => (
    <a className={styles.Link} href={href}>{children}</a>
);

export default Link;