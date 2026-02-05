 import { useState, useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
 import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
 import { InstructorSidebar } from '@/components/instructor/InstructorSidebar';
 import { InstructorHeader } from '@/components/instructor/InstructorHeader';
 import { useAuth } from '@/hooks/useAuth';
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
 import { Button } from '@/components/ui/button';
 import { Badge } from '@/components/ui/badge';
 import { Progress } from '@/components/ui/progress';
 import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
 import {
   BookOpen,
   Users,
   Video,
   FileText,
   Calendar,
   TrendingUp,
   Plus,
   Upload,
   Eye,
   BarChart3,
   GraduationCap,
   Clock,
   Award,
   Bell,
 } from 'lucide-react';
 
 const statsCards = [
   { title: 'Total Courses', value: '6', icon: BookOpen, color: 'text-primary', change: '+2 this month' },
   { title: 'Total Students', value: '248', icon: Users, color: 'text-accent', change: '+32 this week' },
   { title: 'Videos Uploaded', value: '84', icon: Video, color: 'text-green-500', change: '12 pending' },
   { title: 'Avg. Completion', value: '72%', icon: TrendingUp, color: 'text-purple-500', change: '+5% vs last month' },
 ];
 
 const myCourses = [
   { id: 1, title: 'Full Stack Web Development', students: 86, videos: 24, progress: 100, status: 'published' },
   { id: 2, title: 'React Advanced Patterns', students: 54, videos: 18, progress: 85, status: 'published' },
   { id: 3, title: 'Node.js Masterclass', students: 42, videos: 12, progress: 60, status: 'draft' },
   { id: 4, title: 'TypeScript Deep Dive', students: 66, videos: 20, progress: 100, status: 'published' },
 ];
 
 const topStudents = [
   { name: 'Alice Johnson', course: 'Full Stack Web Development', score: 95, examsCompleted: 8 },
   { name: 'Bob Smith', course: 'React Advanced Patterns', score: 92, examsCompleted: 6 },
   { name: 'Carol Williams', course: 'TypeScript Deep Dive', score: 89, examsCompleted: 7 },
   { name: 'David Brown', course: 'Full Stack Web Development', score: 87, examsCompleted: 8 },
   { name: 'Eva Martinez', course: 'Node.js Masterclass', score: 85, examsCompleted: 5 },
 ];
 
 const upcomingClasses = [
   { title: 'React Hooks Deep Dive', date: 'Today, 3:00 PM', course: 'React Advanced Patterns', students: 32 },
   { title: 'API Design Best Practices', date: 'Tomorrow, 10:00 AM', course: 'Node.js Masterclass', students: 28 },
   { title: 'State Management Workshop', date: 'Feb 8, 2:00 PM', course: 'Full Stack Web Development', students: 45 },
 ];
 
 const recentUploads = [
   { name: 'Module 5 - Authentication.mp4', type: 'video', size: '245 MB', date: '2 hours ago' },
   { name: 'Week 3 Assignment.pdf', type: 'assignment', size: '1.2 MB', date: '5 hours ago' },
   { name: 'API Cheat Sheet.pdf', type: 'note', size: '450 KB', date: 'Yesterday' },
   { name: 'Database Design PPT.pptx', type: 'ppt', size: '8.5 MB', date: '2 days ago' },
 ];
 
 export default function InstructorDashboard() {
   const { user, loading } = useAuth();
   const navigate = useNavigate();
 
   useEffect(() => {
     if (!loading && !user) {
       navigate('/auth');
     }
   }, [user, loading, navigate]);
 
   if (loading) {
     return (
       <div className="min-h-screen flex items-center justify-center">
         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
       </div>
     );
   }
 
   return (
     <SidebarProvider>
       <InstructorSidebar />
       <SidebarInset>
         <InstructorHeader />
         
         <main className="flex-1 p-6 space-y-6">
           {/* Welcome Section */}
           <div className="flex items-center justify-between">
             <div>
               <h1 className="text-2xl font-bold text-foreground">
                 Welcome, {user?.user_metadata?.full_name || 'Instructor'}! 👨‍🏫
               </h1>
               <p className="text-muted-foreground mt-1">
                 Manage your courses and track student progress
               </p>
             </div>
             <div className="flex gap-3">
               <Button variant="outline" className="gap-2">
                 <Bell className="h-4 w-4" />
                 Announcements
               </Button>
               <Button className="gap-2">
                 <Plus className="h-4 w-4" />
                 New Course
               </Button>
             </div>
           </div>
           
           {/* Stats Grid */}
           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
             {statsCards.map((stat) => (
               <Card key={stat.title} className="hover-lift">
                 <CardHeader className="flex flex-row items-center justify-between pb-2">
                   <CardTitle className="text-sm font-medium text-muted-foreground">
                     {stat.title}
                   </CardTitle>
                   <stat.icon className={`h-5 w-5 ${stat.color}`} />
                 </CardHeader>
                 <CardContent>
                   <div className="text-2xl font-bold">{stat.value}</div>
                   <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
           
           {/* Main Tabs */}
           <Tabs defaultValue="courses" className="space-y-6">
             <TabsList className="grid w-full max-w-md grid-cols-3">
               <TabsTrigger value="courses" className="gap-2">
                 <BookOpen className="h-4 w-4" />
                 Courses
               </TabsTrigger>
               <TabsTrigger value="content" className="gap-2">
                 <Upload className="h-4 w-4" />
                 Content
               </TabsTrigger>
               <TabsTrigger value="performance" className="gap-2">
                 <BarChart3 className="h-4 w-4" />
                 Performance
               </TabsTrigger>
             </TabsList>
             
             {/* Courses Tab */}
             <TabsContent value="courses" className="space-y-6">
               <div className="grid gap-6 lg:grid-cols-3">
                 {/* My Courses */}
                 <Card className="lg:col-span-2">
                   <CardHeader>
                     <div className="flex items-center justify-between">
                       <div>
                         <CardTitle className="flex items-center gap-2">
                           <BookOpen className="h-5 w-5 text-primary" />
                           My Courses
                         </CardTitle>
                         <CardDescription>Manage and track your courses</CardDescription>
                       </div>
                       <Button size="sm" variant="outline" className="gap-2">
                         <Plus className="h-4 w-4" />
                         Add Course
                       </Button>
                     </div>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     {myCourses.map((course) => (
                       <div
                         key={course.id}
                         className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                       >
                         <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                           <GraduationCap className="h-5 w-5 text-primary" />
                         </div>
                         <div className="flex-1 min-w-0">
                           <div className="flex items-center gap-2">
                             <h4 className="font-medium truncate">{course.title}</h4>
                             <Badge variant={course.status === 'published' ? 'default' : 'secondary'}>
                               {course.status}
                             </Badge>
                           </div>
                           <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                             <span className="flex items-center gap-1">
                               <Users className="h-3 w-3" /> {course.students} students
                             </span>
                             <span className="flex items-center gap-1">
                               <Video className="h-3 w-3" /> {course.videos} videos
                             </span>
                           </div>
                         </div>
                         <div className="text-right">
                           <div className="text-sm font-medium">{course.progress}%</div>
                           <Progress value={course.progress} className="h-2 w-20 mt-1" />
                         </div>
                       </div>
                     ))}
                   </CardContent>
                 </Card>
                 
                 {/* Upcoming Live Classes */}
                 <Card>
                   <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                       <Calendar className="h-5 w-5 text-accent" />
                       Upcoming Classes
                     </CardTitle>
                     <CardDescription>Your scheduled sessions</CardDescription>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     {upcomingClasses.map((cls, idx) => (
                       <div
                         key={idx}
                         className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
                       >
                         <h4 className="font-medium text-sm">{cls.title}</h4>
                         <p className="text-xs text-muted-foreground mt-1">{cls.course}</p>
                         <div className="flex items-center justify-between mt-2">
                           <Badge variant="outline" className="text-xs">
                             <Clock className="h-3 w-3 mr-1" />
                             {cls.date}
                           </Badge>
                           <span className="text-xs text-muted-foreground">
                             {cls.students} enrolled
                           </span>
                         </div>
                       </div>
                     ))}
                     <Button variant="outline" className="w-full gap-2">
                       <Plus className="h-4 w-4" />
                       Schedule Class
                     </Button>
                   </CardContent>
                 </Card>
               </div>
             </TabsContent>
             
             {/* Content Tab */}
             <TabsContent value="content" className="space-y-6">
               <div className="grid gap-6 lg:grid-cols-3">
                 {/* Upload Section */}
                 <Card className="lg:col-span-2">
                   <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                       <Upload className="h-5 w-5 text-primary" />
                       Upload Content
                     </CardTitle>
                     <CardDescription>Add videos, notes, and resources to your courses</CardDescription>
                   </CardHeader>
                   <CardContent>
                     <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                       <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                       <h4 className="font-medium mb-2">Drop files here or click to upload</h4>
                       <p className="text-sm text-muted-foreground mb-4">
                         Support for videos, PDFs, PPTs, and documents
                       </p>
                       <div className="flex justify-center gap-3">
                         <Button variant="outline" size="sm" className="gap-2">
                           <Video className="h-4 w-4" />
                           Video
                         </Button>
                         <Button variant="outline" size="sm" className="gap-2">
                           <FileText className="h-4 w-4" />
                           Document
                         </Button>
                         <Button variant="outline" size="sm" className="gap-2">
                           <FileText className="h-4 w-4" />
                           PPT
                         </Button>
                       </div>
                     </div>
                     
                     {/* Recent Uploads */}
                     <div className="mt-6">
                       <h4 className="font-medium mb-4">Recent Uploads</h4>
                       <div className="space-y-3">
                         {recentUploads.map((file, idx) => (
                           <div
                             key={idx}
                             className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                           >
                             <div className="flex items-center gap-3">
                               <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                 {file.type === 'video' ? (
                                   <Video className="h-5 w-5 text-primary" />
                                 ) : (
                                   <FileText className="h-5 w-5 text-primary" />
                                 )}
                               </div>
                               <div>
                                 <p className="font-medium text-sm">{file.name}</p>
                                 <p className="text-xs text-muted-foreground">
                                   {file.size} • {file.date}
                                 </p>
                               </div>
                             </div>
                             <Button variant="ghost" size="icon">
                               <Eye className="h-4 w-4" />
                             </Button>
                           </div>
                         ))}
                       </div>
                     </div>
                   </CardContent>
                 </Card>
                 
                 {/* Quick Actions */}
                 <Card>
                   <CardHeader>
                     <CardTitle>Quick Actions</CardTitle>
                     <CardDescription>Manage your content</CardDescription>
                   </CardHeader>
                   <CardContent className="space-y-3">
                     <Button variant="outline" className="w-full justify-start gap-3">
                       <Video className="h-4 w-4 text-primary" />
                       Upload Recorded Lecture
                     </Button>
                     <Button variant="outline" className="w-full justify-start gap-3">
                       <FileText className="h-4 w-4 text-accent" />
                       Add Course Notes
                     </Button>
                     <Button variant="outline" className="w-full justify-start gap-3">
                       <FileText className="h-4 w-4 text-success" />
                       Create Assignment
                     </Button>
                     <Button variant="outline" className="w-full justify-start gap-3">
                       <Calendar className="h-4 w-4 text-primary" />
                       Update Timeline
                     </Button>
                     <Button variant="outline" className="w-full justify-start gap-3">
                       <Bell className="h-4 w-4 text-accent" />
                       Post Announcement
                     </Button>
                   </CardContent>
                 </Card>
               </div>
             </TabsContent>
             
             {/* Performance Tab */}
             <TabsContent value="performance" className="space-y-6">
               <div className="grid gap-6 lg:grid-cols-3">
                 {/* Student Performance */}
                 <Card className="lg:col-span-2">
                   <CardHeader>
                     <div className="flex items-center justify-between">
                       <div>
                         <CardTitle className="flex items-center gap-2">
                           <BarChart3 className="h-5 w-5 text-primary" />
                           Top Performing Students
                         </CardTitle>
                         <CardDescription>Based on exam scores and completion</CardDescription>
                       </div>
                       <Button size="sm" variant="outline">
                         View All
                       </Button>
                     </div>
                   </CardHeader>
                   <CardContent>
                     <div className="space-y-4">
                       {topStudents.map((student, idx) => (
                         <div
                           key={idx}
                           className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                         >
                           <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold">
                             {idx + 1}
                           </div>
                           <div className="flex-1">
                             <h4 className="font-medium">{student.name}</h4>
                             <p className="text-sm text-muted-foreground">{student.course}</p>
                           </div>
                           <div className="text-right">
                             <div className="flex items-center gap-2">
                               <Award className="h-4 w-4 text-accent" />
                               <span className="font-bold text-lg">{student.score}%</span>
                             </div>
                             <p className="text-xs text-muted-foreground">
                               {student.examsCompleted} exams
                             </p>
                           </div>
                         </div>
                       ))}
                     </div>
                   </CardContent>
                 </Card>
                 
                 {/* Course Stats */}
                 <Card>
                   <CardHeader>
                     <CardTitle className="flex items-center gap-2">
                       <TrendingUp className="h-5 w-5 text-accent" />
                       Course Analytics
                     </CardTitle>
                     <CardDescription>Performance overview</CardDescription>
                   </CardHeader>
                   <CardContent className="space-y-4">
                     <div className="p-4 rounded-lg bg-muted/50">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-sm text-muted-foreground">Completion Rate</span>
                         <span className="font-bold">72%</span>
                       </div>
                       <Progress value={72} className="h-2" />
                     </div>
                     <div className="p-4 rounded-lg bg-muted/50">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-sm text-muted-foreground">Avg. Exam Score</span>
                         <span className="font-bold">78%</span>
                       </div>
                       <Progress value={78} className="h-2" />
                     </div>
                     <div className="p-4 rounded-lg bg-muted/50">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-sm text-muted-foreground">Engagement</span>
                         <span className="font-bold">85%</span>
                       </div>
                       <Progress value={85} className="h-2" />
                     </div>
                     <div className="p-4 rounded-lg bg-muted/50">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-sm text-muted-foreground">Video Watch Time</span>
                         <span className="font-bold">68%</span>
                       </div>
                       <Progress value={68} className="h-2" />
                     </div>
                   </CardContent>
                 </Card>
               </div>
             </TabsContent>
           </Tabs>
         </main>
       </SidebarInset>
     </SidebarProvider>
   );
 }