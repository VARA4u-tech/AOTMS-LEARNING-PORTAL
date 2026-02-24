import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  History,
  CheckCircle2,
  XCircle,
  Search,
  Calendar as CalIcon,
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PastExam {
  id: string;
  exam_id: string;
  exam_title: string;
  type: "live" | "mock";
  score: number;
  max_score: number;
  passed: boolean;
  time_taken: number; // in seconds
  completed_at: string;
}

const MOCK_HISTORY: PastExam[] = [
  {
    id: "1",
    exam_id: "js_basics",
    exam_title: "JavaScript Fundamentals",
    type: "mock",
    score: 85,
    max_score: 100,
    passed: true,
    time_taken: 1800,
    completed_at: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "2",
    exam_id: "react_adv",
    exam_title: "Advanced React Patterns",
    type: "live",
    score: 45,
    max_score: 100,
    passed: false,
    time_taken: 3500,
    completed_at: new Date(Date.now() - 86400000 * 15).toISOString(),
  },
  {
    id: "3",
    exam_id: "db_design",
    exam_title: "Database Architecture 101",
    type: "live",
    score: 92,
    max_score: 100,
    passed: true,
    time_taken: 2100,
    completed_at: new Date(Date.now() - 86400000 * 30).toISOString(),
  },
];

export default function ExamHistoryPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<PastExam[]>([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    // In real app, fetch from /api/data/student_exam_results using user ID.
    const t = setTimeout(() => {
      setData(MOCK_HISTORY);
      setLoading(false);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  const filtered = data.filter((e) =>
    e.exam_title.toLowerCase().includes(term.toLowerCase()),
  );

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-24">
        <Loader2 className="w-12 h-12 text-[#0075CF] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12 font-['Inter']">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#000000] flex items-center gap-3">
            <History className="w-8 h-8 text-[#000000]" />
            Exam History
          </h1>
          <p className="text-[#000000]/60 font-medium mt-1">
            Review your past performance across all assignments and exams.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#000000]/40" />
          <Input
            placeholder="Search past exams..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="pl-9 bg-white border-2 border-[#000000] focus-visible:ring-0 focus-visible:ring-offset-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold placeholder:font-normal"
          />
        </div>
      </div>

      {/* OVERVIEW STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Exams", value: data.length, color: "text-[#000000]" },
          {
            label: "Passed",
            value: data.filter((d) => d.passed).length,
            color: "text-[#0075CF]",
          },
          {
            label: "Failed",
            value: data.filter((d) => !d.passed).length,
            color: "text-[#FD5A1A]",
          },
          {
            label: "Avg Score",
            value: `${Math.round(data.reduce((a, b) => a + (b.score / b.max_score) * 100, 0) / data.length || 0)}%`,
            color: "text-[#000000]",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white border-2 border-[#000000] rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center"
          >
            <div className={`text-3xl font-black ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-[#000000]/50 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-white border-4 border-[#000000] rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Headings */}
        <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-4 bg-[#E9E9E9] border-b-4 border-[#000000] font-black uppercase text-xs tracking-widest text-[#000000]/70">
          <div className="col-span-5">Exam Details</div>
          <div className="col-span-2 text-center">Date</div>
          <div className="col-span-2 text-center">Time Taken</div>
          <div className="col-span-3 text-right">Score</div>
        </div>

        {/* Rows */}
        <div className="divide-y-2 divide-[#000000]/10">
          {filtered.length === 0 ? (
            <div className="p-12 flex flex-col items-center justify-center text-center">
              <History className="w-12 h-12 text-[#000000]/20 mb-3" />
              <p className="font-bold text-[#000000]/60 text-lg">
                No exam records found.
              </p>
              <Button
                onClick={() => navigate("/dashboard/exams")}
                variant="outline"
                className="mt-4"
              >
                Take an Exam
              </Button>
            </div>
          ) : (
            filtered.map((entry) => {
              const pct = Math.round((entry.score / entry.max_score) * 100);
              return (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  key={entry.id}
                  className="flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center px-4 sm:px-6 py-5 hover:bg-[#E9E9E9]/50 transition-colors group"
                >
                  {/* Exam Name */}
                  <div className="col-span-5 w-full">
                    <div className="flex items-center gap-2 mb-1">
                      {entry.type === "mock" ? (
                        <Badge className="bg-[#0075CF]/10 text-[#0075CF] border-2 border-[#0075CF] hover:bg-[#0075CF]/20 text-[10px] uppercase font-black px-1.5 py-0">
                          Mock
                        </Badge>
                      ) : (
                        <Badge className="bg-[#FD5A1A]/10 text-[#FD5A1A] border-2 border-[#FD5A1A] hover:bg-[#FD5A1A]/20 text-[10px] uppercase font-black px-1.5 py-0">
                          Live
                        </Badge>
                      )}
                    </div>
                    <p className="font-black text-sm sm:text-base text-[#000000] truncate group-hover:text-[#0075CF] transition-colors">
                      {entry.exam_title}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="col-span-2 w-full flex items-center justify-between sm:justify-center text-sm font-bold text-[#000000]/60">
                    <span className="sm:hidden uppercase text-[10px] tracking-widest text-[#000000]/40">
                      Date
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalIcon className="w-3 h-3" />{" "}
                      {formatDate(entry.completed_at)}
                    </span>
                  </div>

                  {/* Time */}
                  <div className="col-span-2 w-full flex items-center justify-between sm:justify-center text-sm font-bold text-[#000000]/60">
                    <span className="sm:hidden uppercase text-[10px] tracking-widest text-[#000000]/40">
                      Duration
                    </span>
                    {formatTime(entry.time_taken)}
                  </div>

                  {/* Score */}
                  <div className="col-span-3 w-full flex items-center justify-between sm:justify-end gap-3 text-right">
                    <span className="sm:hidden uppercase text-[10px] tracking-widest font-black text-[#000000]/40">
                      Result
                    </span>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-black text-lg text-[#000000]">
                          {entry.score}
                          <span className="text-xs text-[#000000]/50">
                            /{entry.max_score}
                          </span>
                        </p>
                        <p
                          className={`text-[10px] font-black uppercase tracking-widest ${entry.passed ? "text-[#0075CF]" : "text-[#FD5A1A]"}`}
                        >
                          {entry.passed ? "Passed" : "Failed"} ({pct}%)
                        </p>
                      </div>
                      <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#000000] bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {entry.passed ? (
                          <CheckCircle2 className="w-5 h-5 text-[#0075CF]" />
                        ) : (
                          <XCircle className="w-5 h-5 text-[#FD5A1A]" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
