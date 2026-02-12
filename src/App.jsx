import { Navigate, Route, Routes } from "react-router-dom";
import { reviews } from "./data/reviews";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./components/HomePage";
import { ReviewPage } from "./components/ReviewPage";
import { AboutPage } from "./components/AboutPage";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage reviews={reviews} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="reviews/:slug" element={<ReviewPage reviews={reviews} />} />
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
