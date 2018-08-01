import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const PostForm = (props) => {
  const { open, handleClose, handleSubmit, title, body, submit, id } = props;
  const { onChange } = props;
  const heading = submit === "add" ? "Add" : "Edit";
  return (
    <Dialog
      open={open}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">{heading} Post</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth={true}
          onChange={onChange}
          value={title}
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
        <Button onClick={() => handleSubmit(submit, {title, body, id})} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  id: state.post.newPost.id,
  title: state.post.newPost.title,
  body: state.post.newPost.body
});

export default connect(mapStateToProps)(PostForm);
