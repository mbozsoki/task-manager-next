import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useClickOutside } from "../hooks/use-click-outside";
import { useDebounce } from "../hooks/use-debounce";
import { Icon } from "./icon";

type SearchProps = {
  onSearch: (searchKey: string | undefined) => void;
};

export const Search = ({
  onSearch,
  ...props
}: PropsWithChildren<SearchProps>) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState<string>();
  const debouncedSearchValue = useDebounce(searchValue);

  const handleClickOutside = () => {
    if (inputRef.current && !inputRef.current.value) {
      setOpen(false);
    }
  };

  useClickOutside(ref, handleClickOutside);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      onSearch(inputRef.current?.value);
    } else {
      isMounted.current = true;
    }
  }, [debouncedSearchValue, onSearch]);

  return (
    <div ref={ref} className="flex align-center" {...props}>
      <input
        className={`
            ${open ? "w-60 px-4" : "w-0 px-0"}
            py-1 bg-[transparent] border-b-2 overflow-hidden
            border-french-lilac focus:border-burnt-sienna-500
            text-french-lilac outline-none truncate
            transition-[all] ease-in-out duration-300
        `}
        onChange={() => setSearchValue(inputRef.current?.value)}
        ref={inputRef}
      />
      <Icon
        className="text-burnt-sienna-500 hover:text-burnt-sienna-600 active:text-burnt-sienna-700 p-2"
        onClick={() => {
          if (open && inputRef.current?.value) {
            onSearch(inputRef.current?.value);
          } else {
            setOpen(!open);
            inputRef.current?.focus();
          }
        }}
      >
        search
      </Icon>
    </div>
  );
};
