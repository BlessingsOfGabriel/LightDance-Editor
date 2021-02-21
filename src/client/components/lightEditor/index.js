import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Scrollbars from "react-custom-scrollbars";
// mui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// redux selector and actions
import {
  saveCurrentStatus,
  deleteCurrentStatus,
} from "../../slices/globalSlice";
// components
import SelectDancer from "./selectDancer";
import ElEditor from "./el";
import LedEditor from "./led";
import ModeSelector from "../modeSelector";
// constants

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
  selectDancer: {
    position: "fixed",
  },
  grow: {
    flexGrow: 1,
  },
}));

/**
 * LightEditor
 */
export default function LightEditor() {
  // styles
  const classes = useStyles();
  // redux
  const dispatch = useDispatch();

  // switch between ElEditor and LedEditor
  const ELEDITOR = "EL Editor",
    LEDEDITOR = "Led Editor";
  const [editor, setEditor] = useState(ELEDITOR);
  const handleChangeEditor = () => {
    setEditor(editor === ELEDITOR ? LEDEDITOR : ELEDITOR);
  };

  // save
  const handleSave = () => {
    dispatch(saveCurrentStatus());
  };
  // delete
  const handleDelete = () => {
    if (window.confirm(`Are you sure to delete ?`)) {
      dispatch(deleteCurrentStatus());
    }
  };

  // scroll bar config
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: "rgba(192,192,200, 0.5)",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <div id="editor" className={classes.root}>
      <ModeSelector handleSave={handleSave} handleDelete={handleDelete} />
      <SelectDancer className={classes.selectDancer} />
      <div className={classes.grow}>
        <Scrollbars renderThumbVertical={renderThumb}>
          <div>
            <Button variant="text" onClick={handleChangeEditor}>
              {editor}
            </Button>
            {editor === ELEDITOR ? <ElEditor /> : <LedEditor />}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
}