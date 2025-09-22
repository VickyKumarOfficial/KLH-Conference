export interface ScheduleSession {
  id: string;
  time: string;
  title: string;
  type: 'registration' | 'welcome' | 'speech' | 'panel' | 'lunch' | 'session' | 'break';
  speakers?: string[];
  moderator?: string;
  description?: string;
  location?: string;
}

export interface ScheduleDay {
  date: string;
  dayName: string;
  sessions: ScheduleSession[];
}

export const conferenceSchedule: ScheduleDay[] = [
  {
    date: "16/02/2026",
    dayName: "Friday",
    sessions: [
      {
        id: "reg-1",
        time: "09:00-10:30",
        title: "Registrations",
        type: "registration",
        description: "Conference registration and welcome refreshments"
      },
      {
        id: "welcome-1",
        time: "10:30-10:35",
        title: "Welcome Speech",
        type: "welcome",
        speakers: ["Dr. Tanushree Sarakar"]
      },
      {
        id: "welcome-2",
        time: "10:35-10:40",
        title: "Welcome Song and Lighting the Lamp",
        type: "welcome"
      },
      {
        id: "principal-speech",
        time: "10:40-10:55",
        title: "Speech by Principal",
        type: "speech",
        speakers: ["Dr. A. Rama Krishna"],
        moderator: "Dr. Tanushree Sarkar, KL University"
      },
      {
        id: "convener-speech",
        time: "10:55-11:00",
        title: "Convener speech",
        type: "speech",
        speakers: ["Dr. O. Kranthi Priya"],
        moderator: "KL University"
      },
      {
        id: "inaugural-speech",
        time: "11:00-12:00",
        title: "Inaugural Speech by Chief Guest",
        type: "speech",
        speakers: ["Prof. Narasimha Rao"],
        description: "EFL-U Hyderabad"
      },
      {
        id: "panel-1",
        time: "12:00-01:00",
        title: "Panel Discussion 1",
        type: "panel",
        speakers: [
          "Prof. Narasimha Rao (EFL-U Hyderabad)",
          "Prof. T. Samson (EFL-U, Hyderabad)",
          "Dr. Spoorthi Boda (NIT-Warangal)",
          "Dr. Tabitha Chekuri (Mahindra University, Hyderabad)"
        ],
        moderator: "Dr. O. Kranthi Priya, KL University"
      },
      {
        id: "lunch-1",
        time: "1:00-2:00",
        title: "Lunch",
        type: "lunch"
      },
      {
        id: "session-1",
        time: "2:00-03:00",
        title: "Session 1",
        type: "session",
        speakers: [
          "ICLLP-1: Paper Presenter 1",
          "ICLLP-2: Paper Presenter 2",
          "ICLLP-3: Paper Presenter 3",
          "ICLLP-4: Paper Presenter 4",
          "ICLLP-5: Paper Presenter 5",
          "ICLLP-6: Paper Presenter 6"
        ],
        moderator: "Dr. Spoorthi Boda, NIT Warangal"
      },
      {
        id: "session-2",
        time: "02:00-03:50",
        title: "Session 2",
        type: "session",
        speakers: [
          "ICLLP-7: Paper Presenter 7",
          "ICLLP-8: Paper Presenter 8",
          "ICLLP-9: Paper Presenter 9",
          "ICLLP-10: Paper Presenter 10"
        ],
        moderator: "Dr. Manoj Kumar Yadav, NIT Hamirpur"
      }
    ]
  },
  {
    date: "17/02/2026",
    dayName: "Saturday",
    sessions: [
      {
        id: "session-3",
        time: "09:00-10:30",
        title: "Session 3",
        type: "session",
        speakers: [
          "ICLLP-12: Paper Presenter 12",
          "ICLLP-13: Paper Presenter 13",
          "ICLLP-14: Paper Presenter 14",
          "ICLLP-15: Paper Presenter 15",
          "ICLLP-16: Paper Presenter 16",
          "ICLLP-17: Paper Presenter 17",
          "ICLLP-18: Paper Presenter 18",
          "ICLLP-19: Paper Presenter 19",
          "ICLLP-20: Paper Presenter 20"
        ],
        moderator: "Dr. Sundeep Maneri"
      },
      {
        id: "session-4",
        time: "10:30-11:30",
        title: "Session 4",
        type: "session",
        speakers: [
          "ICLLP-21: Paper Presenter 21",
          "ICLLP-22: Paper Presenter 22",
          "ICLLP-23: Paper Presenter 23",
          "ICLLP-24: Paper Presenter 24",
          "ICLLP-25: Paper Presenter 25",
          "ICLLP-26: Paper Presenter 26"
        ],
        moderator: "Dr. G. Upender"
      },
      {
        id: "session-5",
        time: "11:00-12:30",
        title: "Session 5",
        type: "session",
        speakers: [
          "ICLLP-27: Paper Presenter 27",
          "ICLLP-28: Paper Presenter 28",
          "ICLLP-29: Paper Presenter 29",
          "ICLLP-30: Paper Presenter 30",
          "ICLLP-31: Paper Presenter 31",
          "ICLLP-32: Paper Presenter 32"
        ],
        moderator: "Dr. G. Kiran Kumar"
      },
      {
        id: "lunch-2",
        time: "12:30-01:30",
        title: "Lunch",
        type: "lunch"
      },
      {
        id: "panel-2",
        time: "01:30-02:30",
        title: "Panel Discussion 2",
        type: "panel",
        speakers: [
          "Prof. M. E. Veda Sharan (EFL-U, Hyderabad)",
          "Dr. Dr. Vamshi Krishna (University of Hyderabad)",
          "Dr. Maneri Sundeep (Sr. Lecturer, Polytechnic College, AP)",
          "Dr. Manoj Kumar Yadav (NIT-Hamirpur)"
        ],
        moderator: "Dr. Tanushree Sarkar, KL University"
      },
      {
        id: "valedictory",
        time: "02:00-03:00",
        title: "Valedictory Speech",
        type: "speech",
        speakers: ["Dr. M. E. Veda Sharan"],
        description: "EFL-U, Hyderabad",
        moderator: "Dr. B. Chandra Shekar, KL University"
      },
      {
        id: "vote-thanks",
        time: "03:00-03:50",
        title: "Vote of Thanks and Certificate Distribution",
        type: "welcome",
        moderator: "Dr. O. Kranthi Priya, KL University"
      }
    ]
  }
];

export const getSessionTypeColor = (type: ScheduleSession['type']) => {
  const colors = {
    registration: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
    welcome: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
    speech: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
    panel: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200",
    lunch: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
    session: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
    break: "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200"
  };
  return colors[type] || colors.session;
};