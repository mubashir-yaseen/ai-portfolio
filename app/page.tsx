import { Github, Download, Moon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <header className="py-12 text-center">
        <h1 className="text-5xl font-extrabold text-primary mb-2">Muhammad Mubashir</h1>
        <p className="text-lg text-gray-600">AI Engineer | Data Scientist | Machine Learning Specialist</p>
        <div className="flex justify-center mt-4 space-x-4">
          <Link href="mailto:mubashiryaseen@hotmail.com">
            <button className="bg-primary text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">Contact Me</button>
          </Link>
          <Link href="https://github.com/mubashir-yaseen" target="_blank">
            <button className="flex items-center px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              <Github className="w-5 h-5 mr-2" /> GitHub
            </button>
          </Link>
          <Link href="/resume.pdf" target="_blank">
            <button className="flex items-center px-5 py-2 bg-white border border-gray-400 rounded-lg hover:bg-gray-50">
              <Download className="w-5 h-5 mr-2" /> Resume
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto space-y-16">
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-accent mb-4">Professional Summary</h2>
          <p className="text-gray-700 text-lg">
            Results-driven AI engineer with strong electrical engineering fundamentals and deep expertise in Machine Learning,
            Deep Learning, NLP, and Generative AI. Proficient in deploying cloud-based AI solutions and building LLM-powered applications.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-accent mb-6 text-center">Major Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
              title: "LLM-Based SQL Query Generator",
              link: "https://github.com/mubashir-yaseen/llm-sql-query-generator",
              desc: "Natural language to SQL with LangChain & OpenAI."
            }, {
              title: "Live Stress Detection System",
              link: "https://github.com/mubashir-yaseen/stress-detection-iot-ml",
              desc: "Real-time biosensor ML system with ESP32."
            }, {
              title: "Number Plate Recognition",
              link: "https://github.com/mubashir-yaseen/yolov5-number-plate-detection",
              desc: "YOLOv5 smart parking system with >95% accuracy."
            }, {
              title: "Facial Emotion Recognition",
              link: "https://github.com/mubashir-yaseen/facial-emotion-detection",
              desc: "CNN-based emotion detection (87% accuracy)."
            }, {
              title: "AI Chatbot for University Support",
              link: "https://github.com/mubashir-yaseen/AI-Chatbot-using-Rasa",
              desc: "Rasa-based chatbot handling university FAQs."
            }, {
              title: "Smart Movie Recommendation",
              link: "https://github.com/mubashir-yaseen/movie-recommendation-system",
              desc: "Collaborative filtering movie recommender."
            }].map((proj) => (
              <div key={proj.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-primary mb-2">{proj.title}</h3>
                <p className="text-gray-700 mb-3">{proj.desc}</p>
                <Link href={proj.link} target="_blank">
                  <span className="text-blue-600 hover:underline text-sm">View on GitHub ↗</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-accent mb-6 text-center">Capstone Projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg">
            <li><Link href="https://github.com/mubashir-yaseen/heart_disease_prediction" target="_blank">💓 Heart Disease Prediction</Link></li>
            <li><Link href="https://github.com/mubashir-yaseen/sms_spam_filter/blob/main/Naive_Bayes.ipynb" target="_blank">📩 SMS Spam Filter</Link></li>
            <li><Link href="https://github.com/mubashir-yaseen/karachi_house_price_prediction_system" target="_blank">🏠 Karachi House Price Prediction</Link></li>
            <li><Link href="https://github.com/mubashir-yaseen/diabetes_detection_system" target="_blank">🩸 Diabetes Detection System</Link></li>
            <li><Link href="https://github.com/mubashir-yaseen/breast_cancer_prediction" target="_blank">🧬 Breast Cancer Detection</Link></li>
          </ul>
        </section>
      </main>

      <footer className="py-12 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Muhammad Mubashir. Built with ❤️ using Next.js & TailwindCSS.
      </footer>
    </div>
  );
}
