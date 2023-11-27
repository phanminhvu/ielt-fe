export const RouteBase = {
  Home: "/",
  Ielts: "/ielts",
  IeltsWithExam: (id?: string) => `/ielts?exam=${id}`,
  Login: "/login",
  ChooseExam: "/choose-exam",
  LoginEmail: "/login/email",
  LoginGoogle: "/login/google",
  SignUp: "/sign-up",
  SignUpEmail: "/sign-up/email",
  ForgotPassword: "/login/forgot-password",
  IeltsListening: "/ielts/listening",
  IeltsReading: "/ielts/reading",
  IeltsWriting: "/ielts/writing",
  IeltsSpeaking: "/ielts/speaking",
  EndTest: "end-test",
  Pricing: "/pricing",
  ReviewReading: "/ielts/review/reading/:testCode",
  WritingReview: "/ielts/review/writing/:testCode",
  ListeningReview: "/ielts/review/listening/:testCode",
  SpeakingReview: "/ielts/review/speaking/:testCode",
  Admin: "/admin",
  AdminLogin: "/admin/login",
  AdminDashboard: "/admin/dashboard",
  ExamManagement: "/admin/exammagement",
  GenerateExam: "/admin/generate",
  ViewExam: "/admin/exammagement/Exam/:id",
  ViewExamId: (id: string | number) => `/admin/exammagement/Exam/${id}`,

  //User
  AdminUser: "/admin/user",
  CreateUser: "/admin/user/create",
  UpdateUser: "/admin/user/:id",
  UpdateUserWID: (id: string | number) => `/admin/user/${id}`,
  //Listening
  Listening: "/admin/listening",
  CreateListening: "/admin/listening/create",
  UpdateListening: "/admin/listening/:id",
  UpdateListeningWId: (id: string | number) => `/admin/listening/${id}`,

  //Speaking
  Speaking: "/admin/speaking",
  CreateSpeaking: "/admin/speaking/create",
  UpdateSpeaking: "/admin/speaking/:id",
  UpdateSpeakingWId: (id: string | number) => `/admin/speaking/${id}`,

  //Writing
  Writing: "/admin/writing",
  CreateWriting: "/admin/writing/create",
  UpdateWriting: "/admin/writing/:id",
  UpdateWritingWId: (id: string | number) => `/admin/writing/${id}`,

  //Reading
  Reading: "/admin/reading",
  CreateReading: "/admin/reading/create",
  UpdateReading: "/admin/reading/:id",
  UpdateReadingWId: (id: string | number) => `/admin/reading/${id}`,

  //Contest
  ContestManagement: "/admin/examination",
  CreateContestManagement: "/admin/examination/create",
  UpdateContestManagement: "/admin/examination/:id",
  UpdateContestManagementWId: (id: string | number) => `/admin/examination/${id}`,
  generateExam: `/admin/generate`,
  generateExamDetail: `/admin/generate/:id`,
  generateExamDetailWid: (id: string | number) => `/admin/generate/${id}`,
  //Static
  StaticManagement: "/admin/staticManagement",

  //Test bank
  TestBank: "/admin/testbank",
  CreateTest: "/admin/testbank/create",
  UpdateTest: "/admin/testbank/:id",
  UpdateTestWId: (id: string | number) => `/admin/testbank/${id}`,
};
