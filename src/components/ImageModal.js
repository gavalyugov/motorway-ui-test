import Modal from "react-modal/lib/components/Modal";
import ImageWithFallback from "./ImageWithFallback";

const MODAL_STYLES = {
  overlay: {
    backgroundColor: "#c4c4c4",
    zIndex: 3000,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    inset: 0,
    padding: 0,
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={MODAL_STYLES}
      contentLabel="Car details"
    >
      <ImageWithFallback
        imageURL={image.url}
        alt={image.alt_description}
        className="modal-image"
      />
    </Modal>
  );
};

export default ImageModal;
