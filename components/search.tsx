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

  useEffect(() => {
    onSearch(inputRef.current?.value);
  }, [debouncedSearchValue, onSearch]);

  return (
    <div ref={ref}>
      <input
        className={`
            ${open ? "w-60 px-4" : "w-0 px-0"}
            py-1 bg-[transparent] border-b-2 overflow-hidden
            border-french-lilac focus:border-burnt-sienna-500
            text-french-lilac outline-none truncate
            transition-[all] ease-in-out duration-300 mr-2
        `}
        onChange={() => setSearchValue(inputRef.current?.value)}
        ref={inputRef}
        {...props}
      />
      <Icon
        className="text-burnt-sienna-500"
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
