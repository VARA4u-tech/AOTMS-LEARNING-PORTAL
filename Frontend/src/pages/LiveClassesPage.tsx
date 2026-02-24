import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalIcon,
  Video,
  Clock,
  Users,
  ArrowRight,
  Plus,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LiveClass {
  id: string;
  title: string;
  course_name: string;
  instructor_name: string;
  instructor_avatar?: string;
  start_time: string; // ISO
  duration_mins: number;
  join_url: string;
  enrolled: number;
  status: "live" | "upcoming" | "completed";
}

const MOCK_CLASSES: LiveClass[] = [
  {
    id: "lc1",
    title: "Advanced React Design Patterns Q&A",
    course_name: "React Mastery",
    instructor_name: "Sarah Chen",
    start_time: new Date(Date.now() - 600000).toISOString(), // 10 mins ago (Live)
    duration_mins: 60,
    join_url: "#",
    enrolled: 45,
    status: "live",
  },
  {
    id: "lc2",
    title: "Introduction to Data Structures",
    course_name: "CS Foundations",
    instructor_name: "Alex Rodriguez",
    start_time: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    duration_mins: 90,
    join_url: "#",
    enrolled: 120,
    status: "upcoming",
  },
  {
    id: "lc3",
    title: "System Design Mock Interview",
    course_name: "Interview Prep",
    instructor_name: "Marcus Johnson",
    start_time: new Date(Date.now() + 86400000 * 3).toISOString(), // In 3 days
    duration_mins: 120,
    join_url: "#",
    enrolled: 25,
    status: "upcoming",
  },
];

export default function LiveClassesPage() {
  const [data, setData] = useState<LiveClass[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In real app, fetch from /api/data/live_classes
    const t = setTimeout(() => {
      setData(MOCK_CLASSES);
      setLoading(false);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (iso: string) => {
    return new Date(iso).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-24 gap-4">
        <Loader2 className="w-12 h-12 text-[#0075CF] animate-spin" />
        <p className="font-bold text-[#000000]/60">Checking schedule...</p>
      </div>
    );
  }

  const liveClasses = data.filter((c) => c.status === "live");
  const upcomingClasses = data.filter((c) => c.status === "upcoming");

  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-12 font-['Inter']">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[#000000] flex items-center gap-3">
            <Video className="w-8 h-8 text-[#0075CF]" />
            Live Classes
          </h1>
          <p className="text-[#000000]/60 font-medium mt-1">
            Join scheduled webinars and interactive Office Hours.
          </p>
        </div>
      </div>

      {/* HAPPENING NOW SECTION */}
      {liveClasses.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-widest text-[#000000] flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD5A1A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FD5A1A]"></span>
            </span>
            Happening Now
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {liveClasses.map((cls) => (
              <div
                key={cls.id}
                className="bg-white border-4 border-[#FD5A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(253,90,26,1)] flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-full md:w-32 aspect-video md:aspect-square bg-[#000000] rounded-xl flex items-center justify-center border-4 border-[#000000] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shrink-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#FD5A1A]/20 mix-blend-overlay" />
                  <Video className="w-10 h-10 text-white animate-pulse" />
                </div>
                <div className="flex-1 w-full text-center md:text-left">
                  <p className="text-[10px] font-black uppercase text-[#FD5A1A] tracking-widest mb-1">
                    {cls.course_name}
                  </p>
                  <h3 className="text-[#000000] font-black text-xl mb-3 line-clamp-2 leading-tight">
                    {cls.title}
                  </h3>
                  <div className="flex flex-col md:flex-row items-center gap-2 justify-center md:justify-start">
                    <Avatar className="w-8 h-8 border-2 border-[#000000] bg-white">
                      <AvatarFallback className="font-bold text-xs">
                        {cls.instructor_name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <p className="font-bold text-sm text-[#000000]/70">
                      With {cls.instructor_name}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-auto shrink-0 flex items-center justify-center">
                  <Button className="w-full md:w-auto bg-[#FD5A1A] hover:bg-white text-white hover:text-[#FD5A1A] hover:border-[#FD5A1A] border-2 border-transparent shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all uppercase font-black tracking-widest text-xs h-12 px-6">
                    Join Session
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* UPCOMING SCHEDULE SECTION */}
      <div className="space-y-4 pt-4">
        <h2 className="text-xl font-black uppercase tracking-widest text-[#000000] flex items-center gap-2 border-b-4 border-[#000000] pb-2">
          <CalIcon className="w-6 h-6" /> Up Next
        </h2>

        {upcomingClasses.length === 0 ? (
          <div className="bg-white border-4 border-[#000000] rounded-xl p-12 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CalIcon className="w-12 h-12 text-[#000000]/20 mx-auto mb-3" />
            <h3 className="font-black text-lg text-[#000000]">
              No Upcoming Classes
            </h3>
            <p className="text-[#000000]/60 font-bold max-w-sm mx-auto mt-2">
              There aren't any live sessions scheduled for your active courses
              right now.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingClasses.map((cls, i) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-4 border-[#000000] rounded-2xl flex flex-col shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all overflow-hidden"
              >
                {/* Top Date Bar */}
                <div className="bg-[#E9E9E9] border-b-4 border-[#000000] px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-black text-[#000000] uppercase tracking-wider">
                    <CalIcon className="w-4 h-4 text-[#0075CF]" />
                    {formatDate(cls.start_time)}
                  </div>
                  <Badge className="bg-white text-[#000000] border-2 border-[#000000] font-black">
                    {formatTime(cls.start_time)}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <Badge className="bg-[#000000] text-white border-none uppercase tracking-widest text-[10px] mb-3 hover:bg-[#000000]">
                      {cls.course_name}
                    </Badge>
                    <h3 className="font-black text-lg leading-tight text-[#000000] mb-4 group-hover:text-[#0075CF] transition-colors">
                      {cls.title}
                    </h3>

                    <div className="flex items-center justify-between text-sm font-bold border-t-2 border-[#E9E9E9] pt-4 mb-2">
                      <div className="flex items-center gap-2 text-[#000000]/70">
                        <Avatar className="w-6 h-6 border-2 border-[#000000] bg-white">
                          <AvatarFallback className="text-[10px] font-black">
                            {cls.instructor_name[0]}
                          </AvatarFallback>
                        </Avatar>
                        {cls.instructor_name}
                      </div>
                      <div className="flex items-center gap-1.5 text-[#000000]/50">
                        <Clock className="w-4 h-4" /> {cls.duration_mins}m
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-5 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    className="w-full bg-[#E9E9E9] text-[#000000] hover:bg-[#000000] hover:text-white transition-colors border-2 border-[#000000] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    disabled
                  >
                    Reminder Set <Plus className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
