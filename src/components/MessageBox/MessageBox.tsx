import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMessageBoxStore } from "./store";
import { Box } from "@mui/material";

export function MessageBoxContainer() {
  const list = useMessageBoxStore((state) => state.list);
  const close = useMessageBoxStore((state) => state.close);

  return (
    <React.Fragment>
      {list.map((item) => {
        const {
          open,
          id,
          title,
          content,
          type,
          hideBackDrop,
          promise,
          primaryAction = {
            label: "OK",
            onClick(_, item) {
              close(item.id);
            },
          },
          otherAction = [
            {
              label: "CANCEL",
              onClick(_, item) {
                close(item.id);
              },
            },
          ],
        } = item;

        return (
          <Dialog
            open={open}
            key={id}
            disableEscapeKeyDown
            hideBackdrop={hideBackDrop}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
              <Box>{type}</Box>
              <DialogContentText id="alert-dialog-description">
                {content}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              {otherAction?.map((v, i) => (
                <Button
                  key={i}
                  onClick={async () => {
                    await v.onClick(v.label, item);
                    promise.re(v.label);
                  }}
                >
                  {v.label}
                </Button>
              ))}
              <Button
                onClick={async () => {
                  await primaryAction.onClick(primaryAction.label, item);
                  promise.re(primaryAction.label);
                }}
                autoFocus
              >
                {primaryAction.label}
              </Button>
            </DialogActions>
          </Dialog>
        );
      })}
    </React.Fragment>
  );
}
