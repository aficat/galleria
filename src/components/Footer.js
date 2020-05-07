import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <p className="grey-text" align="center">
                    Copyright&nbsp;&nbsp;<CopyrightIcon style={{ fontSize: 16 }} />&nbsp;&nbsp;2020   Afiqah Rashid's Galleria
                        <br />
                </p>
            </div>
        );
    }
}

export default Footer;