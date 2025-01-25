import { createPortal } from "react-dom";
import { ReactNode } from "react";

function ModalPortal({ children }: { children: ReactNode }) {
	return createPortal(children, document.body);
}

export default ModalPortal;