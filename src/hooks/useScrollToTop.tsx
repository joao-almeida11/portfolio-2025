export default function useScrollToTop() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
