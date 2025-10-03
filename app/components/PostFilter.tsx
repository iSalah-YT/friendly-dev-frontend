type PostFilterProps = {
  searchQuery: string;
  onSearchQuery: (value: string) => void;
};

const PostFilter = ({ searchQuery, onSearchQuery }: PostFilterProps) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchQuery(e.target.value)}
        placeholder="Search Posts..."
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default PostFilter;
