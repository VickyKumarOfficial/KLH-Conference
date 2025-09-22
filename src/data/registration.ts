export interface RegistrationFee {
  category: string;
  offline: string;
  online: string;
}

export interface RegistrationDeadline {
  type: string;
  date: string;
}

export interface ContactInfo {
  name: string;
  phone: string;
}

export const registrationFees: RegistrationFee[] = [
  {
    category: "Faculty Presenter",
    offline: "RS. 2000/-",
    online: "RS. 1500/-"
  },
  {
    category: "Faculty Participant",
    offline: "RS. 1500/-",
    online: "RS. 1000/-"
  },
  {
    category: "Research Scholar & UG/PG Student Presenter",
    offline: "RS. 1500/-",
    online: "RS. 1000/-"
  },
  {
    category: "Research Scholars & UG/PG Participant",
    offline: "RS. 1000/-",
    online: "RS. 800/-"
  },
  {
    category: "International Presenter",
    offline: "RS. 4000/-",
    online: "RS. 3000/-"
  },
  {
    category: "International Participant",
    offline: "RS. 3000/-",
    online: "RS. 2000/-"
  }
];

export const registrationDeadlines: RegistrationDeadline[] = [
  {
    type: "Abstract",
    date: "1st NOVEMBER 2025"
  },
  {
    type: "Full Paper Submissions",
    date: "16th DECEMBER 2025"
  },
  {
    type: "Registration",
    date: "1st FEBRUARY 2026"
  }
];

export const contactInfo: ContactInfo = {
  name: "Mr. K. Satyanarayana",
  phone: "PH: 9866462814"
};

export const whatsappGroupLink = "https://chat.whatsapp.com/BCAziqdmAb05KiRuryHqIt";

export const paymentNote = "* For queries related to payment of fee, please contact";
export const onlineNote = "*Online option is not available for Faculty & Research Scholars from institutions in Hyderabad*";