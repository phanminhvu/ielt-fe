export const PAGE_SIZE = [10, 20, 50, 100];

export const TINY_API = "93v3huof7n8saw08hun3sp087pjnt6g7bos3zupd33kp7yql";

export const IMAGE_URL = process.env.REACT_APP_API_URL;

export const AUDIO_URL = process.env.REACT_APP_API_URL;

export const validateLine = {
  regexPassword: "At least 1 lower letter, 1 uppercase letter & 1 number ",
  required: "This is a required field",
  trim: "Không được chứa khoảng trắng đầu và cuối",
  email: "Email không hợp lệ",
  confirmPassword: "Mật khẩu nhập lại phải giống với mật khẩu đã nhập mới",
};

const SocialProvider = {
  FACEBOOK: "FACEBOOK",
  GOOGLE: "GOOGLE",
};
export const DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3eLpTAMWO-mtILepXLwg68-IChyGcXJgog&usqp=CAU";

export { SocialProvider };
export const textHeaderModal = {
  confirmDetail: "Confirm your details",
  testSound: "Test sound",
  help: "Help",
  screenHidden: "Screen hidden",
};
export const warningDetailUser = {
  checkInformation: "If your details are not correct, please inform the invigilator.",
  onStartTest: "Do not click 'Start test' until you are told to do so.",
};
export const textBtnSubmit = {
  detailUser: "My details are correct",
  playSound: "Play sound",
  continue: "continue",
  startTest: "Start test",
  ok: "OK",
};
export const rulesdetailExam = {
  listening: {
    title: "Listening",
    timeExam: "Approximately 30 minutes",
  },
  reading: {
    title: "Reading",
    timeExam: "1 hour",
  },
};
export const titleRulesDetailCandidates = {
  intructionCandidates: "INSTRUCTIONS TO CANDIDATES",
  informationCandidates: "INFORMATION FOR CANDIDATES",
};
export const testHeadPhone = {
  putHeadPhone: "Put on your headphones and click on the Play sound button to play a sample sound.",
  play: "Play sound",
  stop: "Stop sound",
};

export const chooseAnswer = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
};

export enum UserType {
  USER = "USER",
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  BANNED = "BANNED",
  //TODO:
  EXAMMANAGEMENT = "EXAMMANAGEMENT",
  POINTMANAGER = "POINTMANAGER",
  POETCREATOR = "POETCREATOR",
  MANAGETESTTAKERS = "MANAGETESTTAKERS",
}

export const TypeMapUserType: Record<UserType, string> = {
  [UserType.USER]: "User",
  [UserType.SUPER_ADMIN]: "Supper admin",
  [UserType.BANNED]: "Banned",
  [UserType.ADMIN]: "admin",
  [UserType.TEACHER]: "Teacher",
  [UserType.EXAMMANAGEMENT]: "Exam management",
  [UserType.POINTMANAGER]: "Point Manager",
  [UserType.POETCREATOR]: "Poet creator",
  [UserType.MANAGETESTTAKERS]: "Manage test takers",
};
