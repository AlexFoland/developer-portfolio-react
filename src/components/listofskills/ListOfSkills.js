import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><strong>Frontend technologies</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        HTML, CSS, SCSS, JavaScript, ReactJS, TypeScript, Router, MaterialUI, BootStrap
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography><strong>Backend technologies</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        NodeJS, NextJS, PHP
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography><strong>UX/UI</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Figma
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography><strong>С#</strong></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        WinForms, Unity
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}