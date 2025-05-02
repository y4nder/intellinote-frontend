import { createContext, ReactNode, useContext, useState } from "react";

interface SearchDialogContextType {
    isOpen: boolean;
    toggleSearchDialog: () => void;
}

const SearchDialogContext = createContext<SearchDialogContextType | undefined>(undefined);

export const SearchDialogProvider = ({children} : {children: ReactNode} ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearchDialog = () => setIsOpen(prev => !prev);

    return (
        <SearchDialogContext.Provider value={{isOpen, toggleSearchDialog}}>
            {children}
        </SearchDialogContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchDialog = () => {
    const context = useContext(SearchDialogContext);
    if (!context) throw new Error("useSearchDialog must be used within SearchDialogProvider");
    return context;
}