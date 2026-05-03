import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
    >
      {children}
    </button>
  );
}
