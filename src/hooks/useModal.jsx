import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleTargetItemId = (itemId) => {
    setIsOpen(true);
    setTargetItemId(itemId);
  };

  return {
    isOpen,
    targetItemId,
    onOpenModal: handleOpen,
    onCloseModal: handleClose,
    onSetTargetItemId: handleTargetItemId,
  };
};

export default useModal;
