export const useDisableCtrlF = () => {
  window.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {
      e.preventDefault();
    }
  });
};
