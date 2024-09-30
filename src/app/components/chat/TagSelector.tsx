import React from "react";

/**
 * Component for selecting chat tags.
 * @param {Object} props - Component properties
 * @param {number} props.currentTag - Currently selected tag ID
 * @param {function} props.setCurrentTag - Function to set the selected tag ID
 */
interface TagSelectorProps {
  currentTag: number;
  setCurrentTag: (id: number) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  currentTag,
  setCurrentTag,
}) => {
  const tags = [
    { id: 0, name: "Global" },
    { id: 1, name: "Universidad" },
    { id: 2, name: "Cultura" },
    { id: 3, name: "Ragnarök" },
    // { id: 4, name: 'Prueba de Deslizador' }
  ];

  return (
    <div className="flex overflow-x-auto mt-4 scrollbar-hide">
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => setCurrentTag(tag.id)}
          className={`tag-button ${currentTag === tag.id ? "active" : ""}`}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;
