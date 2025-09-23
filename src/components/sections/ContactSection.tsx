import { Phone, Mail, User } from "lucide-react"

interface ContactDetail {
  title: string
  name: string
  phone: string
}

const contactDetails: ContactDetail[] = [
  {
    title: "Convenor",
    name: "Dr. Kranthi Priya Oruganti",
    phone: "9849992925"
  },
  {
    title: "Organizing Secretary",
    name: "Dr. Tanushree Sarkar",
    phone: "8639193063"
  },
  {
    title: "Co-Convener",
    name: "Dr. B. Chandrashekar",
    phone: "9676547506"
  },
  {
    title: "For Registrations",
    name: "Mr. K. Satyanarayana",
    phone: "9866462814"
  }
]

export default function ContactSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with our organizing committee for any queries regarding the conference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactDetails.map((contact, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  {contact.title}
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {contact.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full">
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <a 
                      href={`tel:+91${contact.phone}`}
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                    >
                      +91 {contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              General Inquiries
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For any other questions or information about the conference, feel free to reach out to any of our organizing committee members.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
              <Mail className="h-4 w-4" />
              <span className="text-sm">We're here to help!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
