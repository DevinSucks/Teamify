export const summary = {
  totalTasks: 1,
  last10Task: [
    {
      _id: "65c5f12ab5204a81bde866a9",
      title: "Test task",
      date: "2024-02-09T00:00:00.000Z",
      priority: "high",
      stage: "todo",
      team: [
        {
          _id: "65c317360fd860f958baa08e",
          name: "Rahul Gandhi",
          title: "UX Designer",
          email: "alex.johnson@example.com",
        },
      ],
      isTrashed: false,
      activities: [],
      subTasks: [
        {
          title: "Task manager",
          date: "2024-02-09T00:00:00.000Z",
          tag: "tutorial",
          _id: "65c5f153b5204a81bde866c8",
        },
      ],
      createdAt: "2024-02-09T09:32:26.574Z",
      updatedAt: "2024-02-09T09:36:53.339Z",
      __v: 1,
    },
  ],
  users: [
    {
      _id: "65c5f27fb5204a81bde86833",
      name: "New User",
      title: "Designer",
      role: "Developer",
      isActive: true,
      createdAt: "2024-02-09T09:38:07.765Z",
    },
    {
      _id: "65c3176a0fd860f958baa099",
      name: "Rohan Bhatia",
      title: "Data Analyst",
      role: "Analyst",
      isActive: true,
      createdAt: "2024-02-07T05:38:50.816Z",
    },
    {
      _id: "65c317360fd860f958baa08e",
      name: "Rahul Gandhi",
      title: "UX Designer",
      role: "Designer",
      isActive: true,
      createdAt: "2024-02-07T05:37:58.862Z",
    },
    {
      _id: "65c30b96e639681a13def0b5",
      name: "Jane Smith",
      title: "Product Manager",
      role: "Manager",
      isActive: true,
      createdAt: "2024-02-07T04:48:22.519Z",
    },
    {
      _id: "65c202d4aa62f32ffd1303cc",
      name: "Manoj Shahi",
      title: "Administrator",
      role: "Admin",
      createdAt: "2024-02-06T09:58:44.794Z",
      isActive: true,
    },
  ],
  tasks: {
    todo: 6,
    "in progress": 3,
    completed: 1,
  },
};

export const tasks = [
  {
    _id: "65c5f12ab5204a81bde866a9",
    title: "Test task",
    date: "2024-02-09T00:00:00.000Z",
    priority: "high",
    stage: "todo",
    team: [
      {
        _id: "65c317360fd860f958baa08e",
        name: "Rahul Gandhi",
        title: "UX Designer",
        email: "rahulgandhi@hotmail.com",
      },
    ],
    isTrashed: false,
    activities: [],
    subTasks: [
      {
        title: "Task manager",
        date: "2024-02-09T00:00:00.000Z",
        tag: "tutorial",
        _id: "65c5f153b5204a81bde866c8",
      },
    ],
    createdAt: "2024-02-09T09:32:26.574Z",
    updatedAt: "2024-02-09T09:36:53.339Z",
    __v: 1,
  },
];

export const user = {
  _id: "662f32ffd1303cc",
  name: "Codewave",
  title: "Administrator",
  role: "Admin",
  email: "admin@mts.com",
  isAdmin: true,
  tasks: [],
  createdAt: "2024-02-06T09:58:44.794Z",
  updatedAt: "2024-02-07T06:13:26.757Z",
  __v: 0,
  isActive: true,
};
