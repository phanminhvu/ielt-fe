import PrivateRoute from "components/PrivateRoute";
import { RouteBase } from "constants/routeUrl";
import { useGetLocation } from "provider/LocationProvider";
import React, { Suspense } from "react";
import { Redirect, Switch, useHistory } from "react-router-dom";
import AccountManagement from "views/Admin/AccountManagement";
import CreateAccountManagement from "views/Admin/AccountManagement/CreateAccount";
import AdminScreen from "views/Admin/Admin";
import ContestManagement from "views/Admin/ContestManagemet";
import DefaultAdminLayout from "views/Admin/components/DefaultAdminLayout";
import CreateListening from "views/Admin/components/Listening/CreateListening/CreateListening";
import ListeningSkill from "views/Admin/components/Listening/ListeningSkill";
import CreateReading from "views/Admin/components/Reading/CreateReading/CreateReading";
import ReadingSkill from "views/Admin/components/Reading/ReadingSkill";
import CreateSpeaking from "views/Admin/components/Speaking/CreateSpeaking/CreateSpeaking";
import SpeakingSkill from "views/Admin/components/Speaking/SpeakingSkill";
import CreateUser from "views/Admin/components/UserAdmin/CreateUser/CreateUser";
import CreateUsers from "views/Admin/components/UserAdmin/CreateUser/CreateUsers";
import UserAdmin from "views/Admin/components/UserAdmin/UserAdmin";
import CreateWriting from "views/Admin/components/Writing/CreateWriting/CreateWriting";
import WritingSkill from "views/Admin/components/Writing/WritingSkill";

import CreateContest from "views/Admin/ContestManagemet/CreateContest";
import CreateUserTesting from "views/Admin/ContestManagemet/CreateContest/components/CreateUserTesting";
import GenerateExam from "views/Admin/ContestManagemet/GenerateExam";
import DetailExam from "views/Admin/ContestManagemet/GenerateExam/DetailExam";
import ScoreExamination from "views/Admin/ContestManagemet/Score";
import ExamManagement from "views/Admin/ExamManagement";
import ViewExam from "views/Admin/ExamManagement/component/ViewExam";
import StaticManagement from "views/Admin/StaticManagement";
import TestBank from "views/Admin/TestBank";
import CreateTest from "views/Admin/TestBank/CreateTest";

const AdminLayout: React.FC = (props) => {
  return (
    // <Router>
    <DefaultAdminLayout>
      <main className="main-container" style={{ marginTop: "10px" }}>
        <Suspense fallback="Loading...">
          <Switch>
            <PrivateRoute path={RouteBase.AdminDashboard} exact component={AdminScreen} />
            <PrivateRoute path={RouteBase.Listening} exact component={ListeningSkill} />
            <PrivateRoute path={RouteBase.Speaking} exact component={SpeakingSkill} />
            <PrivateRoute path={RouteBase.Writing} exact component={WritingSkill} />
            <PrivateRoute path={RouteBase.Reading} exact component={ReadingSkill} />
            <PrivateRoute path={RouteBase.AdminUser} exact component={UserAdmin} />
            {/* <PrivateRoute
              path={RouteBase.CreateUser}
              exact
              component={() => <CreateUser openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateUser}
              exact
              component={() => <CreateUser openCreateScreen={{ type: "update" }} />}
            /> */}
            <PrivateRoute
              path={RouteBase.CreateUser}
              exact
              component={() => <CreateUsers openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateUser}
              exact
              component={() => <CreateUsers openCreateScreen={{ type: "update" }} />}
            />

            <PrivateRoute
              path={RouteBase.CreateListening}
              exact
              component={() => <CreateListening openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateListening}
              exact
              component={() => <CreateListening openCreateScreen={{ type: "update" }} />}
            />

            <PrivateRoute
              path={RouteBase.CreateSpeaking}
              exact
              component={() => <CreateSpeaking openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateSpeaking}
              exact
              component={() => <CreateSpeaking openCreateScreen={{ type: "update" }} />}
            />

            <PrivateRoute
              path={RouteBase.CreateReading}
              exact
              component={() => <CreateReading openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateReading}
              exact
              component={() => <CreateReading openCreateScreen={{ type: "update" }} />}
            />

            <PrivateRoute
              path={RouteBase.CreateWriting}
              exact
              component={() => <CreateWriting openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateWriting}
              exact
              component={() => <CreateWriting openCreateScreen={{ type: "update" }} />}
            />

            <PrivateRoute path={RouteBase.ExamManagement} exact component={ExamManagement} />
            <PrivateRoute path={RouteBase.AccountManagement} exact component={AccountManagement} />
            <PrivateRoute
              path={RouteBase.CreateAccountManagement}
              exact
              component={() => <CreateAccountManagement openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateAccountManagement}
              exact
              component={() => <CreateAccountManagement openCreateScreen={{ type: "update" }} />}
            />
            <PrivateRoute path={RouteBase.Scores} exact component={ScoreExamination} />

            <PrivateRoute path={RouteBase.ViewExam} exact component={ViewExam} />
            <PrivateRoute path={RouteBase.ContestManagement} exact component={ContestManagement} />
            <PrivateRoute path={RouteBase.GenerateExam} exact component={GenerateExam} />
            <PrivateRoute path={RouteBase.GenerateExamDetail} exact component={DetailExam} />
            <PrivateRoute
              path={RouteBase.CreateUserTesting}
              exact
              component={() => <CreateUserTesting openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateCreateUserTesting}
              exact
              component={() => <CreateUserTesting openCreateScreen={{ type: "update" }} />}
            />
            <PrivateRoute
              path={RouteBase.CreateContestManagement}
              exact
              component={() => <CreateContest openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateContestManagement}
              exact
              component={() => <CreateContest openCreateScreen={{ type: "update" }} />}
            />

            <PrivateRoute path={RouteBase.TestBank} exact component={TestBank} />
            <PrivateRoute
              path={RouteBase.CreateTest}
              exact
              component={() => <CreateTest openCreateScreen={{ type: "create" }} />}
            />
            <PrivateRoute
              path={RouteBase.UpdateTest}
              exact
              component={() => <CreateTest openCreateScreen={{ type: "update" }} />}
            />

            <PrivateRoute path={RouteBase.StaticManagement} exact component={() => <StaticManagement />} />
          </Switch>
        </Suspense>
      </main>
    </DefaultAdminLayout>
    // </Router>
  );
};

export default AdminLayout;
