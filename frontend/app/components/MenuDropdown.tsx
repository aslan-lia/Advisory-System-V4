import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';

export default function MenuDropdown() {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700 focus:bg-gray-700 focus:outline-1 focus:outline-white">
          Options
          <ChevronDownIcon className="h-4 w-4 fill-white/60" />
        </MenuButton>

        <MenuItems
          className="absolute right-0 mt-2 w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <MenuItem>
            {({ active }) => (
              <button className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? 'bg-gray-700' : ''}`}>
                <PencilIcon className="h-4 w-4 fill-white/30" />
                Edit
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘E</kbd>
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? 'bg-gray-700' : ''}`}>
                <Square2StackIcon className="h-4 w-4 fill-white/30" />
                Duplicate
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
              </button>
            )}
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            {({ active }) => (
              <button className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? 'bg-gray-700' : ''}`}>
                <ArchiveBoxXMarkIcon className="h-4 w-4 fill-white/30" />
                Archive
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘A</kbd>
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button className={`group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 ${active ? 'bg-gray-700' : ''}`}>
                <TrashIcon className="h-4 w-4 fill-white/30" />
                Delete
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">⌘D</kbd>
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
