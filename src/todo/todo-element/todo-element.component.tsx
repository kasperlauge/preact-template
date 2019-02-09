import { h } from "preact";

export default (props: any) => {
	return (
		<div class="klm-todolist">
			<p>{props.name}</p>
		</div>
	);
};
