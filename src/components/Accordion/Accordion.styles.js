import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        backgroundColor: '#f8f8f8',

        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '@media (max-width: 400px)': {
            backgroundColor: '#fff'
        }
}));

export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
        backgroundColor: '#f8f8f8',
        padding: 0,
        '@media (max-width: 400px)': {
            backgroundColor: '#fff'
        },

        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {

    },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: '#f8f8f8',
    width: '100%',
    padding: 0,
    margin: 0,
}));
