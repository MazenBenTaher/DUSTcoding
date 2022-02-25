import "./App.css";
import {
  About,
  Contact,
  Footer,
  Home,
  SignUp,
  Login,
  Service,
  NotFoundPage,
  Articles,
} from "./contents";
import { LoginPage } from "./Views/admin";
import { NavBarComponent } from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBarComponent />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <NavBarComponent />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <NavBarComponent />
                <About />
                <Footer />
              </>
            }
          />

          <Route
            path="/article"
            element={
              <>
                <NavBarComponent />
                <Articles />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <NavBarComponent />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/service"
            element={
              <>
                <NavBarComponent />
                <Service />
                <Footer />
              </>
            }
          />

          <Route path="/Admin" element={<LoginPage />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
