import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React, { useEffect,useState } from "react";
import styles from "./Dialog.module.scss";

export default function DialogWindow() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Button
          className="d-flex gap-2 p-2 text-white bg-primary fw-bold"
          variant="outlined"
          onClick={handleClickOpen}
        >
          <i className="fa-solid fa-location-dot fs-4"></i> Location
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div className={styles.dialog}>
                <h2>Hər kəsə 11.9% ilə nağd kredit💸</h2>
                <span>
                  Kampaniya çərçivəsində 35000 AZN-dək krediti illik cəmi 11.9%
                  ilə onlayn əldə edin!
                </span>
                <button className={styles.linkBtn}>3 dəqiqəyə al</button>
                <button onClick={handleClose} className={styles.close}>Bağla</button>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
