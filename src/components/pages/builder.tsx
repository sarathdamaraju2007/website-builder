import { useDispatch, useSelector } from "react-redux";
import { ModalType, toggleView } from "../../slice/modals";
import { RootState } from "../../store";
import { BuilderSlider } from "../molecules/builder";
import { Builder } from "../organisms";

export const BuilderPage = () => {
  const dispatch = useDispatch();

  const showColumnAddModal = useSelector(
    (state: RootState) => state.modalReducer.showColumnAddModal
  );

  const handleModalClose = () => {
    dispatch(
      toggleView({
        modalType: ModalType.ColumnAddModal,
        visibility: false,
      })
    );
  };

  return (
    <>
      <Builder />
      <BuilderSlider visible={showColumnAddModal} onClose={handleModalClose} />
    </>
  );
};
