import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function MobileAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Kreditlər</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>İpoteka</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Əmanətlər</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Kartlar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>Pul köçürmələri</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>Cari hesab</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>Elektron xidmətlər</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography>Bank 24/7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography>QayğıCash klubu</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography>Avtomatik endirim</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11a-content"
          id="panel11a-header"
        >
          <Typography>Kampaniyalar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
