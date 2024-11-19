import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./header";
import Best from "./best";
import Mid from "./middle";
import Online from "./online";
import Price from "./price";
import About from "./about";
import Foot from "./footer";
import Log from "./login";
import TestTable from "./TestTable";
import AnotherAdminPage from "./create";
import CreateTest from "./CreateTest";
import QuizCreation from "./QuizCreation";
import ViewQuestions from "./ViewQuestions";
import Admin from "./Adminpage";
import ProfilePage from "./userPage";
import AssessmentTable from "./AssessmentTable";
import AttendUser from "./AttendUser";
import ResultPage from "./Result";
import Contact from "./Contact";
import UserList from "./userList";
import User from "./ProfileUser";
import ResultAnswer from "./ResultPage";
import ViewQuestion from "./VQ";
import Result from "./res";
import QuestionPage from "./QuestionPage";
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <Log />
                </>
              }
            />
            <Route
              path="/admin"
              element={
                <>
                  {/* <UserList/> */}

                  <AnotherAdminPage />
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Best />
                  <Mid />
                  <Online />
                  <Price />
                  <About />
                  <Contact />
                  {/* <QuizCreation/> */}
                  {/* <AttendUser/>
                  <ResultAnswer/> */}
                  {/* <UserList/> */}
                  {/* <Contact/> */}
                  <Foot />
                </>
              }
            />
            <Route
              path="/Adminpage"
              element={
                <>
                  <Admin />
                </>
              }
            />
            <Route
              path="/user"
              element={
                <>
                  <ProfilePage />
                </>
              }
            />
            <Route
              path="/createform"
              element={
                <>
                  <CreateTest />
                </>
              }
            />
            <Route
              path="/testtable"
              element={
                <>
                  <TestTable />
                </>
              }
            />
            <Route
              path="/AdminQuizCreate"
              element={
                <>
                  <QuizCreation />
                </>
              }
            />
            <Route
              path="/answer"
              element={
                <>
                  <ViewQuestions />
                </>
              }
            />
            <Route
              path="/VQ"
              element={
                <>
                  <ViewQuestion />
                </>
              }
            />
            <Route
              path="resultPage"
              element={
                <>
                  <ResultAnswer />
                </>
              }
            />
            <Route path="AttendUser" element={<AttendUser />} />
            {/* <Route path="/" element={<ProfilePage />} /> */}
            <Route
              path="/userList"
              element={
                <>
                  <UserList />
                </>
              }
            />
            <Route path="/question/:index" element={<QuestionPage />} />
            <Route path="/res" element={<Result />} />
            <Route path="/tests" element={<TestTable />} />
            <Route path="/ProfileUser" element={<User />} />
            <Route path="/quiz-creation" element={<QuizCreation />} />
            <Route path="/view-questions" element={<ViewQuestions />} />
            <Route
              path="/view-questions/:questions"
              element={<ViewQuestions />}
            />
            <Route
              path="/AssessmentTable"
              element={
                <>
                  {/* <Header isuserPage={true}/> */}
                  <AssessmentTable />
                </>
              }
            />
          </Routes>
        </header>
      </Router>
      <QuestionPage/>
    </div>
  );
}
export default App;
