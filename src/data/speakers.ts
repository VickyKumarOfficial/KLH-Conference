export interface Speaker {
  id: string;
  name: string;
  affiliation: string;
  position: string;
  expertise: string[];
  image: string;
  year: number;
}

export interface SpeakersByYear {
  [year: number]: Speaker[];
}

export const speakers: SpeakersByYear = {
  2026: [
    {
      id: "prof-veda-sharan",
      name: "Prof. M. E. Veda Sharan",
      affiliation: "EFL-U, Hyderabad",
      position: "Professor",
      expertise: ["Theoretical Linguistics", "Language Philosophy", "Cognitive Science"],
      image: "/Prof. M. E. Veda Sharan.png",
      year: 2026
    },
    {
      id: "prof-samson",
      name: "Prof. T. Samson",
      affiliation: "EFL-U, Hyderabad",
      position: "Professor",
      expertise: ["Applied Linguistics", "Language Education", "Corpus Linguistics"],
      image: "/Prof. T. Samson.png",
      year: 2026
    },
    {
      id: "dr-kiran-kumar",
      name: "Dr. G. Kiran Kumar",
      affiliation: "EFL-U, Hyderabad",
      position: "Professor",
      expertise: ["Computational Linguistics", "Natural Language Processing", "Machine Learning"],
      image: "/Dr. G. Kiran Kumar .png",
      year: 2026
    },
    {
      id: "dr-spoorthi-boda",
      name: "Dr. Spoorthi Boda",
      affiliation: "NIT Warangal",
      position: "Professor",
      expertise: ["Language Models", "Text Analytics", "Information Extraction"],
      image: "/Dr. Spoorthi Boda.png",
      year: 2026
    },
    {
      id: "dr-vamshi-krishna",
      name: "Dr. Vamshi Krishna",
      affiliation: "Central University Hyderabad",
      position: "Professor",
      expertise: ["Machine Translation", "Multilingual Processing", "Language Resources"],
      image: "/Dr. Vamshi Krishna .png",
      year: 2026
    },
    {
      id: "dr-sundeep",
      name: "Dr. Maneri. Sundeep",
      affiliation: "Polytechnic Sr.Lecturer",
      position: "Senior Lecturer",
      expertise: ["Linguistics", "Language Technology", "Computational Models"],
      image: "/Dr. Maneri. Sundeep .png",
      year: 2026
    },
    {
      id: "dr-tabitha",
      name: "Dr. C. Tabitha",
      affiliation: "Mahindra University",
      position: "Professor",
      expertise: ["Language Processing", "Artificial Intelligence", "Deep Learning"],
      image: "/Dr. C. Tabitha.png",
      year: 2026
    },
    {
      id: "dr-manoj-yadav",
      name: "Dr. Manoj Kr Yadav",
      affiliation: "NIT Hamirpur",
      position: "Professor",
      expertise: ["Natural Language Understanding", "Speech Processing", "AI Research"],
      image: "/Dr. Manoj Kr Yadav.png",
      year: 2026
    }
  ]
};

export const getCurrentYearSpeakers = (): Speaker[] => {
  const currentYear = 2026; // ICLLP-2026
  return speakers[currentYear] || [];
};

export const getAllYears = (): number[] => {
  return Object.keys(speakers).map(year => parseInt(year)).sort((a, b) => b - a);
};

export const getSpeakersByYear = (year: number): Speaker[] => {
  return speakers[year] || [];
};