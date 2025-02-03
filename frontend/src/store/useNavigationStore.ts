import {create} from "zustand";

interface NavigationState {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const useNavigationStore = create<NavigationState>((set) => ({
    isOpen: false,
    setIsOpen: (value) => {
        set(state => {
            return {isOpen: value}
        })
    }
}))

export default useNavigationStore