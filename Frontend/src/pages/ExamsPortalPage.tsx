import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileText,
  Clock,
  PlayCircle,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── Fallback Data ── */
const MOCK_EXAMS = [
  {
    id: "exam_demo",
    title: "Mid-Term Evaluation (Live)",
    type: "live",
    duration: 1800,
    questions: 50,
    date: "Available Now",
  },
  {
    id: "math_101",
    title: "Mathematics Fundamentals",
    type: "mock",
    duration: 3600,
    questions: 60,
    date: "Always Available",
  },
  {
    id: "cs_basics",
    title: "Computer Science Basics",
    type: "mock",
    duration: 2400,
    questions: 40,
    date: "Always Available",
  },
];

export default function ExamsPortalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Decide whether to show Live or Mock based on URL
  const isMockRoute = location.pathname.includes("mock-papers");

  const displayedExams = MOCK_EXAMS.filter((e) =>
    isMockRoute ? e.type === "mock" : e.type === "live",
  );

  useEffect(() => {
    // Simulate API fetch delay
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [isMockRoute]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-24">
        <Loader2 className="w-12 h-12 text-[#0075CF] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#000000] flex items-center gap-3">
            {isMockRoute ? (
              <FileText className="w-8 h-8 text-[#0075CF]" />
            ) : (
              <ClipboardCheck className="w-8 h-8 text-[#FD5A1A]" />
            )}
            {isMockRoute ? "Mock Papers" : "Live Exams"}
          </h1>
          <p className="text-[#000000]/60 font-medium mt-1">
            {isMockRoute
              ? "Practice makes perfect. Take unlimited mock tests."
              : "Scheduled, proctored assignments for your active courses."}
          </p>
        </div>
      </div>

      {/* EXAMS GRID */}
      {displayedExams.length === 0 ? (
        <div className="bg-white border-4 border-[#000000] rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 text-center flex flex-col items-center">
          {isMockRoute ? (
            <FileText className="w-16 h-16 text-[#000000]/20 mb-4" />
          ) : (
            <ClipboardCheck className="w-16 h-16 text-[#000000]/20 mb-4" />
          )}
          <h3 className="text-xl font-black text-[#000000] mb-2">
            No {isMockRoute ? "Mock Papers" : "Live Exams"} found.
          </h3>
          <p className="text-[#000000]/60 font-bold">
            Check back later or ask your instructor for updates.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedExams.map((exam, i) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white border-4 border-[#000000] rounded-2xl flex flex-col overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
            >
              {/* Image block fake */}
              <div
                className={`h-32 border-b-4 border-[#000000] flex items-center justify-center p-6 shrink-0 relative ${
                  isMockRoute ? "bg-[#0075CF]" : "bg-[#FD5A1A]"
                }`}
              >
                <div className="absolute top-2 right-2">
                  <Badge className="bg-white text-[#000000] border-2 border-[#000000] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-[10px] font-black uppercase pointer-events-none hover:bg-white">
                    {exam.date}
                  </Badge>
                </div>
                {isMockRoute ? (
                  <FileText className="w-12 h-12 text-[#000000]/30" />
                ) : (
                  <ClipboardCheck className="w-12 h-12 text-[#000000]/30" />
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-xl text-[#000000] leading-tight mb-4 group-hover:text-[#0075CF] transition-colors">
                    {exam.title}
                  </h3>

                  <div className="space-y-2 mb-6 text-sm font-bold text-[#000000]/70 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#000000]" />{" "}
                      {Math.floor(exam.duration / 60)} Minutes
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#000000]" />{" "}
                      {exam.questions} Questions
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full justify-between mt-auto bg-white text-[#000000] border-2 border-[#000000] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:bg-[#E9E9E9]"
                  onClick={() =>
                    navigate(`/exam?id=${exam.id}&type=${exam.type}`)
                  }
                >
                  <span className="font-black uppercase tracking-widest text-xs">
                    Start {isMockRoute ? "Mock" : "Exam"}
                  </span>
                  <PlayCircle className="w-5 h-5 text-[#FD5A1A]" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
