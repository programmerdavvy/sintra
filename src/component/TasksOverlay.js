import {UncontrolledTooltip } from 'reactstrap'

function TasksOverlay() {


  return (
   <>
        <span  id='positionTop'>
        Tasks
        </span>
        <UncontrolledTooltip style={{backgroundColor:"#fff",color:'black',padding:'10px'}} placement='top' target='positionTop'>
        Each Nyxil Prompt card includes 1-5 prompts inside.
        </UncontrolledTooltip>
   </>
  );
}

export default TasksOverlay;