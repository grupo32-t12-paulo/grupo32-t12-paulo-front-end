import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  SyntheticEvent,
} from "react";
import imageError from "../assets/image.png";

interface ICurrentImageGalleryContextChildren {
  children: ReactNode;
}

interface ICurrentImageGalleryContext {
  currentImage: string | undefined;
  setCurrentImage: Dispatch<SetStateAction<undefined | string>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleImageError: (event: SyntheticEvent<HTMLImageElement>) => void;
}

export const CurrentImageGalleryContext =
  createContext<ICurrentImageGalleryContext>({} as ICurrentImageGalleryContext);

export const CurrentImageGalleryProvider = ({
  children,
}: ICurrentImageGalleryContextChildren) => {
  const [currentImage, setCurrentImage] = useState<undefined | string>(
    undefined
  );
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenModal() {
    setOpen(true);
  }
  function handleCloseModal() {
    setOpen(false);
  }

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = imageError;
  };

  return (
    <CurrentImageGalleryContext.Provider
      value={{
        currentImage,
        setCurrentImage,
        open,
        setOpen,
        handleOpenModal,
        handleCloseModal,
        handleImageError,
      }}
    >
      {children}
    </CurrentImageGalleryContext.Provider>
  );
};
