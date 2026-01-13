export type Category = {
  _id: string;
  name: string;
  link?: string;
  img: string;
  createdAt: string;
  updatedAt: string;
};

import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface CategoriesContextValue {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export const CategoriesContext = createContext<CategoriesContextValue | null>(
  null
);

interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/categories`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        loading,
        error,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
