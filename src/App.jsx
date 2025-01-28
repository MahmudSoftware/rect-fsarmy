const task = {
  id: "unique_id",
  subtitle: "Subtitle",
  careatedAt: "2025-01-28T07:42:25.978Z",
  tags: [
    {
      id: "tag-001",
      text: "Its Done",
      icon: "T",
    },
    {
      id: "tag-002",
      text: "Its Done 2",
      icon: "C",
    },
    {
      id: "tag-004",
      text: "Its in progress",
      icon: "P",
    },
    {
      id: "tag-004",
      text: "Roted",
      icon: "G",
    },
  ],
  comments: [
    {
      id: "comment-id",
      user: {
        id: "userId",
        name: "User Name",
        avatar: "https://www.google.com/avatar.png",
      },
      text: "loremI psum",
    },
  ],
  task: [
    {
      id: "task-001",
      title: "jhon Doe",
      text: "Here Clean",
      status: "done",
    },
    {
      id: "task-002",
      title: "jhon Doe 2",
      text: "Here Clean",
      status: "done",
    },
    {
      id: "task-003",
      title: "jhon Doe 3",
      text: "Here Clean",
      status: "done",
    },
    {
      id: "task-004",
      title: "jhon Doe 4",
      text: "Here Clean",
      status: "done",
    },
  ],
};

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 return days[date];
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}


console.log(getDay(task.careatedAt));
console.log(formatDate(task.careatedAt));



export default function App() {
  return <div>
    <h1>{ getDay(task.careatedAt)},{formatDate(task.careatedAt)}</h1>
    <h3>{ task.subtitle }</h3>
  </div>;
}
