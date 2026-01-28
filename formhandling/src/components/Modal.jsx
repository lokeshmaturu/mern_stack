function Modal({ children, close }) {
  return (
    <div className="modal-bg">
      <div className="modal-box">
        <span className="close" onClick={close}>×</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
