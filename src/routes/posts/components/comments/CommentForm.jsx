import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const CommentForm = (props) => {
  const { open, handleClose, handleSubmit, submit, id, email, name, body } = props;
  const { onChange } = props;
  const heading = submit === "add" ? "Add" : "Edit";
  return (
    <Dialog
      open={open}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">{heading} Comment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="email"
          label="Email"
          type="email"
          fullWidth={true}
          onChange={onChange}
          value={email}
          disabled={submit !== "add"}
        />
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth={true}
          onChange={onChange}
          value={name}
        />
        <TextField
          margin="dense"
          name="body"
          label="Body"
          multiline={true}
          fullWidth={true}
          rows={2}
          rowsMax={10} 
          onChange={onChange}
          value={body}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={() => handleSubmit(submit, {id, email, name, body})} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  id: state.comment.comment.id,
  email: state.comment.comment.email,
  name: state.comment.comment.name,
  body: state.comment.comment.body
});

export default connect(mapStateToProps)(CommentForm);
