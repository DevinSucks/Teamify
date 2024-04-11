export const summary = {
  totalTasks: 1,
  tasks: {
    todo: 6,
    "in progress": 3,
    completed: 1,
  },
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
      name: "Emily Wilson",
      title: "Data Analyst",
      role: "Analyst",
      isActive: true,
      createdAt: "2024-02-07T05:38:50.816Z",
    },
    {
      _id: "65c317360fd860f958baa08e",
      name: "Alex Johnson",
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
      name: "Codewave Asante",
      title: "Administrator",
      role: "Admin",
      createdAt: "2024-02-06T09:58:44.794Z",
      isActive: true,
    },
  ],
};

export const user = {
  _id: "662f32ffd1303cc",
  name: "rahul Gandhi",
  title: "Administrator",
  role: "Admin",
  email: "admin@mts.com",
  organisation: "cognizant",
  coins: "10",
  streak: "3",
  tasks: [
    {
      _id: "65c5f12ab5204a81bde866a9",
      title: "Test task",
      date: "2024-02-09T00:00:00.000Z",
      priority: "high",
      stage: "todo",
    },
  ],
  teams: [
    {
      id: "65c3531476ed5c48f9440965",
      name: "DevinSucks",
    },
  ],
  createdAt: "2024-02-06T09:58:44.794Z",
  updatedAt: "2024-02-07T06:13:26.757Z",
  __v: 0,
  isActive: true,
};

export const tasks = [
  {
    _id: "65c5f12ab5204a81bde866a9",
    title: "Test task",
    date: "2024-02-09T00:00:00.000Z",
    priority: "high",
    stage: "todo",
    coinsAlloted: 100,
    assets: [
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707471138863original-a005132062ca5bafc505c4c74f0e1865.jpg?alt=media&token=55f909f2-7f05-42f3-af4f-dc7f87cdea1d",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707471144712PsZch9E1_400x400.jpg?alt=media&token=7ce62c7e-c240-4032-83c6-bb6c9cdc0d4b",
    ],
    team: [
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Harsh Aggrawal",
        title: "Backend",
        role: "Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Harshit Parmar",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Priyam Pandey",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Anshul Verma",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
    ],
    activities: [
      {
        type: "started",
        activity: "Project started",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f18bb5204a81bde866d1",
      },
      {
        type: "commented",
        activity: "i like coding!!",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f19eb5204a81bde866dd",
      },
      {
        type: "bug",
        activity: "bug found",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f1abb5204a81bde866eb",
      },
    ],
    createdAt: "2024-02-09T09:32:26.574Z",
    updatedAt: "2024-02-09T09:36:53.339Z",
    __v: 1,
  },

  {
    _id: "65c5d547660756f6fd453a7a",
    title: "Duplicate - Duplicate - Review Code Changes",
    date: "2024-02-09T00:00:00.000Z",
    priority: "medium",
    stage: "in progress",
    coinsAlloted: 75,
    assets: [],
    members: [
      {
        _id: "65c317360fd860f958baa08e",
        name: "Alex Johnson",
        title: "UX Designer",
        email: "alex.johnson@example.com",
      },
      {
        _id: "65c3176a0fd860f958baa099",
        name: "Emily Wilson",
        title: "Data Analyst",
        email: "emily.wilson@example.com",
      },
    ],
    activities: [
      {
        type: "started",
        activity: "Project started",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f18bb5204a81bde866d1",
      },
      {
        type: "commented",
        activity: "i like coding!!",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f19eb5204a81bde866dd",
      },
      {
        type: "bug",
        activity: "bug found",
        date: "2024-02-09T09:16:56.623Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5f1abb5204a81bde866eb",
      },
    ],
    createdAt: "2024-02-09T07:33:27.590Z",
    updatedAt: "2024-02-09T09:36:10.386Z",
    __v: 4,
  },
  {
    _id: "65c46026af6ec0118be9407a",
    title: "Website Project Proposal Review",
    date: "2024-02-07T00:00:00.000Z",
    priority: "high",
    stage: "todo",
    coinsAlloted: 100,
    assets: [
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707410130023hand-holding-writing-checklist-application-form-document-clipboard-white-background-3d-illustration.jpg?alt=media&token=08de4848-517f-48ca-a9b4-624744d5ddb0",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412301523image_processing20220706-26930-ktfgon.png?alt=media&token=6cd185c1-9fc3-4f52-bb0b-0d4a29e65b85",
      "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707412306237image_processing20220706-11953-1f826f4.png?alt=media&token=7270475f-a994-41fd-8ae6-62e00f72b0b3",
    ],
    team: [
      {
        _id: "65c5f27fb5204a81bde86833",
        name: "New User",
        title: "Designer",
        role: "Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Harsh Aggrawal",
        title: "Backend",
        role: "Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Harshit Parmar",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Priyam Pandey",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Anshul Verma",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
    ],
    activities: [
      {
        type: "assigned",
        activity: "Test activity. Let's go!!!",
        date: "2024-02-08T17:55:34.353Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c5188be1585cfa650b79c4",
      },
      {
        type: "in progress",
        activity: "Project is progress. Hiope to fin=ish soon!!",
        date: "2024-02-08T17:55:34.353Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c518dce1585cfa650b79da",
      },
      {
        type: "bug",
        activity: "Bug found in the code. Kindly check and fixed ASAP!!!",
        date: "2024-02-08T18:13:14.717Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c51a5e8064df97d208b392",
      },
      {
        type: "commented",
        activity: "Nice work. Let's finished hard!!!",
        date: "2024-02-08T18:13:14.717Z",
        by: "65c202d4aa62f32ffd1303cc",
        _id: "65c51af08064df97d208b3b0",
      },
    ],
    createdAt: "2024-02-08T05:01:26.983Z",
    updatedAt: "2024-02-09T06:51:15.005Z",
    __v: 8,
  },
];

export const teams = [
  {
    id: "65c3531476ed5c48f9440965",
    name: "DevinSucks",
    dateCreated: "9-Feb-2024",
    members: [
      {
        _id: "65c5f27fb5204a81bde86833",
        name: "New User",
        title: "Designer",
        role: "Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Harsh Aggrawal",
        title: "Backend",
        role: "Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Harshit Parmar",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Priyam Pandey",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
      {
        _id: "65c5f27fb5204a81bde86843",
        name: "Anshul Verma",
        title: "Front-End",
        role: "React Developer",
        isActive: true,
        createdAt: "2024-02-09T09:38:07.765Z",
      },
    ],
    tasks: [
      {
        _id: "65c5f12ab5204a81bde866a9",
        title: "Test task",
        date: "2024-02-09T00:00:00.000Z",
        priority: "high",
        stage: "todo",
        coinsAlloted: 100,
        assets: [
          "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707471138863original-a005132062ca5bafc505c4c74f0e1865.jpg?alt=media&token=55f909f2-7f05-42f3-af4f-dc7f87cdea1d",
          "https://firebasestorage.googleapis.com/v0/b/taskmanager-557d7.appspot.com/o/1707471144712PsZch9E1_400x400.jpg?alt=media&token=7ce62c7e-c240-4032-83c6-bb6c9cdc0d4b",
        ],
        members: [
          {
            _id: "65c202d4aa62f32ffd1303cc",
            name: "Codewave Asante",
            title: "Administrator",
            email: "admin@gmail.com",
          },
          {
            _id: "65c30b96e639681a13def0b5",
            name: "Jane Smith",
            title: "Product Manager",
            email: "jane.smith@example.com",
          },
          {
            _id: "65c317360fd860f958baa08e",
            name: "Alex Johnson",
            title: "UX Designer",
            email: "alex.johnson@example.com",
          },
        ],
        activities: [],
        createdAt: "2024-02-09T09:32:26.574Z",
        updatedAt: "2024-02-09T09:36:53.339Z",
        __v: 1,
      },
    ],
  },
];
