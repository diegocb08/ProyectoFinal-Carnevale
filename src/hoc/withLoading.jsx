import { PuffLoader } from "react-spinners";
import styles from "./withLoading.module.css";

export function withLoading(Component) {
	function ComponentWithLoading(props) {
		if (props.items.length === 0) {
			return (
				<div className={styles.loadingContainer}>
					<PuffLoader className={styles.loading} />
				</div>
			);
		}

		return <Component {...props} />;
	}
	return ComponentWithLoading;
}
