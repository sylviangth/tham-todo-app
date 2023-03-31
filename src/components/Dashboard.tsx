import SelectedTask from "./SelectedTask";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import MusicPlayer from "./MusicPlayer";

interface Props {
  selectedName: string;
  selectedTag: string;
  totalTasks: number;
  completedTasks: number;
}

const Dashboard = function ( { selectedName, selectedTag, totalTasks, completedTasks } : Props ) {
  return (
    <div className="container bg-light p-4 mt-5 rounded-3 shadow-lg">
      <h3 className="text-primary">Focus zone</h3>
      <ProgressBar totalTasks={totalTasks} completedTasks={completedTasks}/>
      <SelectedTask name={selectedName} tag={selectedTag}/>
      <Timer />
      <MusicPlayer />
    </div>
  )
}

export default Dashboard;