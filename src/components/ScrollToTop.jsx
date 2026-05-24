import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets the scroll position to the top of the page on every React Router
 * navigation (e.g. clicking <Link to="/blog/blog-ai"> while scrolled
 * halfway down the home page).
 *
 * If the new location includes a hash (e.g. "/#contact-section"), we let
 * the in-page anchor handle the scroll instead so smooth-scroll links
 * keep working.
 *
 * Renders nothing.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
