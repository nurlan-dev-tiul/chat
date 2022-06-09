import React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion.styles';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

export const AccordionCustom = ({children, title, panel}) => {
    const [expanded, setExpanded] = React.useState('panel2');

    const handleChange = (panelf) => (event, newExpanded) => {
        setExpanded(newExpanded ? panelf : false);
    };

    return(
        <>
            <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </>
    );
}