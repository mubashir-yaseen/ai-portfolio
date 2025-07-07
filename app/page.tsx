/* File: package.json */
{
  "name": "ai-portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.4.7",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "^3.3.2",
    "lucide-react": "latest",
    "@/components/ui": "workspace:*"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.21",
    "typescript": "^5.1.3"
  }
}

/* File: tailwind.config.js */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

/* File: postcss.config.js */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

/* File: app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* File: app/layout.tsx */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Muhammad Mubashir – AI Portfolio</title>
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}

/* File: app/page.tsx */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-800">Muhammad Mubashir</h1>
        <p className="text-lg text-gray-600">
          AI Engineer | Data Scientist | Machine Learning Specialist
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="mailto:mubashiryaseen@hotmail.com">
            <Button variant="outline">Contact Me</Button>
          </Link>
          <Link href="https://github.com/mubashir-yaseen" target="_blank">
            <Button variant="ghost">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </Link>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Professional Summary</h2>
        <p className="text-gray-700">
          Results-driven AI engineer with a strong background in Electrical Engineering and expertise in
          Machine Learning, Deep Learning, NLP, and Generative AI. Adept in developing end-to-end AI
          systems, LLM-powered tools, and cloud deployments using Azure, AWS, and GCP.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Major Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "LLM-Based SQL Query Generator",
              link: "https://github.com/mubashir-yaseen/llm-sql-query-generator",
              desc: "Natural language to SQL tool using LangChain & OpenAI."
            },
            {
              title: "Live Stress Detection System",
              link: "https://github.com/mubashir-yaseen/stress-detection-iot-ml",
              desc: "Real-time ML on biosensor data with ESP32."
            },
            {
              title: "Number Plate Recognition",
              link: "https://github.com/mubashir-yaseen/yolov5-number-plate-detection",
              desc: "YOLOv5-based parking control solution."
            },
            {
              title: "Facial Emotion Recognition",
              link: "https://github.com/mubashir-yaseen/facial-emotion-detection",
              desc: "CNN model for real-time emotion detection."
            },
            {
              title: "AI Chatbot (University Support)",
              link: "https://github.com/mubashir-yaseen/AI-Chatbot-using-Rasa",
              desc: "Rasa-powered chatbot reducing 80% manual load."
            },
            {
              title: "Movie Recommendation System",
              link: "https://github.com/mubashir-yaseen/movie-recommendation-system",
              desc: "Collaborative filtering engine with live demo."
            },
          ].map((project) => (
            <Card key={project.title} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.desc}</p>
                <Link href={project.link} target="_blank">
                  <Button size="sm" variant="link" className="px-0 text-blue-600">
                    View on GitHub ↗
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Capstone Projects</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <Link href="https://github.com/mubashir-yaseen/heart_disease_prediction" target="_blank">
              Heart Disease Prediction
            </Link>
          </li>
          <li>
            <Link href="https://github.com/mubashir-yaseen/sms_spam_filter/blob/main/Naive_Bayes.ipynb" target="_blank">
              SMS Spam Filter
            </Link>
          </li>
          <li>
            <Link href="https://github.com/mubashir-yaseen/karachi_house_price_prediction_system" target="_blank">
              Karachi House Price Prediction
            </Link>
          </li>
          <li>
            <Link href="https://github.com/mubashir-yaseen/diabetes_detection_system" target="_blank">
              Diabetes Detection System
            </Link>
          </li>
          <li>
            <Link href="https://github.com/mubashir-yaseen/breast_cancer_prediction" target="_blank">
              Breast Cancer Detection System
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
