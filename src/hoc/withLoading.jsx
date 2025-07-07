import { PuffLoader } from "react-spinners";
import "./withLoading.css";

export function withLoading(Component) {
  function ComponentWithLoading(props) {
    if (props.items.length === 0) {
      return (
        <div className="loading-container">
          <PuffLoader className="loading" />
        </div>
      );
    }

    return <Component {...props} />;
  }
  return ComponentWithLoading;
}
