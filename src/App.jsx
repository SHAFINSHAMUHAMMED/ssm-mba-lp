  import React, { useEffect, useState, Suspense, lazy } from "react";
  import { PopupProvider, usePopup } from "./components/Hoocks/PopupContext";
  import { debounce } from "lodash";
  import { ClipLoader } from "react-spinners";

  // Lazy loading components
  const Header = lazy(() => import("./components/Header/header"));
  const Hero = lazy(() => import("./components/Hero/hero"));
  const Carousel = lazy(() => import("./components/Carousel/ResponsiveCarousel"));
  const SwissSchool = lazy(() =>
    import("./components/why_swiss_school/swiss_school")
  );
  const ProgramHighlights = lazy(() =>
    import("./components/Program_Highlights/program_Highlights")
  );
  const Accreditations = lazy(() =>
    import("./components/Acreditions/acreditions")
  );
  // const UnbeatableReason = lazy(() =>
  //   import("./components/Reason_section/unbeatable_reason")
  // );
  // const UaeProfessionals = lazy(() =>
  //   import("./components/Uae_professionals/uae_professionals")
  // );
  const AluminiCarousel = lazy(() =>
    import("./components/AluminiCarousel/AluminiCarousel")
  );
  const WorldOfPossibilities = lazy(() =>
    import("./components/World_of_possibilities/world_of_possibilities")
  );
  const ReviewSection = lazy(() => import("./components/Reviews/review_section"));
  const SuccessfulGraduates = lazy(() =>
    import("./components/Successful_graduates/successful_graduates")
  );
  // const StepsToUnlockCareer = lazy(() =>
  //   import("./components/Steps_to_unlock_career/steps_to_unlock_career")
  // );
  const StudentSupport = lazy(() =>
    import("./components/Student_support_guarantee/student_support")
  );
  const IcfCertification = lazy(() =>
    import("./components/Icf_certification/icf_certification")
  );
  const PowerSkill = lazy (()=> import("./components/Power_skills/power_skills"))
  const Footer = lazy(() => import("./components/Footer/footer"));
  const StickyWhatsAppButton = lazy(() =>
    import("./components/WhatsappStickyLogo/StickyWhatsAppButton")
  );
  const Popup = lazy(() => import("./components/Popup_page/popup"));

  function App() {
    const { isPopupOpen, togglePopup } = usePopup();
    const [exitIntentTriggered, setExitIntentTriggered] = useState(false);

    useEffect(() => {
      const handleMouseMove = debounce((e) => {
        if (e.clientY <= 10 && !isPopupOpen && !exitIntentTriggered) {
          setExitIntentTriggered(true);
          togglePopup();
        }
      }, 100);
      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        handleMouseMove.cancel();
      };
    }, [togglePopup, isPopupOpen, exitIntentTriggered]);

    const handleClosePopup = () => {
      togglePopup();
      setExitIntentTriggered(false); // Reset the state when closing the popup
    };

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
    
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    

    return (
      <PopupProvider>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <ClipLoader color={"#0B434B"} size={50} />
            </div>
          }
        >
          <div className="body">
          <Header scrollToSection={scrollToSection}  />
            <Hero />
            <StickyWhatsAppButton />
            <Carousel />
            <AluminiCarousel />
            <SwissSchool />

            <ProgramHighlights />
            <PowerSkill/>
            <Accreditations />
            <ReviewSection />
            <WorldOfPossibilities />
            <SuccessfulGraduates />
            <StudentSupport />
            <IcfCertification />
            <Footer />
            {isPopupOpen && <Popup closePopup={handleClosePopup} />}
          </div>
        </Suspense>
      </PopupProvider>
    );
  }

  export default App;
