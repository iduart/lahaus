import { useEffect, useState } from "react";

const CollectionsGrid = () => {
  const [collections, setCollections] = useState([]);
  const [collectionMeta, setCollectionMeta] = useState([]);

  console.log(collections)

  const fetchCollections = async () => {
    const response = await fetch("./real_estates.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const jsonData = await response.json();
    setCollections(jsonData.data);
    setCollectionMeta(jsonData.included);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="px-6 md:w-4/5 md:m-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {collections.map((item) => (
          <div className="bg-red-200 flex items-center justify-center border">
            {item.attributes?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsGrid;
